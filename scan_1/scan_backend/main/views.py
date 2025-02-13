from django.shortcuts import render


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from .models import APi
from .serializer import APiSerializer


def home(request):
    return render(request, 'home.html')

@api_view(['GET', 'POST'])
def api_list(request):
    api = APi.objects.all()
    serializer = APiSerializer(api, many=True)

    return Response(serializer.data)
