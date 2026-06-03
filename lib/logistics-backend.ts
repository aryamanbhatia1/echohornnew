'use client';

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://127.0.0.1:5001';
const TOKEN_KEY = 'echohorn-backend-token';
const USER_KEY = 'echohorn-backend-user';

type LoginResponse = {
  access: string;
  refresh: string;
};

export type BackendUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  user_type: 'consumer' | 'driver' | 'contractor';
};

async function request<T>(path: string, options: RequestInit = {}, token?: string): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const errorMessage =
      data?.detail ||
      data?.error ||
      Object.values(data || {})?.flat?.()?.[0] ||
      'Request failed.';
    throw new Error(String(errorMessage));
  }

  return data as T;
}

export function getStoredBackendSession() {
  if (typeof window === 'undefined') return null;
  const token = window.localStorage.getItem(TOKEN_KEY);
  const rawUser = window.localStorage.getItem(USER_KEY);
  if (!token || !rawUser) return null;
  try {
    return { token, user: JSON.parse(rawUser) as BackendUser };
  } catch {
    return null;
  }
}

export function clearBackendSession() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
}

export async function loginBackend(email: string, password: string) {
  const tokenData = await request<LoginResponse>('/api/auth/login/', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  const user = await request<BackendUser>('/api/auth/me/', {}, tokenData.access);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(TOKEN_KEY, tokenData.access);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  return { token: tokenData.access, user };
}

export async function registerConsumerBackend(payload: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
}) {
  await request('/api/auth/register/consumer/', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
      password2: payload.password,
    }),
  });
  return loginBackend(payload.email, payload.password);
}

export async function registerContractorBackend(payload: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
}) {
  await request('/api/auth/register/contractor/', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
      password2: payload.password,
    }),
  });
  return loginBackend(payload.email, payload.password);
}

export async function createServiceRequest(token: string, payload: Record<string, unknown>) {
  return request('/api/consumer/requests/', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, token);
}

export async function getAvailableDrivers(token: string, requestId: number) {
  return request<{ available_drivers: Array<Record<string, unknown>>; ml_suggested_price: string }>(
    `/api/consumer/requests/${requestId}/drivers/`,
    {},
    token,
  );
}

export async function createBackendBooking(token: string, payload: Record<string, unknown>) {
  return request('/api/consumer/bookings/', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, token);
}

export async function listConsumerBookings(token: string) {
  return request<Array<Record<string, unknown>>>('/api/consumer/bookings/list/', {}, token);
}

export async function createBackendComplaint(token: string, payload: Record<string, unknown>) {
  return request('/api/consumer/complaints/', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, token);
}

export async function listComplaints(token: string) {
  return request<Array<Record<string, unknown>>>('/api/consumer/complaints/', {}, token);
}

export async function listContractorVehicles(token: string) {
  return request<Array<Record<string, unknown>>>('/api/contractor/vehicles/', {}, token);
}

export async function createContractorVehicle(token: string, payload: Record<string, unknown>) {
  return request('/api/contractor/vehicles/', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, token);
}

export async function listContractorBookings(token: string) {
  return request<Array<Record<string, unknown>>>('/api/contractor/bookings/', {}, token);
}

export async function decideContractorBooking(token: string, bookingId: number, action: 'accept' | 'reject') {
  return request(`/api/contractor/bookings/${bookingId}/decision/`, {
    method: 'POST',
    body: JSON.stringify({ action }),
  }, token);
}

export async function getAdminInsights(token: string) {
  return request<Record<string, unknown>>('/api/core/admin/insights/', {}, token);
}
