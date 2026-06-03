# EchoHorn JavaScript Backend

This folder is the JavaScript backend for the EchoHorn full-stack project.

It gives the project three clear parts:

- `frontend`: the existing Next.js app in the root folders.
- `backend`: this Node.js and Express API in `server/`.
- `database`: MongoDB through Mongoose models, with in-memory arrays as a fallback for classroom/demo use.

## Teacher Demo Notes

This backend is intentionally built to show:

- `Node.js + Express` server structure
- JavaScript validation
- nested objects in the database layer
- arrays/lists in the database layer

Examples:

- nested user profile object in [server/models/User.js](/Users/aryamanbhatia/EchoHorn/server/models/User.js)
- nested truck safety/specification objects in [server/models/Truck.js](/Users/aryamanbhatia/EchoHorn/server/models/Truck.js)
- booking cargo arrays and status-history arrays in [server/models/Booking.js](/Users/aryamanbhatia/EchoHorn/server/models/Booking.js)
- complaint conversation array and resolution object in [server/models/Complaint.js](/Users/aryamanbhatia/EchoHorn/server/models/Complaint.js)
- visible fallback arrays/lists in [server/data/memoryStore.js](/Users/aryamanbhatia/EchoHorn/server/data/memoryStore.js)

## Main Backend Features

- Customer signup and login.
- Fleet-owner signup and login.
- JavaScript validation for names, email, phone, address, truck registration, bookings, and complaints.
- Truck inventory grouped by truck category.
- Customer booking request flow.
- Fleet-owner accept or reject flow.
- Customer complaints stored in the backend.
- Admin insights API for employees.

## Run

```bash
npm install
npm run backend
```

For MongoDB, create `.env.local` or `.env` with:

```bash
MONGODB_URI=mongodb://127.0.0.1:27017/echohorn
JWT_SECRET=echohorn-secret
PORT=5001
FRONTEND_URL=http://localhost:3000
```

If `MONGODB_URI` is not set, the backend still runs using the database arrays in:

```bash
server/data/memoryStore.js
```

That file is useful for showing arrays and lists to your teacher.
