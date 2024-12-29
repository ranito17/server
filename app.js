const http=require("http");//request the http module
const fs=require("fs");//request the fs module




const file2send=fs.readFileSync(`${__dirname}/page.html`);//read and save the contents of page.html

const server=http.createServer(function(req,res)//crate a server
{
    

    res.setHeader('content-type','text/html');//set the header

    res.end(file2send);//send the html file and end the response
});

server.listen(3000,()=>{console.log(" the server is runnig on http://localhost:3000");});//the srver runs on port 3000
