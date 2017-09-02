/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Test",
            last: "User",
            age: 42,
            description: "Testing autoscaling deploy of a react app",
            thumbnail: "https://i.pinimg.com/originals/a3/5e/8e/a35e8e7a3bb143868544c3a348aa94a0.jpg"
        }
    ]
}
