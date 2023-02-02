import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

function Home() {

  const [count, setCount] = useState(0);
  const [list, setList] = useState(["John Doe", "Jane Doe", "Joe Doe"]);
  const [name, setName] = useState(() => "");


  const updateCount = () =>  {
    setCount(count + 1);
  }

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  }

  return (
    <div style={{position:"absolute", top:"50%", left:"50%"}}>
      <button style={{paddingLeft: "20px", paddingRight: "20px"}} onClick={updateCount}>Count = {count}</button>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onAddName}>Add New NAme</button>
    </div>
  )
}

export default Home;