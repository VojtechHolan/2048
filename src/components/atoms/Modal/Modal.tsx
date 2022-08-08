import React, { ReactElement } from 'react'
import { createPortal } from 'react-dom'

import Button from '../Button/Button'
import classes from './Modal.module.scss'

type ModalProps = {
  title: string
  children: ReactElement | ReactElement[]
  isVisible: boolean
  onClose?: () => void
  width?: string
  submitButtonText?: string
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  loading?: boolean
}

// We could add footer section to modal
export default function Modal({
  isVisible,
  children,
  title,
  onClose,
  width = '90%',
  submitButtonText = 'Submit',
  onSubmit,
  loading = false,
}: ModalProps): JSX.Element | null {
  if (isVisible) {
    return createPortal(
      <section className={classes.modalWrapper}>
        <div className={classes.modal} style={{ width }}>
          <header className={classes.header}>
            <h2 className={classes.title}>{title}</h2>
            {onClose && (
              <span className={classes.closeIcon} onClick={() => onClose()}>
                X
              </span>
            )}
          </header>
          <div className={classes.body}>{children}</div>
          {onSubmit && (
            <footer className={classes.footer}>
              <Button
                className={classes.submitButton}
                onClick={onSubmit}
                title={submitButtonText}
                loading={loading}
              />
            </footer>
          )}
        </div>
      </section>,
      document.body
    )
  }

  return null
}
