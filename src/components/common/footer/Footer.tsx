import React from 'react'
import Earth from '@/assets/earth-white.svg';
import { NavigationItemProps } from '@/types/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  const footerNavs: NavigationItemProps[] = [
    {
      name: 'Contact Us',
      path: '/contact-us'
    },
    {
      name: 'About Us',
      path: '/about-us'
    },
    {
      name: 'Privacy Policy',
      path: '/privacy-policy'
    },
    {
      name: 'Sitemap',
      path: '/sitemap'
    },
    {
      name: 'Terms & Conditions',
      path: '/terms-and-conditions'
    }
  ]
  return (
    <footer className={`${styles['footer-container']} flex flex-row justify-between text-center`}>
      <div className='flex flex-row items-center'>
        {footerNavs.map((nav) => {
          return (
            <li className={`${styles['footer-text']}`} key={nav.name}>
              <Link href={nav.path}>{nav.name}</Link>
          </li>
          )
        })}
      </div>
      <div className='flex flex-row items-center'>
        <Image src={Earth} width={33} height={33} alt="Earth-Icon" />
        <h1 className={`${styles['nasa-text']}`}>NASA</h1>
      </div>
    </footer>
  )
}

export default Footer;