import { Dispatch } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Modal from '../../../components/atoms/Modal/Modal'
import { useCreateUserMutation } from '../../../generated/types'
import { useSnackBar } from '../../../hooks/useSnackBar'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import { RegistrationFormInputs } from './types'

type RegistrationModalProps = {
  isRegisterModal: boolean
  onClose: () => void
}

export default function RegistrationModal({
  isRegisterModal,
  onClose,
}: RegistrationModalProps): JSX.Element {
  const snackbar = useSnackBar()
  const [createUser, { loading }] = useCreateUserMutation()
  const form = useForm<RegistrationFormInputs>()

  const handleClose = (): void => {
    onClose()
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
      snackbar('User was successfully created!')
    } catch (e) {
      snackbar('Oops something went wrong :(')
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
