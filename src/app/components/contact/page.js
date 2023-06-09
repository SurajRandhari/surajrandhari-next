"use client";

// import React, { useState } from "react";
// // import Title from "../layouts/Title";
// import Title from "../../layouts/Title";

// import ContactLeft from "./ContactLeft";

// const Contact = () => {
//   const [username, setUsername] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   // ========== Email Validation start here ==============
//   const emailValidation = () => {
//     return String(email)
//       .toLocaleLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };
//   // ========== Email Validation end here ================

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (username === "") {
//       setErrMsg("Username is required!");
//     } else if (phoneNumber === "") {
//       setErrMsg("Phone number is required!");
//     } else if (email === "") {
//       setErrMsg("Please give your Email!");
//     } else if (!emailValidation(email)) {
//       setErrMsg("Give a valid Email!");
//     } else if (subject === "") {
//       setErrMsg("Plese give your Subject!");
//     } else if (message === "") {
//       setErrMsg("Message is required!");
//     } else {
//       setSuccessMsg(
//         `Thank you dear ${username}, Your Messages has been sent Successfully!`
//       );
//       setErrMsg("");
//       setUsername("");
//       setPhoneNumber("");
//       setEmail("");
//       setSubject("");
//       setMessage("");
//     }
//   };
//   return (
//     <section
//       id="contact"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
//       <div className="flex justify-center items-center text-center">
//         <Title title="CONTACT" des="Contact With Me" />
//       </div>
//       <div className="w-full">
//         <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
//           <ContactLeft />
//           <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
//             <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
//               {errMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
//                   {errMsg}
//                 </p>
//               )}
//               {successMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
//                   {successMsg}
//                 </p>
//               )}
//               <div className="w-full flex flex-col lgl:flex-row gap-10">
//                 <div className="w-full lgl:w-1/2 flex flex-col gap-4">
//                   <p className="text-sm text-gray-400 uppercase tracking-wide">
//                     Your name
//                   </p>
//                   <input
//                     onChange={(e) => setUsername(e.target.value)}
//                     value={username}
//                     className={`${
//                       errMsg === "Username is required!" &&
//                       "outline-designColor"
//                     } contactInput`}
//                     type="text"
//                   />
//                 </div>
//                 <div className="w-full lgl:w-1/2 flex flex-col gap-4">
//                   <p className="text-sm text-gray-400 uppercase tracking-wide">
//                     Phone Number
//                   </p>
//                   <input
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     value={phoneNumber}
//                     className={`${
//                       errMsg === "Phone number is required!" &&
//                       "outline-designColor"
//                     } contactInput`}
//                     type="text"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-4">
//                 <p className="text-sm text-gray-400 uppercase tracking-wide">
//                   Email
//                 </p>
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   className={`${
//                     errMsg === "Please give your Email!" &&
//                     "outline-designColor"
//                   } contactInput`}
//                   type="email"
//                 />
//               </div>
//               <div className="flex flex-col gap-4">
//                 <p className="text-sm text-gray-400 uppercase tracking-wide">
//                   Subject
//                 </p>
//                 <input
//                   onChange={(e) => setSubject(e.target.value)}
//                   value={subject}
//                   className={`${
//                     errMsg === "Plese give your Subject!" &&
//                     "outline-designColor"
//                   } contactInput`}
//                   type="text"
//                 />
//               </div>
//               <div className="flex flex-col gap-4">
//                 <p className="text-sm text-gray-400 uppercase tracking-wide">
//                   Message
//                 </p>
//                 <textarea
//                   onChange={(e) => setMessage(e.target.value)}
//                   value={message}
//                   className={`${
//                     errMsg === "Message is required!" && "outline-designColor"
//                   } contactTextArea`}
//                   cols="30"
//                   rows="8"
//                 ></textarea>
//               </div>
//               <div className="w-full">
//                 <button
//                   onClick={handleSend}
//                   className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
//                 >
//                   Send Message
//                 </button>
//               </div>
//               {errMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
//                   {errMsg}
//                 </p>
//               )}
//               {successMsg && (
//                 <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
//                   {successMsg}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// // ============================================================================================================================================

import React, { useState } from "react";
import Title from "../../layouts/Title";

import ContactLeft from "./ContactLeft";

const Contact = () => {
  // const [username, setUsername] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");
  // -----------------------------------------------------------------

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  // ========== Email Validation start here ==============
  // const emailValidation = () => {
  //   return String(email)
  //     .toLocaleLowerCase()
  //     .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  // };
  // ========== Email Validation end here ================

  // const handleSend = (e) => {
  //   e.preventDefault();
  //   if (username === "") {
  //     setErrMsg("Username is required!");
  //   } else if (phoneNumber === "") {
  //     setErrMsg("Phone number is required!");
  //   } else if (email === "") {
  //     setErrMsg("Please give your Email!");
  //   } else if (!emailValidation(email)) {
  //     setErrMsg("Give a valid Email!");
  //   } else if (subject === "") {
  //     setErrMsg("Plese give your Subject!");
  //   } else if (message === "") {
  //     setErrMsg("Message is required!");
  //   } else {
  //     setSuccessMsg(
  //       `Thank you dear ${username}, Your Messages has been sent Successfully!`
  //     );
  //     setErrMsg("");
  //     setUsername("");
  //     setPhoneNumber("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          subject: user.subject,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {status === "error" && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  There was an error submitting your message. Please try again.
                </p>
              )}
              {status === "success" && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  Thank you for your message!
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your name"
                    className={`"outline-designColor" contactInput`}
                    value={user.username}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    className={`"outline-designColor" contactInput`}
                    value={user.phone}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`"outline-designColor" contactInput`}
                  value={user.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className={`"outline-designColor" contactInput`}
                  value={user.subject}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Enter your Message"
                  className={`"outline-designColor"  contactTextArea`}
                  value={user.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {status === "error" && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  There was an error submitting your message. Please try again.
                </p>
              )}
              {status === "success" && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  Thank you for your message!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
