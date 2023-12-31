import React from 'react'
import dp1 from '../../assets/dp1.jpg'
import { FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ClientProfileCard() {
  return (
    <div>

      <figure className='pt-5 border-b-2'>
          <img
            alt="client"
            className='w-28 h-28 rounded-full mx-auto'
            src= {dp1}
          />
          <figcaption className='text-center mt-5 flex-wrap'>
            <p className='text-gray-700 font-semibold text-xl mb-2'>
              John Doe
            </p>
            <p className='text-gray-700 mb-2'>
              0712345678
            </p>
            <p className='text-gray-700 mb-2'>
              johndoe@gmail.com
            </p>
            <p className='text-gray-700 mb-2'>
              Colombo
            </p>
            <div className='ml-auto'>
            <Link
              to={'doctors'} >
              <button className='bg-blue-700 mb-2 rounded-md p-2 border text-white hover:bg-white hover:border-blue-700 hover:text-black'>
                Refer Doctors
              </button>
            </Link>
          </div>
          </figcaption>
        </figure>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="p-2 inline-block min-w-full">
              <div className="overflow-hidden ">

                <div className='pt-5'>
                  <span className='font-bold '>Emergency Contacts</span>
                </div>

                <table className="min-w-full">

                  <thead className="bg-gray-200 border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Phone
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jane Doe
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        0713456789
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                        <FiMessageSquare />
                      </td>
                    </tr>

                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jacob Thornton
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        0713456123
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                        <FiMessageSquare />
                      </td>
                    </tr>
                    
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Whitney Austin
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        0784569782
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-700 cursor-pointer">
                        <FiMessageSquare />
                      </td>
                    </tr>

                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="p-2 inline-block min-w-full">
              <div className="overflow-hidden border-t-2">

                <div className='pt-5'>
                  <span className='font-bold '>Client Documents</span>
                </div>

                <table className="min-w-full">

                  <tbody>

                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        abc.pdf
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        10/07/2023
                      </td>
                    </tr>

                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        xyz.pdf
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        07/07/2023
                      </td>
                    </tr>
                    
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        sg.doc
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        07/07/2023
                      </td>
                    </tr>

                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default ClientProfileCard
