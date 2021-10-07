import csv from 'csvtojson'
import * as fs from 'fs'

const csvFilePath = './csv/test.csv'

const readStream = fs.createReadStream(csvFilePath);

const writeStream = fs.createWriteStream('./output.txt');

csv().fromStream(readStream).subscribe((json) => {
    return new Promise((resolve) => {
        writeStream.write(JSON.stringify(json) + '\n', (err) => err ? console.log(err) : null, )
        resolve()
    })
}, (err) => console.log(err))
