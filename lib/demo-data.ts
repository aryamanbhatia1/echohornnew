export type DemoRole = "consumer" | "driver" | "fleet_owner";

export type DemoUser = {
  id: string;
  role: DemoRole;
  name: string;
  email: string;
  password: string;
  phone: string;
  region: string;
  companyName?: string;
};

export type DemoTruck = {
  id: string;
  ownerId: string;
  registrationNumber: string;
  truckType: string;
  capacityTons: number;
  region: string;
  status: "available" | "on_trip" | "maintenance";
};

export type DemoDriver = {
  id: string;
  userId: string;
  ownerId: string;
  truckId: string;
  rating: number;
  predictedRating: number;
  points: number;
  trips: number;
  fixedIncome: number;
  etaHours: number;
  safetyNote: string;
  routePreference: string;
  available: boolean;
};

export type DemoBooking = {
  id: string;
  customerId: string;
  driverId: string;
  ownerId: string;
  truckId: string;
  from: string;
  to: string;
  pickupTime: string;
  truckType: string;
  loadType: string;
  status: "pending_approval" | "accepted" | "in_transit" | "completed" | "rejected";
  amount: number;
  paid: boolean;
  driverPayout: number;
  driverPaid: boolean;
  poolMessage?: string;
  rejectionReason?: string;
};

export type DemoComplaint = {
  id: string;
  customerId: string;
  bookingId?: string;
  title: string;
  detail: string;
  status: "open" | "in_review" | "resolved";
  createdAt: string;
};

export type DemoStore = {
  users: DemoUser[];
  trucks: DemoTruck[];
  drivers: DemoDriver[];
  bookings: DemoBooking[];
  complaints: DemoComplaint[];
};

export const truckTypes = [
  "Mini Truck",
  "Medium Truck",
  "Full Truck",
  "Trailer",
  "Tempo",
];

export const routePreferences = ["Local", "Intercity", "Both"];

const users: DemoUser[] = [
  {
    id: "owner-aq",
    role: "fleet_owner",
    name: "AQ Logistics",
    email: "owner@aqlogistics.demo",
    password: "OwnerDemo123!",
    phone: "+91 98111 11111",
    region: "Delhi NCR",
    companyName: "AQ Logistics",
  },
  {
    id: "consumer-riya",
    role: "consumer",
    name: "Riya Sharma",
    email: "customer@aqlogistics.demo",
    password: "CustomerDemo123!",
    phone: "+91 98222 22222",
    region: "Noida",
  },
];

const trucks: DemoTruck[] = [
  { id: "truck-101", ownerId: "owner-aq", registrationNumber: "HR55AQ101", truckType: "Mini Truck", capacityTons: 1.5, region: "Delhi NCR", status: "available" },
  { id: "truck-102", ownerId: "owner-aq", registrationNumber: "HR55AQ102", truckType: "Mini Truck", capacityTons: 1.8, region: "Noida", status: "available" },
  { id: "truck-201", ownerId: "owner-aq", registrationNumber: "HR55AQ201", truckType: "Medium Truck", capacityTons: 3.2, region: "Gurugram", status: "available" },
  { id: "truck-202", ownerId: "owner-aq", registrationNumber: "HR55AQ202", truckType: "Medium Truck", capacityTons: 4.1, region: "Delhi NCR", status: "available" },
  { id: "truck-301", ownerId: "owner-aq", registrationNumber: "HR55AQ301", truckType: "Full Truck", capacityTons: 7.5, region: "Jaipur", status: "available" },
  { id: "truck-302", ownerId: "owner-aq", registrationNumber: "HR55AQ302", truckType: "Full Truck", capacityTons: 8.0, region: "Noida", status: "available" },
  { id: "truck-401", ownerId: "owner-aq", registrationNumber: "HR55AQ401", truckType: "Trailer", capacityTons: 16, region: "Faridabad", status: "available" },
  { id: "truck-501", ownerId: "owner-aq", registrationNumber: "HR55AQ501", truckType: "Tempo", capacityTons: 0.9, region: "Delhi NCR", status: "available" },
];

