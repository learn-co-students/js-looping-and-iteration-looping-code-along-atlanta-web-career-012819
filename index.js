// Code your solutions in this file


function printBadges(badges) {
    for (let index = 0; index < badges.length; index++) {
        const element = badges[index];
        console.log(`Welcome ${element}! You are employee #${index + 1}.`)
    }

    return badges;
}

function tailsNeverFails() {
    let count = 0;
    while (Math.random() >= 0.5) {
        count ++;
    }

    return `You got ${count} tails in a row!`
}
