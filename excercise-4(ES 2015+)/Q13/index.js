import project from './project.js'
import employee from './employee.js'

const john = new employee( 'John', 32, 'IT' );
const jane = new employee( 'Jane', 23, 'ITI' );

const p1 = new project("p1",1);
const p2 = new project("p2",2);

export{john,jane,p1,p2};