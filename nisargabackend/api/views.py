from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.tokens import RefreshToken
from .models import myuser,Pickup
from .serializers import myuserSerializer
from django.contrib.auth.hashers import check_password
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = myuserSerializer
    permission_classes = [permissions.AllowAny]

class UserProfileUpdateView(generics.UpdateAPIView):
    queryset = myuser.objects.all()
    serializer_class = myuserSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_object(self):
        return myuser.objects.get(username=self.request.user.username)
   

class UserLoginView(APIView):
    permission_classes = [permissions.AllowAny]
    @csrf_exempt
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = myuser.objects.filter(username=username).first()
        print(user)
        if user is None:
            return Response({'detail': 'Invalid credentials'}, status=401)
        print(password==user.password)
        if password!=user.password:
            return Response({'detail': 'hehe'}, status=401)
        refresh = RefreshToken.for_user(user)
        return Response({
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh)
        })

class UserDeleteView(generics.DestroyAPIView):
    queryset = myuser.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    def get_object(self):
        return myuser.objects.get(username=self.request.user.username)

class BookPickup(APIView):
    permission_classes=[permissions.IsAuthenticated]
    def post(self,request):
        user_obj=myuser.objects.get(username=self.request.user.username)
        if user_obj is None:
            return Response(
                status=400,
                data="should be logged in"
            )
        request=request.data
        un=user_obj.username
        mob=user_obj.mobile_number
        lm=user_obj.landmark
        dn=user_obj.door_no
        desc=' '
        kind=' '
        if request.get('kind') is not None:
            kind=request.get('kind').lower()
        type=request.get('type').lower()
        if type=='house':
            pass
        elif type=='local':
            dn='  '
        elif type=='canal':
            kind=' '
        elif type=='other':
            kind=' '
            desc=request.get('description')
        pickup_obj=Pickup(Name=un,door_no=user_obj.door_no,phone=user_obj.mobile_number,landmark=user_obj.landmark,type=type,kind=kind,description=desc)
        pickup_obj.save()
        return Response(status=200,data="successfully submitted data")
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import Pickup

def PickupViewset(request):
    if request.method == 'POST':
        id = request.POST.get("id")
        print(id)
        try:
            x = Pickup.objects.get(id=id)
            x.delete()
        except Pickup.DoesNotExist:
            pass
        return HttpResponseRedirect(request.path_info)

    allobjs = Pickup.objects.all()
    return render(request, 'index.html', {'object': allobjs})

    



    


