from django.core.management.base import BaseCommand, CommandError

class Command(BaseCommand):
    help = 'Mock data for playlist'
    
    def handle(self, *args, **options):
        from playlists.factory.playlist_seed import PlaylistSeeder
        
        for i in range(4):
            PlaylistSeeder(i).seed()
            
        self.stdout.write(self.style.SUCCESS('Playlist data has been added successfully!'))