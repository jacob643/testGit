all: client server

client: FORCE
	cd client && ng serve --open & echo $$! > client.pid

server: FORCE
	cd server && npm start & echo $$! > server.pid

kill: killclient killserver

killclient: FORCE
	kill -9 $$(cat client.pid)
	rm client.pid

killserver:
	kill -9 $$(cat server.pid)
	rm server.pid


FORCE:
