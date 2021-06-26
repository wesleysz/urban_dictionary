import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    // id: { type: mongoose.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    penName: { type: String }, //required
    posts: [{ type: mongoose.Types.ObjectId, ref:'Post'}]
});

const postSchema = new Schema({
  author: { type: mongoose.Types.ObjectId, ref: 'User' },
  vocabulary: { type: String, required:true },
  explanation: { type: String, required: true },
  example: { type: String, required: true },
  tags: [ {type: String} ],
  if_publish: {type: Boolean, required: true},
  agree_cnt: {type: Number, required: true},
  disagree_cnt: {type: Number, required: true}
//   voice_url: {type:String}
});


const UserModel = mongoose.model('User', userSchema);
const PostModel = mongoose.model('Post', postSchema);

export default { UserModel, PostModel };