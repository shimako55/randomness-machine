// (1) import層
import React, { useCallback, useRef } from 'react'
import { NextPage } from 'next'
import { useGacha } from '@/hooks/useGacha'
import { useRouter } from 'next/router'
import GachaForm from '@/components/GachaForm'
import { v4 } from 'uuid'
import tw, { styled } from 'twin.macro'

// (2) Types層
type Props = {
  handleClick: () => void
  formRef: React.RefObject<HTMLFormElement>
}

// (3) DOM層
const Component: React.FCX<Props> = ({ className, handleClick, formRef }) => (
  <div className={className}>
    <GachaForm title="New" handleSubmit={handleClick} formRef={formRef} />
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)``

// (5) Container層
const Page: NextPage<Props> = (props) => {
  const { add } = useGacha()
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()
  const handleClick = useCallback(() => {
    const title = formRef.current?.gachaTitle?.value
    const imageUrl = formRef.current?.imageUrl?.value
    const count = Number(formRef.current?.count?.value)
    const id = v4()
    add({
      id,
      title,
      imageUrl,
      count
    })
    router.push('/gacha-list')
  }, [add, router])

  const componentProps = {
    handleClick,
    formRef
  }

  return <StyledComponent {...props} {...componentProps} />
}

export default Page
