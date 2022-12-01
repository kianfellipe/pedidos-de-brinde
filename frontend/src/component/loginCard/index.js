import { Component } from "react";
import './styles.css'
import logo from '../../assets/img/logo-kian.svg'
import InputLogin from "../formComponents/inputLogin";

class Login extends Component {

    state = {
        login: '',
        password: ''
    }

    render() {
        return (
            <div className="containerLogin">
                <img className="imgLogoLogin" src={logo} alt='kianLogo'/>
                <div className="formBoxLogin">
                    <form>
                        <legend className="legendBoxLogin">ÁREA DE ACESSO</legend>
                        <InputLogin label='Login:'
                            id='loginField'
                            htmlFor='loginField'
                            type='text'
                            value={this.state.login}
                            onChange={e => this.setState({ login: e.target.value })} />

                        <InputLogin label='Senha:'
                            id='passwordField'
                            htmlFor='passwordField'
                            type='password'
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })} />
                        
                        <input type='submit' className="btnEnviarLogin" value='Entrar'/>
                    </form>
                </div>
            <div>
            <h5 className="descriHelpLogin">Caso tenha perdido o acesso, favor entrar em contato com o suporte de vendas.</h5>
            </div>
            </div>
        )
    }
}

export default Login