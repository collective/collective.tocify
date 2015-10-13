from setuptools import find_packages
from setuptools import setup
import json

package_json = json.load(open('package.json'))
version = package_json['version']

setup(
    name='mockup-tocify',
    version=version,
    description="Extension to Mockup's patterns.",
    long_description='{0}\n{1}'.format(
        open("README.rst").read(),
        open("CHANGES.rst").read(),
    ),
    classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    keywords='plone mockup',
    author='Plone Foundation',
    author_email='plone-developers@lists.sourceforge.net',
    url='https://github.com/collective/mockup-tocify',
    license='BSD',
    packages=find_packages('src'),
    package_dir={'': 'src'},
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
