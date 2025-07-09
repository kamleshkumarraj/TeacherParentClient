import { updateToast } from '@/utils/toast.utils'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const useMutation = (mutationFn) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [mutate] = mutationFn()
  const [error, setError] = useState(null)

  const executeMutate = async ({ toastMessage, args }) => {
    const toastId = toast.loading(toastMessage)
    setIsLoading(true)

    try {
      const { data, error } = await mutate(args)

      if (data?.success) {
        setData(data?.data)
        updateToast({
          id : toastId,
          message: data?.message || 'Successfully created request ',
          type: 'success',
        })
      } else {
        setError(error)
        updateToast({
          id : toastId,
          message:
            error?.data?.message ||
            'We get error during creating a new request',
          type: 'error',
        })
      }
    } catch (error) {
      setError(error)
      updateToast({
        id : toastId,
        message: error?.data?.message || 'We get error during creating a new request',
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return [executeMutate, data, error, isLoading]
}
