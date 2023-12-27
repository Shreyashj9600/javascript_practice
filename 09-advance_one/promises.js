const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is compelete");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "shreyash", email: "shreyash@example" });
    }, 1000);
});

PromiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "shreyash", password: "1234" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The Promise is either resolved or reject"));

const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Javascript", password: "1234" });
        } else {
            reject("ERROR: JS went wrong ");
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()