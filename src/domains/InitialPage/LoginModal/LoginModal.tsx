import { SubmitHandler, useForm } from 'react-hook-form'

import Modal from '../../../components/molecules/Modal/Modal'
import { useAuthContext } from '../../../contexts/AuthContext/useAuthContext'
import { useAuthenticateMutation } from '../../../generated/types'
import { useSnackBar } from '../../../hooks/useSnackBar'
import LoginForm from './LoginForm/LoginForm'
import { LoginFormInputs } from './types'

type LoginModalProps = {
  isVisible: boolean
  onClose: () => void
}

export default function LoginModal({
  isVisible,
  onClose,
}: LoginModalProps): JSX.Element {
  const snackbar = useSnackBar()
  const { login } = useAuthContext()
  const [authenticate, { loading }] = useAuthenticateMutation()
  const form = useForm<LoginFormInputs>()

  const handleClose = (): void => {
    onClose()
    form.reset()
  }

  const handleSubmit: SubmitHandler<LoginFormInputs> = async (loginInput) => {
    try {
      const { email, password } = loginInput

      const response = await authenticate({
        variables: {
          email,
          password,
        },
      })

      const { name } = response?.data?.authenticateUserWithPassword?.item || {}
      const { token } = response?.data?.authenticateUserWithPassword || {}

      if (name && token) {
        snackbar(`Welcome ${name}`)
        login({ name, token })
      }
    } catch (e) {
      snackbar('Oops something went wrong :(')
      console.error(e)
    } finally {
      handleClose()
    }
  }

  return (
    <Modal
      title="Login Modal"
      isVisible={isVisible}
      onClose={() => handleClose()}
      width="450px"
      onSubmit={form.handleSubmit(handleSubmit)}
      submitButtonText="Sign-in"
      loading={loading}
    >
      <LoginForm form={form} />
    </Modal>
  )
}
