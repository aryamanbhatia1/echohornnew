from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from core.views import backend_home

urlpatterns = [
    path('', backend_home, name='backend_home'),
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/consumer/', include('consumer.urls')),
    path('api/contractor/', include('contractor.urls')),
    path('api/core/', include('core.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
