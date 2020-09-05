const mysql=require("mysql");
const Promise=require("bluebird");

const ref=require("./ref");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


let addelement=async(input)=>{

         const connection=mysql.createConnection(ref.DBconfig);
          await connection.connectAsync();
          let query1="INSERT INTO USER (FNAME,LNAME,EMAIL,PASSWORD) VALUES (?,?,?,?)"
           await  connection.queryAsync(query1,[input.fname,input.lname,input.email,input.password]) ; 
          await connection.endAsync();

};
let forget=async(input)=>{

   const connection=mysql.createConnection(ref.DBconfig);
    await connection.connectAsync();
    let query2="UPDATE LOGIN SET PASSWORD=? WHERE USERNAME=?"
      await connection.queryAsync(query2,[input.password,input.username]) ; 
    await connection.endAsync();
}
let validate=async(input)=>{

  const connection=mysql.createConnection(ref.DBconfig);
   await connection.connectAsync();
   let query1="SELECT EMAIL,PASSWORD FROM USER WHERE EMAIL=? AND PASSWORD=?"
     const output= await connection.queryAsync(query1,[input.email,input.password]) ; 
   await connection.endAsync();
   if(output.length===0){
            throw new Error("invalid credentials")

   }
}
let addbook=async(input)=>{

  const connection=mysql.createConnection(ref.DBconfig);
   await connection.connectAsync();
   let query1="INSERT INTO BOOKNOW (PICKUP,DROPLOC,EMAIL) VALUES (?,?,?)"
   await  connection.queryAsync(query1,[input.pickup,input.droploc,input.email]) ; 
   await connection.endAsync();

};

module.exports={addelement,validate,forget,addbook};