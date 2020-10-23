//1

db.getCollection('restaurant').find()

//2

db.getCollection('restaurent').find({
    restaurant_id : 1,
    name : 1,
    borough : 1,
    cuisine : 1
})

//3

db.getCollection('restaurent').find({
    restaurant_id : 1,
    name : 1,
    borough : 1,
    cuisine : 1,
    _id : 0
})

//4

db.getCollection('restaurent').find({
    restaurant_id : 1,
    name : 1,
    borough : 1,
    "address.zipcode" : 0,
    _id : 0
})

//5

db.getCollection('restaurant').find({
    borough : 'Bronx'
})

//6

db.getCollection('restaurant').find({
    borough : 'Bronx'
}).limit(5)

//7

db.getCollection('restaurant').find({
    borough : 'Bronx'
}).skip(5).limit(5)

//8

db.restaurant.find({
    "grades.score" : { $gt : 90}
})

//9

db.restaurant.find({
    "grades.score" : { $gt : 80 , $lt : 20}
})

//10

db.restaurant.find({
    "address.coord" : {$lt : -95.754168}
})

//11

db.restaurant.find({
    "address.coord" : {$lt : -65.7541688},
    "grades.score" : { $gt : 70},
    cuisine : { $not : { $eq : 'American'}}
})

//12

db.restaurant.find({
    "address.coord" : {$lt : -65.7541688},
    "grades.score" : { $gt : 70},
    cuisine : { $not : { $eq : 'American'}}
})

//13

db.restaurant.find({
    borough : { $ne : 'Brookyln'},
    "grades.grade" : 'A',
    cuisine : { $not : { $eq : 'American'}}
}).sort({cuisine : -1});

//14

db.restaurant.find({
    name : { $regex : /^Wil/ , $options : 'i'}},
    {
        restaurant_id : 1,
        name : 1,
        borough : 1,
        cuisine : 1
    }
)

//15

db.restaurant.find({
    name : { $regex : /ces$/ , $options : 'i'}},
    {
        restaurant_id : 1,
        name : 1,
        borough : 1,
        cuisine : 1
    }
)

//16

db.restaurant.find({
    name : { $regex : /Reg/ , $options : 'i'}},
    {
        restaurant_id : 1,
        name : 1,
        borough : 1,
        cuisine : 1
    }
)

//17

db.restaurant.find({
    borough : 'Bronx',
    cuisine : {$in : ["American","Chinese"]}
})

//18

db.restaurant.find({
    borough : {$in : ["Staten Island","Queens","Bronx","Brooklyn"]}},
    {
        restaurant_id : 1,
        name : 1,
        borough : 1,
        cuisine : 1
    }
)

//19

db.restaurant.find({
    borough : {$nin : ["Staten Island","Queens","Bronx","Brooklyn"]}},
    {
        restaurant_id : 1,
        name : 1,
        borough : 1,
        cuisine : 1
    }
)

//20

db.restaurant.find(
    {"grades.score" : {$lte : 10}},
    {
        restaurant_id : 1,
        name : 1,
        borough : 1,
        cuisine : 1
    }
)

//21

db.restaurant.find({
    $or : [
        {cuisine : {$in : [ "American" , "Chinese" ]}},
        {name : {$regex : /^Wil/, $options : 'i'}}
    ]
},
    {
        restaurant_id : 1,
        name : 1,
        borough : 1,
        cuisine : 1
    }
)

//22

