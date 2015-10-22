from setuptools import find_packages
from setuptools import setup

setup(
    name='collective.tocify',
    version="0.0.1",
    description="A plone package to integrate the tocify pattern (pat-tocify)",
    long_description='{0}\n{1}'.format(
        open("README.rst").read(),
        open("CHANGES.rst").read(),
    ),
    classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    keywords='plone patternslib tocify pat-tocify',
    author='Plone Foundation',
    author_email='plone-developers@lists.sourceforge.net',
    url='https://github.com/collective/collective.tocify',
    license='BSD',
    packages=find_packages(exclude=['ez_setup']),
    namespace_packages=['collective'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'plone.resource',
    ],
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    """,
)
