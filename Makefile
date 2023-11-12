remove-node:
	find . -type dir -name node_modules | xargs rm -rf && rm -rf yarn.lock

.PHONY: remove-node