const order={
    products:[{}],
    updatedAt:115545574,
    closedAt:84524545,
}
orderSchema = new Schema({
    products:[
        {
            _id:{
                type:Schema.Types.objectId,
                ref:"Product",
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    ]
})