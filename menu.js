///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
        name: '16 inch Cheese Pizza',
        price: 15,
        category: 'dinner',
        popularity: 1,
        rating: 5, // 5 out of 5
        tags: ['dinner for one', 'Friday special']
    }


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

const {price} = pizza;
console.log(price);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

const {category} = pizza;
console.log(category);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

let foodArr = [        // Sorry that these are boring but I am a picky eater, lol!
    {
        name: 'Chicken and Rice Pilaf',
        price: 8,
        category: 'dinner',
        popularity: 1,
        rating: 5, // 5 out of 5
        tags: ['chicken', 'rice', 'veggies', 'carbs', 'protien'],
    }, 
    {
        name: 'Pasta',
        price: 12,
        category: 'dinner', 
        popularity: 5,
        rating: 1,
        tags: ['chicken', 'pasta', 'veggies', 'Italian', 'carbs', 'protein'],
    },
    {
        name: 'Quesadillas',
        price: 16,
        category: 'dinner',
        popularity: 2,
        rating: 4,
        tags: ['chicken', 'rice', 'queso', 'Mexican', 'carbs', 'protein'],
    },
    {
        name: 'French Toast',
        price: 5,
        category: 'breakfast',
        popularity: 3,
        rating: 3,
        tags: ['toast', 'lunch', 'carbs', 'protein'],
    },
    {
        name: 'Chocolate Chip Muffins',
        price: 4,
        category: 'breakfast',
        popularity: 4,
        rating: 2,
        tags: ['sweets', 'carbs', 'milk'],
    },
];

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(name => name.tags.includes('rice'));
// console.log(filteredFood); //Just here to check

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

const filterByProperty = (property, number, type) => {
    filteredArray = [];

    if (type == 'above'){
        filteredArray.push(foodArr.filter( name => name[property] > number)); // .property didn't seem to work but the brackets did
    } else if (type == 'below'){
        filteredArray.push(foodArr.filter( name => name[property] < number));
    } else {
        console.log("Please enter 'above' or 'below' for the type value.");
    }
    return filteredArray;
    };

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty('price', 10, 'above'));
console.log(filterByProperty('rating', 4, 'below'));
console.log(filterByProperty('popularity', 3, 'above')); // I tried all of the values to make sure that it worked. I kept getting an [Array] for the tag value, not sure why.