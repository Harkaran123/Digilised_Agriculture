
  
 

  const auth = firebase.auth();
  const database = firebase.database();

  function reg(){
      email = document.getElementById('email').value;
      password = document.getElementById('password').value;

        auth.createUserWithEmailAndPassword(email, password)
     .then(function(){
         var user = auth.currentUser;

         var database_ref = database.ref();

         var user_data = {
           email : email,
           last_login : Date.now()
         }
     
         database_ref.child('users/' + user.uid).set(user_data)

         alert('User Logged In!!')
     }) 
     .catch(function(error){
         var error_code = error.code;
         var error_message = error.message;

         alert(error_message);

     })
   }

   function validateEmail(email){
     exp = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

     if (exp.test(email) == true){
         alert("Valid Address");
         return true;
     } 
     else{
         alert("InValid Address");
         return false;
     }
   }

   function validatepwd(password){

     if (password < 6){
       alert("Too small, Password should be grater than 6 character");
        return false;
  }
  else{
      return true;
    |}
}