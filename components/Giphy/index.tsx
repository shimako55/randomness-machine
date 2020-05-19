// (1) import層
import React from 'react'
import { useGiphy, GifsResultData } from '@/hooks/useGiphy'

// (2) Types層
type ContainerProps = {}
type Props = {
  gifs: GifsResultData
  handleClick: (i: number) => () => void
}

// (3) DOM層
const Component: React.FCX<Props> = ({ gifs, handleClick }) => (
  <div className="flex flex-wrap">
    {gifs.map((gif, index) => (
      <button className="block p-1" key={index} onClick={handleClick(index)}>
        <img src={gif.images.fixed_height.url} alt="gif image" />
      </button>
    ))}
  </div>
)

// (4) Style層

// (5) Container層
const Container: React.FC<ContainerProps> = (props) => {
  const { gifs } = useGiphy()
  console.log(gifs)
  console.log('render giphy')
  const handleClick = (i: number) => () => {
    console.log(i)
  }
  return <Component {...props} gifs={gifs} handleClick={handleClick} />
}

export default React.memo(Container)
