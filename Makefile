remove-node:
	find . -type dir -name node_modules | xargs rm -rf && rm -rf yarn.lock

commit-all:
	git add . && git commit -m 'update'

.PHONY: remove-node commit-all

