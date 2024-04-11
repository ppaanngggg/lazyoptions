import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navbar bg-green-200">
        <div className="navbar-start">
          <Link href="/" className="font-bold text-lg">
            LazyOptions
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/spy-dte-10"}>SPY DTE-10</Link>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/*add email connect to me*/}
          <Link href="mailto:hantian.pang@gmail.com">Email To Me</Link>
        </div>
      </div>
    </header>
  );
}
