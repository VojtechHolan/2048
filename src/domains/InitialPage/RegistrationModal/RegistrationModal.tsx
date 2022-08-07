import { Dispatch } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Modal from '../../../components/atoms/Modal/Modal'
import { useCreateUserMutation } from '../../../generated/types'
import { useSnackBar } from '../../../hooks/useSnackBar'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import { RegistrationFormInputs } from './types'

type RegistrationModalProps = {
  isVisible: boolean
  onClose: () => void
}

export default function RegistrationModal({
  isVisible,
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
    const { email, name, password } = registrationInput
    try {
      await createUser({
        variables: {
          data: {
            email,
            name,
            password,
          },
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
      isVisible={isVisible}
      onClose={() => handleClose()}
      width="450px"
      loading={loading}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <RegistrationForm form={form} />
    </Modal>
  )
}
