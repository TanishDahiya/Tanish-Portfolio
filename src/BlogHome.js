import React,{useState} from 'react'
import contactimage from "./images/newcontact.jpg"
import "./BlogHome.css"
import {db} from "./firebase"

function BlogHome() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    };


 
    return (
        <div className="blogname">

            <div class="imagecontainer" >
                  <img src={contactimage} alt=""/>
            </div>
            <div className="forms">
                   <form className="form" onSubmit={handleSubmit}>
                       <div>
                            <h1>Read More Yes! You Are Here! Have You <span className="contactspan">Any Project?</span> Drop A Line Here</h1>
                       </div>
     <div className="formfix">
            <div className="blogfix">
   
             <div>
                  <input  class="bc"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
             </div>
     
            </div>
     
 <div class="ab">

      <div >
     <input class="bc"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
 
 </div>

   <div class="ab">

        <div >
   <textarea class="bc cd"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
        </div>
   

   </div>
   <div class="ab">
 <button className="contactbutton"
        type="submit"
      
      >
        Submit
      </button>
 
   </div>
     </div>
    </form>
            </div>
          
            
        </div>
    )
}

export default BlogHome
