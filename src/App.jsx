import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './assets/componentes/Header';
import ContainerCards from './assets/componentes/ContainerCards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='d-flex justify-content-center gap-3 flex-wrap'>
        <ContainerCards />
        <ContainerCards />
        <ContainerCards />
        <ContainerCards />
        <ContainerCards />
      </div>
    </>
  )
}

export default App
