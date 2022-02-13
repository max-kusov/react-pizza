import React from 'react'

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(0)


  return (
    <>
      <div className="categories">
        <ul>
          {items && items.map((item, i) =>
            <li className={activeItem === i ? 'active' : ''}
              onClick={() => {
                setActiveItem(i)
                onClickItem(i)
              }} key={Math.random()}>{item}</li>
          )}
        </ul>
      </div>
    </>
  )
})

export default Categories
