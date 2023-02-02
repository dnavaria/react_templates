import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useReducer } from 'react'

const inter = Inter({ subsets: ['latin'] })

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state, ...action
    }),
    {
      first: "",
      last: "",
    }
  )
  return (
    <div>
      <input type="text" value={state.first} onChange={(e) => dispatch({ first: e.target.value })} />
      <input type="text" value={state.last} onChange={(e) => dispatch({ last: e.target.value })} />
      <p>{state.first} {state.last}</p>
    </div>

  )
}



const NameList = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.name }
      case 'ADD_NAME':
        return { ...state, names: [...state.names, action.name] }
      case 'REMOVE_NAME':
        return { ...state, names: state.names.filter((name) => name !== action.name) }
      default:
        return state
    }
  }, { names: [], name: "", })
  return (
    <>
      <div>
        <input type="text" value={state.name} onChange={(e) => dispatch({ type: 'SET_NAME', name: e.target.value })} />
        <button onClick={() => dispatch({ type: 'ADD_NAME', name: state.name })}>Add</button>
        <ul>
          {state.names.map((name) => (
            <li key={name}>
              {name}
              <button onClick={() => dispatch({ type: 'REMOVE_NAME', name })}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default function Home() {

  return (
    <>
      <UserForm />
      <NameList />
    </>
  )
}
