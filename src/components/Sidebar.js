
import {CSidebar, CSidebarNav, CNavTitle, CNavItem} from '@coreui/react'
function Sidebar() {
    const logoutFn = () => {
        localStorage.clear()
        window.location.href = '/'
    }
    return (
        <CSidebar unfoldable className='bg-black vh-100'>
            <CNavItem className='bg-dark d-flex'>
                <i className="bi bi-bar-chart-fill text-white m-2"></i>
                <h5 className='text-white mx-5 fw-bolder my-1'>TETHERX</h5>
            </CNavItem>
            <CNavTitle className='text-light fw-normal'>A CRM APP FOR ALL YOUR NEEDS...</CNavTitle>
            <div onClick={logoutFn}>
            <CNavItem className='bg-dark d-flex'>
                <i className="bi bi-box-arrow-left text-white m-2"></i>
                <p className='text-white mx-5 fw-bolder my-1'>Logout</p>
            </CNavItem>
            </div>
        </CSidebar>



    )
}

export default Sidebar; 