import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, Sort, PizzaBlock, PizzaLoadingBlock } from '../components'
import { setCategory, setSortBy } from '../redux/actions/filters'

import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  console.log(category, sortBy)

  React.useEffect(() => {
    console.log('ec')
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames} />
        <Sort sortBy={sortBy.type} onClickSortType={onSelectSortType}
          items={[
            { name: 'популярности', type: 'popular', order: 'desc' },
            { name: 'цене', type: 'price', order: 'desc' },
            { name: 'алфавиту', type: 'name', order: 'asc' }
          ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
            : Array(12).fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)
        }

      </div>
    </div>
  )
}

export default Home
