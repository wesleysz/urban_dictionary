const User = {
    async posts(parent, args, {db}, info) {
        const res = []
        for(let i = 0; i < parent.posts.length; i++ ){
            const tmp = await db.PostModel.findById(parent.posts[i])
            res.push(tmp)
        }
        return res
    }
}

export default User;