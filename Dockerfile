FROM ruby:3.3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    postgresql-client \
    && apt-get clean

# Install latest npm
RUN npm install -g npm@9.2.0

WORKDIR /myapp

# Install Ruby dependencies
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && \
    bundle config unset deployment && \
    bundle config set --local without 'development test' && \
    bundle install

# Set environment variables
ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true

# Copy application code to the container image
COPY . ./

# Install and build JavaScript assets
RUN npm ci && \
    ./node_modules/.bin/esbuild app/javascript/*.* --bundle --minify --format=esm --outdir=app/assets/builds --public-path=/assets --loader:.css=css && \
    npm ci --only=production

# Precompile Rails assets
ARG RAILS_MASTER_KEY
ENV RAILS_MASTER_KEY=${RAILS_MASTER_KEY}
ENV RDS_HOSTNAME=${RDS_HOSTNAME}
ENV RDS_USERNAME=${RDS_USERNAME}
ENV RDS_PASSWORD=${RDS_PASSWORD}
ENV RDS_DB_NAME=${RDS_DB_NAME}
ENV SECRET_KEY_BASE=${SECRET_KEY_BASE}

RUN RAILS_ENV=production bundle exec rake assets:precompile && \
    rm -rf node_modules tmp/cache

# Add entrypoint script
COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

# Expose port
EXPOSE 8080

# Set entrypoint
ENTRYPOINT ["/usr/bin/entrypoint.sh"]

# Command to run the Rails server
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "8080"]