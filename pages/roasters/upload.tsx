import Layout from '../../components/layout'
import type { NextPage } from 'next'

const Upload: NextPage = () => {
  return (
    <Layout title="Upload Roaster" canGoBack>
      <div className="flex flex-col space-y-4 divide-y">
          <div className="flex justify-start pl-2 pt-5">
            <div className="w-24 h-24 bg-slate-500 rounded"/>
            <div className="flex flex-col pl-3">
              <span>업로드</span>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Upload