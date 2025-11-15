import React, { useState, useEffect } from 'react';
import './Blogs.css';

const Blogs = () => {
    // State to manage the dropdown for mobile view
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Add and remove a prefixed class to the body tag
    useEffect(() => {
        document.body.classList.add('blogs-body');
        // Cleanup function to remove the class when the component unmounts
        return () => {
            document.body.classList.remove('blogs-body');
        };
    }, []);

    const categories = ['All', 'Cyber Security', 'Maritime Security', 'Telecom Security', 'Cloud Security', 'Blockchain Security', 'Risk Management', 'Cyber Training'];

    const blogsData = [
        {
            category: 'Maritime Security',
            title: 'Navigating the Digital Tide: Securing Port Operations in 2026',
            author: 'Virtualent Experts',
            /* === THIS IS THE CORRECTED LINE === */
            imageUrl: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Cyber Security',
            title: 'The Competitive Edge: How Proactive Cyber Defense Drives Business Growth',
            author: 'Admin',
            imageUrl: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Cloud Security',
            title: 'Beyond the Basics: 7 Advanced Strategies for a Secure Cloud Environment',
            author: 'Virtualent Experts',
            imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Telecom Security',
            title: 'Securing the 5G Frontier: Challenges and Solutions for Modern Telcos',
            author: 'Admin',
            imageUrl: 'https://images.pexels.com/photos/4219173/pexels-photo-4219173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Risk Management',
            title: 'From Liability to Asset: A Guide to Effective Cybersecurity Risk Advisory',
            author: 'Virtualent Experts',
            imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Blockchain Security',
            title: 'Unchained and Unbroken: Auditing Smart Contracts for Vulnerabilities',
            author: 'Admin',
            imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Cyber Training',
            title: 'Building Your Human Firewall: The Importance of Continuous Security Training',
            author: 'Virtualent Experts',
            imageUrl: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Cyber Security',
            title: 'What are Managed Security Services and Why Your Business Needs Them',
            author: 'Admin',
            imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Maritime Security',
            title: 'Connected Ships, Hidden Dangers: Protecting Maritime Assets from Cyber Threats',
            author: 'Virtualent Experts',
            imageUrl: 'https://images.pexels.com/photos/4009023/pexels-photo-4009023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Automotive Security',
            title: 'The Fast and the Vulnerable: Securing the Next Generation of Smart Vehicles',
            author: 'Admin',
            imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Cloud Security',
            title: 'Is Your Data Safe? A Checklist for Secure Cloud Migration',
            author: 'Virtualent Experts',
            imageUrl: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            category: 'Telecom Security',
            title: 'SIM Swap Fraud on the Rise: How Telecoms Can Protect Their Customers',
            author: 'Admin',
            imageUrl: 'https://images.pexels.com/photos/6347716/pexels-photo-6347716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];


    const filteredBlogs = selectedCategory === 'All'
        ? blogsData
        : blogsData.filter(blog => blog.category === selectedCategory);

    return (
        <div className="blogs-page-container">
            {/* Hero Section */}
            <header className="blogs-hero-section">
                <div className="blogs-hero-section-content">
                    <h1>Our Blogs</h1>
                </div>
            </header>

            {/* Main Content Section */}
            <main className="blogs-main-content">
                <div className="blogs-container">
                    {/* Left Sidebar for Categories */}
                    <aside className="blogs-sidebar">
                        <div className="blogs-sidebar-inner">
                            <h3 className="blogs-sidebar-title">Categories</h3>
                            <ul className="blogs-category-list">
                                {categories.map(category => (
                                    <li
                                        key={category}
                                        className={`blogs-category-item ${selectedCategory === category ? 'blogs-category-active' : ''}`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Category Dropdown for small devices */}
                    <div className="blogs-category-dropdown">
                        <div className="blogs-dropdown-header" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <span>{selectedCategory}</span>
                            <svg className={`blogs-dropdown-arrow ${isDropdownOpen ? 'blogs-open' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
                        </div>
                        {isDropdownOpen && (
                            <ul className="blogs-dropdown-list">
                                {categories.map(category => (
                                    <li
                                        key={category}
                                        className={`blogs-dropdown-item ${selectedCategory === category ? 'blogs-dropdown-item-active' : ''}`}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Right Side for Blogs */}
                    <section className="blogs-list-section">
                        {filteredBlogs.length > 0 ? (
                            <div className="blogs-grid">
                                {filteredBlogs.map((blog, index) => (
                                    <div className="blogs-card" key={index}>
                                        <div className="blogs-card-image-wrapper">
                                            <img src={blog.imageUrl} alt={blog.title} className="blogs-card-image" />
                                            <span className="blogs-card-category">{blog.category}</span>
                                        </div>
                                        <div className="blogs-card-content">
                                            <h2 className="blogs-card-title">{blog.title}</h2>
                                            <p className="blogs-card-author">by {blog.author}</p>
                                            <a href="#" className="blogs-card-read-more">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="blogs-no-results">
                               <h3>No blogs found in this category.</h3>
                               <p>Please select another category to see our latest articles.</p>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Blogs;