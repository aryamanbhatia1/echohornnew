from django.urls import path

from .views import AdminInsightsView, HealthCheckView


urlpatterns = [
    path('admin/insights/', AdminInsightsView.as_view(), name='admin_insights'),
    path('health/', HealthCheckView.as_view(), name='health_check'),
]
