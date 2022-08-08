let token: string | null = ''

export const setTokenForApollo = (newToken: string | null): void => {
  token = newToken
}
export const resetTokenForApollo = (): void => {
  token = ''
}

export const getTokenForApollo = (): string | null => token
