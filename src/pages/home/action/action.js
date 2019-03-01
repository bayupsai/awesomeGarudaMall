const api = 'https://jsonplaceholder.typicode.com/users'

export function GET_NEWS() {
    return (dispatch)=> {
        dispatch(getNewsPending())
        return (fetch(api))
            .then(res=> res.json())
            .then(json=> {
                return (dispatch(getNewsFulfilled(json)))
            })
            .catch(err=> dispatch(getNewsRejected(err)))
    }
}

function getNewsPending() {
    return { type: 'GET_NEWS_PENDING' }
}

function getNewsFulfilled(data) {
    return { type: 'GET_NEWS_FULFILLED', data }
}

function getNewsRejected() {
    return { type: 'GET_NEWS_REJECTED' }
}