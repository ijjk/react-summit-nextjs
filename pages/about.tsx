import Link from 'next/link'
import { PageConfig } from 'next'

export const config: PageConfig = {
  amp: true
}

export default () => {
  return (
    <>
      <p>About Page</p>
      <div>
        <Link href='/'>
          <a>To /</a>
        </Link>
      </div>

      <amp-img
        src="https://unsplash.it/800/300?id=123"
        alt="demo image"
        height="300"
        width="500"
      />
    </>
  )
}
