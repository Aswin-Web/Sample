 const {parse}=require("csv-parse")
 const fs = require("fs" )

 results=[];

 function isHabitual (planet){
  return planet['koi_disposition']=='CONFIRMED'
 }

 fs.createReadStream("kepler_data.csv")
 .pipe(parse({
  comment:'#',
  columns:true

 }))
 .on('data',(data)=>{
  if (isHabitual(data)){

    results.push(data)
  }
 })
 .on('error',(err)=>{
  console.log(err);
 })
 .on('end',()=>{
  console.log(results)
  console.log("Finished");
 })