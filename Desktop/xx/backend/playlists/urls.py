
from django.urls import path
from .views import PlaylistView

urlpatterns = [
    path("playlists/", PlaylistView.as_view(), name="playlist_lists"),
]