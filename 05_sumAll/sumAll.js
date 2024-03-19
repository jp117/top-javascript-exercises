const sumAll = function(first, second) {
    let answer = 0;
    let smaller;
    let larger;
    if (first < second) {
        smaller = first;
        larger = second;
    } else {
        smaller = second;
        larger = first;
    }
    if (
        first >= 0 &&
        second >= 0 &&
        Number.isInteger(first) &&
        Number.isInteger(second)
    ) {
        for (let i = smaller; i <= larger; i++){
            answer += i;
        }
        return answer;
    } else {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = sumAll;
