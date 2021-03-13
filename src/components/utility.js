import { css } from "styled-components";

export function pxTorem(pxVale){
    var style = getComputedStyle(document.body)
    var baseFont = style.getPropertyValue('--font').replace('px', '')
    console.log(baseFont);
    let Rem =  pxVale/Number(baseFont)+'rem';
    return Rem;
}