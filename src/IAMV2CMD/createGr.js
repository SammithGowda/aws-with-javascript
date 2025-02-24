const aws = require("aws-sdk")

const iam = new aws.IAM() //create instance

const params ={
    GroupName:"test_group",
}


iam.deleteLoginProfile(params,function (err,res)     {
    if(err){
        console.log(`Error while listing policy`,err)
        return
    }
    console.log(res)  
})

/*
1--->how to add user to  group 
const params ={
    GroupName:"test_group",
    UserName:"name-of-the-user"// should be exist already 
}
addUserToGroup

2---> how to remove policy from group
const params ={
    GroupName:"test_group",
    PolicyArn:"arn:aws:iam::039612867099:group/test_group"// copy the exact arn of the policy 
}
    detachGroupPolicy

3---> how to create access key
const params ={
    UserName:"name-of-the-user"// should be exist already 
}
    createAccessKey

4---> how to create password access for user
const params ={
    Password:"password",
    PasswordResetRequired:true,
    UserName:"name-of-the-user"// should be exist already 

}
    createLoginProfile

5---> how to create password access for user
const params ={
    UserName:"name-of-the-user"// should be exist already 

}
deleteLoginProfile

6---> how to change password access for user
const params ={
    NewPassword:""
    OldPassword:""

}
ChangePassword

6---> how to Delete user
const params ={ 
    UserName:""

}
    
deleteUser
*/

