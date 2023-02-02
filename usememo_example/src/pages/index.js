import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useCallback, useMemo, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

function SortedList({ list, sortFunc }) {
  console.log("SortedList render");

  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join(", ")}</div>;
}

export default function Home() {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  // const total = numbers.reduce((acc, curr) => acc + curr, 0)
  const total = useMemo(() => numbers.reduce((acc, curr) => acc + curr, 0), [numbers])

  const [names, setNames] = useState(['Xill', 'Mane', 'Soe', 'John'])
  const [name, setName] = useState('')
  const sortedNames = useMemo(() => [...names].sort(), [names])
  const sortFunc = useCallback((a, b) => a.localeCompare(b), []);
  return (
    <>
    <div>total: {total}</div>
    <div>Names: {names.join(", ")}</div>
    <div>sortedNames: {sortedNames.join(", ")}</div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={() => setNames([...names, name])}>Add Name</button>
    <SortedList list={names} sortFunc={sortFunc} />
    </>
  )
}
