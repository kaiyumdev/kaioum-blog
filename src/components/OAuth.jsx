import { Button } from "flowbite-react"
import { AiFillGoogleCircle } from 'react-icons/ai';
import { getAuth } from 'firebase/auth';

const OAuth = () => {
    const auth = getAuth();
    const handleGoogleClick = () => {

    }
    return (
        <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
            <AiFillGoogleCircle className='w-6 h-6 mr-2' />
            Continue with Google
        </Button>
    )
}

export default OAuth