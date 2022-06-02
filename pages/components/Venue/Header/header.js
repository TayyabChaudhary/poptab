import Logo from "next/image";
import Link from "next/link";
export default function VenueHeader() {
    return(
        <>
         <header className="w-full p-3 bg-white shadow-sm z-100">
          <div className="flex justify-between items-center pl-8 pr-8">
            <div className="logo">
              <Logo src="/logo.png" alt="me" width="80px" height="40px" />
            </div>
            <div>
              <ul className="flex space-x-10 text-sm text-gray-600 items-center">
                <li>
                  <Link href="">
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">Transactions</a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-bell" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <div className="w-10 h-10 rounded-full flex justify-center items-center _savespso">
                    <h4 className="text-white">AB</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>
        </>
    )
}