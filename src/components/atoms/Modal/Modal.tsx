import { ReactElement } from 'react'
import { createPortal } from 'react-dom'

import classes from './Modal.module.scss'

type ModalProps = {
  title: string
  children: ReactElement | ReactElement[]
  isVisible: boolean
  onClose: () => void
  width?: string
}

// We could add footer section to modal
export default function Modal({
  isVisible,
  children,
  title,
  onClose,
  width = '90%',
}: ModalProps): JSX.Element | null {
  if (isVisible) {
    return createPortal(
      <section className={classes.modalWrapper}>
        <div className={classes.modal} style={{ width }}>
          <div className={classes.header}>
            <h2 className={classes.title}>{title}</h2>
            <span className={classes.closeIcon} onClick={() => onClose()}>
              X
            </span>
          </div>
          <div className={classes.body}>{children}</div>
        </div>
      </section>,
      document.body
    )
  }

  return null
}
