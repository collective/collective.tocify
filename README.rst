Mockup pattern for jquery.tocify
================================

This pattern creates a table of contents using jquery.tocify.js
(see [http://gregfranko.com/jquery.tocify.js] for more information about
tocify).

Bootstrap the JS environment for pattern development
----------------------------------------------------

Make sure, you have `GNU make`, `node` and `git` installed.

Then::

    $ git clone (https://github.com/collective/mockup-tocify.git
    $ cd mockup-tocify
    $ make bootstrap

Create the bundles (needed for development and Plone 4. For integration in
Plone 5, the bundle can be compiled through the web)::

    $ make bundle-tocify

Then::

    $ python -m SimpleHTTPServer
    $ chrome http://localhost:8000


Run the tests.

In watch mode::

    $ make test pattern=pattern-tocify

Only once::

    $ make test-once pattern=pattern-tocify

In Google Chrome browser::

    $ make test-dev pattern=pattern-tocify


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