const seededDrivers = [
  ["Arjun Malik", "arjun.driver@aqlogistics.demo", "truck-101", 4.8, 4.7, 340, 122, 5200, 2, "Verified ID, seal check, live route check-ins", "Both", "Delhi NCR"],
  ["Neeraj Kumar", "neeraj.driver@aqlogistics.demo", "truck-201", 4.6, 4.5, 286, 94, 6800, 3, "Camera-backed loading proof and safe parking compliance", "Intercity", "Gurugram"],
  ["Vikas Rao", "vikas.driver@aqlogistics.demo", "truck-301", 4.9, 4.8, 401, 158, 8400, 4, "High-value goods handling and disciplined timing", "Both", "Noida"],
  ["Sahil Khan", "sahil.driver@aqlogistics.demo", "truck-102", 4.5, 4.4, 240, 85, 5100, 2, "Light commercial specialist and quick pickup response", "Local", "Delhi NCR"],
  ["Mohit Tyagi", "mohit.driver@aqlogistics.demo", "truck-202", 4.7, 4.6, 318, 107, 6900, 3, "Strong furniture handling and unload proof routine", "Both", "Ghaziabad"],
  ["Imran Sheikh", "imran.driver@aqlogistics.demo", "truck-302", 4.4, 4.3, 211, 73, 7900, 5, "Reliable intercity completion with low claims history", "Intercity", "Jaipur"],
  ["Punit Solanki", "punit.driver@aqlogistics.demo", "truck-501", 4.3, 4.2, 188, 68, 4300, 1, "Fast inner-city deliveries and flexible slots", "Local", "Noida"],
  ["Rahul Verma", "rahul.driver@aqlogistics.demo", "truck-401", 4.8, 4.7, 350, 116, 9900, 6, "Heavy-load trailer operations and safety-trained", "Intercity", "Faridabad"],
  ["Harshdeep Gill", "harsh.driver@aqlogistics.demo", "truck-201", 4.6, 4.5, 267, 89, 6700, 3, "Balanced ratings across punctuality and cargo care", "Both", "Delhi NCR"],
  ["Ankit Yadav", "ankit.driver@aqlogistics.demo", "truck-202", 4.5, 4.4, 229, 81, 6600, 4, "Warehouse pickup discipline with careful loading", "Both", "Gurugram"],
  ["Deepak Rana", "deepak.driver@aqlogistics.demo", "truck-301", 4.7, 4.6, 303, 101, 8500, 4, "Long-route specialist with strong customer reviews", "Intercity", "Jaipur"],
  ["Naseem Ali", "naseem.driver@aqlogistics.demo", "truck-102", 4.4, 4.3, 198, 71, 5000, 2, "Responsive short-haul driver with clean completion record", "Local", "Noida"],
] as const;

const driverUsers: DemoUser[] = seededDrivers.map(([name, email, , , , , , , , , , region], index) => ({
  id: `driver-user-${index + 1}`,
  role: "driver",
  name,
  email,
  password: "DriverDemo123!",
  phone: `+91 98333 33${String(index + 1).padStart(3, "0")}`,
  region,
}));

const drivers: DemoDriver[] = seededDrivers.map(
  ([, , truckId, rating, predictedRating, points, trips, fixedIncome, etaHours, safetyNote, routePreference], index) => ({
    id: `driver-${index + 1}`,
    userId: `driver-user-${index + 1}`,
    ownerId: "owner-aq",
    truckId,
    rating,
    predictedRating,
    points,
    trips,
    fixedIncome,
    etaHours,
    safetyNote,
    routePreference,
    available: true,
  }),
);

const bookings: DemoBooking[] = [
  {
    id: "booking-1",
    customerId: "consumer-riya",
    driverId: "driver-1",
    ownerId: "owner-aq",
    truckId: "truck-101",
    from: "Noida Sector 18 Warehouse",
    to: "Gurugram Golf Course Extension Road",
    pickupTime: "2026-04-08T10:00",
    truckType: "Mini Truck",
    loadType: "Electronics",
    status: "completed",
    amount: 8200,
    paid: true,
    driverPayout: 5200,
    driverPaid: true,
    poolMessage: "Paired with a nearby electronics run to reduce empty return distance.",
  },
  {
    id: "booking-2",
    customerId: "consumer-riya",
    driverId: "driver-2",
    ownerId: "owner-aq",
    truckId: "truck-201",
    from: "Delhi Furniture Market",
    to: "Jaipur Retail Hub",
    pickupTime: "2026-04-09T18:30",
    truckType: "Medium Truck",
    loadType: "Furniture",
    status: "pending_approval",
    amount: 14600,
    paid: false,
    driverPayout: 6800,
    driverPaid: false,
    poolMessage: "Eligible for truck pooling with another Jaipur-bound load in the 6 PM lane.",
  },
];

const complaints: DemoComplaint[] = [
  {
    id: "complaint-1",
    customerId: "consumer-riya",
    bookingId: "booking-2",
    title: "Need faster booking confirmation",
    detail: "The customer wants clearer confirmation timing after submitting the request to the fleet owner.",
    status: "open",
    createdAt: "2026-04-08T09:15",
  },
];

export const defaultDemoStore: DemoStore = {
  users: [...users, ...driverUsers],
  trucks,
  drivers,
  bookings,
  complaints,
};
