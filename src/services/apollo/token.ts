let token: string | null =
  'j8GiJxJt8XmIgDIYuyi1_U_fXOPto0gd.PqHjO6oggop3xkYv3eTr3I7WpCfcs3HEsYyVWdNZiJU'

export const setTokenForApollo = (newToken: string | null): void => {
  token = newToken
}
export const resetTokenForApollo = (): void => {
  token = ''
}

export const getTokenForApollo = (): string | null => token
