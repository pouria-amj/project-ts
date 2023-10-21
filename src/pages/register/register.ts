import { button, textfields } from "../../components"
import { ValidateEmail } from "../../helpers/validatemail"
import { box } from "../../lib"

export const register = ()=>{
    const registerForm = {
        email:"",
        password:"",
        repeatPassword:""
    } as const
    const handelRegistertUser = (e : Event) =>{
        e.preventDefault();
        if(!registerForm || !ValidateEmail(registerForm.email)){
          return  alert("email is invalid")
        }
        if(
            !registerForm.password||
            !registerForm.repeatPassword||
            registerForm.password !== registerForm.repeatPassword
            ){
           return alert("password and repeat are not same")
        }
        const existsUser = localStorage.getItem("users");
        const parsExistUser =existsUser ? JSON.parse(existsUser) : null;
        if(parsExistUser){
           const existUser =  parsExistUser.find((user:typeof registerForm) => user.email ===registerForm.email )
           if(existUser) return alert("this user alredy exist")
            parsExistUser.push(registerForm)
            const registerFormJson = JSON.stringify(parsExistUser)
            localStorage.setItem("users", registerFormJson)
            location.assign('/login')

        }else{
            const registerFormJson = JSON.stringify([registerForm])
            localStorage.setItem("users", registerFormJson)
            location.assign('/login')

        }
    }
return(box({
element:"form",
children:[
    box({
        element:'img',
        
        attr:{
            src:"Back.svg",
            class:'pt-7 pb-2'
        }
            }),
    box({
element:'h1',
children:'Sign Up',
attr:{
    class:'text-4xl flex justify-center pb-14 '
}
    }),

    textfields({
        placeholder:"email",
        onkeyup:(e)=>{
            registerForm.email= e.target.value
        }
    }),
    textfields({
        placeholder:"password",
        onkeyup:(e)=>{
            registerForm.password= e.target.value
        }
    }),
    textfields({
        placeholder:"repeat password",
        onkeyup:(e)=>{
            registerForm.repeatPassword= e.target.value
        }
    }),
box({
element:'div',
attr:{
    class:"flex items-cente mb-4 justify-between"
},
children:[
box({
    element:'lable',
    children:'Remember me',
    attr:{
        class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    }
}),
box({
    element:'input',
attr:{
    class:'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ',
    type:'checkbox'
},
})
]
}),
button({
    children:"Sign Up",
    attr:{
        class:"text-white mt-24 w-full bg-[#9775FA] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        onclick:handelRegistertUser
    }
})
]
}))
}
//<div class="bg">