import { Sidebar } from "flowbite-react";
import {
    HiUser,
    HiArrowSmRight,
} from 'react-icons/hi';

const DashSidebar = () => {
    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.Group>
                    <Sidebar.Item active icon={HiUser} label={'User'} labelColor="dark">
                        Profile
                    </Sidebar.Item>
                    <Sidebar.Item active icon={HiArrowSmRight} labelColor="dark">
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.Group>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashSidebar