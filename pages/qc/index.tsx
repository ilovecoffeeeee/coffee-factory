import Layout from '@components/layout'
import type { NextPage } from 'next'
import FloatingButton from '@components/floating-button'

const Qc: NextPage = () => {
  return (
    <Layout title="Roaster" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <div className="flex justify-start pl-2 pt-5" key={i}>
            <div className="w-24 h-24 bg-slate-500 rounded"/>
            <div className="flex flex-col pl-3">
                <span>로스터기</span>
              <span key={i}>{i + 1}번 배치</span>
              <span>생산하는 블렌드</span>
              <span>판정유무</span>
            </div>
          </div>
        ))}
        <FloatingButton href="/roasters/upload">추가</FloatingButton>
      </div>
    </Layout>
  )
}

export default Qc