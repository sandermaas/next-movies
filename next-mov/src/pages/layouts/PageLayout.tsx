import { ReactElement, PropsWithChildren } from 'react'

const PageLayout = ({ children }: PropsWithChildren<{}>): ReactElement => {
  return (
    <>
      <header style={{ border: '1px solid hotpink' }}>
        <p>HEADER</p>
      </header>

      <main>
        {children}
      </main>

      <footer style={{ border: '1px solid purple' }}>
        <p>FOOTER</p>
      </footer>
    </>
  )
}

export default PageLayout