const mongoose=require('mongoose')

const FilmSchema= mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter filmname"],
        },
        director:{
            type:String,
            required:true,
        },
        year:{
            type:Number,
            required:true,
        },
        reason:{
            type:String,
            required:false,
        }
    },
    {timestamps:true}
)

const Film=mongoose.model("Film",FilmSchema)

module.exports= Film;