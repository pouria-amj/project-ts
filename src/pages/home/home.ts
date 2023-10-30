import { home2 } from ".";
import { box } from "../../lib"
import { home1 } from "./home1";
export const home = () =>{
return(
box({
element:'div',
attr:{
class:"px-2"
},
children:[box({
    element:"div",
    attr:{
class:'flex justify-between  py-3'
    },
    children:[
        box({
            element:'img',
            attr:{
                src:"Menu.svg",
            }
            }),
            box({
                element:'img',
                attr:{
                    src:"Cart.svg",
                }
                })
    ]
}),
box({
    element:'p',
    children:'Hemendra',
    attr:{
        class:'text-3xl font-bold pt-4'
    }
}),
box({
    element:'div',
    attr:{
            class:"relative mt-5 flex gap-3 items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-[#F5F6FA] overflow-hidden  "
    },
    children:[
        box({
            element:'img',
            attr:{
                src:'Search.svg',
                class:'pl-4',
             
            }
        }),
box({
    element:'input',
    attr:{
        class:'peer h-full w-full outline-none bg-[#F5F6FA] text-sm text-black pr-2 ',
        type:"text",
        placeholder:"Search something.."
    }

}),
    ]
}),
box({
    element:'p',
    children:'Choose Brand',
    attr:{
        class:'font-bold text-xl pt-3'
    }
}),
home1(),

box({
    element:'p',
    children:'New Arraival',
    attr:{
        class:'font-bold mt-7'
    }
}),
home2(),
box({
    element:'div',
    attr:{
        class:'w-full h-20 shadow-2xl flex items-center justify-center gap-16'
    },
    children:[
        box({
            element:'img',
            attr:{
                src:'heart.svg',
                class:'w-5 h-5'
            }
        }),
        box({
            element:'img',
            attr:{
                src:'bag.svg',
                class:'w-5 h-5'
            }
        }),
        box({
            element:'img',
            attr:{
                src:'pay.svg',
                class:'w-5 h-5'

            }
        })
    ]
})
]
//<div class='text-white text-black font- w- rounded-md h-20 items-center' >
})
)
}