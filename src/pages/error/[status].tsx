import { useRouter } from 'next/router'
import Link from 'next/link';

const ErrorPage = () => {
    const router = useRouter()
    const { status } = router.query
  
    return (<>
        <p>Error Status: {status}</p>
        <Link href='/'>Error go back</Link>   
    </>)
  }
  
  export default ErrorPage