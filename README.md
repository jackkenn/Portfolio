Docker commands
```bash
# dev
docker network create my_network
docker compose -f compose.dev.yaml build
docker compose -f compose.dev.yaml up

#dev
docker network create my_network
docker compose -f compose.prod.yaml build
# Up prod in detached mode
docker compose -f compose.prod.yaml up -d


# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```