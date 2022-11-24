function InputText(props) {
    return (

        <div className='inputBox'>
                <label htmlFor={props.htmlFor} className='labelInput'>{props.label}</label>
                <input type='text'
                    mask={props.mask}
                    id={props.id}
                    required
                    value={props.value}
                    className='inputUser'
                    autoComplete='off'
                    onBlur={props.onBlur}
                    disabled={props.disabled}
                    onChange={props.onChange}
                />
        </div>

    )
}

export default InputText