const Post = {
    async author( parent, args, {db}, info){
        const res = await db.UserModel.findById(parent.author)
        return res
    }
}
export default Post;