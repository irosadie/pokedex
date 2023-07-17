import { Times } from "$/components/icons"
import { FC, Fragment } from "react"
import ReactModal from 'react-modal'


type ModalFilterProps = ReactModal.Props & {
  onCloseModal: () => void
}

const ModalFilter: FC<ModalFilterProps> = ({ isOpen, onCloseModal }) => {

  return (
    <Fragment>
      <ReactModal isOpen={isOpen} htmlOpenClassName={'overflow-hidden'} overlayClassName={'fixed top-0 left-0 right-0 bottom-0 z-50 pt-[40px] bg-[#00000058]'} className={'max-w-3xl m-auto'}>
        <div className="bg-white relative rounded border-none">
          <button onClick={onCloseModal} className="top-6 right-6 absolute scale-150">
            <Times />
          </button>
          <div className="max-w-4xl m-auto p-6 divide-y-2">
            <h2 className="text-3xl font-semibold mb-2">Filter Pokemon</h2>
            <div>
              <ul>ON PROGRESS</ul>
            </div>
          </div>
        </div>
      </ReactModal>
    </Fragment >
  )
}

export default ModalFilter