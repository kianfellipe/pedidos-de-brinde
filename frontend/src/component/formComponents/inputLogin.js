
function InputLogin(props) {
    return (
        <div>
            <div className="inputBoxLogin">
                <label htmlFor={props.htmlFor} className='labelInputLogin'>{props.label}</label>
                <input
                    type={props.type}
                    id={props.id}
                    required
                    value={props.value}
                    className='inputUserLogin'
                    autoComplete='off'
                    onChange={props.onChange} />
            </div>
        </div>

    )

}

export default InputLogin