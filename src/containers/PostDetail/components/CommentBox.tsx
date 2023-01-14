import { TPost } from '@/src/types'
import CONFIG from 'morethan-log.config'
import dynamic from 'next/dynamic'

const GiscusComponent = dynamic(
  () => {
    return import('@/src/components/Giscus')
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {CONFIG.giscus.enable && <GiscusComponent issueTerm={data.id} />}
    </div>
  )
}

export default CommentBox
