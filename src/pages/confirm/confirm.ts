import { box } from "../../lib"

export const confirm =()=>{
    return(
        box({
            element:'div',
            attr:{
                class:'px-2'
            },
            children:[
                box({
                    element:'img',
                    attr:{
                        src:"Back.svg",
                        class:'cursor-pointer py-3',

                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/payment')
                        },
                    }
                }),
              box({
                element:'div',
                attr:{
                    class:"flex justify-center pt-12 pb-7"
                },
                children:[
                    box({
                        element:'img',
                        attr:{
                            src:'Group 23 (3).png'
                        }
                    })
                ]
              }),
              box({
                element:'p',
                children:'Order Confirmed!',
                attr:{
                    class:'text-2xl font-semibold flex justify-center '
                }
              }),
              box({
                element:'div',
                attr:{
                    class:'text-base text-[#8F959E] py-4'
                },
                children:[
                    box({
                        element:'p',
                        children:'Your order has been confirmed, we will send',
                        attr:{
                            class:'flex justify-center'
                        }
                    }),
                    box({
                        element:'p',
                        children:'you confirmation email shortly.',
                        attr:{
                            class:'flex justify-center'
                        }
                    })

                ]
               
              }),
              box({
                element:'button',
                children:'Continue Shopping',
                attr:{
                    class:'w-full bg-[#9775FA] mt-9 mb-3 text-white text-center py-6',
                    onclick:(e:Event)=>{
                        e.preventDefault();
    
                        location.assign('/home')
                    },
                }
              })

            ]
        })
    )
}
//<div class='align-middle font-semibold text-base'>