# Build code
FROM node:11-alpine

# Install fresh packages, neat trick:
# Create new layer, to make sure that changing a code doesn't require installing node modules again
COPY ./package*.json /tmp/node-cache/
RUN cd /tmp/node-cache && npm install --no-save

# Copy benchmark code
COPY . /app

# Copy node modules
RUN cp -rf /tmp/node-cache/node_modules /app/node_modules

# Start application
WORKDIR /app
CMD node index ${SUITE_NAME}
