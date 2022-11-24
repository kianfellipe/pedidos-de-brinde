import InputMask from "react-input-mask"

function InputNum(props) {
    return (
        <div className="inputBox">
            <label htmlFor={props.htmlFor} className='labelInput'>{props.label}</label>
            <InputMask type='text'
                mask={props.mask}
                inputMode='numeric'
                id={props.id}
                required
                value={props.value}
                className='inputUser2'
                autoComplete='off'
                disabled={props.disabled}
                onChange={props.onChange}
            />
        </div>
    )
}

export default InputNum