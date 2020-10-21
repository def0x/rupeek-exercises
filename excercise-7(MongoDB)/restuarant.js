//1

db.restaurants.find();

//2

db.restaurants.find({},{
    restaurant_id : 1,
    name : 1,
    borough : 1,
    cuisine : 1
})

//3

db.restaurants.find({},{
    restaurant_id : 1,
    name : 1,
    borough : 1,
    cuisine : 1,
    _id : 0
}) 

//4

db.restaurants.find({},{
    restaurant_id : 1,
    name : 1,
    borough : 1,
    "address.zipcode" : 1,
    _id : 1
})