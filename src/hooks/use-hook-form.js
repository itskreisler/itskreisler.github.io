import { useForm } from 'react-hook-form'
const useHookForm = (defaultValues) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm(defaultValues)
  return { register, errors, watch, handleSubmit }
}
export { useHookForm }
