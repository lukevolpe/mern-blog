import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs';

const FooterComp = () => {
  return (
    <Footer
      container
      className='border border-t-8 border-teal-500 dark:text-white'
    >
      <div className='w-full max-w-7xl ax-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols1'>
          <div className='my-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg text-white'>
                Fox
              </span>{' '}
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  100 JS Projects
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Fox Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow Us' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Github
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Discord
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Terms &amp; Conditions
                </Footer.Link>
                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by='Fox Blog'
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
