import { box } from "../../lib"

export const payment = ()=>{
    return(
box({
    element:'div',
    attr:{
        class:'px-2'
    },
    children:[
        box({
            element:'div',
            attr:{
                class:'flex gap-40 items-center py-3'
            },
            children:[
                box({
                    element:'img',
                    attr:{
                        src:"Back.svg",
                        class:'cursor-pointer',

                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/cart')
                        },
                    }
                }),
                box({
                    element:'p',
                    children:'Payment',
                    attr:{
                        class:'text-3xl text-bold'
                    }
                })
            ]
        }),
        box({
            element:'img',
            attr:{
                src:'Card 1.png',
                class:'pl-28 py-6'
            }
        }),
        box({
            element:'button',
            children:'Add new card +',
            attr:{
                class:'w-full border-[1px] border-[#9775FA] py-5 rounded-lg text-[#9775FA]'
            }
        }),
        box({
element:'p',
children:'Card Owner',
attr:{
    class:'text-lg font-medium py-4'
}
        }),
        box({
            element:'input',
            attr:{
                type:'text',
                placeholder:'Hemendra Mali',
                class:'w-full rounded-lg bg-[#F5F6FA] py-3 px-2 '
            }
        }),
        box({
            element:'p',
            children:'Card Number',
            attr:{
                class:'text-lg font-medium py-4'
            }
                    }),
                    box({
                        element:'input',
                        attr:{
                            type:'text',
                            placeholder:'5254 7634 8734 7690',
                            class:'w-full rounded-lg bg-[#F5F6FA] py-3 px-2 '
                        }            
                    }),
                    box({
                        element:'div',
                        attr:{
                            class:'flex justify-between'
                        },
                        children:[
                            box({
                                element:'div',
                                children:[
                                    box({
                                        element:'p',
                                        children:'EXP',
                                        attr:{
                                            class:'text-lg font-medium py-4'
                                        }
                                    }),
                                    box({
                                        element:'input',
                                        attr:{
                                            type:'text',
                                            placeholder:'24/24',
                                            class:'w-full rounded-lg bg-[#F5F6FA] py-3 px-2 '
                                        }                           
                                    }),
                                ]
                            }),
                            box({
                                element:'div',
                                children:[
                                    box({
                                        element:'p',
                                        children:'CVV',
                                        attr:{
                                            class:'text-lg font-medium py-4'
                                        }
                                    }),
                                    box({
                                        element:'input',
                                        attr:{
                                            type:'text',
                                            placeholder:'7763',
                                            class:'w-full rounded-lg bg-[#F5F6FA] py-3 px-2 '
                                        }                           
                                    }),
                                ]
                            })
                        ]
                    }),
                    box({
                        element:'div',
                        attr:{
                            class:"flex items-cente pt-5 justify-between"
                        },
                        children:[
                        box({
                            element:'lable',
                            children:'Save card info',
                            attr:{
                                class:" text-sm font-medium text-gray-900 dark:text-gray-300"
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
                        box({
                            element:'button',
                            children:'Save Card',
                            attr:{
                                class:'w-full bg-[#9775FA] mt-9 mb-3 text-white text-center py-6',
                                onclick:(e:Event)=>{
                                    e.preventDefault();
                
                                    location.assign('/confirm')
                                },
                            }
                          })
    ]
})
    )
}
//<div class='border text-lg font-medium'>