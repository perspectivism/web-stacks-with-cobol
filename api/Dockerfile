FROM python:3

ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
    open-cobol

RUN mkdir -p /opt/api/app
COPY app/requirements.txt /opt/api/app
WORKDIR /opt/api/app

RUN pip install -r requirements.txt

COPY app /opt/api/app
RUN cobc -free -O2 -fimplicit-init -o taxlib.so TaxLib.cbl

EXPOSE 8081

CMD ["python", "main.py"]
