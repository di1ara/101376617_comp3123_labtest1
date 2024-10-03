function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved promise after 500ms');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Rejected promise after 500ms');
        }, 500);
    });
}

resolvedPromise()
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    });

rejectedPromise()
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error);
    });

module.exports = { resolvedPromise, rejectedPromise };
