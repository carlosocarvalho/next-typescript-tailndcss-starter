import { NextPage } from 'next'
import LayoutMaster from '../components/LayoutMaster'

const IndexPage: NextPage = () => {
  return (
    <LayoutMaster>
      <div className="flex-1 pt-3 px-3 ">
        <div className="p-6 max-w-sm  bg-white rounded-xl shadow-md flex space-x-4">
          <div className="flex-shrink-0"></div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            Documentos
          </div>
        </div>
      </div>
    </LayoutMaster>
  )
}

export default IndexPage
