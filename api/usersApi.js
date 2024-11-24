export async function getUsers() {
    const response=await fetch(`https://jsonplaceholder.org/users`)
    const data=await response.json()
    return data
}

export async function getUser(id) {
    const response=await fetch(`https://jsonplaceholder.org/users/${id}`)
    const data=await response.json()
    return data
}
