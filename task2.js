import csv from 'csvtojson'
import * as fs from 'fs'
import { pipeline } from 'stream'

const csvFilePath = './csv/test.csv'

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream('./output.txt');
const csvToJsonStream = csv({
    delimiter: ';',
    colParser:{
        "Amount":"number",
        "Price":(item) => parseFloat(item.replace(',', '.')),
    },
    checkType:true
})

pipeline(
    readStream,
    csvToJsonStream,
    writeStream,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);
