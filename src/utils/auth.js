


const validateBirthDay = (birthDay) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return pattern.test(birthDay);
};


const validateCodeMeli = (codeMeli) => {
  var xv= codeMeli;
  if (isNaN(xv)) {
    swal({
      title: "کد ملی نادرست است",
      icon: "error",
      buttons: "تلاش مجدد",
    });
  } else if (xv == "") {
    swal({
      title: "کد ملی نادرست است",
      icon: "error",
      buttons: "تلاش مجدد",
    });
  } else if (xv.length < 10) {
    swal({
      title: "کد ملی نادرست است",
      icon: "error",
      buttons: "تلاش مجدد",
    });
  } else {
      var yy = 0;
      var yv = parseInt(yv);
      for (let i = 0; i < xv.length; i++) {
          yv = xv[i] * (xv.length - i);
          yy += yv;
      }
      var x = yy % 11;
      if (x === 0) {
          //alert("your code is valid !");
          return true;
      } else {
        swal({
          title: "کد ملی نادرست است",
          icon: "error",
          buttons: "تلاش مجدد",
        });
          return false;
      }
      yy = 0;
  }

};


export {
   
  validateBirthDay,
  validateCodeMeli
   
};
