#!/bin/bash
# Initialize PostgreSQL
service postgresql start

# Create the database and user if they don't exist
sudo -u postgres psql <<-EOSQL
  CREATE USER testing WITH PASSWORD 'testing';
  CREATE DATABASE portfolio3-db;
  GRANT ALL PRIVILEGES ON DATABASE portfolio3-db TO testing;
EOSQL

# Run any pending database migrations
bundle exec rake db:create db:migrate

# Keep the container running
tail -f /dev/null
