//https://school.programmers.co.kr/learn/courses/30/lessons/150369



function solution(cap, n, deliveries, pickups) 
{
    let answer = 0;
    let d = 0;
    let p = 0;
    
    for(let i=n-1;i>-1;i--)
    {
        let cnt = 0;

        d -= deliveries[i];
        p -= pickups[i];

        while(d < 0 || p < 0)
        {
            d += cap;
            p += cap;
            cnt++;
        }
        answer += (i + 1) * 2 * cnt;
    }

    return answer;
}

// let cap = 4, n = 5, deliveries = [1, 0, 3, 1, 2], pickups = [0, 3, 0, 4, 0];
//result = 16

let cap = 2, n = 7, deliveries = [1, 0, 2, 0, 1, 0, 2], pickups = [0, 2, 0, 1, 0, 2, 0];
//result = 30

// let cap = 4, n = 4, deliveries = [25, 24, 51, 0], pickups = [51, 0, 0, 49];
//result = 140

// let cap = 1, n = 2, deliveries = [0, 5], pickups = [5, 0];
//result = 20

// let cap = 4, n = 5, deliveries = [1, 1, 1, 1, 1], pickups = [1, 1, 1, 1, 1];
//result = 12

// let cap = 1, n = 2, deliveries = [0, 0], pickups = [0, 0];
//result = 0

// let cap = 2, n = 4, deliveries = [0, 0, 0, 4], pickups = [6, 0, 0, 0];
//result = 18

console.log(solution(cap, n, deliveries, pickups));