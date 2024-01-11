function send(f) {
  var name = f.name.value;
  var birth = f.birth.value;
  var id = f.id.value;
  var pw = f.pw.value;
  var phone = f.phone.value;
  var verification_code = f.verification_code.value;
  var gender;
  const genderlist = document.getElementsByName("gender");

  genderlist.forEach((element) => {
    if (element.checked) {
      gender = element.value;
    }
  });

  console.log(name);
  console.log(birth);
  console.log(id);
  console.log(pw);
  console.log(phone);
  console.log(verification_code);
  console.log(gender);
}
