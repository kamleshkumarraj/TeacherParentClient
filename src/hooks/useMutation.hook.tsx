import { updateToast } from '@/utils/toast.utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useMutation = (mutationFn) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [mutate] = mutationFn()
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const executeMutate = async ({ toastMessage, args, navigation }) => {
    const toastId = toast.loading(toastMessage)
    setIsLoading(true)

    try {
      const {data, error} = await mutate(args)
      console.log(error)
      if (data?.success) {
        setData(data)
        updateToast({
          id : toastId,
          message: data?.message || 'Successfully created request ',
          type: 'success',
        })
        if(navigation) navigate('/');
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
