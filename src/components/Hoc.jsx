import { NavLink, Outlet, useParams } from "react-router-dom"

export const Hoc = (Component) => {
    const NewComponent = () => {
        let param = useParams()
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="cls">
                            <NavLink to='/form' className='p-2 fs-2 bg-warning'>Form</NavLink>
                            <NavLink to='/table' className='p-2 fs-2 bg-warning'>Table</NavLink>
                        </div>
                    </div>
                    <div className="col-10">
                        <Outlet />
                        <Component param={param} />
                    </div>
                </div>
            </div>
        )
    }
    return NewComponent
}