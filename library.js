// Creating a library storage system to demonstrate classes and inheritance
// class Media is the parent class containing properties common to all media
// types like Books, CDs, Movies
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // the _ in front of the property makes it private
    // We use the getters to access the private properties
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckoutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum,rating) => currentSum + rating);
        return ratingsSum / this.ratings.length;
    }

    addRating(rating) {
        this.ratings.push(rating);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        // must call super first to reference to the parent class properties pulled in
        super(title);
        this._author = author;
        this._pages = pages;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // Since Book inherits title, isCheckedOut, and ratings from Media, we 
    // only need getters for unique properties author and pages
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

    // methods below for interacting with the Book object
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum,rating) => currentSum + rating);
        return ratingsSum / this.ratings.length;
    }
    toggleCheckoutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    addRating(rating) {
        this.ratings.push(rating);
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._isCheckedOut = false;
    this._ratings = [];
    }

    // getters for unique to Movie properties that aren't inherited.
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum,rating) => currentSum + rating);
        return ratingsSum / this.ratings.length;
    }
    toggleCheckoutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    addRating(rating) {
        this.ratings.push(rating);
    }
}

class CD extends Media {
    constructor(title, numOfTracks, tracks, year, genre) {
        super(title);
        this._numOfTracks = numOfTracks;
        this._tracks = tracks;
        this._year = year;
        this._genre = genre;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // getters
    get numOfTracks() {
        return this._numOfTracks;
    }
    get tracks() {
        return this._tracks;
    }
    get year() {
        return this._year;
    }
    get genre() {
        return this._genre;
    }

    // setters
    set tracks([]) {
        this._tracks = Array.push;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum,rating) => currentSum + rating);
        return ratingsSum / this.ratings.length;
    }
    toggleCheckoutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    addRating(rating) {
        this.ratings.push(rating);
    }
    addTrack(track) {
        this.tracks.push(track);
    }
}

// instantiate an instance of a Book object
const historyOfEverything = new Book("A Short History of Nearly Everything",
    "Bill Bryson",
    544);

// calling and interacting with the Book
historyOfEverything.toggleCheckoutStatus();
console.log(historyOfEverything.isCheckedOut);

// add ratings to the book ratings array
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// create instance of a movie
const speed = new Movie("Speed",
    "Jan de Bont",
    116
    );

console.log(speed.isCheckedOut); // shows checked out status before toggling
speed.toggleCheckoutStatus();
console.log(speed.isCheckedOut); // shows checked out status after toggling

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.ratings); // logs out array of just added ratings
console.log(speed.getAverageRating()); // logs out average of ratings

// create instance of a CD
const garth = new CD("Garth Brooks",
    3,
    ["The Dance","Standing Outside The Fire","The Thunder Rolls"],
    1993,
    "Country"
);

// interact with the garth CD tracks
console.log(`Tracks of CD: ${garth.tracks}`);
garth.addTrack("This Damn Old");
console.log(`Tracks of CD: ${garth.tracks}`);
garth.tracks.pop();


garth.addRating(2);
garth.addRating(1);
garth.addRating(5);
console.log(`Average Rating of CD: ${garth.getAverageRating()}`);
