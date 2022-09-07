import Layout from '@components/layout'
import type { NextPage } from 'next'
import FloatingButton from '@components/floating-button'

const Home: NextPage = () => {
  return (
    <Layout title="Coffee Factory NOW" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
        {["Green", "Silo", "Blend", "Roaster", "QC", "etc"].map((partName, i) => (
          <div className="flex justify-start pl-2 pt-5" key={i}>
            <div className="w-24 h-24 bg-slate-500 rounded"/>
            <div className="flex flex-col pl-3">
              <span>{partName}</span>
            </div>
          </div>
        ))}
        {/* <FloatingButton href="/greenbeans/upload">추가</FloatingButton> */}
      </div>
    </Layout>
  )
}

export default Home
