function RadioBox(props) {
    return (

        <div className='inputRadioBox'>
            <div className='radio' value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}>
                <label htmlFor={props.htmlFor} className='labelInput'>{props.label}</label>
                {props.children}
            </div>
        </div>
    )
}

export default RadioBox