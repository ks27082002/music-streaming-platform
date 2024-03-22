import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>{}//extend regular HTML attributes of a button


const Button = forwardRef<HTMLButtonElement, ButtonProps>((//we can pass regular html attributes of a button to our components
  {className, children, disabled, type="button", ...props}, ref) => {
  return(
    <button
    type={type}
    className={twMerge(`w-full rounded-full bg-amber-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed text-black font-bold hover:opacity-75 transition`, className)}
    disabled={disabled} ref={ref} {...props}>
      {children}
    </button>
  )
})
Button.displayName="Button"
export default Button