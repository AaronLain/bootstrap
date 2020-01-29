const ducks = [
    {
        color: 'red',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNumber: 0,
        name: 'Regina',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/59698a7d29687fd47a2a7c52/1514567805079-AAAXNL481DOHALQSVOMQ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/precious_red.jpg'
    },
    {
        color: 'red',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'shy but inquisitive',
        diet: 'pescatarian',
        age: 30,
        featherNumber: 0,
        name: 'Stephanie',
        imageUrl: 'https://images.blogthings.com/whatcolorrubberduckieareyouquiz/red.jpg'
    },
    {
        color: 'red',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'married af',
        diet: 'vegan',
        age: 423,
        featherNumber: 1,
        name: 'Carlina',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/59698a7d29687fd47a2a7c52/1514567805079-AAAXNL481DOHALQSVOMQ/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/precious_red.jpg'
    },
    {
        color: 'red',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'not a fan of sports',
        diet: 'liquid',
        age: 2,
        featherNumber: 19.23,
        name: 'Doug',
        imageUrl: 'https://images.blogthings.com/whatcolorrubberduckieareyouquiz/red.jpg'
    },
    {
        color: 'green',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'almost ready to mingle',
        diet: 'vegan',
        age: 3,
        featherNumber: 3,
        name: 'Buzz',
        imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/products/503/images/10447/Green-Rubber-Duck-Ad-Line-3__60140.1569352483.560.850.jpg?c=2'
    },
    {
        color: 'brown',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'a little over-eager',
        diet: 'vegan',
        age: 2.1,
        featherNumber: 145382,
        name: 'Carl',
        imageUrl: 'https://www.publicdomainpictures.net/pictures/310000/nahled/cute-brown-duck-1569411282rD6.jpg'
    },
    {
        color: 'green',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'touched by an angel',
        diet: 'pescapescatarian',
        age: 4.78,
        featherNumber: 250_000,
        name: 'Doug Jr.',
        imageUrl: 'https://farm6.staticflickr.com/5265/5552651194_20d1dd65cd_z.jpg'
    },
    {
        color: 'brown',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'down to hang as long as you have bread',
        diet: 'vegetarian',
        age: 4,
        featherNumber: 158_000,
        name: 'Donky Kong',
        imageUrl: 'https://i.pinimg.com/originals/97/e4/58/97e4585d774f91828b69855d4533408f.jpg'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const duckPrinter = (inputArray) => {
    domString = '';
    for (i = 0; i < inputArray.length; i++) {
        domString += `<div class="col-md-6 col-lg-4">`
        domString +=    '<div class="card">'
        domString +=        `<img src=${inputArray[i].imageUrl} class="card-img-top" alt="...">`
        domString +=        '<div class="card-body">'
        domString +=            `<h5 class="card-title">${inputArray[i].name}</h5>`
        domString +=            `<p class="card-text">${inputArray[i].socialStatus}</p>`
        domString +=            `<p class="card-text">${inputArray[i].diet}</p>`
        domString +=        '</div>'
        domString +=    '</div>'
        domString += `</div>`
    }
    printToDom('duck-card', domString);
};


duckPrinter(ducks);
console.log(ducks);