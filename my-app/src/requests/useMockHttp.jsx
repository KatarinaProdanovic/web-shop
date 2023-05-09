import { useState } from 'react'

function useMockHttp () {
  const [isLoading, setIsLoading] = useState(false)
  const [error] = useState(null)

  const sendRequest = async (config) => {
    setIsLoading(true)

    // simulirajte kašnjenje od 1 sekunde da biste dobili osećaj čekanja
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = {
      data: { token: 'fakeToken', user: { email: 'user@example.com' } }
    }
    setIsLoading(false)
    return response.data
  }

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useMockHttp
