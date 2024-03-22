import React, { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{} // by doing this we are able to use all attributes of default input element of HTML in our interface

//forward ref is used to pass ref from parent to child i.e. from Input to input
const Input = forwardRef<HTMLInputElement, InputProps>(//use as sytax to make custom input element
  ({className, type,disabled, ...props},  ref)=>{
  return (
    <input
    type={type}
    className={twMerge("flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none", className)}
    disabled={disabled}
    ref={ref}
    {...props}
    />
  )
})

Input.displayName = "Input"
export default Input