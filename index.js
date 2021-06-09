const getRandomPun = require('./punOfTheDay').getRandomPun

async function handlePostRequest(event) {
    const pun = await getRandomPun()
    return new Response(JSON.stringify({
        "response_type": "in_channel",
        "text": pun,
    }), {
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    })
}

addEventListener('fetch', event => {
    try {
        const request = event.request
        if (request.method.toUpperCase() === "POST") {
            return event.respondWith(handlePostRequest(event))
        }

        return event.respondWith(new Response("Method not available"));
    } catch (e) {
        return event.respondWith(new Response("Error thrown " + e.message))
    }
})
