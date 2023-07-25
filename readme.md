# Build a Library JavaScript demo
#### Showcasing Class inheritance and syntax

This builds a library of media objects.  It uses a parent Media class then builds different media classes
for types of media but they all share a few common properties with all media thus inherit
from the parent Media class.

Further things to do with this project:  
* add more properties to each class (moviecast, song titles, etc)
* create a CD class that extends Media
* In .addRating, add a validator that makes sure ratings entered are between 1 and 5
* create a shuffle method for the CD class that returns a randomly sorted array of all the songs in the songs property
* create a Catalog class that holds all the media items

