"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import swal from "sweetalert";
import styles from "./dashboard.module.css"

import { validateBirthDay,validateCodeMeli } from "@/utils/auth";

function Dashboard(){
  const router = useRouter();
  const [birthDay, setBirthDay] = useState("");
  const [codeMeli, setCodeMeli] = useState("");
  const [resItem, setResItem] = useState("");

  //ResultFunction
  const resultShow = async (event) => {
    event.preventDefault();
   // const isValidPhoneBirthDay = validateBirthDay(birthDay);
    const isValidCodeMeli = validateCodeMeli(codeMeli);
   

      if ((!codeMeli.trim() )){
        
        swal({
          title: "کد ملی را وارد نمایید",
          icon: "error",
          buttons: "تلاش مجدد",
        });
        return false;

      }else if (!birthDay.trim()){
        swal({
          title: " رمز عبور را وارد نمایید",
          icon: "error",
          buttons: "تلاش مجدد",
        });
        return false;
      }
      if((!isValidCodeMeli) ){
        console.log("isValidCodeMeli==>",isValidCodeMeli)
       // console.log("isValidPhoneBirthDay==>",isValidPhoneBirthDay)
      swal({
        title: "کد ملی یا رمز عبور نادرست است",
        icon: "error",
        buttons: "تلاش مجدد",
      });
      return Response.json(
        { message: "Data is not valid!!" },
        { status: 422 });
     
            } else {

    const res = await fetch(`/api/getResult/${codeMeli}/${birthDay}`);

      if (res.status==200){
        const data = await res.json();
       if (data){
         setResItem(data)
         swal({
          title: "داوطلب محترم با کد'",
          icon: "error",
          buttons: "تایید ",
        })
       }
        else{
          swal({
            title: "نتیجه ای برای این کد ملی  ثبت نشده است",
            icon: "error",
            buttons: "تلاش مجدد",
          }).then(() => {
            router.replace("/");
          });
        }
      
      }
    

   }
  };

  return (
    <>
   
     <div className="box">
      <h1 align="center" >آموزش و پرورش خراسان رضوی</h1>
      <form role="form" method="post" >
        
          <>
            <div  className="inputBox">
              <input
                type="text"
                autoComplete="off"
                required
                value={codeMeli}
                onChange={(event) => setCodeMeli(event.target.value)}
                
              />
              <label >کد ملی</label>
            </div>
            <div className="inputBox">
              <input
              id="CM"
                type="text"
                autoComplete="off"
                required
                value={birthDay}
                onChange={(event) => setBirthDay(event.target.value)}
                
              />
              <label > رمز عبور</label>
            </div>
            <div align="center">
               <input 
              type="submit"
              className="register-btn"
              value="  مشاهده نتیجه"
             onClick={resultShow}
            />
            </div>
           
            
          </>
        
      </form>
    </div>
    </>
   
     
  );
}

export default Dashboard;