dev:
	yarn dev

start:
	yarn
	yarn build
	yarn start

start-docker:
	docker build -t graphql-dashboard -f Dockerfile .
	docker run --rm -p 3000:3000 graphql-dashboard
