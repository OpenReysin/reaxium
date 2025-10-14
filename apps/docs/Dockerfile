# Stage 1: Base
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Stage 2: Builder
FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN pnpm add -D turbo@^2.5.5
COPY . .
# Prune the monorepo for the "docs" workspace
RUN pnpm turbo prune --scope=docs --docker

# Stage 3: Installer
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
# Copy only the pruned lockfile and package.json
COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile
# Copy the rest of the pruned workspace
COPY --from=builder /app/out/full/ .
# Build the Astro project
RUN pnpm --filter=docs run build

# Stage 4: Runner (nginx)
FROM nginx:alpine AS runner
# Copy the built Astro static files
COPY --from=installer /app/apps/docs/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
