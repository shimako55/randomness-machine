// (1) import層
import React from 'react'
import { Gacha } from '@/hooks/useGacha'
import tw, { styled } from 'twin.macro'

// (2) Types層
type Props = {
  gacha: Gacha
}
type ContainerProps = Props & {}

// (3) DOM層
const Component: React.FCX<Props> = ({ className, gacha }) => (
  <div className={className}>
    <article tw="overflow-hidden rounded-lg shadow-lg">
      <img alt="Placeholder" tw="block h-auto w-full" src={gacha.imageUrl} />

      <header tw="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 tw="text-lg">
          <span tw="no-underline hover:underline text-black">
            {gacha.title}
          </span>
        </h1>
        <p tw="text-gray-700 text-sm">{gacha.count}</p>
      </header>
    </article>
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)``

// (5) Container層
const Container: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export default Container
