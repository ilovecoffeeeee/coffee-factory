import Input from '../../components/input';
import Layout from '../../components/layout';
import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <Layout title="Upload Memo" canGoBack>
      <form className="p-4 space-y-4">
        <div>
        </div>
        <Input label="Note" name="name" type="text"/>
      </form>
    </Layout>
  )
}

export default Upload