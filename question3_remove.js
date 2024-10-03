const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach((file) => {
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });

        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

removeLogFiles();
