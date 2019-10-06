import User from './User'
import '../css/index.css'

console.log('Developing with webpack...')

console.warn(User.getNames())

function isJson(text)
{
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}
console.log(isJson('test'));

async function main()
{
    console.info( await User.getComments(1) )
}
main()