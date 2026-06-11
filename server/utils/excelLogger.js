const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const FILE_PATH = path.join(__dirname, '../data/echohorn_data.xlsx');

const USER_HEADERS = [
  'ID', 'First Name', 'Last Name', 'Email', 'Phone Number',
  'User Type', 'Company Name', 'Region', 'Address',
  'Preferred Routes', 'Documents Verified', 'Created At',
];

const TRUCK_HEADERS = [
  'ID', 'Contractor ID', 'Registration Number', 'Vehicle Type',
  'Capacity Weight (tons)', 'Model Make', 'Fuel Type', 'Current Location',
  'Status', 'Capacity (cu ft)', 'Axles', 'Body Style',
  'Insurance Policy #', 'Permit #', 'Fitness Valid Until', 'GPS Enabled', 'Created At',
];

const DRIVER_HEADERS = [
  'ID', 'Name', 'User ID', 'Contractor ID', 'Status',
  'Average Rating', 'Driver Points', 'Assigned Vehicle', 'Fixed Income Per Trip',
];

function userToRow(user) {
  return [
    user.id || String(user._id || ''),
    user.first_name,
    user.last_name,
    user.email,
    user.phone_number,
    user.user_type,
    user.company_name || '',
    user.profile?.region || '',
    user.profile?.address || '',
    (user.profile?.preferred_routes || []).join(', '),
    user.profile?.documents_verified ? 'Yes' : 'No',
    user.createdAt ? new Date(user.createdAt).toISOString() : new Date().toISOString(),
  ];
}

function truckToRow(truck) {
  return [
    truck.id || String(truck._id || ''),
    String(truck.contractor || ''),
    truck.registration_number,
    truck.vehicle_type,
    truck.capacity_weight,
    truck.model_make,
    truck.fuel_type,
    truck.current_location || '',
    truck.status,
    truck.specifications?.capacity_cubic_feet || 0,
    truck.specifications?.axles || 2,
    truck.specifications?.body_style || '',
    truck.safety_compliance?.insurance_policy_number || '',
    truck.safety_compliance?.permit_number || '',
    truck.safety_compliance?.fitness_valid_until || '',
    truck.safety_compliance?.gps_enabled ? 'Yes' : 'No',
    truck.createdAt ? new Date(truck.createdAt).toISOString() : new Date().toISOString(),
  ];
}

function driverToRow(driver) {
  return [
    driver.id || '',
    driver.name || '',
    driver.user || '',
    driver.contractor || '',
    driver.status,
    driver.average_rating || 0,
    driver.driver_points || 0,
    driver.assigned_vehicle || '',
    driver.fixed_income_per_trip || 0,
  ];
}

function loadOrCreateWorkbook() {
  if (fs.existsSync(FILE_PATH)) {
    return XLSX.readFile(FILE_PATH);
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([USER_HEADERS]), 'Users');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([TRUCK_HEADERS]), 'Trucks');
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([DRIVER_HEADERS]), 'Drivers');
  return wb;
}

function ensureSheet(wb, sheetName, headers) {
  if (!wb.Sheets[sheetName]) {
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([headers]), sheetName);
  }
}

function appendRowToSheet(wb, sheetName, headers, row) {
  ensureSheet(wb, sheetName, headers);
  const ws = wb.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
  data.push(row);
  wb.Sheets[sheetName] = XLSX.utils.aoa_to_sheet(data);
}

// Called once on server startup — creates the file with seed data if it doesn't exist yet.
function initExcelFile(users, trucks, drivers) {
  try {
    if (fs.existsSync(FILE_PATH)) {
      console.log(`[ExcelLogger] Data file already exists at ${FILE_PATH}`);
      return;
    }
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.aoa_to_sheet([USER_HEADERS, ...users.map(userToRow)]),
      'Users',
    );
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.aoa_to_sheet([TRUCK_HEADERS, ...trucks.map(truckToRow)]),
      'Trucks',
    );
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.aoa_to_sheet([DRIVER_HEADERS, ...drivers.map(driverToRow)]),
      'Drivers',
    );

    XLSX.writeFile(wb, FILE_PATH);
    console.log(`[ExcelLogger] Created ${FILE_PATH} with ${users.length} users, ${trucks.length} trucks, ${drivers.length} drivers`);
  } catch (err) {
    console.error('[ExcelLogger] initExcelFile failed:', err.message);
  }
}

function appendUser(user) {
  try {
    const wb = loadOrCreateWorkbook();
    appendRowToSheet(wb, 'Users', USER_HEADERS, userToRow(user));
    XLSX.writeFile(wb, FILE_PATH);
  } catch (err) {
    console.error('[ExcelLogger] appendUser failed:', err.message);
  }
}

function appendTruck(truck) {
  try {
    const wb = loadOrCreateWorkbook();
    appendRowToSheet(wb, 'Trucks', TRUCK_HEADERS, truckToRow(truck));
    XLSX.writeFile(wb, FILE_PATH);
  } catch (err) {
    console.error('[ExcelLogger] appendTruck failed:', err.message);
  }
}

function appendDriver(driver) {
  try {
    const wb = loadOrCreateWorkbook();
    appendRowToSheet(wb, 'Drivers', DRIVER_HEADERS, driverToRow(driver));
    XLSX.writeFile(wb, FILE_PATH);
  } catch (err) {
    console.error('[ExcelLogger] appendDriver failed:', err.message);
  }
}

module.exports = { initExcelFile, appendUser, appendTruck, appendDriver };
