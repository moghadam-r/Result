import connectToDB from "@/configs/db";

import DbNatayejtModel from "@/models/dbNatayej";

export async function GET(req,{params}) {
 try{
  connectToDB();
  
  const codeMeli=params.id[0];
  const brithDay=params.id[1];
  if ((!codeMeli.trim() )|| (!brithDay.trim())){//||
      //(isNaN(phone))||(birthDay.length !=8 )||
     // (isNaN(meliCode))||(phone.meliCode !==10 )){
      return Response.json(
          { message: "Data is not valid!!" },
          { status: 422 });

  }else{
    console.log("codeMeli==>",codeMeli)
    console.log("birthDay==>",brithDay)
     let responseItem = null;
     responseItem = await DbNatayejtModel.findOne({codeMeli})
      console.log("responseItem ====>",responseItem)
      return Response.json(
       { data: responseItem ,message: "Result Recoverd successfully :))" },
       { status: 200 })
 }
 }catch(err){
    
   return Response.json(

        { message: err },
        {
          status: 500,
       }
      );
}
   
}