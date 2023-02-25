import { useState } from "react";
import classNames from "classnames";

const InputField = (props) => {
    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={classNames({
            'text-red-500': props.invalid,
            'w-[90%]': true,
            'transition': true,
        })}>
            <p className='text-lg md:text-lg font-bold transition'>{props.title}</p>
            <input onChange={changeInputValue} value={inputValue} type="password" placeholder={props.placeholder} className={classNames({
                'border-red-500': props.invalid,
                'rounded-xl': true,
                'border-2': true,
                'p-2': true,
                'pr-10': true,
                'pl-[13px]': true,
                'mt-1': true,
                'rounded-sm': true,
                'transition': true,
                'outline-none': true,
                'w-full': true,
                'lg:w-auto': true
            })} />
            {props.invalid && <p className="absolute transition">Wrong password</p>}
        </div>
    )
}

export default InputField