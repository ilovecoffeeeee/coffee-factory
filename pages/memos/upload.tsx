import Input from '../../components/input';
import Layout from '../../components/layout';
import type { NextPage } from 'next';
import TextArea from '../../components/textarea';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

interface MemoForm {
  memo?: string;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const {register, handleSubmit,setFocus} = useForm<MemoForm>();
  
  useEffect(() => {
    setFocus("memo");
  }, [setFocus]);

  return (
    <Layout title="Upload Memo" canGoBack>
      <form className="p-4 space-y-4">
        <div>
        </div>
        <TextArea
          register={register("memo",{required: true})}
          name="memo"
          label="Memo"
          required
        />
        <button className="w-full mt-6 bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none">작성완료</button>
      </form>
    </Layout>
  )
}

export default Upload