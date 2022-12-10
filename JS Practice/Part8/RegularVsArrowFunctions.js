'use strict';

//var firstName = 'Jayanthvarma';

const jayanth = {
    firstName: 'Jayanthvarma',
    year: 2001,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);

        // const isMillenial = function () {
        //       console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // isMillenial();

        // Solution 1
        // const self = this;
        // const isMillenial = function () {
        //          console.log(self);
        //          console.log(self.year >= 1981 && self.year <= 1996);
        //     };
        // isMillenial();
        
        // solution 2
                const isMillenial = () => {
                 console.log(this);
                 console.log(this.year >= 1981 && this.year <= 1996);
            };
        isMillenial();
    },
    // greet: () => {
    //     console.log(this);
    //     console.log(`Hey ${this.firstName}`)
    // },
    greet: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};

jayanth.greet();
jayanth.calcAge();


// arguments keyword

const decl = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(decl(2, 3));
console.log(decl(2, 3, 4, 5));

const arrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

arrow(3, 5);