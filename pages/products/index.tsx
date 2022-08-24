import Layout from '../../components/layout'
import type { NextPage } from 'next'

const Product: NextPage = () => {
  return (
    <Layout title="Blend" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <div className="flex justify-start pl-2 pt-5" key={i}>
          <div className="w-24 h-24 bg-slate-500 rounded"/>
          <div className="flex flex-col pl-3">
            <span>날짜</span>
            <span>가동한 로스터</span>
            <span>생산한 블렌드</span>
            <span>생산한 제품</span>
          </div>
        </div>
        ))}
      </div>
    </Layout>
  )
}

export default Product