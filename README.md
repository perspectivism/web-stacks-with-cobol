# Fusing Web Stacks With COBOL Microservices [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/perspectivism/web-stacks-with-cobol/blob/master/LICENSE)

A Dockerized proof of concept application using React, Node, Python, GnuCOBOL, PostgreSQL, and Docker.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [How it Works](#how-it-works)
- [Running the App](#running-the-app)
- [License](#license)

## Introduction

According to a 2015 report by Reuters<sup>[1](http://fingfx.thomsonreuters.com/gfx/rngs/USA-BANKS-COBOL/010040KH18J/index.html)</sup>:

- 43% of banking systems are built on COBOL.
- 80% of in-person transactions use COBOL.
- 95% of ATM swipes rely on COBOL code.
- 220 billion lines of COBOL are in use today.

This application is a case study on Dockerizing a COBOL application for computing income taxes, and integrating it into a Dockerized web stack.

## Prerequisites

`Docker` and `docker-compose` are needed to run the application. Installation instructions can be found at [Install Docker](https://docs.docker.com/compose/install/) and [Install Docker Compose](https://docs.docker.com/compose/install/).

## How it Works

This project is divided into several parts:

- Web Tier
    - A React front end styled with Bootstrap running on Node.
- API Tier
    - A RESTful API built with Python and Flask.
    - A COBOL shared library for computing income taxes compiled with GnuCOBOL.
    - Responsible for retrieving taxpayer information from PostgreSQL and natively passing that information into a COBOL subroutine to compute income taxes owed.
- Data Tier
    - A PostgreSQL database containing taxpayer information.
- Reverse Proxy
    - Using Træfik as a reverse proxy and load balancer.
- Docker Compose
    - For orchestrating containers and pre-populating the database server.

## Running the App

Start the application with the following command:
```console
sudo docker-compose up -d
```

To view the front end navigate to:
```console
http://web.docker.localhost
```
The database is pre-populated with taxpayer IDs in the range of 1 - 1000. Enter a taxpayer ID and click Submit.

## License

This software is licensed under the [MIT](https://github.com/perspectivism/web-stacks-with-cobol/blob/master/LICENSE) © [Pero Matić](https://turinginc.io).