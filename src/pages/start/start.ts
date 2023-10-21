import { box } from "../../lib"

export const start = ()=>{
    return(box({
        element:'div',
        attr:{
            class:' h-[560px] bg-[#9775FA]  '
        },
        children:[
            box({
element:"img",
attr:{
    src:"Screenshot (773) 1 (1).svg",
    class:'pl-36 pt-16'
}
            }),
            box({
                element:"p",
               children:"STYLISH",
               attr:{
                class:"text-slate-100 pl-40 font-bold text-5xl pb-8"
               }
                            }),

            box({
           element:'button',
            children:'START',
            attr:{
                class:'text-white ml-52 mt-16  bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
                onclick:(e) =>{
                  e.preventDefault();
                location.assign('/register')}
            }
        })
    
    
    
    
    
    
    
    
    
    
    
    
    ]
        
    }))
}

//<div class="text-slate-100 text-5xl ml"></div>