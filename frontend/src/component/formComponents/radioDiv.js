function RadioDiv(props) {
    return (

        <div className='input_div'>
            <input type='radio' id={props.id} name={props.name} value={props.value}
                disabled={props.disabled} />
            <label htmlFor={props.htmlFor}>{props.label}</label>
        </div>
    )
}

export default RadioDiv