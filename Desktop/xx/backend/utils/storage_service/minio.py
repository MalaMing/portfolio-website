from minio import Minio
from django.conf import settings
import os

class MinioStorage:
    def __init__(self):
        self.client = Minio(settings.MINIO_ENDPOINT,
                            access_key=settings.MINIO_ACCESS_KEY,
                            secret_key=settings.MINIO_SECRET_KEY,
                            secure=False)
    
    def upload(self, bucket_name, object_name, file_path):
        
        self.client.fput_object(bucket_name, object_name, file_path)