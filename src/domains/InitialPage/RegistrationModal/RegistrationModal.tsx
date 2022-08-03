import { Dispatch } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '../../../components/atoms/Button/Button'
import Input from '../../../components/atoms/Input/Input'
import Modal from '../../../components/atoms/Modal/Modal'
import { useCreateUserMutation } from '../../../generated/types'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import { RegistrationFormInputs } from './types'

type RegistrationModalProps = {
  isRegisterModal: boolean
  setIsRegisterModal: Dispatch<boolean>
}

export default function RegistrationModal({
  isRegisterModal,
  setIsRegisterModal,
}: RegistrationModalProps): JSX.Element {
  const [createUser, { loading }] = useCreateUserMutation()
  const form = useForm<RegistrationFormInputs>()

  const handleClose = (): void => {
    setIsRegisterModal(false)
    form.reset()
  }

  const handleSubmit: SubmitHandler<RegistrationFormInputs> = async (
    registrationInput
  ) => {
    try {
      await createUser({
        variables: {
          data: registrationInput,
        },
      })
      // We should display snackbar...
    } catch (e) {
      // We should display snackbar...
      console.error(e)
    } finally {
      handleClose()
    }
  }

  return (
    <Modal
      title="Register Form"
      isVisible={isRegisterModal}
      onClose={() => handleClose()}
      width="450px"
    >
      <RegistrationForm form={form} onSubmit={handleSubmit} loading={loading} />
    </Modal>
  )
}
