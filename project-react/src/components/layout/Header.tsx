import Link from 'next/link';
import Wrap from '../common/template/wrap';
import NavButton from '../header/NavButton';
import MenuButton from '../header/MenuButton';
import DarkModeButton from '../header/DarkModeButton';
import SearchBar from '../header/SearchBar';
import { VscAccount } from 'react-icons/vsc';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-10 border-b border-solid border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-neutral-900">
            <Wrap classList="flex justify-between">
                <div className="flex-1 basis-0 flex items-center gap-2">
                    <MenuButton />
                    <DarkModeButton classList="hidden sm:block" />
                </div>
                <h1 className="flex items-center text-xl font-semibold">
                    <Link href={'/'}>MY STORE</Link>
                </h1>
                <ul className="flex-1 basis-0 flex items-center justify-end gap-2">
                    <li>
                        <SearchBar isHeader={true} />
                    </li>
                    <li>
                        <NavButton href={'/account'}>
                            <VscAccount />
                        </NavButton>
                    </li>
                    <li>
                        <NavButton href={'/cart'}>
                            <HiOutlineShoppingBag />
                        </NavButton>
                    </li>
                </ul>
            </Wrap>
        </header>
    );
}
