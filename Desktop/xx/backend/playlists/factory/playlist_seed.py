
from django_seed import Seed
from playlists.models import Playlist
from utils.storage_service.minio import MinioStorage


playlist = [
   {
      "name": 'React Rendezvous',
      "artist": 'Ethan Byte',
      "image_name": 'playlist1.jpeg',
      "image_url": "http://media.localhost/mybucket/playlist1.jpeg",
      "cover":
        './assets/media/playlist1.jpeg',
    },
    {
      "name": 'Async Awakenings',
      "artist": 'Nina Netcode',
      "image_name": 'playlist2.jpeg',
      "image_url": "http://media.localhost/mybucket/playlist2.jpeg",
      "cover" :
        './assets/media/playlist2.jpeg',
    },
    {
      "name" : 'The Art of Reusability',
      "artist" : 'Lena Logic',
      "image_name" : 'playlist3.jpeg',
      "image_url": "http://media.localhost/mybucket/playlist3.jpeg",
      "cover":
        './assets/media/playlist3.jpeg'
    },
    {
      "name": 'Stateful Symphony',
      "artist": 'Beth Binary',
      "image_name": 'playlist4.jpeg',
      "image_url": "http://media.localhost/mybucket/playlist4.jpeg",
      "cover":
        './assets/media/playlist4.jpeg',
    },
]


class PlaylistSeeder:
    def __init__(self, number):
        
        self.name = playlist[number]['name']
        self.description = playlist[number]['artist']
        self.image_name = playlist[number]['image_name']
        self.image = playlist[number]["image_url"]
        self.path = playlist[number]['cover']
    
    def seed(self):
        minio = MinioStorage()
        minio.upload('mybucket', self.image_name, self.path)
        
        
        Playlist.objects.create(
            name=self.name,
            description=self.description,
            image=self.image
        )
        