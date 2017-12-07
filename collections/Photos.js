import { Mongo } from 'meteor/mongo';

Photos = new Mongo.Collection("Photos")

Photos.schema = new SimpleSchema({
    name: {
        type: String
    },
    thumbnail: {
        type: String
    },
    url: {
        type: String
    },
    createdAt: {
        type: Date,
        defaultValue: new Date 
    },
    updatedAt: {
        type: Date
    }
})
