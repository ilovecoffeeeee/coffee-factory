import Layout from '@components/layout'
import type { NextPage } from 'next'
import FloatingButton from '@components/floating-button'

const Blend: NextPage = () => {
  return (
    <Layout title="Blend" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <div className="flex justify-start pl-2 pt-5" key={i}>
            <div className="w-24 h-24 bg-slate-500 rounded"/>
            <div className="flex flex-col pl-3">
              <span>블랜드명</span>
              <span>원료비율</span>
              <span>실중량</span>
              <span>로스터</span>
            </div>
          </div>
        ))}
        <FloatingButton href="/blends/upload">추가</FloatingButton>
      </div>
    </Layout>
  )
}

export default Blend
