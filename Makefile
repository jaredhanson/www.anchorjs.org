site:
	node site

publish:
	scp -rp anchorjs.org jaredhanson@anchorjs.org:/home/jaredhanson

.PHONY: site publish
