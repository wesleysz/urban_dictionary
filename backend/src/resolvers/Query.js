const Query = {
    async queryByString( parent, {str}, { db }, info ){
        if(str.length === 0){
            return []
        }

        const res =  await db.PostModel.find( 
            { vocabulary: { $regex: new RegExp(str, "i")}} //test upper lower case
        );
        return res
    },

    async queryByUser( parent, {penName}, { db }, info ){
        const author_id = await db.UserModel.findOne({penName: penName})
        const res =  await db.PostModel.find( 
            { author: author_id} //test upper lower case
        );
        return res
    },

    async queryByVocabulary( parent, {vocabulary}, { db }, info ){
        if(vocabulary.length === 0){
            return []
        }
        const res =  await db.PostModel.find( 
            { vocabulary: {$regex: new RegExp('^' + vocabulary+'$', 'i')} }
            // { vocabulary: new RegExp(vocabulary, "i")} //test upper lower case
        );
        return res
    },

    async randomFivePosts( parent, args, { db }, info ){

        return await db.PostModel.aggregate([{ $sample: { size: 5 } }])
    }
};

export default Query;
