import Layout from '@components/layout'
import Todo from '@components/todo'
import type { NextPage } from 'next'
import FloatingButton from '@components/floating-button'

const Memo: NextPage = () => {
  return (
    <Layout title="Memo" hasTabBar>
      <div className="flex flex-col space-y-4 divide-y">
        <Todo date="09/09" day="금요일" 
          memo={[
            "authorization 참조하기",
            ]}/>                
        <Todo date="09/08" day="목요일" 
          memo={[
            "User Authentication - token 인증 email 인증 없이 저장된 메일 주소 및 전화번호로만 로그인 하는 수준으로 작성 (완료)",
            "password 만들기",
            "Memo upload page 에서 버튼을 누르면 입력항목이 늘어나는 기능 생각하기. - prisma 에서 memo_count 추가가 필요하다고 생각된다",
            "client.upsert 기능을 활용 할 수 있는지 검토해 보기",
            "다음 할 일 - iron sessions 참고하기 (완료)",
            ]}/>        
        <Todo date="09/07" day="수요일" 
          memo={[
            "useMutation 작성 - 패치, 로딩, 데이타, 에러 처리 (완료)",
            "withHandler 작성 - GET POST DELETE 구분 및 보호, NextJS 기능 사용자화 (완료)",
            "paths 설정 - baseUrl 설정 후 paths 설정 ../../libs -> @libs (완료)",
            "다음 할 일 - User Authentication"
            ]}/>
        <Todo date="09/05" day="월요일" 
          memo={[
            "Enter 페이지 작성",
            "Tailwind Forms (코어 플러그인) 설치 -> npm i @tailwindcss/forms",
            "Memo Upload Page 작성",
            "LayOut - QC 추가",
            ]}/>   
        <Todo date="09/04" day="일요일" 
          memo={[
            "Main Tap 추가, 한번에 상황을 볼 수 있는 요약본 만들기",
            "메모 추가 가능 만들기 -> 유저 로그인 후 가능함",
            ]}/>        
        <Todo date="09/03" day="토요일" 
          memo={[
            "네비게이터 현제 페이지 색상 설정하기",
            "플라즈마 설치.",
            "coffee-factory 데이터 베이스 생성.",
            "다음일정은 #7 react-hook-form 관련 강의 보기.",
            ]}/>
        <Todo date="08/29" day="월요일" 
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
        <Todo date="08/25" day="목요일" memo={["각 Page 를 만들었다.",  "LayOut Component 에 GoBack 버튼을 만들었다.", "페이지 별 업로드 기능을 가진 플로팅 버튼을 배치하였다."]}/>
          <FloatingButton href="/memos/upload">추가</FloatingButton>
      </div>
    </Layout>
  )
}

export default Memo