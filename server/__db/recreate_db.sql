drop database if exists cyf_hotels;
DROP ROLE IF EXISTS cyf;
CREATE USER cyf WITH PASSWORD 'password1';
CREATE DATABASE cyf_hotels OWNER cyf;