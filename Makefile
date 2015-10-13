# binary and other paths
GIT = git
NPM = npm
NODE = node
GRUNT = ./node_modules/grunt-cli/bin/grunt
BOWER = ./node_modules/bower/bin/bower
NODE_PATH = ./node_modules

# npm link has different behavior between node versions.
# Get node version, e.g. "0.11.12"
NODE_VERSION = $(shell $(NODE) -v)
# Get major version, e.g. "0"
NODE_VERSION_MAJ = $(shell echo $(NODE_VERSION) | cut -f1 -d. | cut -f2 -dv )
# Get minor version, E.g. 11
NODE_VERSION_MIN = $(shell echo $(NODE_VERSION) | cut -f2 -d.)
# Test if the version is below "0.11", E.g. "0.10"
NODE_VERSION_LT_011 = $(shell [ $(NODE_VERSION_MAJ) -eq 0 -a $(NODE_VERSION_MIN) -lt 11 ] && echo true)

# DEBUG and VERBOSE mode for grunt. E.g. `make all debug=true verbose=true`
DEBUG =
ifeq ($(debug), true)
	DEBUG = --debug
endif
VERBOSE =
ifeq ($(verbose), true)
	VERBOSE = --verbose
endif


# Make tasks
all: test-once bundle-tocify


cleanplone:
	# Remove buildout created Plone directories, except var
	rm -Rf bin develop-eggs include lib lib64 parts .installed

plone5: cleanplone
	# Install Plone 5
	virtualenv .
	./bin/pip install zc.buildout
	./bin/buildout

plone4: cleanplone
	# Install Plone 4
	virtualenv .
	./bin/pip install zc.buildout
	./bin/buildout -c buildout-plone4.cfg

bundle-tocify:
	# Build tocify bundle
	mkdir -p build
	NODE_PATH=$(NODE_PATH) $(GRUNT) bundle-tocify $(DEBUG) $(VERBOSE) --gruntfile=src/mockup-tocify/js/Gruntfile.js

bootstrap: clean
	# Install node/bower dependencies
	mkdir -p build
	@echo node version: $(NODE_VERSION)
ifeq ($(NODE_VERSION_LT_011),true)
	# for node < v0.11.x
	$(NPM) link --prefix=.
else
	$(NPM) link
endif
	NODE_PATH=$(NODE_PATH) $(BOWER) install --config.interactive=0
	NODE_PATH=$(NODE_PATH) $(GRUNT) sed:bootstrap $(DEBUG) $(VERBOSE) --gruntfile=src/mockup-tocify/js/Gruntfile.js

jshint:
	# Codecheck
	NODE_PATH=$(NODE_PATH) $(GRUNT) jshint $(DEBUG) $(VERBOSE) --gruntfile=src/mockup-tocify/js/Gruntfile.js

watch:
	# Run grunt and watch for changes.
	NODE_PATH=$(NODE_PATH) $(GRUNT) watch $(DEBUG) $(VERBOSE) --gruntfile=src/mockup-tocify/js/Gruntfile.js

test:
	# Run tests headless via PhantomJS and watch for changes.
	NODE_PATH=$(NODE_PATH) $(GRUNT) test $(DEBUG) $(VERBOSE) --pattern=$(pattern) --gruntfile=src/mockup-tocify/js/Gruntfile.js

test-once:
	# Run the tests headless with PhantomJS only once and exit.
	NODE_PATH=$(NODE_PATH) $(GRUNT) test_once $(DEBUG) $(VERBOSE) --pattern=$(pattern) --gruntfile=src/mockup-tocify/js/Gruntfile.js

test-dev:
	# Run the tests for Chromium and watch for changes.
	NODE_PATH=$(NODE_PATH) $(GRUNT) test_dev $(DEBUG) $(VERBOSE) --pattern=$(pattern) --gruntfile=src/mockup-tocify/js/Gruntfile.js

clean:
	# Cleanup the project and remove directories set up by previous tasks
	mkdir -p build
	rm -rf build
	rm -rf node_modules
	rm -rf mockup/bower_components

clean-deep: clean
	# Also clean bower and npm caches.
	if test -f $(BOWER); then $(BOWER) cache clean; fi
	if test -f $(NPM); then $(NPM) cache clean; fi

# Expose these options to the command line shell expansion mechanism
.PHONY: all plone plone4 bundle-tocify bootstrap jshint watch test test-once test-dev clean clean-deep
