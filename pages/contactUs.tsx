import { Inter } from 'next/font/google'
import ContactUsComponent from '../components/contactus-component'
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