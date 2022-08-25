import Layout from '../../components/layout'
import type { NextPage } from 'next'

const GreenBeanDetail: NextPage = () => {
  return (
    <Layout title="GreenBean" canGoBack>
      <div className="flex flex-col space-y-4 divide-y">
          <div className="flex justify-start pl-2 pt-5">
            <div className="w-24 h-24 bg-slate-500 rounded"/>
            <div className="flex flex-col pl-3">
              <span>지역명</span>
              <span>생두명</span>
              <span>로스터</span>
              <span>Lot No. 234-1234</span>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default GreenBeanDetail