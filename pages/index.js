import Link from 'next/link'

export default () => {
  return (
    <>
      <p>Index Page</p>
      <Link href='/about'>
        <a>To /about</a>
      </Link>

      <div style={{ height: 1080, width: 50, background: 'cyan' }} />
      <Link href='/movie/[id]' as='/movie/first'>
        <a>To /movie/first</a>
      </Link>
    </>
  )
}
