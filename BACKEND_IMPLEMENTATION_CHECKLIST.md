# Quick Reference: Backend Implementation Checklist

## ✅ Current Status

Your **frontend is fully integrated** with reCAPTCHA. The backend is **mostly ready** with 5/6 endpoints working.

---

## 🔧 Backend Todos

### TODO #1: Add Missing Contact Message Endpoint

**Current Status**: ❌ `/send-contact-message` returns 404

**Fix**: Implement this route in your Express backend

```javascript
// Example Express.js implementation
app.post('/api/v1/send-contact-message', async (req, res) => {
  const { recaptchaToken, fname, lname, email, message } = req.body;

  // Verify reCAPTCHA
  const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
  if (!recaptchaResult.success) {
    return res.status(400).json({ 
      status: 'fail',
      message: 'reCAPTCHA verification failed' 
    });
  }

  // Process the message
  try {
    const result = await messageService.sendContactMessage({
      fname,
      lname,
      email,
      message
    });
    
    res.json({ 
      status: 'success', 
      message: 'Contact message sent successfully',
      data: result 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: 'Failed to send message' 
    });
  }
});
```

**Expected Payload**:
```json
{
  "fname": "John",
  "lname": "Doe",
  "email": "john.doe@test.com",
  "message": "Test message",
  "recaptchaToken": "03AGdBq2..."
}
```

### TODO #2: Add reCAPTCHA Secret to .env

```bash
RECAPTCHA_SECRET_KEY=6LcyC0otAAAAAJ6zrtVcLr3gdFUstPpr3uwsppyo
```

### TODO #3: Verify Verification Function

Ensure you have this in your backend (or similar):

```javascript
async function verifyRecaptchaToken(token) {
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
}
```

---

## 🧪 How to Test Your Implementation

### Test 1: With Automated Test Script
```bash
cd /Users/lystun/Desktop/Projects/africa-blockchain-institute/abi-client
npm run build

# After implementing the missing endpoint:
node test-recaptcha-integration.js
```

### Test 2: With Interactive Test Tool
```bash
# In another terminal, with real tokens from browser:
node test-with-real-token.js
```

### Test 3: Manual Testing
1. Start frontend: `npm run dev`
2. Open: http://localhost:3000/contact-us
3. Fill form → reCAPTCHA checkbox appears
4. Check browser console: `console.log(this.$recaptcha)`
5. Submit and verify backend response

---

## 📝 All Working Endpoints (Verified)

These endpoints are **already receiving and verifying tokens**:

```
✅ POST /api/v1/memberships
✅ POST /api/v1/subscribers/add-subscriber
✅ POST /api/v1/talents
✅ POST /api/v1/consultations
❌ POST /api/v1/send-contact-message (NEEDS IMPLEMENTATION)
```

---

## 🔑 Keys & Configuration

**Frontend (Already Configured)**:
- Site Key: `6LcyC0otAAAAANUykd-b_5WVc5EGy7gAQ40B1HQe` ✅

**Backend (Add to .env)**:
- Secret Key: `6LcyC0otAAAAAJ6zrtVcLr3gdFUstPpr3uwsppyo` ⚠️ TODO

---

## ✨ Form Fields Being Sent

### Contact Us
```json
{
  "fname": "string",
  "lname": "string", 
  "email": "string",
  "message": "string",
  "recaptchaToken": "string"  ← NEW
}
```

### Membership Network
```json
{
  "company_name": "string",
  "sector": "string",
  "company_size": "string",
  "contact_person": "string",
  "job_title": "string",
  "email": "string",
  "contact_number": "string",
  "website": "string",
  "hear_about_us": "string",
  "message": "string",
  "recaptchaToken": "string"  ← NEW
}
```

### Report Downloads (Impact, Algorand, Blockchain)
```json
{
  "fname": "string",
  "lname": "string",
  "email": "string",
  "organization": "string",
  "position": "string",
  "edition": "string",
  "recaptchaToken": "string"  ← NEW
}
```

### Top Talents
```json
{
  "job_title": "string",
  "location_requirements": "string",
  "company_name": "string",
  "about_company": "string",
  "job_description": "string",
  "engagement": "string",
  "skills": "string",
  "salary_range": "string",
  "no_of_talents": "number",
  "website": "string",
  "contact_person": "string",
  "contact_email": "string",
  "contact_number": "string",
  "recaptchaToken": "string"  ← NEW
}
```

### ABI Consulting
```json
{
  "name": "string",
  "email": "string",
  "phone_number": "string",
  "company_name": "string",
  "job_title": "string",
  "hear_about_us": "string",
  "message": "string",
  "recaptchaToken": "string"  ← NEW
}
```

---

## 🚀 Deployment Checklist

Before going to production:

- [ ] Implement `/send-contact-message` endpoint
- [ ] Add `RECAPTCHA_SECRET_KEY` to production `.env`
- [ ] Test all 6 endpoints with real tokens
- [ ] Set up monitoring for failed verifications
- [ ] Implement rate limiting (optional but recommended)
- [ ] Enable HTTPS (required by Google)
- [ ] Test with actual users
- [ ] Monitor error logs for issues

---

## 📞 Need Help?

**Test Results**: See `RECAPTCHA_TEST_RESULTS.md`  
**Backend Guide**: See `RECAPTCHA_BACKEND_INTEGRATION.md`  
**Integration Summary**: See `RECAPTCHA_INTEGRATION_SUMMARY.md`
