import { Mongo } from 'meteor/mongo';

Posts = new Mongo.Collection("Posts")

Posts.schema = new SimpleSchema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        defaultValue: new Date()
    },
    destination: {
        type: String,
        optional: false
    },
    schedule: {
        type: Date,
        optional: false
    }
})
