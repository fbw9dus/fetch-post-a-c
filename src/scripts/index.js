// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";
const form = document.querySelector("#submit-form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector("#message")
const checkbox = document.querySelector("#checkbox")
const submit = document.querySelector("#submit")


// \/ All of your javascript should go here \/
const fetchJSON = async (body)=>{
      let response = await fetch(
            'https://jsonplaceholder.typicode.com/posts' ,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(body)
});
return await response.json()
};

const resData = async ()=> {
      let data = await fetchJSON();
      resData(data.name,data.email,data.password,data.message,data.checkbox,data.submit);
    };
   submit.onclick =  async (c) =>{
        c.preventDefault()
        console.log("clicked")
        if(checkbox.checked ){
          console.log("checked")
          let InputName = name.value;
          let InputEmail = email.value;
          let InputPassword = password.value;
        let InputMessage = message.value;
        //let InputCheckbox = checkbox.value;
       // let InputSumbit = submit.value;
        let data = await fetchJSON({
          name:InputName,
          email:InputEmail,
          pass:InputPassword,
          mes:InputMessage,
          //check: InputCheckbox,
         // sub: InputSumbit
        })
        console.log(data)
      }
      else{return}
      }