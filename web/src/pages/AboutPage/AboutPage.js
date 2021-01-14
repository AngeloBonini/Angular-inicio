import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
       <h1><Link to={routes.home()}>Horse Blog</Link></h1>
       <h1>AboutPage</h1>
       <nav>
      <ul>
        <li><Link to={routes.about()}>AboutPage</Link></li>
      </ul>

</nav>
      {/* <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p> */}
    </>
  )
}

export default AboutPage
