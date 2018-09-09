all: client server

client: FORCE
	cd client && ng serve --open &

server: FORCE
	cd server && npm start &

FORCE:
