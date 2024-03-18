import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'components/layout/navbar';
import Image from 'next/image';
import Link from 'next/link';
export async function HeroSection() {
  return (
    <>
      <div className="bg-pattern h-svh w-full">
        <Navbar />
        <div className="hero-content mx-16">
          <div className="items-left flex max-w-7xl flex-col justify-center">
            <h2 className="hero-title">The Castle's Finest Merch</h2>
            <p className="hero-text">
              Embrace the Spirit of Jofa with The Castle's finest merch! From the stealth of our
              camo gear to our other iconic designs. Wear your gear with pride and be a part of our
              unique tradition – where style meets reverence.
            </p>
            <div className="hero-categories">
              <Link
                href="/category1"
                className="cursor-pointer border border-white px-4 py-2 text-white hover:bg-white hover:text-black"
              >
                HOODIES
              </Link>
              <Link
                href="/category2"
                className="cursor-pointer border border-white px-4 py-2 text-white hover:bg-white hover:text-black"
              >
                T-SHIRTS
              </Link>
              <Link
                href="/category3"
                className="cursor-pointer border border-white px-4 py-2 text-white hover:bg-white hover:text-black"
              >
                PANTS
              </Link>
              <Link
                href="/category4"
                className="cursor-pointer border border-white px-4 py-2 text-white hover:bg-white hover:text-black"
              >
                OTHER
              </Link>
            </div>
            <div className="flex items-center justify-center pt-4 md:justify-start md:pt-16">
              <span className="text-2xl font-light">Explore Merch</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="fa-sm fa-light ml-4"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={`/assets/Merch.png`} alt={'Merch Example'} width={1464} height={1464} />
          </div>
        </div>
      </div>
    </>
  );
}
