import Layout from '../../components/layout'
import Note from '../../components/note'
import type { NextPage } from 'next'
import FloatingButton from '../../components/floating-button'

const Memo: NextPage = () => {
  return (
    <Layout title="Memo" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
        <Note date="09/04" day="일요일" 
          memo={[
            "Main Tap 추가, 한번에 상황을 볼 수 있는 요약본 만들기",
            "메모 추가 가능 만들기",
            ]}/>        
        <Note date="09/03" day="토요일" 
          memo={[
            "네비게이터 현제 페이지 색상 설정하기",
            "플라즈마 설치.",
            "coffee-factory 데이터 베이스 생성.",
            "다음일정은 #7 react-hook-form 관련 강의 보기.",
            ]}/>
        <Note date="08/29" day="월요일" 
          memo={[
            "메모에 사용할 컴포넌트 만들기 시도하기.",
            "배열사용해서 항목당 줄바꿈 만들기.",
            "Input 혹은 Upload 로 직접 입력하는 방밥 생각해보기.",
            "네비게이터 처럼 고정되어 있는 메모 페이지 만들기 생각해보기.",
            "메모 추가 플로팅 버튼 만들기 생각해보기.",
            "Green Bean 사용기간 표시와 상태표시방법 생각해보기.",
            "toDoList 처럼 체크 항목 적용방법 생각해보기.",
            "항목 클릭시 내용표시, 수정버튼, 댓글버튼 추가방법 생각해보기.",
            ]}/>
        <Note date="08/25" day="목요일" memo={["각 Page 를 만들었다.",  "LayOut Component 에 GoBack 버튼을 만들었다.", "페이지 별 업로드 기능을 가진 플로팅 버튼을 배치하였다."]}/>
          <FloatingButton href="/memos/upload">추가</FloatingButton>
      </div>
    </Layout>
  )
}

export default Memo