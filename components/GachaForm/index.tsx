// (1) import層
import React from 'react'
import { NextPage } from 'next'
import { Gacha } from '@/hooks/useGacha'
import tw, { styled } from 'twin.macro'

// (2) Types層

// (2) Types層
type Props = {
  handleSubmit: () => void
  formRef: React.RefObject<HTMLFormElement>
  gacha?: Gacha
  title: string
}

// (3) DOM層
const Component: React.FCX<Props> = ({
  handleSubmit,
  formRef,
  gacha,
  title
}) => (
  <div>
    <form
      tw="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault()
        return handleSubmit()
      }}
    >
      <p tw="text-gray-800 font-medium">{title} Gacha</p>
      <div>
        <label tw="block text-sm text-gray-100">Title</label>
        <input
          tw="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          name="gachaTitle"
          defaultValue={gacha?.title || ''}
          type="text"
          required
        />
      </div>
      <div>
        <label tw="block text-sm text-gray-100">Image url</label>
        <input
          tw="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          name="imageUrl"
          defaultValue={gacha?.imageUrl || ''}
          type="text"
          required
        />
      </div>
      <div>
        <label tw="block text-sm text-gray-100">Count</label>
        <input
          tw="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
          name="count"
          type="number"
          defaultValue={gacha?.count || 1}
          required
        />
      </div>
      <div tw="mt-4">
        <button
          tw="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          type="submit"
        >
          SAVE
        </button>
      </div>
    </form>
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)``

// (5) Container層
const Page: NextPage<Props> = (props) => {
  return <StyledComponent {...props} />
}

export default Page
