from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .services import get_admin_dashboard_snapshot


def backend_home(request):
    return HttpResponse(
        """
        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>EchoHorn Backend</title>
          <style>
            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              background: linear-gradient(180deg, #020617 0%, #0f172a 100%);
              color: #e2e8f0;
              display: flex;
              min-height: 100vh;
              align-items: center;
              justify-content: center;
              padding: 24px;
            }
            .card {
              max-width: 760px;
              width: 100%;
              background: rgba(15, 23, 42, 0.92);
              border: 1px solid rgba(148, 163, 184, 0.2);
              border-radius: 24px;
              padding: 32px;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
            }
            h1 { margin: 0 0 12px; font-size: 40px; color: #f8fafc; }
            p { line-height: 1.6; color: #cbd5e1; }
            code {
              background: rgba(148, 163, 184, 0.12);
              padding: 2px 8px;
              border-radius: 999px;
              color: #fde68a;
            }
            ul { padding-left: 20px; color: #cbd5e1; }
            a { color: #7dd3fc; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>EchoHorn Backend is running</h1>
            <p>This server provides the Django API and admin panel for the AQ Logistics app.</p>
            <p>Use <code>http://127.0.0.1:3000</code> for the Next.js frontend.</p>
            <ul>
              <li>Admin panel: <a href="/admin/">/admin/</a></li>
              <li>Health check: <a href="/api/core/health/">/api/core/health/</a></li>
              <li>Auth API: <code>/api/auth/...</code></li>
              <li>Consumer API: <code>/api/consumer/...</code></li>
              <li>Contractor API: <code>/api/contractor/...</code></li>
            </ul>
          </div>
        </body>
        </html>
        """
    )


class AdminInsightsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not (request.user.is_staff or request.user.user_type == 'contractor'):
            return Response({"error": "Admin or contractor access required."}, status=403)
        return Response(get_admin_dashboard_snapshot())


class HealthCheckView(APIView):
    permission_classes = []

    def get_permissions(self):
        return []

    def get(self, request):
        return Response({"status": "ok", "service": "echohorn-backend"})
