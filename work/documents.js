const fs = require("fs");

// fs.readFile('./blog.text', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);

// });

fs.writeFile('./blog2.txt','This is the second blog mn', () => {
    console.log('blog created successfully');
})

