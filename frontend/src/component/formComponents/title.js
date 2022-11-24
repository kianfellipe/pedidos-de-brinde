function TitleBox(props) {
    return (

        <div className='inputDados'>
            <b>{props.title}</b>
            <br></br>
            <p>{props.subtitle}</p>
        </div>

    )
}

export default TitleBox