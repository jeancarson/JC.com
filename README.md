# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

INITIAL DEPLOYMENT:

gcloud builds submit --config cloudbuild.yaml --substitutions \_SERVICE_NAME=portfolio3-service,\_INSTANCE_NAME=portfolio3-cloudsql-instance,\_REGION=us-central1,\_SECRET_NAME=RAILS_SECRET_NAME

    gcloud run deploy portfolio3-service     --platform managed      --region us-central1     --image gcr.io/portfolio3-446011/portfolio3-service      --add-cloudsql-instances portfolio3-446011:us-central1:portfolio3-cloudsql-instance      --allow-unauthenticated --timeout=2000s

TO UPDATE:

gcloud builds submit --config cloudbuild.yaml \
 --substitutions \_SERVICE_NAME=portfolio3-service,\_INSTANCE_NAME=portfolio3-cloudsql-instance,\_REGION=us-central1,\_SECRET_NAME=RAILS_SECRET_NAME

gcloud run deploy portfolio3-service \
 --platform managed \
 --region us-central1 \
 --image gcr.io/portfolio3-446011/portfolio3-service

--set-env-vars RAILS_MASTER_KEY=$(cat config/master.key)
