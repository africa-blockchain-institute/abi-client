# Google reCAPTCHA v2 (Checkbox) Integration - Backend Guide

## Overview

reCAPTCHA tokens are now being sent with form submissions from the frontend. Your backend API endpoints need to verify these tokens before processing the requests.

**Forms Updated:**
1. Contact Us → `/messages/send-contact-message`
2. Membership Network → `/memberships`
3. Impact Report Download → `/subscribers/add-subscriber`
4. Top Talents Recruitment → `/talents`
5. ABI Consulting Inquiry → `/consultations`
6. Algorand Report Download → `/subscribers/add-subscriber`
7. Blockchain Report Download → `/subscribers/add-subscriber`

## Token Format

All form payloads now include:
```json
{
  "...existing_fields": "...",
  "recaptchaToken": "03AGdBq..."
}
```

## Backend Verification (Using Google's SiteVerify API)

### Configuration

Add to your `.env` file:
```env
RECAPTCHA_SITE_KEY=6LcyC0otAAAAANUykd-b_5WVc5EGy7gAQ40B1HQe
RECAPTCHA_SECRET_KEY=6LcyC0otAAAAAJ6zrtVcLr3gdFUstPpr3uwsppyo
```

### Verification Endpoint

Create a utility function to verify reCAPTCHA tokens:

```typescript
// utils/recaptcha.util.ts
import axios from 'axios';

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  action?: string;
  'error-codes'?: string[];
}

export async function verifyRecaptchaToken(token: string): Promise<RecaptchaResponse> {
  if (!token) {
    throw new Error('reCAPTCHA token is required');
  }

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      {},
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    throw new Error('Failed to verify reCAPTCHA token');
  }
}
```

### Using in Controllers

Example for a NestJS controller:

```typescript
// messages.controller.ts
import { Post, Body } from '@nestjs/common';
import { verifyRecaptchaToken } from '@/utils/recaptcha.util';

@Post('send-contact-message')
async sendContactMessage(@Body() payload: any) {
  const { recaptchaToken, ...formData } = payload;

  // Verify reCAPTCHA token
  const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
  
  if (!recaptchaResult.success) {
    throw new BadRequestException('reCAPTCHA verification failed');
  }

  // Check score threshold (optional, for v3 only)
  if (recaptchaResult.score && recaptchaResult.score < 0.5) {
    throw new BadRequestException('Suspicious activity detected');
  }

  // Process the actual request
  return this.messagesService.sendMessage(formData);
}
```

### Express.js Example

```typescript
// routes/messages.ts
import { verifyRecaptchaToken } from '@/utils/recaptcha.util';

app.post('/api/messages/send-contact-message', async (req, res) => {
  const { recaptchaToken, ...formData } = req.body;

  try {
    const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
    
    if (!recaptchaResult.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }

    // Process form data
    const result = await messageService.send(formData);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

## Frontend Payload Structure

**Contact Us & Membership:**
```json
{
  "fname": "John",
  "lname": "Doe",
  "email": "john@example.com",
  "message": "...",
  "recaptchaToken": "03AGdBq..."
}
```

**Report Downloads:**
```json
{
  "fname": "John",
  "lname": "Doe",
  "email": "john@example.com",
  "organization": "...",
  "position": "...",
  "edition": "2nd",
  "recaptchaToken": "03AGdBq..."
}
```

**Top Talents & Consulting:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company_name": "...",
  "...other_fields": "...",
  "recaptchaToken": "03AGdBq..."
}
```

## Error Handling

Common reCAPTCHA error codes:
- `missing-input-secret`: Secret key is missing or invalid
- `missing-input-response`: Token is missing
- `invalid-input-secret`: Secret key is invalid
- `invalid-input-response`: Token is invalid or expired
- `bad-request`: Request format is invalid

**Always reject requests with invalid tokens:**

```typescript
if (!recaptchaResult.success || recaptchaResult['error-codes']?.length > 0) {
  logger.warn('reCAPTCHA verification failed', {
    success: recaptchaResult.success,
    errors: recaptchaResult['error-codes'],
    hostname: recaptchaResult.hostname,
  });
  throw new Error('reCAPTCHA verification failed');
}
```

## Testing

You can test the integration using these test tokens:

**Valid token (always passes):**
```
6Le3lLcZAAAAAJcZVRqyHh71BMIEGNQ_MXjiZKhI
```

**Invalid token (always fails):**
```
6Le3lLcZAAAAAMJ16nRTLW8cWXaijjzDjedHL-T9
```

## Logging & Monitoring

Log all verification attempts for security auditing:

```typescript
logger.info('reCAPTCHA verification result', {
  success: result.success,
  hostname: result.hostname,
  timestamp: result.challenge_ts,
  formType: 'contact-message', // or 'membership', etc.
  userId: user?.id, // if authenticated
  ipAddress: req.ip,
});
```

## Rate Limiting (Recommended)

Implement rate limiting to prevent abuse:

```typescript
// Limit to 5 form submissions per minute per IP
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: 'Too many form submissions, please try again later',
});

app.post('/api/messages/send-contact-message', limiter, async (req, res) => {
  // ... verification and processing
});
```

## Migration Notes

- All 6 form endpoints now receive a `recaptchaToken` field
- **Strip the token before storing data** - don't save it to the database
- Token is single-use and expires after verification
- Tokens are only valid for 2 minutes

## Security Best Practices

1. **Never log tokens** - they're sensitive authentication credentials
2. **Verify on backend always** - never trust frontend validation
3. **Use HTTPS only** - required by Google
4. **Monitor error patterns** - repeated failures may indicate attacks
5. **Set appropriate score thresholds** - for v3 integration later (0.0-1.0 scale)

## Next Steps

1. Add `RECAPTCHA_SECRET_KEY` to your backend `.env`
2. Implement verification in each endpoint
3. Test with the provided test tokens
4. Deploy and monitor error logs
5. Adjust settings based on false positive/negative rates

For questions: Contact the frontend team with the reCAPTCHA token details if verification fails.
