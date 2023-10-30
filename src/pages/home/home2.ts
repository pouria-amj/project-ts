import { box } from "../../lib";

export const home2 = () =>{
    return(
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
        })
    )
} 