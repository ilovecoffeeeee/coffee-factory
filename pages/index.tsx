import Layout from '../components/layout'
import type { NextPage } from 'next'
import FloatingButton from '../components/floating-button'

const Home: NextPage = () => {
  return (
    <Layout title="Home" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div className="flex justify-start pl-2 pt-5" key={i}>
            <div className="w-24 h-24 bg-slate-500 rounded"/>
            <div className="flex flex-col pl-3">
              <span>지역명</span>
              <span>생두명</span>
              <span>로스터</span>
              <span>사용기간</span>
              <span>Lot No. 234-1234</span>
            </div>
          </div>
        ))}
        <FloatingButton href="/greenbeans/upload">추가</FloatingButton>
      </div>
    </Layout>
  )
}

export default Home
