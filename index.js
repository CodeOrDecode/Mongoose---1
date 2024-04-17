const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    author: { type: String, require: true },
    title: String,
    createdat: Date,
    content: String,
    tags: [String]
})

const Blogmodel = mongoose.model("blog", BlogSchema);

async function main() {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/website');
    console.log("connected");
    // const datablog = new Blogmodel({
    //     author: "UUUUU",
    //     title: "jjjjj",
    //     createdat: new Date(),
    //     content: "lets see",
    //     tags: ["check", "connect"]
    // })
    // await datablog.save();

    const getdata =await Blogmodel.find({author:"UUUUU2"});
    console.log(getdata);
    connection.disconnect();
}


main()