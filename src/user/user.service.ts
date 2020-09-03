import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, Post} from './schema.model';
import * as mongoose from 'mongoose';



@Injectable()
export class UserService {

    // we need to inject the mongoosemodul
    constructor(@InjectModel('User') private readonly userModule: Model<User>,
    @InjectModel('Post') private readonly postModule: Model<Post>){

    }

    async createUser(): Promise<User>{
        const newUser = new this.userModule(
            {username:"Alex", email: "alex@gmail.com"}
        );

       const result = await newUser.save();
       return result;
   
    }

    async createPost(): Promise<Post>{



        const newUser = new this.userModule(
            {username:"Alex", email: "alex@gmail.com"}
        );
        const result0 = await newUser.save();
        const newPost = new this.postModule( {
            title: "Quarintine",
            bodyContent: "Stay home",
            user: result0._id // Assign the user id created
        });

        const result = await newPost.save();

        const result3 = await this.userModule.findByIdAndUpdate(newUser._id,
            { '$push': { 'posts': newPost._id } },
            { 'new': true }
        )
        .populate('posts')
        .exec();
      
       
       return result;
   
    }

    async findOne(): Promise<User>{
        mongoose.set('debug', true);
       //var user: User = await this.userModule.findById('5f502d6460b1dc2238d49a92').populate( 'posts' ).exec();
       //const posts: Post[] = await this.postModule.find().populate( 'user' ).exec();
       var user: User = await this.userModule.findById('5f504a839e4bca03ac4644ae').populate({path: 'posts', model: 'Post'});
 
       /*var user: User = await this.userModule.findById('5f502f6890aed12834253aca').populate({path: 'posts', model: 'Post'}).exec(function (err, user) {
        if (err){
          console.log(err);
        } else {
          console.log(user);
          console.log("success");
        }
      });*/
       
       

      //user.posts = posts;

       
       
       
       return user;
    }
 

    
    async findAll(): Promise<Post[]> {
        mongoose.set('debug', true);
        const posts: Post[] = await this.postModule.find().populate( 'user' ).exec();

        // console.log('posts: '+posts.length());
        return posts;

    }
  
}
