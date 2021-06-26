const Mutation = {

    // 若初次登入(資料庫沒有這個email)則存資訊到DB，回傳使用者資訊。
    async userLogin(parent, {name, email}, { db }, info) {
        const user = await db.UserModel.findOne({email:email})
        if(!user){
            const tmp = new db.UserModel({name:name, email:email})
            return await tmp.save();
        }
        return user;
    },

    // 拿到 email，檢查筆名沒重複，改筆名，成功回傳 true，否則 false。
    async modifyPenName(parent, {email, penName}, { db }, info) {
        const duplicate = await db.UserModel.findOne({penName:penName})
        if(!duplicate){
            try {
                const res = await db.UserModel.updateOne(
                   { email : email },
                   { $set: { penName : penName } }
                );
                console.log("res:", res)
                if(res["nModified"] === 1){
                    return {success:true, message:'Successfully modified.'}
                }
                else{
                    return {success:false, message:'Email account does not exist.'}
                }
            } catch (e) {
                return {success:false, message:'DB error.'}
            }
        }
        else{
            return {success:false, message:'Duplicate pen name.'}
        }
    },

    // 檢查某些欄位非空，存入DB
    async createPost(parent, {email, vocabulary, explanation, example, tags}, { db }, info){
        const user_id = await db.UserModel.findOne({email})

        if(tags){
            const tmp = new db.PostModel({
                author: user_id,
                vocabulary, explanation, example, tags, 
                if_publish: true, 
                agree_cnt: 0, 
                disagree_cnt: 0
            })
            return await tmp.save();
        }
        else {
            const tmp = new db.PostModel({
                author: user_id,
                vocabulary, explanation, example,
                if_publish: true, 
                agree_cnt: 0, 
                disagree_cnt: 0
            })
            return await tmp.save();
        }
    },

    // 拿到ID及修改內容，存入DB。
    async modifyPost( parent, {post_id, vocabulary, explanation, example, tags}, { db }, info ){
        const mutate = {};
        if (vocabulary){ mutate['vocabulary'] = vocabulary}///////////
        if (explanation){ mutate['explanation'] = explanation}
        if (example){ mutate['example'] = example}
        if (tags) { mutate['tags'] = tags}
        console.log("[Mutation] modifyPost mutate dict:", mutate)

        if(Object.keys(mutate).length){
            try {
                const res = await db.PostModel.updateOne(
                    { _id : post_id },
                    { $set: mutate }
                );
                if(res["nModified"] === 1){
                    return {success:true, message:'Successfully modified.'}
                }
                else{
                    return {success:false, message:'Post id does not exist.'}
                }
            } catch (e) {
                return {success:false, message:'Post id does not exist.'}
            }
        }
        else{
            return {success:false, message:'No mutation data.'}
        }
    },
    
    // 拿到ID，修改 if_publish 屬性。
    async unpublishPost( parent, {post_id}, { db }, info){
        try {
            const res = await db.PostModel.updateOne(
                { _id : post_id },
                { $set: {if_publish: false} }
            );
            if(res["nModified"] === 1){
                return {success:true, message:'Successfully unpublish.'}
            }
            else{
                return {success:false, message:'Post id does not exist.'}
            }
        } catch (e) {
            return {success:false, message:'Post id does not exist.'}
        }
    },

    async publishPost( parent, {post_id}, { db }, info){
        try {
            const res = await db.PostModel.updateOne(
                { _id : post_id },
                { $set: {if_publish: true} }
            );
            if(res["nModified"] === 1){
                return {success:true, message:'Successfully publish.'}
            }
            else{
                return {success:false, message:'Post id does not exist.'}
            }
        } catch (e) {
            return {success:false, message:'Post id does not exist.'}
        }
    }
};

export default Mutation;
