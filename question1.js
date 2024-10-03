function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const filteredStrings = mixedArray.filter(item => typeof item === 'string');
            const lowerCased = filteredStrings.map(item => item.toLowerCase());
            resolve(lowerCased);
        } catch (error) {
            reject('An error occurred while processing the array.');
        }
    });
}

const mixedArray = ['APPLE', 42, 'banana', null, 'CHERRY', {}, 'kiwi'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));

module.exports = { lowerCaseWords };
