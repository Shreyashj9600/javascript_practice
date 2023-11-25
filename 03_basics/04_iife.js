// Immeditely Invokde Function Expression (IIFE)


(function chai () {
    // named IIFE
    console.log(`BD CONNECTED`);
}) ();



((name) => {
    // unnamed IIFE
    console.log(`BD CONNECTED TWO ${name}`);
}) ("shreyash")