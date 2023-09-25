import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import ContactUsComponent from '../components/contactus-component'
import { userAgentFromString } from 'next/server';
const inter = Inter({ subsets: ['latin'] })

export default function ContactUs(rslt:any) {
  return (
    <div>
      <ContactUsComponent props={rslt} ></ContactUsComponent>
    </div>
  )
}

  // This gets called on every request
  export async function getServerSideProps() {
    let rslt;
    let users;
    // Fetch data from external API
    users = {
        firstName: 'ارشک',
        lastName: 'yadegar'
      }
    let hobbies =["sports","movies"];
    let posts = [{id:1,title:"post number one"}]

    // Pass data to the page via props
    return { props: { users , hobbies, posts }}
  }

ContactUs.Layout = "Main"