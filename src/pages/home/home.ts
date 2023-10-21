import { box } from "../../lib"

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
box({
element:'div',
attr:{
    class:'flex gap-4 mt-3'
},
children:[
    box({
        element:'div',
        attr:{
            class:'flex gap-2 bg-[#F5F6FA] w-28 h-12 items-center pl-2 rounded-md'
        },
        children:[
            box({
                element:'img',
                attr:{
                    src:'adidas.svg',
                    class:"w-10 h-10"
                }
            }),
            box({
                element:'p',
                children:'Adidas',
                attr:{
                    class:'font-semibold'
                }
            })
        ]
    }),
    box({
        element:'div',
        attr:{
            class:'flex gap-2 bg-[#F5F6FA] w-28 h-12 items-center pl-2 rounded-md'
        },
        children:[
            box({
                element:'img',
                attr:{
                    src:'nike.svg',
                    class:"w-10 h-10"
                }
            }),
            box({
                element:'p',
                children:'Nike',
                attr:{
                    class:'font-semibold'
                }
            })
        ]
    }),
    box({
        element:'div',
        attr:{
            class:'flex gap-2 bg-[#F5F6FA] w-28 h-12 items-center pl-2 rounded-md'
        },
        children:[
            box({
                element:'img',
                attr:{
                    src:'fila.svg',
                    class:"w-10 h-10"
                }
            }),
            box({
                element:'p',
                children:'Fila',
                attr:{
                    class:'font-semibold'
                }
            })
        ]
    }),
    box({
        element:'div',
        attr:{
            class:'flex gap-2 bg-[#F5F6FA] w-28 h-12 items-center pl-2 rounded-md'
        },
        children:[
            box({
                element:'img',
                attr:{
                    src:'puma.svg',
                    class:"w-10 h-10"
                }
            }),
            box({
                element:'p',
                children:'Puma',
                attr:{
                    class:'font-semibold'
                }
            })
        ]
    })
]

}),
box({
    element:'p',
    children:'New Arraival',
    attr:{
        class:'font-bold mt-7'
    }
}),
box({
    element:'div',
    attr:{
class:'flex gap-20 px-5 mt-7'
    },
    children:[
        box({
            element:'div',
            children:[
                box({
                    element:'img',
                    attr:{
                        src:'nike sport.png',
                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/product')
                        },
                        class:'cursor-pointer'
                    }
                }),
                box({
                    element:'p',
                    children:'Nike Sportswear Club Fleece',
                    attr:{
                        class:'w-4/5 font-medium'
                    }
                }),
                box({
                    element:'p',
                    children:'$99',
                    attr:{
                        class:'font-bold'
                    }
                })
            ]
        }),
        box({
            element:'div',
            children:[
                box({
                    element:'img',
                    attr:{
                        src:'nike run.png'
                    }
                }),
                box({
                    element:'p',
                    children:'Trail Running Jacket Nike Windrunner',
                    attr:{
                        class:'w-4/5 font-medium'
                    }
                }),
                box({
                    element:'p',
                    children:'$99',
                    attr:{
                        class:'font-bold'
                    }
                })
            ]
        })
    ]
}),
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