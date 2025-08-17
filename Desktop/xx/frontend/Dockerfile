FROM oven/bun:latest as dependencies

WORKDIR /app


COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build



ENV HOST=0.0.0.0 NODE_ENV=production
ENV NODE_ENV=production

EXPOSE 3000

CMD ["bun","run", "/.output/server/index.mjs"]