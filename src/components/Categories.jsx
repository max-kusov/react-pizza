import React from 'react'

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(0)

  return (
    <>
      <div className="categories">
        <ul>
          {items && items.map((item, i) =>
            <li className={activeItem === i ? 'active' : ''}
              onClick={() => {
                setActiveItem(i)
              }} key={Math.random()}>{item}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Categories
