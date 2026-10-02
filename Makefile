.PHONY: init
init:
	-asdf plugin add ruby
	asdf install
	bundle install

.PHONY: dev
dev:
	@bundle check > /dev/null 2>&1 || bundle install
	bundle exec jekyll serve --livereload --open-url --drafts

.PHONY: build
build:
	bundle exec jekyll build

.PHONY: lint-drafts
lint-drafts:
	vale --config="${HOME}/.adshell/vale/vale.ini" _drafts/*
