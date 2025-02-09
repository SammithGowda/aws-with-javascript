const aws = require("aws-sdk")

const iam = new aws.IAM() //create instance

//create policy doc

const policy_doc ={
    "Version":"2012-10-17",
    "Statement":[
        {
            "Effect":"Allow",
            "Action":"*",
            "Resource":"*"
        }
    ]
}

const params ={
    PolicyDocument:JSON.stringify(policy_doc),
    PolicyName:"my_newsuerfullpolicy",
    Description:"This is the Policy created with cli aws-with-javascript"
}


iam.createPolicy(params,function (err,res)     {
    if(err){
        console.log(`Error while creating user ${params.UserName} ${err}`)
        return
    }
    console.log(res)  
})

