FROM ruby:3.3.2

# Install Node.js and npm
RUN (curl -sS https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | apt-key add -) && \
    echo "deb https://deb.nodesource.com/node_14.x buster main" > /etc/apt/sources.list.d/nodesource.list && \
    apt-get update && apt-get install -y nodejs postgresql-client npm

WORKDIR /myapp

# Application dependencies
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && \
bundle config unset deployment && \
    bundle config set --local without 'development test' && \
    bundle install
ENV PATH="/myapp/bin:${PATH}"
# ENV PATH="$PATH:/usr/local/bundle/bin"


# Copy application code to the container image
COPY . ./

# Install JavaScript dependencies and build assets
RUN npm install
RUN npm run build

# Set environment variables
ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true
ARG MASTER_KEY
ENV RAILS_MASTER_KEY=${MASTER_KEY}

# Add entrypoint script
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Precompile Rails assets
RUN bundle exec rake assets:precompile

ENV HOST 0.0.0.0
EXPOSE 8080
CMD ["rails", "server", "-b", "0.0.0.0", "--port", "8080"]
