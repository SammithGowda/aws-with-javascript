const aws = require("aws-sdk")

const iam = new aws.IAM() //create instance

const params ={
    PolicyArn:"arn:aws:iam::039612867099:policy/my_newsuerfullpolicy",
    UserName:"RDSTestUser"
}


iam.attachUserPolicy(params,function (err,res)     {
    if(err){
        console.log(`Error while listing policy`,err)
        return
    }
    console.log(res)  
})

