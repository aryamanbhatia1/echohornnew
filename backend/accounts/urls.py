from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    RegisterConsumerView, 
    RegisterDriverView,
    RegisterContractorView,
    UserDetailView, 
    CompleteContractorProfileView,
    CompleteDriverProfileView,
)

urlpatterns = [
    # Authentication
    path('register/consumer/', RegisterConsumerView.as_view(), name='register_consumer'),
    path('register/driver/', RegisterDriverView.as_view(), name='register_driver'),
    path('register/contractor/', RegisterContractorView.as_view(), name='register_contractor'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # User Profile
    path('me/', UserDetailView.as_view(), name='user_detail'),
    
    # Contractor
    path('contractor/complete-profile/', CompleteContractorProfileView.as_view(), name='complete_contractor_profile'),
    path('driver/complete-profile/', CompleteDriverProfileView.as_view(), name='complete_driver_profile'),

]
