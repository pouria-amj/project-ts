import { box } from "../../lib"

type textFieldsProps={
    lable:string | HTMLElement
    helperText:string | HTMLElement
    icon:string

}|any

export const textfields = (props : textFieldsProps = {
    helperText:'',
    lable:'',
}) =>{
    const{lable,helperText,icon,...restprops}=props
    const id = crypto.randomUUID()
return box({
    element:'div',
    children:[
       lable && 
       box({
            element:'lable',
            children:lable,
            attr:{
                for:id
            }
        }),
        box({
        element:'div',
        attr:{
            class:"peer mb-8 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        },
        children:[
            box({
            element:"input",
            attr:{
                id,
                class:'w-full bg-transparent outline-none h-full p-2.5 ',
                ...restprops
            }
        }),
        props.icon&&
        box({
            element:'img',
            attr:{
                class:'w-6 h-6' ,
                src:icon
            }
        })] ,
    })]
})

}
//<div class = ""> </div>