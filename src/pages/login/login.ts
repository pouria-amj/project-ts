import { button, textfields } from "../../components"
import { box } from "../../lib"

export const login = ()=>{
    const loginForm = {
        email:"",
        password:"",
    } 
return(box({
element:"form",
children:[
    box({
        element:'img',
        
        attr:{
            src:"Back.svg",
            class:'pt-7 pb-5'
        }
            }),
    box({
element:'h1',
children:'Welcom',
attr:{
    class:'flex justify-center text-4xl pb-3 '
}
    }),
    box({
        element:'p',
        children:'Please enter your data to continue',
        attr:{
            class:'flex justify-center text-[#8F959E] pb-16'
        }
            }),
    textfields({
        placeholder:"email",
        onkeyup:(e)=>{
            loginForm.email= e.target.value
        }
    }),
    textfields({
        placeholder:"password",
        onkeyup:(e)=>{
            loginForm.password= e.target.value
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
    children:"Log In",
    attr:{
        class:"text-white mt-28 w-full bg-[#9775FA] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        onclick:(e) =>{
            e.preventDefault();
            const existsUser = localStorage.getItem("users");
            const parsExistUser =existsUser ? JSON.parse(existsUser) : null;
            const existUser =  parsExistUser?.find(
                (user:typeof loginForm) => user.email ===loginForm.email && user.password === loginForm.password
                )
                if(existUser){
                    localStorage.setItem("login","1")

                return    location.assign('/')
                }
                alert("username or password is wrong")





          location.assign('/')}
    }
})
]



}))


}
//<div class="rounded-">