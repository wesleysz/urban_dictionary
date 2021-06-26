const Query = {
    async queryByVocabulary( parent, {vocabulary}, { db }, info ){
        if(vocabulary.length === 0){
            return []
        }

        const res =  await db.PostModel.find( 
            { vocabulary: { $regex: new RegExp(vocabulary, "i")}} //test upper lower case
        );
        return res
        //return Post
    },
    async queryByUser(  parent, {penName}, { db }, info){
        const author_id = await db.UserModel.findOne({penName: penName})
        const res =  await db.PostModel.find( 
            { author: author_id} //test upper lower case
        );
        return res
        //return Post
    }
};

export default Query;
