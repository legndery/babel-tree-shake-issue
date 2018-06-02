import ShakeShake from './three';
export default class Two {
    constructor(t){
        this.t = t;
    }
    getT(){
        return "UNIQUE_STRING_THAT_MESSES_UP_PROGRAM"
    }
    getX(){
        new ShakeShake();
    }
}
const hello = ()=>{
    return ()=>{
        console.log('hello');
    }
}
const hello2 = function(){
    console.log('hello');
}
const hello3 = function(){
    console.log('hello');
}
export {
    hello,
    hello2,
    hello3
}
export function yoyoHoneySingh(x){
    return x+1;
}
export function lol(){
    return "ANOTHER_UNIQUE"
}
export function shaky(){
    new ShakeShake('lol')
}