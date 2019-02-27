const name = 'John';
const age = '27';
const job = 'Developer';
const city = 'Miami';
let html; 

// without template strings (es5 way)
/*html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city +'</li></ul>';

document.body.innerHTML = html;

html = '<ul>' + 
            '<li>Name: ' + name + '</li>' + 
            '<li>Age: ' + age + '</li>' +
            '<li>Job: ' + job + '</li>' +                '<li>City: ' + city + '</li>' + 
        '</ul>';
*/

function hello(){
    return 'hello';
}

// with template strings (es6 way)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li> 
        <li>Job: ${job}</li> 
        <li>City: ${city}</li>
        <li>${2 + 2}</li> 
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;


