const endpoint = 'https://www.reddit.com'

const search = 'https://www.reddit.com/search.json?q='

export const fetchPosts = async(selectedSubreddit) => {
    try{    
        const response = await fetch(`https://www.reddit.com${selectedSubreddit}/.json`)
        console.log(response)
        if(!response.ok){
            throw new Error('Posts response not ok!')
        }
        const data = await response.json()
        return data
    }catch(error){
        console.error('Can not fetch posts', error)
    }
}

export const fetchSearch = async(searchItem) => {
    try{
        const response = await fetch(`${search}${searchItem}.json`)
        if(!response.ok){
            throw new Error('Search response not ok')
        }
        const data = await response.json()
        return data
    } catch(error){
        console.error('Can not fetch search data', error)
    }
}

export const fetchComments = async(selectedComments) => {
    try{
        const response = await fetch(`${endpoint}${selectedComments}.json`)
        if(!response.ok){
            throw new Error('Comments response not ok')
        }
        const data = await response.json()
        return data
    } catch(error){
        console.error('Can not fetch comments', error)
    }
}

export const fetchSubreddits = async() => {
    try{
        const response = await fetch(`${endpoint}/subreddits.json`)
        if(!response.ok) {
            throw new Error('Subreddit response not ok')
        }
        const data = await response.json()
        return data.data.children
    } catch(error){
        console.error('Can not fetch subreddits', error)
    }
}