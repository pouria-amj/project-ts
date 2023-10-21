import { boxProps } from "./type"

export const box = (props:boxProps)=>{
    const el = document.createElement(props.element)
    if(props.attr)
    Object.keys(props.attr).forEach((key : string)=>{
  if (key.startsWith('on')){
    el.addEventListener(key.slice(2).toLowerCase(),props.attr[key])
    
    return null}
  el.setAttribute(key,props.attr[key])
 
    })
    if(!Array.isArray(props.children))
    el.append(props.children! ?? "")
    else  el.append(...[...props.children.filter((i) =>!!i)])
    return el
    
    }