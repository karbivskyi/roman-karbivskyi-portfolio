import React from 'react';
import $ from 'jquery';


const Sender = () => {
    //bot token
  var telegram_bot_id = "5812163033:AAHDc9fE_j_UuDAgvay5q3xzFpIogbT-Yws";
  //chat id
  var chat_id = 699577637;
  var u_name, email, message, subject, sending;
  var ready = function () {
    document.addEventListener("DOMContentLoaded", function () {
      u_name = document.getElementById("name").value;
      email = document.getElementById("email").value;
      message = document.getElementById("message").value;
      subject = document.getElementById("subject").value;
    });
    sending =
      "Name: " +
      u_name +
      "\nEmail: " +
      email +
      "\nSubject: " +
      subject +
      "\nMessage: " +
      message;
  };
  var sender;
  sender = function () {
    ready();
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({
        chat_id: chat_id,
        text: sending,
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("subject").value = "";
  });
    return false;
  };
  return (
    <div>
      
    </div>
  )
}

export default Sender
