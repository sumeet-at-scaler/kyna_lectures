let lo = 5;
let hi = 15;

for(let num = lo; num <= hi; num++){
    let statusOfNum = IsPrime(num);
    if(statusOfNum == true){
        console.log(num + " is prime");
    } else {
        console.log(`${num} is not prime`);
    }
}


function IsPrime(num){
    for(let div = 2; div <= num / 2; div++){
        if(num % div == 0){
            return false;
        }
    }

    return true;
}