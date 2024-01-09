//https://school.programmers.co.kr/learn/courses/30/lessons/159993
//BFS 문제


//Queue[현재 위치, 현재이동 횟수]]
var queue = [];
var lever = false;
let visited = [];
const visOri = [];


/**
 * 시작 위치를 찾는 함수
 * +O(n)
 * @param {Array} maps 맵 배열
 * @returns 시작 위치가 담긴 배열[n,n]
 */
function WhereStart(maps)
{
    let result = [];
    for(let i=0;i<maps.length;i++)
    {
        visited.push([]);
        visOri.push([]);
        for(let j=0;j<maps[0].length;j++)
        {
            if(maps[i][j] == 'S')
            {
                result = [i,j];
            }
            if(maps[i][j] == 'X')
            {
                visited[i].push(true);
                visOri[i].push(true);
            }
            else
            {
                visited[i].push(false);
                visOri[i].push(false);
            }
        }
    }
    return result;
}

/**
 * 현재 위치에 다음 방향을 더해서 반환 하는 함수
 * @param {Array} pos 현재 위치 배열
 * @param {Number} d 다음 이동할 방향 0~3
 * @returns 다음 위치 배열
 */
function NextPos(pos, d)
{
    let posN = [];
    posN[0] = pos[0];
    posN[1] = pos[1];
    if(d == 0)      // + [1,0]
    {
        posN[0] += 1;
    }
    else if(d == 1) // + [0, 1]
    {
        posN[1] += 1;
    }
    else if(d == 2) // + [-1, 0]
    {
        posN[0] += -1;
    }
    else            // + [0, -1]
    {
        posN[1] += -1;
    }
    return posN;
}

function BFS(map, pos)
{
    queue.push([pos, 0]);
    let queueNow = [];
    let valueNowInMap = '';
    let posN = [];
    let cnt = 0;
    while(0 < queue.length)
    {
        queueNow = queue.shift();
        posN = queueNow[0]
        cnt = queueNow[1];
        
        if(visited[posN[0]][posN[1]]) 
        {
            continue;
        }

        valueNowInMap = map[posN[0]][posN[1]];
        if(lever && valueNowInMap == 'E')
        {
            queue = [];
            return cnt;
        }
        else if(valueNowInMap == 'L' && !lever)
        {
            lever = true;
            visited = visOri;
            queue = [[posN, cnt]];
            continue;
        }
        else
        {
            visited[posN[0]][posN[1]] = true;
        }

        let p = [];//큐에 넣을 다음 포스를 저장할 변수
        for(let i=0;i<4;i++)
        {
            p = NextPos(posN, i);
            if(p[0] < 0 || map.length <= p[0])
            {
                continue;
            }
            if(p[1] < 0 || map[0].length <= p[1])
            {
                continue;
            }
            queue.push([p, cnt + 1]);
        }
    }
    return -1;
}

function solution(maps) 
{
    var start = [];
    start = WhereStart(maps);
    return BFS(maps, start);
}

inputMaps = ["SELXX", 
             "XXXXX", 
             "XXXXX", 
             "XXXXX", 
             "XXXXX"];
console.log(solution(inputMaps));