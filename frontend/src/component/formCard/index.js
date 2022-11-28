import React, { Component } from 'react'
import './styles.css'
import axios from 'axios'
import removeIcon from '../../assets/img/red-x-icon.svg'
import InputMask from 'react-input-mask'

import { validEmail, validName } from '../../utils/regex'
import InputText from '../formComponents/inputText'
import InputNum from '../formComponents/inputNum'
import TitleBox from '../formComponents/title'
import InputCnpj from '../formComponents/inputCnpj'



class Rca extends Component {

    state = {
        rows: [{
            nome: '',
            quantidade: ''
        }],
        personalizado: '',
        descricao: '',
        nomeSolicitante: '',
        cargo: '',
        email: '',
        codigo: '',
        clienteNovo: '',
        clientCodigo: '',
        cnpj: '',
        razaoSocial: '',
        solicitar: '',
        obsBoolean: '',
        obs: '',
        emailError: '',
        nameError: '',
        disableField: false,
        buttonText: 'Enviar Solicitação'
    }


    validateEmail = () => {
        const email = this.state.email
        if (validEmail.test(email)) {
            this.setState({ emailError: '' })
        } else {
            this.setState({ emailError: 'E-mail inválido' })
        }
    }

    validateName = () => {
        const nomeSolicitante = this.state.nomeSolicitante
        if (validName.test(nomeSolicitante)) {
            this.setState({ nameError: '' })
        } else {
            this.setState({ nameError: 'Nome inválido' })
        }
    }
       handleChange = e => {
         this.setState({ value: e.target.value });
    }

