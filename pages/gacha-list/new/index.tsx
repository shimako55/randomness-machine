// (1) import層
import React, { useCallback, useRef, ChangeEvent } from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { useGacha } from '@/hooks/useGacha'
import { useRouter } from 'next/router'
import Giphy from '@/components/Giphy'
import GihpySearcher from '@/components/Giphy/Searcher'
import { Hoge } from '@/components/Hoge'
// (2) Types層
type Props = {
  handleClick: () => void
  formRef: React.RefObject<HTMLFormElement>
  imageUrl: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// (3) DOM層
const Component: React.FCX<Props> = ({
  className,
  handleClick,
  formRef,
  imageUrl,
  handleChange
}) => (
  <>
    <div className={className}>
      <form
        className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault()
          return handleClick()
        }}
      >
        <p className="text-gray-800 font-medium">New Gacha</p>
        <div>
          <label className="block text-sm text-gray-00">Title</label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            name="gachaTitle"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-00">Image url</label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            value={imageUrl}
            onChange={handleChange}
            name="imageUrl"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-00">Count</label>
          <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            name="count"
            type="number"
            required
          />
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
    <div>
      <GihpySearcher />
      <Giphy />

      <Hoge />
    </div>
  </>
)

// (4) Style層
const StyledComponent = styled(Component)``

// (5) Container層
const Page: NextPage<Props> = (props) => {
  console.log('render new')
  const { add, imageUrl, setImageUrl } = useGacha()
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const handleClick = useCallback(() => {
    const title = formRef.current?.gachaTitle?.value
    const count = Number(formRef.current?.count?.value)
    add({
      title,
      imageUrl,
      count
    })
    router.push('/gacha-list')
  }, [add, imageUrl, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value)
  }

  const componentProps = {
    handleClick,
    formRef,
    imageUrl,
    handleChange
  }

  return <StyledComponent {...props} {...componentProps} />
}

export default Page
