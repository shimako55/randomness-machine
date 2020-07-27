// (1) import層
import React from 'react'
import tw, { styled } from 'twin.macro'

// (2) Types層
type ContainerProps = {}
type Props = {}

// (3) DOM層
const Component: React.FCX<Props> = () => (
  <div tw="flex px-6 py-3 w-full z-50 border border-gray-600 fixed bottom-0 bg-white container">
    <div tw="block">
      <button tw="flex items-center px-3 py-2 text-gray-600 hover:text-white hover:border-white">
        <img src="/svg/menu.svg" alt="menu" />
      </button>
    </div>
    <div tw="block pl-4">
      <button tw="flex items-center px-3 py-2 text-gray-600 hover:text-white hover:border-white">
        <img src="/svg/share.svg" alt="share" />
      </button>
    </div>
    <div tw="block pl-4">
      <button tw="flex items-center px-3 py-2 text-gray-600 hover:text-white hover:border-white">
        <img src="/svg/star.svg" alt="share" />
      </button>
    </div>
    <div tw="block pl-4">
      <button tw="flex items-center px-3 py-2 text-gray-600 hover:text-white hover:border-white">
        <img src="/svg/search.svg" alt="share" />
      </button>
    </div>
  </div>
)

// (4) Style層

// (5) Container層
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
