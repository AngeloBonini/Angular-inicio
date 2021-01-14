import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div>
      <h1><Link to={routes.home()}>Horse Blog</Link></h1>
<nav>
      <ul>
        <li><Link to={routes.about()}>AboutPage</Link></li>
      </ul>

</nav>
<p> This is the home Page</p>
    </div>
  )
}

export default HomePage
