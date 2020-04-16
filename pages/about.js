import Link from 'next/link'

export default () => {
  return (
    <>
      <p>About Page</p>
      <Link href='/'>
        <a>To /</a>
      </Link>
    </>
  )
}
