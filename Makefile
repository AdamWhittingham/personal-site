.PHONY: dev
dev:
	bundle exec jekyll serve --livereload --open-url http://localhost:4000/ --drafts

.PHONY: lint-drafts
lint-drafts:
	vale --config="${HOME}/.adshell/vale/vale.ini" _drafts/*
