#!/usr/bin/env node

/**
 * reCAPTCHA Integration Test Suite
 * Tests all 6 form endpoints with reCAPTCHA token verification
 */

const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:8081/api/v1';
const RECAPTCHA_SECRET = '6LcyC0otAAAAAJ6zrtVcLr3gdFUstPpr3uwsppyo';

// Test data for each endpoint
const testCases = [
  {
    name: 'Contact Us Form',
    endpoint: '/send-contact-message',
    method: 'POST',
    data: {
      fname: 'John',
      lname: 'Doe',
      email: 'john.doe@test.com',
      message: 'This is a test message from the contact form.',
    },
  },
  {
    name: 'Membership Network Form',
    endpoint: '/memberships',
    method: 'POST',
    data: {
      company_name: 'Test Company Inc',
      sector: 'Technology',
      company_size: '50-100',
      contact_person: 'Jane Smith',
      job_title: 'Chief Technology Officer',
      email: 'jane.smith@test.com',
      contact_number: '+1-234-567-8900',
      website: 'https://test-company.com',
      hear_about_us: 'Online Search',
      message: 'Interested in membership',
    },
  },
  {
    name: 'Impact Report Download',
    endpoint: '/subscribers/add-subscriber',
    method: 'POST',
    data: {
      fname: 'Alice',
      lname: 'Johnson',
      email: 'alice.johnson@test.com',
      organization: 'Development Organization',
      position: 'Program Manager',
      edition: '2nd',
    },
  },
  {
    name: 'Top Talents Recruitment',
    endpoint: '/talents',
    method: 'POST',
    data: {
      job_title: 'Senior Blockchain Developer',
      location_requirements: 'Remote',
      company_name: 'Tech Startup',
      about_company: 'Innovative blockchain solutions company',
      job_description: 'Looking for experienced blockchain developer',
      engagement: 'Full Time',
      skills: 'Solidity, Rust, Go',
      salary_range: 'USD 100,000 - 150,000',
      no_of_talents: '2',
      website: 'https://techstartup.com',
      contact_person: 'Bob Wilson',
      contact_email: 'bob@techstartup.com',
      contact_number: '+1-555-123-4567',
    },
  },
  {
    name: 'ABI Consulting Inquiry',
    endpoint: '/consultations',
    method: 'POST',
    data: {
      name: 'Carol Davis',
      email: 'carol.davis@test.com',
      phone_number: '+1-666-789-0123',
      company_name: 'Enterprise Corp',
      job_title: 'Innovation Director',
      hear_about_us: 'Our Website',
      message: 'We need blockchain consulting services for our enterprise',
    },
  },
  {
    name: 'Algorand Report Download',
    endpoint: '/subscribers/add-subscriber',
    method: 'POST',
    data: {
      fname: 'David',
      lname: 'Brown',
      email: 'david.brown@test.com',
      organization: 'Academic Institution',
      position: 'Research Fellow',
    },
  },
];

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function verifyRecaptchaToken(token) {
  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      {},
      {
        params: {
          secret: RECAPTCHA_SECRET,
          response: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function testEndpoint(testCase, recaptchaToken) {
  const url = `${BASE_URL}${testCase.endpoint}`;
  const payload = {
    ...testCase.data,
    recaptchaToken,
  };

  try {
    log(`\n📝 Testing: ${testCase.name}`, 'blue');
    log(`   Endpoint: POST ${testCase.endpoint}`, 'cyan');

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    log(`   ✅ Status: ${response.status}`, 'green');
    log(`   Response: ${JSON.stringify(response.data, null, 2)}`, 'green');

    return {
      name: testCase.name,
      status: 'PASS',
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    log(`   ❌ Error: ${error.message}`, 'red');
    if (error.response) {
      log(`   Status: ${error.response.status}`, 'red');
      log(`   Response: ${JSON.stringify(error.response.data, null, 2)}`, 'red');
    }

    return {
      name: testCase.name,
      status: 'FAIL',
      statusCode: error.response?.status || 'N/A',
      error: error.message,
      data: error.response?.data,
    };
  }
}

async function runTests() {
  log('\n' + '='.repeat(70), 'cyan');
  log('🧪 reCAPTCHA Integration Test Suite', 'cyan');
  log('='.repeat(70) + '\n', 'cyan');

  log(`Backend URL: ${BASE_URL}`, 'yellow');
  log(`Test Token (Valid): 6Le3lLcZAAAAAJcZVRqyHh71BMIEGNQ_MXjiZKhI`, 'yellow');
  log(`Test Token (Invalid): 6Le3lLcZAAAAAMJ16nRTLW8cWXaijjzDjedHL-T9`, 'yellow');

  const testToken = '6Le3lLcZAAAAAJcZVRqyHh71BMIEGNQ_MXjiZKhI'; // Valid test token

  log(`\n🔐 Verifying test token with Google...`, 'yellow');
  const tokenVerification = await verifyRecaptchaToken(testToken);

  if (tokenVerification.success) {
    log(`✅ Token verification: SUCCESS`, 'green');
  } else {
    log(`❌ Token verification: FAILED`, 'red');
    log(`Errors: ${JSON.stringify(tokenVerification['error-codes'], null, 2)}`, 'red');
  }

  // Run all tests
  const results = [];
  for (const testCase of testCases) {
    const result = await testEndpoint(testCase, testToken);
    results.push(result);
    // Add delay between requests
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Summary
  log('\n' + '='.repeat(70), 'cyan');
  log('📊 Test Summary', 'cyan');
  log('='.repeat(70) + '\n', 'cyan');

  const passed = results.filter((r) => r.status === 'PASS').length;
  const failed = results.filter((r) => r.status === 'FAIL').length;

  results.forEach((result) => {
    const statusIcon = result.status === 'PASS' ? '✅' : '❌';
    const statusColor = result.status === 'PASS' ? 'green' : 'red';
    log(
      `${statusIcon} ${result.name}: ${result.status} (Status: ${result.statusCode})`,
      statusColor
    );
  });

  log(`\nTotal: ${results.length} | Passed: ${passed} | Failed: ${failed}`, 'cyan');

  if (failed === 0) {
    log('\n🎉 All tests PASSED!', 'green');
  } else {
    log(`\n⚠️  ${failed} test(s) FAILED`, 'red');
  }

  log('\n' + '='.repeat(70), 'cyan');

  return failed === 0;
}

// Run the tests
runTests()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    log(`\n❌ Test suite error: ${error.message}`, 'red');
    process.exit(1);
  });
