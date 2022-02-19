import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {
  // const [activeItem, setActiveItem] = React.useState(0)


  return (
    <>
      <div className="categories">
        <ul>
          {items && items.map((item, i) =>
            <li className={activeCategory === i ? 'active' : ''}
              onClick={() => {
                onClickItem(i)
              }} key={Math.random()}>{item}</li>
          )}
        </ul>
      </div>
    </>
  )
})

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired
}
Categories.defaultProps = { activeCategory: 0, items: [] }

export default Categories
