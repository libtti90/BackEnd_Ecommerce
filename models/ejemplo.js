const order={
    products:[{}],
    createdAt:45466165,
    updatedAt:115545574,
    status:"pending",
    closedAt:84524545,

    user:{
        _id:"",
        name:"juan perez"
    }
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