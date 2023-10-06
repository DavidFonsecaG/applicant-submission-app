import { useParams } from 'react-router-dom';

const DocumentsBarHeader = ({id, program, status, student, term, type}) => {
  const { documentId } = useParams();

    return (
      !documentId 
      ? <div className="px-6 py-10 flex flex-col w-full bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800">
          <div className="flex w-full items-center">
            <div className="flex items-center text-3xl text-gray-900 dark:text-white">
              <img src={ student.src } className="w-12 mr-3 rounded-full" alt="profile" />
              <div>
                  <h2 className="text-2xl font-medium dark:text-white ">{ student.name }</h2>
                  <p className="text-xs font-normal text-gray-400 dark:text-gray-400">{ student.email }</p>
              </div>
            </div>
            <div className="ml-auto sm:flex hidden items-center justify-end">
              <div className="text-right">
                <div className="text-xs text-gray-400 dark:text-gray-400">{ type } - { term }</div>
                <div className="text-gray-900 text-lg dark:text-white">{ status }</div>
              </div>
              <button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <svg viewBox="0 0 24 24" className="w-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
              </button>
            </div>
          </div>
        </div>
      : <div className="p-4 flex w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-800">
          <div className="flex flex-col w-full items-center text-center text-gray-900 dark:text-white">
            <img src={ student.src } className="w-8 mb-2 rounded-full" alt="profile" />
            <h2 className="text-xs font-medium dark:text-white">{ student.name }</h2>
          </div>
        </div>
    )
}

export default DocumentsBarHeader;