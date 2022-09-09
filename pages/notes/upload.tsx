import Input from '@components/input';
import Layout from '@components/layout';
import type { NextPage } from 'next';
import TextArea from '@components/textarea';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useMutaion from '@libs/client/useMutation';
import { Note } from '@prisma/client';


// Memo counter add
// Memo Edit
// add delete

interface UploadNoteForm {
  name: string;
  description: string;
}

interface UploadNoteMutation {
  ok:boolean;
  note: Note;
}


const Upload: NextPage = () => {
  const router = useRouter();
  const {register, handleSubmit,setFocus} = useForm<UploadNoteForm>();
  const [uploadNote, {loading, data}] = useMutaion("/api/notes")
  const onValid = (data:UploadNoteForm) => {
    if(loading) return;
    uploadNote(data)
  }
  useEffect(() => {
    if(data?.ok){
      router.push(`/notes/${data.note.id}`)
    }
  }, [data, router]);

  return (
    <Layout title="Upload Note" canGoBack>
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <div>
        </div>
        <Input
          register={register("name",{required: true})}
          name="name"
          label="name"
          type="text"
          required
        />
        <TextArea
          register={register("description",{required: true})}
          name="description"
          label="Description"
          required
        />
        <button className="w-full mt-6 bg-green-500 hover:bg-green-700 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none">작성완료</button>
      </form>
    </Layout>
  )
}

export default Upload