import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        // if (tabFromUrl) {
        //     setTab(tabFromUrl);
        // }
        console.log(tabFromUrl)
    }, [location.search]);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard