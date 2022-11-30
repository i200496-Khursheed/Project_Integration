import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <header>
            <div data-testid = "nav1" className = "container">
            <Link to = "/">
                <h1>Buy2Rent.com</h1>
                <ul data-testid = "nav2">
                    <li> <Link to="/"> <a> Properties for sale</a> </Link> </li>
                    <li> <Link to="/buyerpage"> <a> Buyer</a> </Link></li>
                    <li> <Link to="/cspage"> <a> Construction Team Page</a> </Link> </li>
                    <li> <Link to="/reportpage"> <a> Inspection Team</a></Link></li>
                    <li> <Link to="/agentpage"> <a> Agents</a></Link></li>
                </ul>
            </Link>
            </div>
        </header>
    )
}

export default Navbar