#!/bin/bash -e

rm -f tmp/pids/server.pid
PGPASSWORD=${DATABASE_PASSWORD} psql -h db -U postgres -c "CREATE USER db_user WITH PASSWORD '${DATABASE_PASSWORD}';" || true
PGPASSWORD=${DATABASE_PASSWORD} psql -h db -U postgres -c "ALTER USER db_user CREATEDB;" || true
until pg_isready -h db -U postgres; do
  echo "Waiting for database..."
  sleep 2
done

PGPASSWORD=${DATABASE_PASSWORD} psql -h db -U postgres -c "CREATE USER db_user WITH PASSWORD '${DATABASE_PASSWORD}';" || true
PGPASSWORD=${DATABASE_PASSWORD} psql -h db -U postgres -c "ALTER USER db_user CREATEDB;" || true

bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed

if [ "$RAILS_ENV" == "production" ]; then
  bundle exec rake assets:precompile
fi

exec "$@"