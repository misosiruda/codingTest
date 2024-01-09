//https://school.programmers.co.kr/learn/courses/30/lessons/160585

let baseNode = [[0, 0], [0, 1], [0, 2], [1, 0], [2, 0]];

/**
 * 입력 받은 노드 위치 가 board 안에 있는지 확인 하는 함수
 * @param {Array} node 입력받은 노드 위치 배열
 * @returns board 안에 위치하면 true 범위 밖이면 false
 */
function isOutofRange(node)
{
    if(node[0] < 0 || node[1] < 0 || 2 < node[0] || 2 < node[1]) return false;
    else return true;
}

/**
 * 노드 배열에 해당 노드가 어어있는지 확인 하는 함수
 * @param {Array[]} nodeArr 노드 배열
 * @param {Array} node 확인 하고픈 노드
 * @returns 있으면 true 없으면 false
 */
function CheckNodeInArr(nodeArr, node)
{
    for(let e of nodeArr)
    {
        if(node[0] == e[0] && node[1] == e[1])
        {
            return true;
        }
    }
    return false;
}

/**
 * 노드 배열을 받아와 3개가 나란히 있는지 확인 하는 함수
 * @param {Array[]} nodeArr 확인할 노드 배열
 * @returns 3개가 나란히 있는 노드 줄의 갯 수
 */
function CheckCross(nodeArr)
{
    let nextNode = [];
    let count = 0;
    for(let e of nodeArr)
    {
        if(CheckNodeInArr(baseNode, e))
        {
            nextNode = [(e[0] + 1), e[1]];
            if(isOutofRange(nextNode) && CheckNodeInArr(nodeArr, nextNode))
            {
                nextNode[0] += 1;
                if(isOutofRange(nextNode) && CheckNodeInArr(nodeArr, nextNode))
                {
                    count++;
                }
            }
            nextNode = [e[0], (e[1] + 1)];
            if(isOutofRange(nextNode) && CheckNodeInArr(nodeArr, nextNode))
            {
                nextNode[1] += 1;
                if(isOutofRange(nextNode) && CheckNodeInArr(nodeArr, nextNode))
                {
                    count++;
                }
            }
            nextNode = [(e[0] + 1), (e[1] + 1)];
            if(isOutofRange(nextNode) && CheckNodeInArr(nodeArr, nextNode))
            {
                nextNode[0] += 1;
                nextNode[1] += 1;
                if(isOutofRange(nextNode) && CheckNodeInArr(nodeArr, nextNode))
                {
                    count++;
                }
            }
        }
    }
    return count;
}

function solution(board) 
{
    var answer = 1;
    let OnodeArr = [];
    let XnodeArr = [];
    let oN = 0, xN = 0;
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(board[i][j] == '.') continue;
            if(board[i][j] == 'O')
            {
                oN++;
                OnodeArr.push([i, j]);
                continue;
            }
            if(board[i][j] == 'X')
            {
                xN++;
                XnodeArr.push([i, j]);
                continue;
            }
        }
    }
    if(oN < xN) return 0;
    if(oN > xN + 1) return 0;
    let OCC = CheckCross(OnodeArr);
    let XCC = CheckCross(XnodeArr);
    if(OCC >= 1 && XCC >= 1) return 0;
    if(OCC >=)

    return answer;
}

console.log(solution(["O.X", ".O.", "..X"])); // 1
console.log(solution(["OOO", "...", "XXX"])); // 0
console.log(solution(["...", ".X.", "..."])); // 0-
console.log(solution(["...", "...", "..."])); // 1
console.log(solution(["OOO", "...", "..."])); // 0
console.log(solution(["XXX", "OO.", "O.."])); // 1
console.log(solution(["XXX", "OOX", "O.."])); // 0