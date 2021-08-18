import React, {Component} from 'react';
import './RegisterUser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Select from 'react-select'

export default class RegisterUser extends Component {
    
    options = [
        { value: 'MG', label: 'MG' },
        { value: 'SP', label: 'SP' },
        { value: 'RJ', label: 'RJ' }
      ]


    handleChange(event) {
        console.log(event.value);
      }

    render() {
        return (
            <main classname="cadastro">
                <h1>Cadastro de Estagiários</h1> 
                <div className="form-group">
                    <div className="campos">
                        <label for="nomeCompleto" className="label">Nome:</label>
                        <input className="form-control" placeholder="Informe seu nome completo" id="nomeCompleto" />
                        </div>
                    <div className="conjunto campos">
                        <label for="cpf" className="label">CPF:</label>
                        <input className="form-control" placeholder="Informe seu CPF" id="cpf" />

                        <label for="cell" className="label">Celular:</label>
                        <input className="form-control" placeholder="Informe seu número de celular" id="cell" />
                    
                        <label for="rg" className="label">RG:</label>
                        <input className="form-control" placeholder="Informe seu RG" id="rg" />
                    
                    </div>
                    <div className="campos">
                        <label for="email" className="label">Email:</label>
                        <input className="form-control" placeholder="Informe seu E-mail"  id="email" />

                        <label for="linkedIn" className="label">LinkedIn:</label>
                        <input className="form-control" placeholder="Informe seu LinkedIn"  id="linkedIn" />
                    </div>
                    <div className="campos">
                        <div className="cep campos">
                            <label for="cep" className="label">CEP:</label>
                            <input className="form-control" placeholder="Informe seu CEP"  id="cep" />
                       </div>
                        <label for="logradouro" className="label">Logradouro:</label>
                        <input className="form-control" placeholder="Informe o seu logradouro ex.: Rua, Avenida e etc.."  id="logradouro" />
                    </div>
                    <div className="conjunto campos">
                        <label for="numero" className="label">Número:</label>
                        <input className="form-control" placeholder="Informe o número de sua residência" id="numero" />

                        <label for="complemento" className="label">Complemento:</label>
                        <input className="form-control" placeholder="Ex.: casa b" id="complemento" />
                    
                        <label for="bairro" className="label">Bairro:</label>
                        <input className="form-control" placeholder="Informe o seu bairro" id="bairro" />
                    
                    </div>
                    <div className="campos" >
                            <label for="cidade">Cidade:</label>
                            <input className="form-control" placeholder="Informe a sua cidade" id="cidade" />
                        
                       
                            <label for="select">Estado:</label>
                            <Select className="select" size={20} id="select" options={this.options} onChange={this.handleChange} />
                        
                       
                    </div>
                </div>
            </main>
        )
    }
}