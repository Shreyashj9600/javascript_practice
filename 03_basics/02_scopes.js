function one () {
    const username = "shreyash";

    function two () {
        const website = "youtube";
        console.log(username)
    }
    // console.log(website);

    two()
}
one()

// ++++++++++++++++++++++++  intersting  ++++++++++++++++++++++++
addone (5)
function addone (num){ 
    return num + 1;            //  <----------in this case we write to up side
}

// console.log(addone(5));


// addTwo(5)
const addTwo = function (num) {
   return num + 2;                    // <--------------in this csae we not write to up side 
}

// console.log( addTwo (5));