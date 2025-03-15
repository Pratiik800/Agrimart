import { useEffect, useState } from 'react';

export default function Navbar() {
    const [user, setUser] = useState({ name: '', profile_image: '' });

    useEffect(() => {
        const storedName = localStorage.getItem('username');
        const storedProfile = localStorage.getItem('profile_image');
        if (storedName) setUser({ name: storedName, profile_image: storedProfile });
    }, []);

    return (
        <nav>
            <h1>AgriMart</h1>
            <div>
                {user.name ? (
                    <div className="user-profile">
                        <img src={user.profile_image || "/default-profile.png"} alt="Profile" className="profile-pic" />
                        <h3>Mr. {user.name}, Welcome!</h3>
                    </div>
                ) : (
                    <a href="/signin">Sign In</a>
                )}
            </div>

            <style jsx>{`
                .user-profile {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .profile-pic {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            `}</style>
        </nav>
    );
}
