const NavBar = () => {
    return <div className="flex h-14 mx-6 items-center justify-between">
        <div className="font-bold text-3xl">NovaNex</div>
        <div className="flex gap-8 font-medium text-xl">
            <div className="hover:text-blue-500">Tab 1</div>
            <div className="hover:text-blue-500">Tab 2</div>
            <div className="hover:text-blue-500">Tab 3</div>
        </div>
    </div>
}
export default NavBar;