FROM python:3.11 


WORKDIR /app
# update and upgrade alpine
RUN apt-get update && apt-get upgrade -y
# install python3 and pip3
RUN apt-get install -y python3 python3-pip

# install pipx
RUN apt-get install pipx -y
# install poetry
RUN pip install poetry

# copy the poetry.lock and pyproject.toml
COPY poetry.lock pyproject.toml  README.md ./

COPY . .
# install dependencies
RUN poetry install

# run the app
CMD [ "sh","server.sh" ]