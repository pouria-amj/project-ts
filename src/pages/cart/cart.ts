import { box } from "../../lib"
import { render } from "../../render"




 export const cart =()=>{
    type amountType = {
        number:number
    }
    const productAmount : amountType = {
        number :1
    }
    let quantity = [0, 0, 0];
    let sum = 0;
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
                        class:'flex gap-48 items-center py-3'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:"Back.svg",
                                class:'cursor-pointer',

                                onclick:(e:Event)=>{
                                    e.preventDefault();
                
                                    location.assign('/product')
                                },
                            }
                        }),
                        box({
                            element:'p',
                            children:'Cart',
                            attr:{
                                class:'text-3xl text-bold'
                            }
                        })
                    ]
                }),
                box({
                    element:'div',
                    attr:{
                        class:'flex py-2 px-2 shadow-lg rounded-md'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:'Rectangle 568.png'
                            }
                        }),
                        box({
                            element:'div',
                            attr:{
                                class:'px-2'
                            },
                            children:[
                                box({
                                    element:'p',
                                    children:'Mens Tie-Dye T-Shirt Nike Sportswear',
                                    attr:{
                                        class:'w-2/3 leading-5'
                                    }
                                }),
                                box({
                                    element:'p',
                                    children:'$99 (+$4.00 Tax)',
                                    attr:{
                                        class:'text-sm text-[#8F959E] pt-1'
                                    }
                                }),
                                box({
                                    element:'div',
                                    attr:{
                                        class:' flex gap-10 pt-2 content-center items-center'
                                    },
                                    children:[
                                        box({
                                            element:'button',
                                            children:'-',
                                            attr:{
                                                class:'text-xl ',
                                                onClick : ()=>{
                                                    quantity[0] -= 1;
                                if (quantity[0] < 0)
                                    quantity[0] = 0;
                                if(quantity[0] > 0)
                                    sum -= 120;
                                if (sum < 0)
                                    sum = 0;
                                console.log(sum);
                                render("product-1-quantity", quantity[0].toString());
                                render("total", sum.toString());
                                                }
                                            }
                                        }),
                                        box({
                                            element:'p',
                                            children: quantity[0].toString(),
                                            attr:{
                                                class:'text-xl w-4',
                                                id: "product-1-quantity",
                                                value:productAmount.number
                                            }
                                        }),
                                        box({
                                            element:'button',
                                            children:'+',
                                            attr:{
                                                class:'text-xl',
                                                onClick : ()=>{
                                                    quantity[0] += 1;
                                sum += 120;
                                console.log(sum);
                                render("product-1-quantity", quantity[0].toString());
                                render("total", sum.toString());
                                                }
                                            }
                                        }),
                                    ]                                  
                                })
                            ]
                        })
                    ]
                }),              
                box({
                    element:'div',
                    attr:{
                        class:'flex justify-between  py-4 text-2xl '
                    },
                    children:[
                        box({
                            element:'p',
                            children:'Delivery Address'
                          }),
                          box({
                            element:'img',
                            attr:{
                                src:'Arrow - Right 2.svg'
                            }
                          })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between content-center items-center'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:'Group 3.png'
                            }
                        }),
                        box({
                            element:'p',
                            children:'43, Electronics City Phase 1,Electronic City',
                            attr:{
                                class:'text-md text-[#8F959E] w-1/2'
                            }
                        }),
                        box({
                            element:'img',
                            attr:{
                                src:'Check.svg'
                            }
                        })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between  py-4 text-2xl '
                    },
                    children:[
                        box({
                            element:'p',
                            children:'Payment Method'
                          }),
                          box({
                            element:'img',
                            attr:{
                                src:'Arrow - Right 2.svg'
                            }
                          })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between content-center items-center'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:'Group 4.png'
                            }
                        }),
                        box({
                            element:'div',
                            children:[
                                box({
                                    element:'p',
                                    children:'Visa Classic'
                                }),
                                box({
                                    element:'p',
                                    children:'**** 7690'
                                }) 
                            ]
                            
                        }),
                        box({
                            element:'img',
                            attr:{
                                src:'Arrow - Right 2.svg'
                            }
                        })
                    ]                   
                  }),
                  box({
                    element:'p',
                    children:"Order Info",
                    attr:{
                        class:'text-xl py-3'
                    }
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between py-2'
                    },
                    children:[
                        box({
                            element:'p',
                            children:'Subtotal',
                            attr:{
                                class:'text-[#8F959E]'
                            }
                        }),
                        box({
                            element:'p',
                            children:'$110',
                            attr:{
                                class:'font-semibold'
                            }
                        })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between py-2'
                    },
                    children:[
                        box({
                            element:'p',
                            children:'Delivery Charge',
                            attr:{
                                class:'text-[#8F959E]'
                            }
                        }),
                        box({
                            element:'p',
                            children:'$10',
                            attr:{
                                class:'font-semibold'
                            }
                        })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between py-4'
                    },
                    children:[
                        box({
                            element:'p',
                            children:'Total',
                            attr:{
                                class:'text-[#8F959E]'
                            }
                        }),
                        box({
                            element:'p',
                            children: sum.toString(),
                            attr:{
                                class:'font-semibold',
                                id: "total"
                            }
                        })
                    ]
                  }),
                  box({
                    element:'button',
                    children:'Checkout',
                    attr:{
                        class:'w-full bg-[#9775FA] my-3 text-white text-center py-6',
                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/payment')
                        },
                    }
                  })                
            ]
            //<div class='shadow-lg rounded-md content-center font-bold text-white'>
        })
    )
} 
