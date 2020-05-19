// (1) import層
import React from 'react'
import { useGiphy } from '@/hooks/useGiphy'

// (2) Types層
type ContainerProps = {}
type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// (3) DOM層
const Component: React.FCX<Props> = ({ handleChange }) => (
  <>
    <input onChange={handleChange} type="text" />
  </>
)

// (4) Style層

// (5) Container層
const Container: React.FC<ContainerProps> = (props) => {
  console.log('render searcher')
  const { handleChange } = useGiphy()
  return <Component {...props} handleChange={handleChange} />
}

export default React.memo(Container)
