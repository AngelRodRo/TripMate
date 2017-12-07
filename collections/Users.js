import { Mongo } from 'meteor/mongo';

Users = new Mongo.Collection("Users")

Users.schema = new SimpleSchema({
    fistName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    nationality: {
        type: String
    },
    birthday: {
        type: Date,
        optional: false
    },
    description: {
        type: String
    }
})

