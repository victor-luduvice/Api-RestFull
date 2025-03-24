import { use, useState, useRef } from 'react'
import { useEffect } from 'react'
import './style.css'
import api from '../src/services/api'

function home() {
  const useres = [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function = creatUsers{
    //const useresFormApi = await api.get('/usuarios')

    setUsers(useresFormApi.data)

  }
}

async function getUser() {
  const useresFormApi = await api.get('/usuarios')

  setUsers(useresFormApi.data)

  useEffect(() => {
    getUser()
  }, [])

}
  }

const users = [
  {
    id: '42364917',
    name: 'gio',
    idade: 23,
    email: 'gio@test.com'
  },

  {
    id: '485749105',
    name: 'diego',
    idade: 28,
    email: 'digo@test.com'
  }
]

return (

  <div className='conteiner'>
    <form action="">
      <h1>Cadastro de Usuários</h1>
      <input placeholder="Nome" name='nome' type='text' ref={inputName} />
      <input placeholder="Idade" name='idade' type='number' ref={inputAge} />
      <input placeholder="Email" name='email' type='email' ref={inputEmail} />
      <button type='button' onClick={creatUsers}>Cadastrar</button>
    </form>

    {users.map(user => (
      <div key={user.id} className='card'>
        <div>
          <p>Nome:  <span>{user.name}</span></p>
          <p>Idade: <span>{user.idade}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button> </button>
      </div>
    ))}


  </div>

)
}

export default home
