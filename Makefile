.PHONY: test

test.wasm: Dockerfile
	docker build .
	sh -c 'docker run --rm -it $$(docker build -q .) | base64 --decode > test.wasm'

test: test.wasm test.js
	node test.js
