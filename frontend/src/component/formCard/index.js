import React, { Component } from 'react'
import './styles.css'
import axios from 'axios'


class Rca extends Component {

    state = {
        itens: [{
            nome: '',
            quantidade: ''
        }],
        nomeSolicitante: '',
        cargo: '',
        email: '',
        codigo: '',
        clienteNovo: '',
        clientCodigo: '',
        razaoSocial: '',
        solicitar: ''

    }


    handleChange = idx => e => {
        const { value } = e.target;
        const itens = [...this.state.itens];
        itens[idx] = {
            ...itens[idx],
            nome: value
        };
        this.setState({
            itens
        });
    };

    onchange = e => {
        this.setState({ value: e.target.value });

    }


    handleChangequantidade = idx => e => {
        const { value } = e.target;
        const itens = [...this.state.itens];
        itens[idx] = {
            ...itens[idx],
            quantidade: value
        };
        this.setState({
            itens
        });
    };

    handleAddRow = () => {
        const item = {
            nome: '',
            quantidade: ''
        };
        this.setState({
            itens: [...this.state.itens, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            itens: this.state.itens.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const itens = [...this.state.itens]
        itens.splice(idx, 1)
        this.setState({ itens })
    }

    onSubmit(e) {
        console.log(this.state, 'THE STATE --------- $$$$')


        let solicitacao = new Blob([JSON.stringify({
            nomeSolicitante: this.state.nomeSolicitante,
            email: this.state.email,
            codigo: this.state.codigo,
            cargo: this.state.cargo,
            clienteNovo: this.state.clienteNovo,
            razaoSocial: this.state.razaoSocial,
            solicitar: this.state.solicitar

        })], {
            type: 'application/json'
        })

        let formData = new FormData()


        formData.append('solicitacao', solicitacao)

        axios({
            url: "http://localhost:8080/pedido",
            method: "POST",
            data: formData
        })

    }

    render() {
        const { cargo } = this.state;
        return (
            <div className="box">
                <legend className="title">Solicitação de Brinde e MPDV</legend>

                {/*////////////////////Aqui começa a solicitação de dados do solicitante /////////////*/}

                <div className='inputDados'>
                    <b>Dados do solicitante</b>
                    <br></br>
                    <p>Aqui você deve informar os seus dados para identificação e contato.</p>
                </div>

                <div className="inputBox">
                    <label htmlFor="nomeSolicitante" className="labelInput">Nome do solicitante</label>
                    <input type="text"
                        name="nomeSolicitante"
                        className="inputUser"
                        autoComplete="off"
                        value={this.state.nomeSolicitante}
                        onChange={e => this.setState({ nomeSolicitante: e.target.value })} />
                </div>

                <div className="inputRadioBox">
                    <div className="radio" value={this.state.cargo}
                        onChange={e => this.setState({ cargo: e.target.value })}>
                        <label htmlFor="nome" className="labelInput">Você é:</label>
                        <div className="input_div">
                            <label htmlFor="gerente">Gerente</label>
                            <input type="radio" id="gerente" name="area" value="gerente" onChange={this.onchange}
                            />
                        </div>

                        <div className="input_div">
                            <label htmlFor="Representante">Representante</label>
                            <input type="radio" id="Representante" name="area" value="representante" onChange={this.onchange} />
                        </div>

                        <div className="input_div">
                            <label htmlFor="outros">Cliente interno</label>
                            <input type="radio" id="outros" name="area" value="interno" onChange={this.onchange} />
                        </div>
                    </div>
                </div>


                {cargo === 'representante' && (
                    <div className="inputBox">
                        <input type="text"
                            name="codigo"
                            className="inputUser2"
                            autoComplete="off"
                            value={this.state.codigo}
                            onChange={e => this.setState({ codigo: e.target.value })} />
                        <label htmlFor="codigo" className="labelInput">Código</label>
                    </div>
                )}

                {cargo === 'gerente' && (
                    <div className="inputBox">
                        <input type="text"
                            name="codigo"
                            className="inputUser2"
                            autoComplete="off"
                            value={this.state.codigo}
                            onChange={e => this.setState({ codigo: e.target.value })} />
                        <label htmlFor="codigo" className="labelInput">Código</label>
                    </div>
                )}

                <div className="inputBox">
                    <input type="text"
                        name="email"
                        className="inputUser"
                        autoComplete="off"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })} />
                    <label htmlFor="email" className="labelInput">E-mail</label>
                </div>


                {/*//////////Aqui termina a solicitação de dados do solicitante///////////////////// */}


                {/*//////////Aqui começa a solicitação de dados do cliente //////////////////////////*/}
                <div className='inputDados'>
                    <b>Dados do cliente</b>
                    <br></br>
                    <p>Aqui você deve informar os dados do cliente para que vai receber os itens solicitados.</p>
                </div>

                <div className="inputBox">
                    <div className="radio" value={this.state.cargo}
                        onChange={e => this.setState({ cargo: e.target.value })}>
                        <label htmlFor="nome" className="labelInpu">Cliente novo?</label>
                        <div className="input_div">
                            <label htmlFor="gerente">Sim</label>
                            <input type="radio" id="gerente" name="clienteNovo" value="Sim" />
                        </div>

                        <div className="input_div">
                            <label htmlFor="Representante">Não</label>
                            <input type="radio" id="Representante" name="clienteNovo" value="Não" />
                        </div>


                    </div>
                </div>

                <div className="inputBox">
                    <label htmlFor="nomeSolicitante" className="labelInput">Nome do solicitante</label>
                    <input type="text"
                        name="nomeSolicitante"
                        className="inputUser"
                        autoComplete="off"
                        value={this.state.nomeSolicitante}
                        onChange={e => this.setState({ nomeSolicitante: e.target.value })} />
                </div>



                <div className="row-container">
                    <h3>Produtos</h3>
                    <div className="table-container">
                        <div className="row clearfix">
                            <div className="col-md-12 column">
                                <table
                                    className="table table-bordered table-hover"
                                    id="tab_logic"
                                >
                                    <thead>
                                        <tr>

                                            <th className="text-center"> Item </th>
                                            <th className="text-center"> Quantidade </th>


                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.state.itens.map((item, idx) => (
                                            <tr id="addr0" key={idx}>

                                                <td className="col-3">
                                                    <input
                                                        type="text"
                                                        name="nome"
                                                        value={this.state.itens[idx].nome}
                                                        onChange={this.handleChange(idx)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td className="col-2">
                                                    <input
                                                        type="text"
                                                        name="quantidade"
                                                        value={this.state.itens[idx].quantidade}
                                                        onChange={this.handleChangequantidade(idx)}
                                                        className="form-control"
                                                    />
                                                </td>

                                                <td>
                                                    <button
                                                        className="btn btn-outline-danger btn-sm"
                                                        onClick={this.handleRemoveRow}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <button onClick={this.handleAddRow} className="btn btn-primary">
                                    Adicionar
                                </button>
                                <button
                                    onClick={this.handleRemoveRow}
                                    className="btn btn-danger float-right"
                                >
                                    Deletar Último
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" onClick={(e) => this.onSubmit(e)} />


            </div>


        );
    }
}

export default Rca;
