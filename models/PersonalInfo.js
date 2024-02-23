import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    collection: "PersonalInfo"
})

export default mongoose.model("PersonalInfo", schema);