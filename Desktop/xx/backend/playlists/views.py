from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .dto import PlaylistSerializer
from .models import Playlist
from django.db import transaction

# Create your views here.
class PlaylistView(APIView):
    @transaction.atomic
    def get(self, request):
        playlists = Playlist.objects.all()
        serializer = PlaylistSerializer(playlists, many=True)
        return Response(status=status.HTTP_200_OK,data=serializer.data)