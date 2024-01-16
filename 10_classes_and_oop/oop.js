const user = {
    username:"shreyash",
    logincount:8,
    signedIn:true,  
    getUserDetails:function (){
        console.log('got user detels from database');
    }
}

console.log(user.username)
console.log(user.getUserDetails());