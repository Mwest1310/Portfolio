import React from 'react'

const Projects = () => {
  return (
    <section id="projects">
        <h2>Projects</h2>
        <div className="container">
            <div className="project">
                <h3><a href="https://mock-ecommerce-bix4.onrender.com" target="_blank">Mock E-Commerce Site</a></h3>
                <a href="https://mock-ecommerce-bix4.onrender.com" target="_blank"><img src="/mockecommerce.PNG" /></a>
                <div>
                    <p>This is a mock e-commerce site using the MERN stack. It contains many of the features real e-commerce sites use. Such features include:</p>
                    <ul>
                        <li><span>Authentication</span> - allowing the user to create an account and sign in</li>
                        <li><span>Categories</span> - to make searching for a specific product easier</li>
                        <li><span>Shopping Cart</span> - to emulate the checkout feature in real e-commerce sites</li>
                        <li><span>Admin Dashboard</span> - to allow certain users to manage the site</li>
                    </ul>
                </div>
                
            </div>
            <div className="project">
                <h3><a href="https://mwest1310.github.io/github-user-search-app/" target="_blank">Github Search App</a></h3>
                <a href="https://mwest1310.github.io/github-user-search-app/" target="_blank"><img src="/searcher.PNG" /></a>
                <div>
                    <p>This project uses the Github User API to allow users to search for specific Github accounts. The project features:</p>
                    <ul>
                        <li><span>A Searchbar</span> - which allows the user to input a username</li>
                        <li><span>User Information</span> - which displays the collected data from the searched user</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Projects;