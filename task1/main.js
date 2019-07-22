// Реалізація функції palmTree(n), яка буде приймати ціле число n і повертати рядок, який складається з 'p'.
// Примітка, коли на вході функція получає не число повертає false, а при виклику без аргумента - один символ 'p'.

function palmTree(num=1){

    if(typeof num == 'number' && num > 0){
        num = 'p'.repeat(num);
    }else{
        num = false;
    }
    return num;
}

console.log(palmTree(3));