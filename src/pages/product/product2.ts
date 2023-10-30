import { box } from "../../lib"

export const product2 = () =>{
    return(
        box({
            element:'div',
            attr:{
                class:'flex justify-between py-5 px-2'
            },
            children:[
                box({
                    element:'img',
                    attr:{
                        src:'Rectangle 575.png'
                    }
                }),
                box({
                    element:'img',
                    attr:{
                        src:'Rectangle 576.png'
                    }
                }),
                box({
                    element:'img',
                    attr:{
                        src:'Rectangle 577.png'
                    }
                }),
                box({
                    element:'img',
                    attr:{
                        src:'Rectangle 578.png'
                    }
                }),
            ]
          }),
          box({
            element:'div',
            attr:{
                class:'flex justify-between  pt-1  px-2'
            },
            children:[
                box({
                    element:'p',
                    children:'Size',
                    attr:{
                        class:'text-xl'
                    }
                  }),
                  box({
                    element:'p',
                    children:'Size Guide',
                    attr:{
                        class:'text-[#8F959E]'
                    }
                  })
            ]
          }),
          box({
            element:'div',
            attr:{
                class:'flex justify-between pt-4 px-2'
            },
            children:[
                box({
                    element:'button',
                    children:'S',
                    attr:{
                        class:'w-12 h-12  bg-slate-200 flex justify-center place-items-center rounded-lg text-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '
                    }
                  }),
                  box({
                    element:'button',
                    children:'M',
                    attr:{
                        class:'w-12 h-12  bg-slate-200 flex justify-center place-items-center rounded-lg text-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '
                    }
                  }),
                  box({
                    element:'button',
                    children:'L',
                    attr:{
                        class:'w-12 h-12  bg-slate-200 flex justify-center place-items-center rounded-lg text-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '
                    }
                  }),
                  box({
                    element:'button',
                    children:'XL',
                    attr:{
                        class:'w-12 h-12  bg-slate-200 flex justify-center place-items-center rounded-lg text-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '
                    }
                  }),
                  box({
                    element:'button',
                    children:'2XL',
                    attr:{
                        class:'w-12 h-12  bg-slate-200 flex justify-center place-items-center rounded-lg text-xl hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '
                    }
                  })
            ]
          })
    )
}