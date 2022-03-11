import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { HeroCard } from '../hero/HeroCard'
import { useForm } from '../hooks/useForm'
import { getHeroesByName } from '../selectors/getHeroesByName'

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  // console.log(query)

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const { searchText } = formValues

  const heroeFilter = useMemo(() => getHeroesByName(q), [q]) 

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
    // console.log(searchText)
  }

  return (
    <div>
      <h1>Busqueda</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Buscar un Heroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange} />

            <button
              className='btn btn-primary mt-1'
              type='submit'>
              Buscar
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Resultado</h4>
          <hr />
          {
            (q === '')
              ? <div className='alert alert-info'>Buscar un héroe</div>
              : (heroeFilter.length === 0)
              && <div className='alert alert-danger'>No hay Resultado: {q}</div>
          }
          {
            heroeFilter.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
