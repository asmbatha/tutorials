console.log('start')
function fetch(url) {
    console.log('running fetch')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolving promise', url)
            resolve(url)
        }, 5000)
    })
}

function promiseHandler(result) {
    console.log('running promiseHandler')
    console.log({ result })
}

console.log('calling fetch')
const facebookPromise = fetch("facebook.com")


facebookPromise
    .then(promiseHandler)
    .catch(error => {
        console.log({ error })
    })

console.log('end')