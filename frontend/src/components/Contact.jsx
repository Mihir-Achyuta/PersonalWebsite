import React from "react";

function Contact(){
  return(
    <div>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input>
        <br>
        </br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"></input>
      </form>
    </div>
  );
}

export default Contact;