    handleChangeNome = idx => e => {
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

    handleChangeQuantidade = idx => e => {
        const { value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            ...rows[idx],
            quantidade: value
        };
        this.setState({
            rows
        });
    };

    handleAddRow = () => {
        const item = {
            nome: '',
            quantidade: ''
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };

    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -9)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        this.setState({ disableField: true })
        this.setState({ buttonText: 'Enviando...' })


        let formData = new FormData()
        let data = new Date()
        let dataSolicitacao = (data.toLocaleString('en-GB'))


        if (this.state.solicitar === 'personalizado') {
            let solicitacao = new Blob([JSON.stringify({
                dataSolicitacao: dataSolicitacao,
                nomeSolicitante: this.state.nomeSolicitante,
                email: this.state.email,
                cargo: this.state.cargo,
                codigo: this.state.codigo,
                clienteNovo: this.state.clienteNovo,
                clientCodigo: this.state.clientCodigo,
                cnpj: this.state.cnpj,
                razaoSocial: this.state.razaoSocial,
                solicitar: this.state.solicitar,
                marca: this.state.personalizado,
                descricao: this.state.descricao,

                obs: this.state.obs
            })], {
                type: 'application/json'
            })
            formData.append('solicitacao', solicitacao)
        }

        if (this.state.solicitar === 'brinde' || 'mpdv') {
            let solicitacao = new Blob([JSON.stringify({
                dataSolicitacao: dataSolicitacao,
                nomeSolicitante: this.state.nomeSolicitante,
                email: this.state.email,
                cargo: this.state.cargo,
                codigo: this.state.codigo,
                clienteNovo: this.state.clienteNovo,
                clientCodigo: this.state.clientCodigo,
                cnpj: this.state.cnpj,
                razaoSocial: this.state.razaoSocial,
                solicitar: this.state.solicitar,
                produtos: this.state.rows,
                obs: this.state.obs
            })], {
                type: 'application/json'
            })
            formData.append('solicitacao', solicitacao)
        }


        this.state.disableField = true
        try {
            await axios({
                method: 'post',
                url: 'https://pedido-brinde-mysql.herokuapp.com/pedido',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            window.location.reload(false);
            return alert('Obrigado ' + this.state.nomeSolicitante + ' ! \nSua solicitação foi enviada com sucesso!');

        }
        catch {
            window.location.reload(false);
            return alert('Ocorreu algum erro :( \nPor favor entre em contato com o Suporte a Vendas.')
        }
    }

    render() {
        const { cargo } = this.state;
        const { solicitar } = this.state;
        const { obsBoolean } = this.state


        return (

            <div className='cardContainter'>

                <div className='dark'>

                    <form onSubmit={this.handleSubmit}
                    >
                        <legend className='title'>Solicitação de Brinde e MPDV</legend>

                        {/*////////////////////Aqui começa a solicitação de dados do solicitante /////////////*/}

                        <TitleBox title='Dados do solicitante'
                            subtitle='Aqui você deve informar os seus dados para identificação e contato.' />

                        <InputText
                            label='*Nome Solicitante'
                            htmlFor='nomeSolicitante'
                            id='nomSolicitante'
                            maxLength={45}
                            value={this.state.nomeSolicitante}
                            onBlur={this.validateName}
                            disabled={this.state.disableField}
                            onChange={e => this.setState({ nomeSolicitante: e.target.value })} />
                        <span style={{
                            color: 'red',
                        }}> {this.state.nameError}</span>

                        <div className='inputRadioBox' >
                            <div onChange={e => this.setState({ cargo: e.target.value })}
                                onClick={e => this.setState({ codigo: '' })}
                            >
                                <label>*Você é:</label>
                                <div className='input_div'>
                                    <input type='radio' id='gerente' name='area' value='gerente'
                                        disabled={this.state.disableField} />
                                    <label htmlFor='gerente' >Gerente</label>
                                </div>

                                <div className='input_div'>
                                    <input type='radio' id='representante' name='area' value='representante'
                                        disabled={this.state.disableField} />
                                    <label htmlFor='representante'>Representante</label>
                                </div>

                                <div className='input_div'>
                                    <input type='radio' id='outros' name='area' value='interno'
                                        disabled={this.state.disableField} />
                                    <label htmlFor='outros'>Cliente interno</label>
                                </div>
                            </div>
                        </div>

                        {cargo === 'representante' && (
                            <InputNum
                                label='*Código de Representante'
                                htmlFor='rcaCodigo'
                                mask='9999'
                                id='rcaCodigo'
                                value={this.state.codigo}
                                disabled={this.state.disableField}
                                onChange={e => this.setState({ codigo: e.target.value })} />
                        )}

                        {cargo === 'gerente' && (
                            <InputNum
                                label='*Código de Gerente'
                                htmlFor='gerenteCodigo'
                                id='gerenteCodigo'
                                mask='99'
                                value={this.state.codigo}
                                disabled={this.state.disableField}
                                onChange={e => this.setState({ codigo: e.target.value })} />
                        )}

                        <InputText
                            label='*E-mail'
                            htmlFor='email'
                            id='email'
                            maxLength={40}
                            value={this.state.email}
                            onBlur={this.validateEmail}
                            disabled={this.state.disableField}
                            onChange={e => this.setState({ email: e.target.value })} />
                        <span style={{
                            color: 'red',
                        }}> {this.state.emailError}</span>

                        {/*//////////Aqui termina a solicitação de dados do solicitante///////////////////// */}


                        {/*//////////Aqui começa a solicitação de dados do cliente //////////////////////////*/}

                        <TitleBox title='Dados do cliente'
                            subtitle='Aqui você deve informar os dados do cliente que receberá os rows solicitados.' />

                        <div className='inputRadioBox'>
                            <div className='radio' value={this.state.clienteNovo}
                                onChange={e => this.setState({ clienteNovo: e.target.value })}>
                                <label htmlFor='nome' className='labelInpu'>*Cliente novo?</label>
                                <div className='input_div'>
                                    <input type='radio' id='sim' name='clienteNovo' value='Sim'
                                        disabled={this.state.disableField} />
                                    <label htmlFor='sim'>Sim</label>
                                </div>
                                <div className='input_div'>
                                    <input type='radio' id='nao' name='clienteNovo' value='Nao'
                                        disabled={this.state.disableField} />
                                    <label htmlFor='nao'>Não</label>
                                </div>
                            </div>
                        </div>

                        <InputNum
                            label='*Código do Cliente'
                            htmlFor='clientCodigo'
                            id='clientCodigo'
                            mask='99999'
                            value={this.state.clientCodigo}
                            disabled={this.state.disableField}
                            onChange={e => this.setState({ clientCodigo: e.target.value })} />


                        <InputCnpj
                            value={this.state.cnpj}
                            disabled={this.state.disableField}
                            onChange={e => this.setState({ cnpj: e.target.value })} />

                        <InputText
                            label='*Razão Social'
                            htmlFor='razaoSocial'
                            id='razaoSocial'
                            disabled={this.state.disableField}
                            value={this.state.razaoSocial}
                            onChange={e => this.setState({ razaoSocial: e.target.value })} />


                {/*//////////Aqui termina a solicitação de dados do cliente///////////////////// */}

                {/*//////////Aqui começa a solicitação de dados dos produtos///////////////////// */}

                <div className='inputRadioBox'>
                    <div className='radio' value={this.state.solicitar}
                        onChange={e => this.setState({ solicitar: e.target.value })}
                        onClick={e => this.handleRemoveRow(e)}
                    >
                        <label>*Solicitar:</label>
                        <div className='input_div'>
                            <input type='radio' id='brinde' name='tipo' value='brinde'

                                disabled={this.state.disableField} />
                            <label htmlFor='brinde'>Brinde</label>
                        </div>

                        <div className='input_div'>
                            <input type='radio' id='mpdv' name='tipo' value='mpdv'

                                disabled={this.state.disableField} />
                            <label htmlFor='mpdv'>MPDV</label>
                        </div>

                        <div className='input_div'>
                            <input type='radio' id='personalizado' name='tipo' value='personalizado'

                                disabled={this.state.disableField} />
                            <label htmlFor='personalizado'>Personalizados</label>
                        </div>
                    </div>
                </div>


                {/*//////////Aqui começa a TABELA de dados dos BRINDES///////////////////// */}

                {solicitar === 'brinde' && (
                    <div>

                        <h3>Informações do brinde</h3>
                        <div className='tableContainer'>

                            <table

                                id='tab_logic'
                            >
                                <thead>
                                    <tr>
                                        <th className='text-center'> Item </th>
                                        <th className='text-center'> Qnt. </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.rows.map((item, idx) => (
                                        <tr id='addr0' key={idx}>

                                            <td>
                                                <select
                                                    type='text'
                                                    name='nome'
                                                    value={this.state.rows[idx].nome}
                                                    onChange={this.handleChangeNome(idx)}
                                                    className='inputTable'
                                                    disabled={this.state.disableField}
                                                >
                                                    <option></option>
                                                    <option>Caixinha de Som</option>
                                                    <option>Chaveiro Abridor | Rayco</option>
                                                    <option>Chaveiro Lanterna | Rayco</option>
                                                    <option>Catálogo Kian 2021</option>
                                                    <option>Catálogo Rayco 2020</option>
                                                    <option>Ecobag Vermelha | Kian</option>
                                                    <option>Sacola de Papel Rayco/kian</option>
                                                </select>
                                            </td>
                                            <td>
                                                <InputMask mask='999'
                                                    type='text'
                                                    inputMode='numeric'

                                                    name='quantidade'
                                                    autoComplete='off'
                                                    disabled={this.state.disableField}
                                                    value={this.state.rows[idx].quantidade}
                                                    onChange={this.handleChangeQuantidade(idx)}
                                                    className='inputTable2' />
                                            </td>

                                            <td>
                                                <button
                                                    className='tdRemoveBtn'
                                                    disabled={this.state.disableField}
                                                    onClick={this.handleRemoveSpecificRow(idx)}>
                                                    <img src={removeIcon} alt='Remover' />
                                                </button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <button type='button' className='btnAdicionar'
                                disabled={this.state.disableField}
                                onClick={this.handleAddRow} >
                                Adicionar itens
                            </button>

                        </div>
                    </div>
                )}

                {/*//////////Aqui termina a TABELA de dados dos BRINDES///////////////////// */}

                {/*//////////Aqui começa a TABELA de dados dos MPDV///////////////////// */}

                {solicitar === 'mpdv' && (
                    <div>

                        <h3>MPDV</h3>
                        <div className='tableContainer'>

                            <table
                                id='tab_logic'>
                                <thead>
                                    <tr>
                                        <th className='text-center'> MPDV Solicitado </th>
                                        <th className='text-center'> Qnt. </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.rows.map((item, idx) => (
                                        <tr id='addr0' key={idx}>

                                            <td>
                                                <select
                                                    type='text'
                                                    name='nome'
                                                    value={this.state.rows[idx].nome}
                                                    onChange={this.handleChangeNome(idx)}
                                                    className='inputTable'
                                                    disabled={this.state.disableField}
                                                >

                                                    <option></option>
                                                    <option>8904 – EXPOSITOR MANGUEIRA LUM C/6 SUP KIAN</option>
                                                    <option>8905 – DISPLAY BALCAO SIMPL 6 GANCHOS</option>
                                                    <option>9053 - CESTO EM PLASTIONDAS 0,74X1,0 C/DIVISAO</option>
                                                    <option>9054 - STOPER 0,15 X 0 30 CM</option>
                                                    <option>9056 - CLIP STRIP 1M EM PVC FLEXIVEL</option>
                                                    <option>9059 - WOBBLER 10 CM FLEXÍVEL</option>
                                                    <option>10053 - TESTADOR PEQUENO P/ LAMP. E-27 KIAN</option>
                                                    <option>10157 - EXPOSITOR CHAO SIMPL C/20G C/ TEST KIAN</option>
                                                    <option>10517 - PLASTICO FORRACAO 40CMX25M KIAN</option>
                                                    <option>10518 - ADESIVO DE CHÃO </option>
                                                    <option>13196 - EXPOSITOR ARAMADO 25G  C/CESTO RAYCO</option>
                                                    <option>13197 - EXPOSITOR SLAT WALL  MDF  25G RAYCO</option>
                                                    <option>13198 - EXPOSITOR DE BROCA RAYCO</option>
                                                    <option>14254 - TESTADOR PEQUENO P/ LAMP C/ 5 BASES</option>
                                                    <option>14255 - PLASTICO FORRACAO 40CMX50M KIAN</option>
                                                    <option>15303 - CLIP STRIP PILHA</option>
                                                    <option>15304 - EXPOSITOR BACÃO PILHAS</option>
                                                    <option>15305 - EXPOSITOR DE CHÃO PILHAS</option>
                                                </select>
                                            </td>
                                            <td>
                                                <InputMask mask='999'
                                                    type='text'
                                                    inputMode='numeric'

                                                    name='quantidade'
                                                    autoComplete='off'
                                                    disabled={this.state.disableField}
                                                    value={this.state.rows[idx].quantidade}
                                                    onChange={this.handleChangeQuantidade(idx)}
                                                    className='inputTable2' />
                                            </td>

                                            <td>
                                                <button
                                                    className='tdRemoveBtn'
                                                    onClick={this.handleRemoveSpecificRow(idx)}
                                                    disabled={this.state.disableField}>
                                                    <img src={removeIcon} alt='Remover' />
                                                </button>


                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <button type='button' onClick={this.handleAddRow}
                                disabled={this.state.disableField}
                                className='btnAdicionar'>
                                Adicionar itens
                            </button>

                        </div>
                    </div>
                )}

                {/*//////////Aqui termina a TABELA de dados dos MPDV///////////////////// */}

                {/*//////////Aqui começa o CAMPO de dados do PERSONALIZADO///////////////////// */}

                {solicitar === 'personalizado' && (
                    <div className='descricaoContainer'>
                        <div>
                            <label>*Selecione: </label>
                            <select

                                type='text'
                                name='personalizado'
                                value={this.state.personalizado}
                                disabled={this.state.disableField}
                                onChange={e => this.setState({ personalizado: e.target.value })}
                                className='inputTable3'>
                                <option></option>
                                <option>Espaço Kian</option>
                                <option>Espaço Rayco</option>
                                <option>Outros</option>
                            </select>
                        </div>
                        <div className='descricaoLabel'>
                            <label>*Descreva seu pedido:</label>
                            <textarea

                                maxLength={255}
                                className='descricaoBox'
                                type='text'
                                name='descricao'
                                autoComplete='off'
                                disabled={this.state.disableField}
                                value={this.state.descricao}
                                onChange={e => this.setState({ descricao: e.target.value })} />
                        </div>
                    </div>
                )}

                {/*//////////Aqui termina o CAMPO de dados do PERSONALIZADO///////////////////// */}

                {/*//////////Aqui começa o CAMPO de OBSERVAÇÃO///////////////////// */}

                <div className='inputRadioBox'>
                    <div className='radio'
                        value={this.state.obsBoolean}
                        onChange={e => this.setState({ obsBoolean: e.target.value })}>
                        <label className='labelInpu'>*Deseja fazer alguma observação?</label>
                        <div className='input_div'>
                            <input type='radio' id='ObsSim' name='obsBoolean' value='obsSim'

                                disabled={this.state.disableField} />
                            <label htmlFor='ObsSim'>Sim</label>
                        </div>
                        <div className='input_div'>
                            <input type='radio' id='obsNao' name='obsBoolean' value='obsNao'

                                disabled={this.state.disableField} />
                            <label htmlFor='obsNao'>Não</label>
                        </div>
                    </div>
                </div>

                {obsBoolean === 'obsSim' && (

                    <div className='descricaoContainer'>

                        <div className='descricaoLabel'>
                            <label>Observação:</label>
                            <textarea className='descricaoBox'

                                type='text'
                                maxLength={500}
                                name='obs'
                                autoComplete='off'
                                disabled={this.state.disableField}
                                value={this.state.obs}
                                onChange={e => this.setState({ obs: e.target.value })} />
                        </div>
                    </div>
                )}


                {/*//////////Aqui TERMINA o CAMPO de OBSERVAÇÃO///////////////////// */}

                <input type='submit' name='myButton' value={this.state.buttonText} disabled={this.state.disableField} />


            </form>
                </div >

            </div >



        );
    }
}

export default Rca;
