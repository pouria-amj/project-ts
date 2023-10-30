import { box } from "../../lib"

export const home1 = () =>{
    return(
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
            
            })
        
    )
}