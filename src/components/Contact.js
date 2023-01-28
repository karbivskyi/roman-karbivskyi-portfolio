import React, { useState } from "react";
import { contact } from "../data";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  //Sending message to telegram
  let tg = {
    token: "5812163033:AAHDc9fE_j_UuDAgvay5q3xzFpIogbT-Yws", // Your bot's token that got from @BotFather
    chat_id: "699577637", // The user's(that you want to send a message) telegram chat id
  };

  /**
   * By calling this function you can send message to a specific user()
   * @param {String} the text to send
   *
   */
  function sendMessage(text) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; // The url to request

    const obj = {
      chat_id: tg.chat_id, // Telegram chat id
      text: text, // The text to send
    };

    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
  }

  // Now you can send any text(even a form data) by calling sendMessage function.
  // For example if you want to send the 'hello', you can call that function like this:

  //End sending message to telegram
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  const text =`
    name: ${data.name}\nemail: ${data.email}\nsubject: ${data.subject}\nmessage: ${data.message}
    `;
  const {name, email, subject, message} = data;
  function submit(e) {
    e.preventDefault();
if(!name || !email || !subject || !message ){
  toast.error("Please provide value in each input field")
}else{
  sendMessage(text);
  toast.success("Thank you! You form is submitted");
  setData({    name: "",  email: "",  subject: "",  message: "",});
}

  }
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <ToastContainer position="top-center" />
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            If you are open to cooperation, you have new and interesting
            projects, or proposals for teamwork, contact me, I will be happy to
            answer
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* Info title */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description, link } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl hover:rotate-45 transition-all duration-500 -rotate-45">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal"><a href={link} target="_blank" rel="noopener noreferrer">{description}</a></p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            onSubmit={(e) => submit(e)}
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                onChange={(e) => handle(e)}
                value={data.name}
                className="input"
                placeholder="Your name"
                id="name"
                type="text"
              />
              <input
                onChange={(e) => handle(e)}
                value={data.email}
                className="input"
                placeholder="Your email"
                id="email"
                type="email"
              />
            </div>
            <input
              onChange={(e) => handle(e)}
              value={data.subject}
              type="text"
              className="input"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              onChange={(e) => handle(e)}
              value={data.message}
              className="textarea"
              placeholder="Your message"
              id="message"
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover hover:scale-110 duration-500 transition-all">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
