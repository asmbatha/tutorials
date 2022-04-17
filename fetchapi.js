import fetch from "node-fetch"
const BASEURL = 'http://192.168.88.164:5000/users'

const response = fetch(BASEURL)

console.log({ response })

response
    .then((result) => {
        const body = result.body
        console.log({ body })
    })