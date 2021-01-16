const INss = db.insertCategory('bottoms');

const sel = await db.insertItem(
    "jumper",
    "cartoon jumper",
    "red",
    "http://hello.com",
    1,
    1
);

const sel1 = await db.insertItem(
    "t-shirt",
    "palace tee",
    "red",
    "http://hello.com",
    1,
    2
);

const sel2 = await db.insertItem(
    "jeans",
    "baggy tings",
    "Blue",
    "http://hello.com",
    2,
    2
);

const sel3 = await db.insertItem(
    "hoodie",
    "Supreme Hoodie",
    "Blue",
    "http://hello.com",
    1,
    2
);

[{
    "type":"Hoodie",
    "name":"Supremeee",
    "colour":"Blue",
    "imageURL" : "hello.com",
    "categoryID" : 1,
    "userID" : 1
},
{
    "type":"Hoodie",
    "name":"Supremey",
    "colour":"red",
    "imageURL" : "hello.com",
    "categoryID" : 1,
    "userID" : 2
}]