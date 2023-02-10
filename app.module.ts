import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://shivkumar:I81Q7TvA9ObKHdC3@cluster0.ub8d9.mongodb.net/anj'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
