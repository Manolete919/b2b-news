import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema,PostSchema } from './schema.model';

@Module({
  // it allows me to inject it in another files..
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema},{name: 'Post', schema: PostSchema}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
