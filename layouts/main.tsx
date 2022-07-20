import Link from 'next/link'
import { ReactNode } from 'react'

type Props = { children: ReactNode | ReactNode[] }

function MainLayout({ children }: Props) {
  return (
    <div className="mx-auto max-w-2xl">
      <header className="text-center p-10">
        <Link href="/">
          <a className="inline-block">
            <h1 className="text-3xl font-bold cursor-pointer select-none hover:text-gray-600 active:text-gray-500">
              SeedsQL
            </h1>
          </a>
        </Link>
        <p className="mx-auto max-w-[300px]">A native seeds market.</p>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
