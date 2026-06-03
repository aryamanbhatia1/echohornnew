const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{9,14}$/;
const nameRegex = /^[A-Za-z][A-Za-z\s'.-]{1,48}[A-Za-z.]$/;
const registrationRegex = /^[A-Z0-9-]{6,15}$/;
const fakeWords = ['fake', 'dummy', 'asdf', 'test', 'unknown', 'n/a', 'na', 'nil'];

function assertValidEmail(email) {
  if (!emailRegex.test(String(email || '').trim().toLowerCase())) {
    throw new Error('Enter a valid email address.');
  }
}

function assertValidPhone(phone) {
  if (!phoneRegex.test(String(phone || '').replace(/[\s()-]/g, ''))) {
    throw new Error('Enter a valid phone number with 10 to 15 digits.');
  }
}

function assertValidName(name, label = 'Name') {
  if (!nameRegex.test(String(name || '').trim())) {
    throw new Error(`${label} must contain real letters and no random numbers.`);
  }
}

function assertStrongPassword(password) {
  if (String(password || '').trim().length < 8) {
    throw new Error('Password must be at least 8 characters.');
  }
}

function assertValidAddress(address, label = 'Address') {
  const value = String(address || '').trim();
  const lower = value.toLowerCase();
  if (value.length < 8 || fakeWords.includes(lower) || !/[A-Za-z]/.test(value)) {
    throw new Error(`${label} must be a real detailed address.`);
  }
}

function assertValidTruckRegistration(registrationNumber) {
  if (!registrationRegex.test(String(registrationNumber || '').trim().toUpperCase())) {
    throw new Error('Enter a valid truck registration number.');
  }
}

function validateUserRegistration(payload) {
  assertValidName(payload.first_name, 'First name');
  assertValidName(payload.last_name, 'Last name');
  assertValidEmail(payload.email);
  assertValidPhone(payload.phone_number);
  assertStrongPassword(payload.password);
}

function validateServiceRequest(payload) {
  assertValidAddress(payload.pickup_address, 'Pickup address');
  assertValidAddress(payload.drop_address, 'Drop address');
  if (!payload.vehicle_type_preference) {
    throw new Error('Select a truck category.');
  }
  if (!payload.pickup_datetime) {
    throw new Error('Select pickup date and time.');
  }
}

function validateTruck(payload) {
  assertValidTruckRegistration(payload.registration_number);
  if (!payload.vehicle_type) {
    throw new Error('Select truck category.');
  }
  if (!Number.isFinite(Number(payload.capacity_weight)) || Number(payload.capacity_weight) <= 0) {
    throw new Error('Truck capacity must be a positive number.');
  }
}

function validateComplaint(payload) {
  if (String(payload.title || '').trim().length < 5) {
    throw new Error('Complaint title must be descriptive.');
  }
  if (String(payload.detail || '').trim().length < 12) {
    throw new Error('Complaint detail must explain the issue clearly.');
  }
}

module.exports = {
  validateUserRegistration,
  validateServiceRequest,
  validateTruck,
  validateComplaint,
};
