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


class sequelMovie extends movie{
    constructor(name,cast,yearOfRelease,collection,sequelmovies){
        super(name,cast,yearOfRelease,collection);
        this.sequelmovies = sequelmovies;
    }

    addToSequel(newMovie){
        this.sequelmovies.push(newMovie);
    }

    getLifeTImeEarnings(){
        let res = this.collection;
        for(let i=0;i<this.sequelmovies.length;++i){
            res += this.sequelmovies[i].collection;
        }
        return res;
    }
}

let movie1 = new sequelMovie("m1",["c1"],2020,1,[]);
let movie2 = new sequelMovie("m2",["c2"],2019,2,[movie1]);
movie1.addToSequel(movie2);

console.log(movie1.getLifeTImeEarnings());
