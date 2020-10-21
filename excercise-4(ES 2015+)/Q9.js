class movie{
    constructor(name,cast,yearOfRelease,collection){
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.collection = collection;
    }

    addToCast(newCast){
        this.cast.push(newCast);
    }

    addToCollection(newColl){
        this.collection += newColl;
    }
}

let movie1 = new movie("movie 1",["cast 1"],2020,0);

movie1.addToCast("cast2");

movie1.addToCollection(2);

console.log(movie1);