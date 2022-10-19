import React, { Component } from 'react'
import ReactInputMask from 'react-input-mask'
import './styles.css'
import icon from './add.png'
import axios from 'axios'


const stGen = {
    marginbottom: "-50px"
}

const stEnd1 = {
    display: "flex",
    justifyContent: "spaceBetween"
}

const stEnd2 = {
    width: "60%",
    paddingLeft: "0"
}

const stEnd3 = {
    width: "40%",
    paddingRight: "0"
}

const stEnd4 = {
    left: "60%"
}


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

    handleFile(e) {
        let file = e.target.files[0]
        this.setState({ file: file })


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
                    <div className="inputBox" style={stGen}>
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

                    <div className="inputBox">
                        <ReactInputMask mask="(99)99999-9999"
                            type="text" name="tel"
                            id="telefone"
                            className="inputUser"
                            autoComplete="off"
                            value={this.state.tel}
                            onChange={e => this.setState({ tel: e.target.value })} />
                        <label htmlFor="telefone" className="labelInput">Telefone</label>
                    </div>

                    <div className="inputBox">
                        <ReactInputMask mask="999.999.999-99"
                            type="text" name="cpf" className="inputUser"
                            id="input_cpf"
                            autoComplete="off"
                            value={this.state.cpf}
                            onChange={e => this.setState({ cpf: e.target.value })} />
                        <label htmlFor="cpf" className="labelInput">CPF</label>
                    </div>

                    <div className="inputBox">
                        <ReactInputMask mask="99.999.999/9999-99" type="text" name="cnpj"
                            id="cnpj" className="inputUser"
                            value={this.state.cnpj}
                            onChange={e => this.setState({ cnpj: e.target.value })} />
                        <label htmlFor="cnpj" className="labelInput">CNPJ</label>
                    </div>
                    <div className="inputBox" style={stGen}>
                        Sexo:
                        <div className="radio" value={this.state.sex}
                            onChange={e => this.setState({ sex: e.target.value })}>
                            <div className="input_div">
                                <label htmlFor="feminino">Feminino</label>
                                <input type="radio" id="feminino" name="genero" value="feminino"
                                />
                            </div>

                            <div className="input_div">
                                <label htmlFor="masculino">Masculino</label>
                                <input type="radio" id="masculino" name="genero" value="masculino" />
                            </div>

                            <div className="input_div">
                                <label htmlFor="outros">Outro</label>
                                <input type="radio" id="outros" name="genero" value="outros" />
                            </div>
                        </div>
                    </div>


                    <div id="nascimento" className="inputBox">
                        <label htmlFor="datan_ascimento"><b>Data de Nascimento:</b></label>
                        <input type="date"
                            name="bDate"
                            id="data_nascimento"
                            value={this.state.bDate}
                            onChange={e => this.setState({ bDate: e.target.value })} />
                    </div>



                    <div className="inputBox">
                        <ReactInputMask mask="99999-999" type="text" name="cep"
                            id="cep" className="inputUser"
                            value={this.state.cep}
                            onChange={e => this.setState({ cep: e.target.value })} />
                        <label htmlFor="cep" className="labelInput">CEP</label>
                    </div>

                    <div className="inputBox" style={stEnd1}>
                        <div style={stEnd2}>
                            <input type="text" name="endereco" id="endereco" className="inputUser"
                                autoComplete="off"
                                value={this.state.endereco}
                                onChange={e => this.setState({ endereco: e.target.value })} />
                            <label htmlFor="endereco" className="labelInput">Endereço</label>
                        </div>

                        <div style={stEnd3}>
                            <input type="number" name="num" id="numero" className="inputUser"
                                autoComplete="off"
                                value={this.state.num}
                                onChange={e => this.setState({ num: e.target.value })} />
                            <label htmlFor="numero" className="labelInput" style={stEnd4}>N°</label>
                        </div>
                    </div>

                    <div className="inputBox">
                        <input type="text" name="bairro" id="bairro" className="inputUser"
                            autoComplete="off"
                            value={this.state.bairro}
                            onChange={e => this.setState({ bairro: e.target.value })} />
                        <label htmlFor="bairro" className="labelInput">Bairro</label>
                    </div>

                    <div className="inputBox">
                        <input type="text" name="cidade" id="cidade" className="inputUser"
                            autoComplete="off"
                            value={this.state.cidade}
                            onChange={e => this.setState({ cidade: e.target.value })} />
                        <label htmlFor="cidade" className="labelInput">Cidade</label>
                    </div>

                    <div className="inputBox">
                        <input type="text" name="estado" id="estado" className="inputUser"
                            autoComplete="off"
                            value={this.state.estado}
                            onChange={e => this.setState({ estado: e.target.value })} />
                        <label htmlFor="estado" className="labelInput">Estado</label>
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



                                    <div className="arquivos">
                                        <div className="inputBox">
                                            <span>Identidade (Anexo):*</span>
                                            <div className="inputFile">

                                                <label className="labelArquivos" htmlFor="identidade" id="identidade_L">
                                                    <img className="imageInput" src={icon} alt="ident" />

                                                </label>
                                                <input type="file" id="identidade"

                                                    onChange={(e) => this.handleFile(e)} />

                                            </div>
                                        </div>
                                    </div>
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
