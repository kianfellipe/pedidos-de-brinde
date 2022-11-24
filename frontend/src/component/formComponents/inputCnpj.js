import InputMask from "react-input-mask"

function InputCnpj(props) {
    return (
        <div className="inputBox">
            <label htmlFor='cnpj' className='labelInput'>*CNPJ</label>
            <InputMask type='text'
                mask='99.999.999/9999-99'
                inputMode='numeric'
                id='cnpj'
                required
                value={props.value}
                className='inputUser'
                autoComplete='off'
                disabled={props.disabled}
                onChange={props.onChange}
            />
        </div>
    )
}

export default InputCnpj