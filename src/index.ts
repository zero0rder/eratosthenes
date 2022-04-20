//Given a number n, return all prime numbers <= n
export const sieveOfEratosthenes = (n: number) => {
    let nums: boolean[] = [];
    let start = 2;
    
    for(let q = start; q <= n; q++){
        nums[q] = true;
    }
    
    for(let f = start; f <= n; f++){
        if(nums[f]){
            for(let m = f * f; m <= n; m += f) {
                nums[m] = false;
            }
        }
    }

    let primes: number[] = [];
    for(let p = start; p < nums.length; p++){
        if (nums[p]){
            primes.push(p);
        }
    } 

    return primes;
};