const aws = require("aws-sdk")

const iam = new aws.IAM() //create instance

const params ={
    Scope:"Local"
}


iam.listPolicies(params,function (err,res)     {
    if(err){
        console.log(`Error while listing policy`,err)
        return
    }
    console.log(res)  
})

