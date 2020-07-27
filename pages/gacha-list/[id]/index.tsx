// (1) import層
import React, { useRef } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useGacha, Gacha } from '@/hooks/useGacha'
import GachaForm from '@/components/GachaForm'
import { styled } from 'twin.macro'
import { v4 } from 'uuid'

// (2) Types層
type Props = {
  handleClick: () => void
  formRef: React.RefObject<HTMLFormElement>
  gacha: Gacha
}

// (3) DOM層
const Component: React.FCX<Props> = ({
  className,
  handleClick,
  formRef,
  gacha
}) => (
  <div className={className}>
    <GachaForm
      title="Edit"
      handleSubmit={handleClick}
      formRef={formRef}
      gacha={gacha}
    />
  </div>
)

// (4) Style層
const StyledComponent = styled(Component)``

// (5) Container層
const Page: NextPage<Props> = (props) => {
  const { gachas, edit } = useGacha()

  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  let gacha: Gacha | null = null

  let id = -1
  try {
    id = Number(router.query.id)
    gacha = gachas[id]
  } catch (e) {
    router.push('/404')
    return null
  }

  const handleClick = () => {
    const title = formRef.current?.gachaTitle?.value
    const imageUrl = formRef.current?.imageUrl?.value
    const count = Number(formRef.current?.count?.value)
    const id = v4()
    edit({
      id,
      title,
      imageUrl,
      count
    })

    router.push('/gacha-list')
  }

  return (
    <StyledComponent
      {...props}
      handleClick={handleClick}
      formRef={formRef}
      gacha={gacha}
    />
  )
}

export default Page
