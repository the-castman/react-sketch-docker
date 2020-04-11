#export PATH := node_modules/.bin:$(PATH)
#export SHELL := /bin/bash # Required for OS X for some reason

PROJECT_NAME = $(notdir $(PWD))

build-docker:
	@echo ''
	@echo '**** Building a docker image: $(PROJECT_NAME)-nginx:latest ****'
	@echo '------------------------------------------------------------'
	@echo ''	
	docker build -t react-sketch-nginx:latest .

build-docker-dev:
	@echo ''
	@echo '**** Building a dev docker image: $(PROJECT_NAME)-nginx:latest ****'
	@echo '------------------------------------------------------------'
	@echo ''	
	docker build -t react-sketch-nginx-dev:latest -f Dockerfile.dev .
	docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true react-sketch-nginx-dev:latest

remove-docker-images:
	docker image prune
	docker images

start-dev:
	npm start