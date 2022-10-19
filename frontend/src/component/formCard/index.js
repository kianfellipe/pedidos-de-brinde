import React, { Component } from 'react'
import './styles.css'
import axios from 'axios'


class Rca extends Component {

    state = {
        rows: [{
            nome: '',
            preco: ''
        }],
        solicitante: '',
        email: '',
        tel: '',
        cpf: '',
        cnpj: '',
        sex: '',
        bDate: '',
        cep: '',
        endereco: '',
        num: '',
        bairro: '',
        cidade: '',
        estado: '',
    }


    handleChange = idx => e => {
        const { value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
           ...rows[idx],
            nome: value
        };
        this.setState({
            rows
        });
    };

    
    handleChangePreco = idx => e => {
        const { value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
           ...rows[idx],
            preco: value
        };
        this.setState({
            rows
        });
    };

    handleAddRow = () => {
        const item = {
            nome: '',
            preco: ''
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }

    onSubmit(e) {
        console.log(this.state, 'THE STATE --------- $$$$')


        let solicitacao = new Blob([JSON.stringify({
            solicitante: this.state.solicitante,
            email: this.state.email,
            tel: this.state.tel,
            cpf: this.state.cpf,
            cnpj: this.state.cnpj,
            sex: this.state.sex,
            bDate: this.state.bDate,
            cep: this.state.cep,
            num: this.state.num,
            bairro: this.state.bairro,
            endereco: this.state.endereco,
            cidade: this.state.cidade,
            estado: this.state.estado,
            rows: this.state.rows

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
        return (

            <div className="box">

                <fieldset>
                    <legend className="title">Solicitação de Brinde e MPDV</legend>
                        <h3>Dados do solicitante</h3>
                    <div className="inputBox">
                        <input type="text"
                            name="solicitante"
                            className="inputUser"
                            autoComplete="off"
                            value={this.state.solicitante}
                            onChange={e => this.setState({ solicitante: e.target.value })} />
                        <label htmlFor="nome" className="labelInput">Nome do solicitante</label>
                    </div>
                
                    <div className="inputBox">
                        <div className="radio" value={this.state.sex}
                            onChange={e => this.setState({ sex: e.target.value })}>
                                <label htmlFor="nome" className="labelInput">Você é:</label>
                            <div className="input_div">
                                <label htmlFor="feminino">Gerente</label>
                                <input type="radio" id="feminino" name="genero" value="feminino"
                                />
                            </div>

                            <div className="input_div">
                                <label htmlFor="masculino">Representante</label>
                                <input type="radio" id="masculino" name="genero" value="masculino" />
                            </div>

                            <div className="input_div">
                                <label htmlFor="outros">Cliente interno</label>
                                <input type="radio" id="outros" name="genero" value="outros" />
                            </div>
                        </div>
                    </div>

                    <div className="inputBox">
                        <input type="text"
                            name="email"
                            className="inputUser"
                            autoComplete="off"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })} />
                        <label htmlFor="email" className="labelInput">E-mail</label>
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

                                                <th className="text-center"> Nome </th>
                                                <th className="text-center"> Preço </th>

                                                <th className="text-center"> Total </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.rows.map((item, idx) => (
                                                <tr id="addr0" key={idx}>

                                                    <td className="col-4">
                                                        <input
                                                            type="text"
                                                            name="nome"
                                                            value={this.state.rows[idx].nome}
                                                            onChange={this.handleChange(idx)}
                                                            className="form-control"
                                                        />
                                                    </td>
                                                    <td className="col-2">
                                                        <input
                                                            type="text"
                                                            name="preco"
                                                            value={this.state.rows[idx].preco}
                                                            onChange={this.handleChangePreco(idx)}
                                                            className="form-control"
                                                        />
                                                    </td>

                                                    <td className="col-2">
                                                        <input type="text" readOnly className="form-control" id="staticEmail" value="total" />
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
                </fieldset>

            </div>


        );
    }
}

export default Rca;
