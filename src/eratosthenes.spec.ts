import { sieveOfEratosthenes } from '.';

const result20 = [2, 3, 5, 7, 11, 13, 17, 19];
const result50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

test('returns array of prime numbers upto 20', async () => {
    expect(sieveOfEratosthenes(20)).toEqual(result20);
});

test('returns array of prime numbers upto 50', async () => {
    expect(sieveOfEratosthenes(50)).toEqual(result50);
});