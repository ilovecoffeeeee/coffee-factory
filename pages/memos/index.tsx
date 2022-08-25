import Layout from '../../components/layout'
import type { NextPage } from 'next'
import FloatingButton from '../../components/floating-button'

const Memo: NextPage = () => {
  return (
    <Layout title="Memo" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
          <div className="flex justify-start pl-2 pt-5">
            <div className="flex flex-col justify-center items-center w-24 h-24 bg-slate-500 rounded space-y-1">
              <div>
                <div className="text-gray-100 text-xl">08/25</div>
                <div className="text-gray-100 text-xl">목요일</div>
              </div>
            </div>
            <div className="flex flex-col pl-3">
              <span>각 Page 를 만들었다.</span>
              <span>LayOut Component 에 GoBack 버튼을 만들었다.</span>
              <span>페이지 별 업로드 기능을 가진 플로팅 버튼을 배치하였다.</span>
            </div>
          </div>
          <FloatingButton href="/memos/upload">추가</FloatingButton>
      </div>
    </Layout>
  )
}

export default Memo