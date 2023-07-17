import { Fragment } from "react"
import ReactModal from 'react-modal'

const ModalFilter = () => {

  return (
    <Fragment>
      <ReactModal isOpen={false} htmlOpenClassName={'overflow-hidden'} overlayClassName={'fixed top-0 left-0 right-0 bottom-0 z-50 pt-[40px] bg-[#00000058]'} className={'max-w-3xl m-auto'}>
        <div className="bg-white relative rounded border-none">
          <button className="top-3 right-4 absolute">X</button>
          <div className="max-w-4xl m-auto">
            <h2>Filter Pokemon</h2>
            <div>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
              </ul>
            </div>
          </div>
        </div>
      </ReactModal>
    </Fragment >
  )
}

export default ModalFilter