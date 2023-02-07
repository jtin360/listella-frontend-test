import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import EarthIcon from '@/assets/earth.svg';
import MenuIcon from '@/assets/menu.svg';
import SearchIcon from '@/assets/search.svg';
import ShareIcon from '@/assets/share.svg';
import CloseIcon from '@/assets/close.svg';
import Link from 'next/link';
import styles from '@/styles/Header.module.css'
import { NavigationItemProps, NavigationProps } from '@/types/navigation';


//ability to override icon or customize styling if needed
export interface ToolbarItemProps extends NavigationProps {
  icon?: string | StaticImageData,
  width?: number,
  height?: number,
  className?: string | undefined
}

//add custom features for searchbar/share/dropdown components if needed in the future
export interface SearchbarProps extends ToolbarItemProps {}
export interface ShareProps extends ToolbarItemProps {}
export interface DropDownMenuProps extends ToolbarItemProps {}


const headerNavs: NavigationItemProps[] = [
  {
    name: 'Missions',
    path: '/missions'
  },
  {
    name: 'Galleries',
    path: '/galleries'
  },
  {
    name: 'NASA Audiences',
    path: '/nasa-audiences'
  },
  {
    name: 'Downloads',
    path: '/downloads'
  },
  {
    name: 'NASA TV',
    path: '/nasa-tv'
  },
  {
    name: 'About',
    path: '/about'
  }
]

const dropDownMenu: NavigationItemProps[] = [
  {
    name: 'Humans in Space',
    path: '/humans-in-space'
  },
  {
    name: 'Moon to Mars',
    path: '/moon-to-mars'
  },
  {
    name: 'Earth',
    path: '/earth'
  },
  {
    name: 'Space Tech',
    path: '/space-tech'
  },
  {
    name: 'Solar System & Beyond',
    path: '/humans-in-space'
  },
  {
    name: 'STEM Engagement',
    path: '/stem-engagement'
  },
  {
    name: 'History',
    path: '/history'
  },
  {
    name: 'Benefits to You',
    path: '/Benefits-to-you'
  }
]

const Header = () => {
  return (
    <div className='w-100 flex flex-col items-center mt-10 mb-6'>
     <div className="logo-container flex flex-row justify-items-center items-center">
        <Image
          className='mr-10'
          src={EarthIcon}
          alt="Earth Icon"
          blurDataURL={EarthIcon.blurDataURL}
          width={68}
          height={68}>
        </Image>
        <h1 className='text-4xl'>NASA</h1>
     </div>
     <div className="flex flex-col">
      <Navigation>
          {headerNavs ? headerNavs.map(nav => { return (<NavigationItem key={nav.name} name={nav.name} path={nav.path}/>) }) : null }
      </Navigation>
     <hr className={`${styles['spacer-gray']}`}></hr>
     </div>
     <Navigation className='justify-end w-full mt-4 mr-10'>
        <Search className='mx-5 py-2' icon={SearchIcon} /> 
        <Share className='mx-5 py-2' icon={ShareIcon} />
        <DropDownMenu className='mx-5 py-2'/>
     </Navigation>
    </div>
  )
}

const Navigation = ({ children, className }: NavigationProps) => {
  return (
  <div className={`flex flex-row list-none ${className ? className : ''}`}>
    {children !== null && children !== undefined  ? React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement<any>);
    }): null}
  </div>
  )
}

const NavigationItem = ({ name, path }: NavigationItemProps) => {
  return (
    <li className='mx-2 py-2 md:mx-4 py-4 lg:mx-8 py-6'>
      <Link className={`${styles['navigation-link']} font-normal sm:text-sm md:text-xl`} href={path}>{name}</Link>
    </li>
  )
}

export const Search = ({ icon, className, width = 24, height = 24 }: SearchbarProps) => {
  return (
    <div className={className} >
      <Image src={icon ? icon : SearchIcon} width={width} height={height} alt="Search-Icon" />
    </div>
  )
}

export const Share = ({ icon, className, width = 24, height = 24 }: ShareProps) => {
  return (
    <div className={className ? className : ''}>
      <Image src={icon ? icon : ShareIcon} width={width} height={height} alt="Share-Icon" />
    </div>
  )
}

const DropDownMenu = ({ className, width = 24, height = 24 }: DropDownMenuProps) => {
  const [openDropMenu, setDropdownMenu] = useState(false);
  return (
      <div className={`${className ? className : ''} flex flex-col relative`}>
        <div className={`${!openDropMenu ? 'flex justify-end' : 'hidden'}`}>
          <button onClick={() => setDropdownMenu(!openDropMenu)}>
            <Image src={openDropMenu ? CloseIcon : MenuIcon} width={width} height={height} alt="Menu-Icon" />
          </button>
        </div>
        <div className={`${openDropMenu ? 'absolute right-5 w-80 z-10' : 'hidden'}`}>
        <div className={`${styles['dropdown-menu-container']}`}>
          <div className='flex justify-end mr-5'>
            <button className='z-10' onClick={() => setDropdownMenu(!openDropMenu)}>
              <Image src={openDropMenu ? CloseIcon : MenuIcon} width={width} height={height} alt="Menu-Icon" />
            </button>
          </div>
            <ul className='divide-y divide-solid px-8' style={{borderColor: '#EFEFEF'}}>
                {dropDownMenu ? dropDownMenu.map(menuItem => {
                  return (
                    <li className='py-3' key={menuItem.name}>
                      <Link className={`${styles["dropdown-menu-link"]} text-lg font-normal`} href={menuItem.path}>{menuItem.name}</Link>
                    </li>
                  )
                }): null}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header;