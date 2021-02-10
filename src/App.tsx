import React, { useState, useEffect } from 'react'
import './App.scss'
// import { data } from './data'
import axios from 'axios'

interface dataItem {
  id: number
  name: string
  status: string
  species: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

const App: React.FC = () => {
  const [data, setData] = useState<dataItem[]>([])

  useEffect(() => {
    const random:number = Math.floor(Math.random() * 651)
    const randomTopRange: number = random + 20
    axios.get<any>(`https://rickandmortyapi.com/api/character/${random},${randomTopRange}`)
      .then(response => setData(response.data))
      .catch(err => console.error(err))
  },[])

  
  const dataJsx = data.map((item: dataItem) => {
    return (
    <div key={item.name} className='data-card'>
      <div className='image-container'>
        <img src={item.image} alt={item.name} />
        <div className='name-container'>
          <h5>{item.name}</h5>
        </div>
      </div>
      <div className='character-data'>
        <div className='character-data-item'>
          <div>STATUS</div>
          <div>{item.status}</div>
        </div>
        <div className='character-data-item'>
          <div>SPECIES</div>
          <div>{item.species}</div>
        </div>
        <div className='character-data-item'>
          <div>GENDER</div>
          <div>{item.gender}</div>
        </div>
        <div className='character-data-item'>
          <div>ORIGIN</div>
          <div>{item.origin.name}</div>
        </div>
        <div className='character-data-item'>
          <div>LAST LOCATION</div>
          <div>{item.location.name}</div>
        </div>
      </div>
    </div>
    )
  })
  return (
    <main>
      <div className='title'>
        <h1>Rick and Morty</h1>
        <div>
          <h3 className='sub-title'>Hey, did you ever want to hold a Terry fold?</h3>
        </div>
      </div>
      <div className='data-grid'>
        {dataJsx}
      </div>
    </main>
  )
}

export default App;
