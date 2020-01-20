import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante de aplicacao
// Propriedade: Informacoes que um componente PAI passa para o componente FILHO
// Estado: Informacoes mantidas pelo componente (Lembrar: imutabilidade) nunca alterar um valor e sim criar um novo a partir dele

function App() {

  const [devs, setDevs] = useState([]) // Ja que sao varios devs e bom usar um array caso contrario deixa uma string vazia

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }
    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]) // criei um novo array, copiei todos os devs que eu ja tenho e vou adicionar esse novo no final com response.data
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => ( // isso e a mesma coisa que return() mas de forma simplificada
            <DevItem key={dev._id} dev={dev} /> // Estou passando uma propridade chamada dev (props.dev)
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
