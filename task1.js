const reverseString = (str) => str.split("").reverse().join("")


process.stdin.on('data', (data) => {
    process.stdout.write('\n' + reverseString(data.toString()) + '\n')
})
