#!/bin/bash

poetry run python manage.py migrate && poetry run python manage.py flush --no-input && poetry run python manage.py playlist_mock && poetry run python manage.py runserver 0.0.0.0:8000 --nostatic