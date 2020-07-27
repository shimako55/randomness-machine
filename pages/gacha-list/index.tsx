// (1) import層
import React from 'react'
import { NextPage } from 'next'
import GachaCard from '@/components/GachaCard'
import { useGacha, Gacha } from '@/hooks/useGacha'
import Link from 'next/link'
import { styled } from 'twin.macro'

// (2) Types層
type ContainerProps = {}
type Props = {
  gachas: Gacha[]
}

// (3) DOM層
const Component: React.FCX<Props> = ({ className, gachas }) => (
  <div className={className}>
    <Link href="/gacha-list/new">
      <a className="testStyle">Craete Gacha</a>
    </Link>
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
      {gachas.map((gacha, index) => (
        <Link href={'/gacha-list/[id]'} as={`/gacha-list/${index}`} key={index}>
          <a className="block my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <GachaCard gacha={gacha} />
          </a>
        </Link>
      ))}
    </div>
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)`
  .testStyle {
    text-decoration: none;
    color: white;
    background-color: red;
    border: 1px solid gray;
    padding: 12px;
  }
`

// (5) Container層
const Page: NextPage<ContainerProps> = (props) => {
  const { gachas } = useGacha()

  return <StyledComponent {...props} gachas={gachas} />
}

export default Page
