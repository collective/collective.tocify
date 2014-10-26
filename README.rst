A minimal pattern for mockup
============================

This is a minimal pattern for mockup. It does not much, except changing the
html contents of a DOM element with a configurable test.
It can be used to learn about mockup, the source code is annotated with
comments.


Bootstrap the JS environment for pattern development
----------------------------------------------------

Make sure, you have `GNU make`, `node` and `git` installed.

Then::

    $ git clone https://github.com/collective/mockup-minimalpattern.git
    $ cd mockup-minimalpattern
    $ make bootstrap

Create the bundles (needed for development and Plone 4. For integration in
Plone 5, the bundle can be compiled through the web)::

    $ make bundle-minimalpattern

Then::

    $ python -m SimpleHTTPServer
    $ chrome http://localhost:8000


Run the tests.

In watch mode::

    $ make test pattern=pattern-minimalpattern

Only once::
    
    $ make test-once pattern=pattern-minimalpattern

In Google Chrome browser::

    $ make test-dev pattern=pattern-minimalpattern

Please note: Normally all tests in the test directory are run. But here, we
have to explicitly tell the testrunner, which test to run. I'm not sure why,
and I'm to lazy to debug that - that happened since I moved the whole
Javascript into a Python-reachable directory
(commit: 9cac63e9b9c961fd3fc6d94945fb8966c37ef593 ).


Bootstrap Plone for testing the Plone integration
----------------------------------------------------

Just use the provided ``make`` target commands (see ``Makefile``, for what they
are doing).

.. note::

    The make targets to bootstrap Plone erase the ``var`` directory! You will
    loose any changes made to your Plone database.

For Plone 5::

    $ make plone

For Plone 4::

    $ make plone4
