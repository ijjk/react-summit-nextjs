import { useRouter } from 'next/router'

export default () => {
  const { query } = useRouter()

  return (
    <p>Movie id: {query.path?.join('/')}</p>
  )
}
