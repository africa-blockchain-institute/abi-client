#!/usr/bin/env node

/**
 * Manual Testing Guide for reCAPTCHA Integration
 * Use this to test with real tokens from your browser
 */

const readline = require('readline');
const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:8081/api/v1';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

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

async function testWithRealToken() {
  log('\n' + '='.repeat(70), 'cyan');
  log('🧪 reCAPTCHA Manual Test with Real Token', 'cyan');
  log('='.repeat(70), 'cyan');

  log('\n📋 SETUP INSTRUCTIONS:', 'yellow');
  log('1. Start your Nuxt dev server in another terminal:', 'yellow');
  log('   $ npm run dev', 'yellow');
  log('2. Open: http://localhost:3000/contact-us', 'yellow');
  log('3. Fill the contact form', 'yellow');
  log('4. Open Browser DevTools (F12) → Console', 'yellow');
  log('5. Paste this code to get the token:', 'cyan');
  log(
    "   document.querySelector('textarea[name=message]').innerText = 'Test submission'; " +
      "window.__NUXT__.$recaptcha.executeRecaptcha('submit').then(token => console.log('TOKEN:', token))",
    'blue'
  );
  log('6. Copy the token from console output', 'yellow');
  log('\n' + '-'.repeat(70), 'cyan');

  const token = await question('\n🔑 Paste your real reCAPTCHA token here: ');

  if (!token || token.length < 20) {
    log('❌ Invalid token format', 'red');
    rl.close();
    return;
  }

  log('\n✅ Token received', 'green');

  // Menu
  while (true) {
    log('\n' + '='.repeat(70), 'cyan');
    log('Select a form to test:', 'cyan');
    log('='.repeat(70), 'cyan');
    log('1. Contact Us (/send-contact-message)', 'yellow');
    log('2. Membership Network (/memberships)', 'yellow');
    log('3. Impact Report (/subscribers/add-subscriber)', 'yellow');
    log('4. Top Talents (/talents)', 'yellow');
    log('5. ABI Consulting (/consultations)', 'yellow');
    log('6. Exit', 'yellow');

    const choice = await question('\nEnter choice (1-6): ');

    let endpoint, data;

    switch (choice) {
      case '1':
        endpoint = '/send-contact-message';
        data = {
          fname: 'John',
          lname: 'Doe',
          email: 'john.doe@test.com',
          message: 'Test from manual verification',
          recaptchaToken: token,
        };
        break;
      case '2':
        endpoint = '/memberships';
        data = {
          company_name: 'Test Company',
          sector: 'Technology',
          company_size: '50-100',
          contact_person: 'Jane Smith',
          job_title: 'CTO',
          email: 'jane@test.com',
          contact_number: '+1-234-567-8900',
          website: 'https://test.com',
          hear_about_us: 'Online Search',
          message: 'Test membership',
          recaptchaToken: token,
        };
        break;
      case '3':
        endpoint = '/subscribers/add-subscriber';
        data = {
          fname: 'Alice',
          lname: 'Johnson',
          email: 'alice@test.com',
          organization: 'Test Org',
          position: 'Manager',
          edition: '2nd',
          recaptchaToken: token,
        };
        break;
      case '4':
        endpoint = '/talents';
        data = {
          job_title: 'Developer',
          location_requirements: 'Remote',
          company_name: 'Tech Corp',
          about_company: 'Innovative company',
          job_description: 'Looking for developers',
          engagement: 'Full Time',
          skills: 'Blockchain, Solidity',
          salary_range: 'USD 100k-150k',
          no_of_talents: '2',
          website: 'https://tech.com',
          contact_person: 'Bob Wilson',
          contact_email: 'bob@tech.com',
          contact_number: '+1-555-123-4567',
          recaptchaToken: token,
        };
        break;
      case '5':
        endpoint = '/consultations';
        data = {
          name: 'Carol Davis',
          email: 'carol@test.com',
          phone_number: '+1-666-789-0123',
          company_name: 'Enterprise',
          job_title: 'Director',
          hear_about_us: 'Our Website',
          message: 'Need consulting',
          recaptchaToken: token,
        };
        break;
      case '6':
        log('\n👋 Goodbye!', 'cyan');
        rl.close();
        return;
      default:
        log('❌ Invalid choice', 'red');
        continue;
    }

    if (endpoint && data) {
      await testEndpoint(endpoint, data);
    }

    const again = await question('\nTest another endpoint? (y/n): ');
    if (again.toLowerCase() !== 'y') {
      log('\n👋 Goodbye!', 'cyan');
      rl.close();
      return;
    }
  }
}

async function testEndpoint(endpoint, data) {
  const url = `${BASE_URL}${endpoint}`;

  try {
    log(`\n📝 Sending request to ${endpoint}...`, 'blue');
    log(`Token: ${data.recaptchaToken.substring(0, 20)}...`, 'cyan');

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    log(`\n✅ SUCCESS! Status: ${response.status}`, 'green');
    log(`Response:`, 'green');
    log(JSON.stringify(response.data, null, 2), 'green');
  } catch (error) {
    log(`\n❌ FAILED`, 'red');
    log(`Status: ${error.response?.status || 'N/A'}`, 'red');
    log(`Error: ${error.message}`, 'red');
    if (error.response?.data) {
      log(`Response:`, 'red');
      log(JSON.stringify(error.response.data, null, 2), 'red');
    }
  }
}

// Run
testWithRealToken().catch((error) => {
  log(`\n❌ Error: ${error.message}`, 'red');
  rl.close();
  process.exit(1);
});
