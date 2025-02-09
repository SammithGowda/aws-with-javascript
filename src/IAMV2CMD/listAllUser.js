const aws = require("aws-sdk")
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const iam = new aws.IAM() //create instance



iam.listUsers(function (err,res)     {
    if(err){
        console.log(`Error while creating listing user  ${err}`)
        return
    }
    console.log(res)  
})

