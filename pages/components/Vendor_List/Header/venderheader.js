import Logo from "next/image";
import Link from "next/link";
import Footer from "../../Footer/footer";
export default function VendorHeader() {
  return (
    <>
      <div className="vendor_header bg-no-repeat bg-center">
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
                    <i class="fa fa-bell" aria-hidden="true"></i>
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

        <div className="flex justify-center pt-14">
          <h1 className="text-white text-5xl _opaoao">
            Our Vendors at your service
          </h1>
        </div>
        <div className="flex justify-center pt-3">
          <p className="text-white">
            Get your party started with our event care takers
          </p>
        </div>
      </div>

      <div>
        <div className="p-10">
          <h1 className="text-4xl _opaoao text-orange-500">
            Vendor Categories
          </h1>
          <div className="flex flex-row pt-10">
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 36.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Venue</h6>
                <small className="text-red-400 text-sm">(358)</small>
              </div>
            </div>
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 59.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Photographer</h6>
                <small className="text-red-400 text-sm">(132)</small>
              </div>
            </div>
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 38.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Florist</h6>
                <small className="text-red-400 text-sm">(58)</small>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-10">
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 39.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Wedding Cakes</h6>
                <small className="text-red-400 text-sm">(181)</small>
              </div>
            </div>
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 41.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Wedding Dresses</h6>
                <small className="text-red-400 text-sm">(180)</small>
              </div>
            </div>
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 42.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Dj</h6>
                <small className="text-red-400 text-sm">(46)</small>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-10">
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 43.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Food Caterers</h6>
                <small className="text-red-400 text-sm">(110)</small>
              </div>
            </div>
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 44.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Performers</h6>
                <small className="text-red-400 text-sm">(43)</small>
              </div>
            </div>
            <div class="max-w-lg rounded-lg cate overflow-hidden shadow-sm mr-4">
              <div class="px-4 py-4">
                <div>
                  <Logo src="/image 45.png" width="500px" height="330px" />
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <h6 className="text-blue-900 font-medium">Fireworks</h6>
                <small className="text-red-400 text-sm">(12)</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="pl-10">
          <h1 className="text-3xl _opaoao text-orange-400">Reach Out To Us</h1>
          <p className="text-sm mt-3">
            If you have any requirements other than above mentioned categories,
            write to us <br /> and our team will arrange it for you
          </p>

          <div className="flex flex-row pt-5">
            <form>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <span
                    class="block capitalize tracking-wide text-blue-900 text-sm font-bold mb-2"
                    for="grid-first-name"
                  >
                    Tell us your name
                  </span>
                  <input
                    class="appearance-none block w-96 text-gray-900 border bg-gray-100 text-sm rounded-0 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3 pt-1">
                  <span
                    class="block capitalize tracking-wide text-blue-900 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    How shall we reach out to you?
                  </span>
                  <input
                    class="appearance-none block w-96 text-gray-700 bg-gray-100 text-sm border rounded-0 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter email or mobile nmber"
                  />
                </div>
              </div>
              <div>
                <span
                  for="message"
                  class="block mb-2 text-sm font-medium text-blue-900 "
                >
                  Tell us about your requirements
                </span>
                <textarea
                  id="message"
                  rows="4"
                  class="block resize-none p-2.5 w-full text-sm text-gray-100 bg-gray-50 rounded-0 border border-gray-300"
                  placeholder="Enter here"
                ></textarea>
              </div>
              <button class="_savespso text-white font-bold py-2 px-12 mt-4 border rounded-0">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-pink-50 p-10">
          <Footer />
      </div>
    </>
  );
}
