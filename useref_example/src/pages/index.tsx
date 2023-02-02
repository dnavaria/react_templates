import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    inputRef.current!.focus();
  }, []);
  
  const idRef = useRef(3);
  const [names, setNames] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);

  const onAddName = () => {
    setNames([
      ...names,
      {
        id: idRef.current++,
        name: inputRef.current!.value  ,
      },
    ]);
    inputRef.current!.value = "";
  };
  return (
    <>
      <div>
        {names.map((name) => (
          <div key={name.name}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    
    </>
  )
}
