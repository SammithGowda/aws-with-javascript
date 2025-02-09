const aws = require("aws-sdk")
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

const iam = new aws.IAM() //create instance

const params = {
    NewUserName:"RDSTestUser",
    UserName:"RDSTestUserOne",
}

iam.updateUser(params,function (err,res)     {
    if(err){
        console.log(`Error while updating user ${params.UserName} ${err}`)
        return
    }
    console.log(res)  
})

