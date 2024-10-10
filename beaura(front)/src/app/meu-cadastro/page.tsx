import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

export default function Page() {
    return <><Header/>
    <div className="relative flex-grow">
        <div className="relative z-10 container mx-auto py-12">
            <h1 className="text-3xl font-bold pb-10 grid place-items-center text-purple-950">
                Meu Cadastro
            </h1>
            <form className="px-3">
                <fieldset className="p-5 mx-auto mb-5 pb-5 border-2 border-purple-950 font-bold text-purple-950">
                    <legend>Dados Pessoais</legend>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>   
                            <label htmlFor="cad_nome" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Nome</label>
                            <input type="text" id="cad_nome" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                        </div>
                        <div>
                            <label htmlFor="cad_sobrenome" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Sobrenome</label>
                            <input type="text" id="cad_sobrenome" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                        </div>
                        <div>
                            <label htmlFor="cad_rg" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">RG</label>
                            <input type="text" id="cad_rg" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                        </div>
                        <div>
                            <label htmlFor="cad_cpf" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">CPF</label>
                            <input type="number" id="cad_cpf" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required />
                        </div>
                        <div>
                            <label htmlFor="cad_dataNascimento" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Data de Nascimento</label>
                            <input type="date" id="cad_dataNascimento" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                        </div>
                        <div>
                            <label htmlFor="cad_idade" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Idade</label>
                            <input type="number" id="cad_idade" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required />
                        </div>
                        
                    </div>
                    <div className='grid grid-cols-3 gap-3'>
                        <div>
                            <label htmlFor="cad_sexo" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Sexo</label>
                            <select name="cad_sexo" id="cad_sexo" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required>
                                <option value="" disabled selected>-- SELECIONE --</option>
                                <option value="MASCULINO">MASCULINO</option>
                                <option value="FEMININO">FEMININO</option>
                                <option value="INDEFINIDO">PREFIRO NÃO INFORMAR</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cad_escolaridade" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Escolaridade</label>
                            <select name="cad_escolaridade" id="cad_escolaridade" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required>
                                <option value="" disabled selected>-- SELECIONE --</option>
                                <option value="Ensino Fundamental">ENSINO FUNDAMENTAL</option>
                                <option value="Ensino Medio">ENSINO MÉDIO</option>
                                <option value="Ensino Superior">ENSINO SUPERIOR</option>
                                <option value="Ensino Fundamental Incompleto">ENSINO FUNDAMENTAL INCOMPLETO</option>
                                <option value="Ensino Medio Incompleto">ENSINO MÉDIO INCOMPLETO</option>
                                <option value="Ensino Superior Incompleto">ENSINO SUPERIOR INCOMPLETO</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cad_profissao" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Profissão</label>
                            <input type="text" id="cad_profissao" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <label htmlFor="cad_estadoCivil" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Estado Civil</label>
                            <select name="cad_estadoCivil" id="cad_estadoCivil" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required>
                                <option value="" disabled selected>-- SELECIONE --</option>
                                <option value="SOLTEIRO">SOLTEIRO</option>
                                <option value="CASADO">CASADO</option>
                                <option value="SEPARADO">SEPARADO</option>
                                <option value="DIVORCIADO">DIVORCIADO</option>
                                <option value="VIÚVO">VIÚVO</option>
                                <option value="AMASIADO">AMASIADO</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cad_filhos" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Estado Civil</label>
                            <select name="cad_filhos" id="cad_filhos" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required>
                                <option value="" disabled selected>-- SELECIONE --</option>
                                <option value="SIM">SIM</option>
                                <option value="NÃO">NÃO</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="p-5 mx-auto mb-5 pb-5 border-2 border-purple-950 font-bold text-purple-950">
                    <legend>Endereço</legend>
                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="cad_rua" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Rua</label>
                                <input type="text" id="cad_rua" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                            </div>
                            <div>
                                <label htmlFor="cad_numero" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Número</label>
                                <input type="number" id="cad_numero" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required />
                            </div>
                            <div>
                                <label htmlFor="cad_complemento" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Complemento (Opcional)</label>
                                <input type="text" id="cad_complemento" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                            </div> 
                            <div>
                                <label htmlFor="cad_cep" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">CEP</label>
                                <input type="text" id="cad_cep" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-5'>
                            <div>
                                <label htmlFor="cad_bairro" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Bairro</label>
                                <input type="text" id="cad_bairro" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                            </div>
                            <div>
                                <label htmlFor="cad_cidade" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Cidade</label>
                                <input type="text" id="cad_cidade" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 uppercase" required />
                            </div>
                            <div>
                                <label htmlFor="cad_uf" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">UF</label>
                                <select id="cad_uf" name="cad_uf" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" required>
                                    <option value="" disabled selected>-- SELECIONE --</option>
                                    <option value="AC">ACRE</option>
                                    <option value="AL">ALAGOAS</option>
                                    <option value="AP">AMAPÁ</option>
                                    <option value="AM">AMAZONAS</option>
                                    <option value="BA">BAHIA</option>
                                    <option value="CE">CEARÁ</option>
                                    <option value="DF">DISTRITO FEDERAL</option>
                                    <option value="ES">ESPÍRITO SANTO</option>
                                    <option value="GO">GOIÁS</option>
                                    <option value="MA">MARANHÃO</option>
                                    <option value="MT">MATO GROSSO</option>
                                    <option value="MS">MATO GROSSO DO SUL</option>
                                    <option value="MG">MINAS GERAIS</option>
                                    <option value="PA">PARÁ</option>
                                    <option value="PB">PARAÍBA</option>
                                    <option value="PR">PARANÁ</option>
                                    <option value="PE">PERNAMBUCO</option>
                                    <option value="PI">PIAUÍ</option>
                                    <option value="RJ">RIO DE JANEIRO</option>
                                    <option value="RN">RIO GRANDE DO NORTE</option>
                                    <option value="RS">RIO GRANDE DO SUL</option>
                                    <option value="RO">RONDÔNIA</option>
                                    <option value="RR">RORAIMA</option>
                                    <option value="SC">SANTA CATARINA</option>
                                    <option value="SP">SÃO PAULO</option>
                                    <option value="SE">SERGIPE</option>
                                    <option value="TO">TOCANTINS</option>
                                </select>
                            </div>
                        </div>
                </fieldset>
                <fieldset className="p-5 mx-auto mb-5 pb-5 border-2 border-purple-950 font-bold text-purple-950">
                    <legend>Contato</legend>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>   
                            <label htmlFor="cad_celular" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Celular</label>
                            <input type="number" id="cad_celular" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="cad_telefone" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Telefone Residencial</label>
                            <input type="number" id="cad_telefone" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="cad_emergencia" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Telefone de Emergência (Opcional)</label>
                            <input type="number" id="cad_emergencia" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="cad_contato" className="block mb-2 text-lg font-bold text-purple-950 dark:text-purple-950">Contato Emergência (Opcional)</label>
                            <input type="text" id="cad_contato" className="bg-white border-2 border-purple-950 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-purple-950 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase" />
                        </div>
                    </div>
                </fieldset>
                <div className='grid grid-cols-2 gap-5'>
                    <button type="submit" className="text-white bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-5 text-center dark:bg-purple-600 dark:hover:bg-purple-500 dark:focus:ring-blue-800 mt-6">Salvar</button>
                    <button type="submit" className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-5 text-center dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800 mt-6">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
    <Footer/></>
  }