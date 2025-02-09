const aws = require("aws-sdk")

const iam = new aws.IAM() //create instance

const params = {
    UserName:"RDSTestUser",
}

iam.createUser(params,function (err,res)     {
    if(err){
        console.log(`Error while creating user ${params.UserName} ${err}`)
        return
    }
    console.log(res)  
})

