import * as mongoose from 'mongoose';
/* const UserSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true
   },
   posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
}

);

const PostSchema = new mongoose.Schema(

   {
       title: String,
       body: String,

       user: {
           type: mongoose.Schema.Types.ObjectId, ref: "User",
           required: true
       }
   }


);

export const Post = mongoose.model("Post", PostSchema);
export const User = mongoose.model("User", UserSchema);

*/

export const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId,required: true, ref: 'Post'}]
}

);

export interface User extends Document {
    //id: string;
    username: string;
    email: string;
    posts: Post[];
};


export const PostSchema = new mongoose.Schema(

    {
        title: String,
        bodyContent: String,
 
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: 'User',
            required: true
        }
    }
 
 
 );

  export interface Post extends Document{
    //id: string;
    title: string;
    bodyContent: string;
    user: User;
}; 




 