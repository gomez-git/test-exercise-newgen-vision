install:
	npm ci

test:
	npm run test -s

test-coverage:
	npm run test-coverage -s

lint:
	npx eslint .
