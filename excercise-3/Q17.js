let exponentFactory = x => {
    if(x === 2) return (x) => Math.pow(x,2);
    if(x === 3) return (x) => Math.pow(x,3);
    return (x) => x;
}

let fn;
fn = exponentFactory( 2 );console.log( fn( 5 ) ); // prints 25;
fn = exponentFactory( 3 );console.log( fn( 5 ) ); // prints 125;
fn = exponentFactory( 4 );console.log( fn( 5 ) ); // prints 5;