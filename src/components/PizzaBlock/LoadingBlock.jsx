import React from 'react'

import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="133" cy="140" r="110" />
      <rect x="1" y="308" rx="6" ry="6" width="280" height="85" />
      <rect x="1" y="272" rx="6" ry="6" width="280" height="25" />
      <rect x="132" y="405" rx="20" ry="20" width="146" height="34" />
      <rect x="1" y="407" rx="6" ry="6" width="80" height="27" />
    </ContentLoader>
  )
}

export default LoadingBlock