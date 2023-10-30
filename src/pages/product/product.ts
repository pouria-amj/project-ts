import { box } from "../../lib"
import { product2 } from "./product2";

export const product = ()=>{
    return(
box({
    element:'div',
    children:[
        box({
            element:"div",
            attr:{
        class:'flex justify-between px-2 py-3'
            },
            children:[
                box({
                    element:'img',
                    attr:{
                        src:"Back.svg",
                        class:'cursor-pointer',
                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/home')
                        },
                    }
                    }),
                    box({
                        element:'img',
                        attr:{
                            src:"Cart.svg",
                            class:'cursor-pointer',
                            onclick:(e:Event)=>{
                                e.preventDefault();
            
                                location.assign('/cart')
                            },
                        }
                        })
            ]
        }),
      box({
        element:'div',
        attr:{
            class:'bg-[#F2F2F2] rounded-md'
        },
        children:[
            box({
                element:'img',
                attr:{
                    src:'image 5 (1).png',
                    class:'pl-24'
                }
            }),
            box({
                element:'img',
                attr:{
                    src:"nike-logo.svg",
                    class:'mt-[-42px] pl-52'
                }
            })
        ]
      }),
      box({
        element:'div',
        attr:{
            class:'flex justify-between text-[#8F959E] pt-3 text-s px-2'
        },
        children:[
            box({
                element:'p',
                children:'Mens Printed Pullover Hoodie'
              }),
              box({
                element:'p',
                children:'Price'
              })
        ]
      }),
      box({
        element:'div',
        attr:{
            class:'flex justify-between  pt-1 text-2xl px-2'
        },
        children:[
            box({
                element:'p',
                children:'Nike Club Fleece'
              }),
              box({
                element:'p',
                children:'$99'
              })
        ]
      }),
      product2(),
      box({
        element:'p',
        children:'Description',
        attr:{
            class:'text-xl pt-3 px-3'
        }
      }),
      box({
        element:'p',
        children:'The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with Read More..',
        attr:{
            class:'text-[#8F959E] pt-3 px-3'
        }
      }),
      box({
        element:'div',
        attr:{
            class:'flex justify-between  py-8  px-2'
        },
        children:[
            box({
                element:'p',
                children:'Reviews',
                attr:{
                    class:'text-xl'
                }
              }),
              box({
                element:'p',
                children:'View All',
                attr:{
                    class:'text-[#8F959E]'
                }
              })
        ]
      })
    ]



//<div class= 'align-middle justify-items-center content-center items-center place-items-center rounded-md'>

















})

    )
}