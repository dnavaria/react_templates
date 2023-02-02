import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setTime((t) => {return t+1}), 1000)
    return () => clearInterval(interval)
  }, [time])
  return <div>Time: {time}</div>
}

export default function Home() {
  const [names, setNames] = useState<string[]>([])
  const [selectedName, setSelectedName] = useState<string>("")
  useEffect(() => {
    fetch('/names.json')
      .then((response) => response.json())
      .then((data) => setNames(data))
  }, [])

  const [selectedNameDetails, setSelectedNameDetails] = useState<object | null>(null)

  // useEffect(() => {
  //   if (!selectedName) return
  //   fetch(`/${selectedName}.json`)
  //     .then((response) => response.json())
  //     .then((data) => setSelectedNameDetails(data))
  // }, [selectedName])

  const onSelectedNameChange = (name: string) => {
    if (!name) return
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data))
  }

  return (
    <>
      <div>
        {names.map((name, index) => (
          <button key={index} onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
      <Stopwatch />
    </>
  )
}
