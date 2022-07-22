import {Box,Heading,Input,Button,Image} from "@chakra-ui/react"
import { PhoneIcon,EmailIcon,ChatIcon} from '@chakra-ui/icons'
import Aimage from './images/a.png'


export default function Footer(){

    return (
    <Box>
      <Box id="footer">
    <Box className="fdiv">
    <Heading as='h4' size='sm' fontWeight=''>ONLINE PRESENCE</Heading>
    <Box w='36%' ml='25%' mt='2'><hr/></Box>
         <h5><a href='https://www.amazon.in/stores/page/B662F65E-796B-418E-A4E3-2FCAE5E3C668?ingress=3&visitId=1fb8c360-930b-4af1-b458-4dc5c999c29c'>Amazon</a></h5>
        <h5><a href="https://www.nykaa.com/search/result/?q=bella+vita+organic">Nykaa</a></h5>
        <h5><a href="https://bit.ly/2l5vklJ">Flipkart</a></h5>
        <h5><a href="https://www.tatacliq.com/search/?searchCategory=all&text=Bella%20Vita%20Organic">TataCliq</a></h5>
        <h5><a href="https://www.snapdeal.com/brand/bella-vita-organic/?sort=plrty"> Snapdeal</a></h5>
        
    </Box>
    <Box className="fdiv">
        <Heading as='h4' size='sm' fontWeight=''>INFORMATION</Heading>
        <Box w='28%' ml='32%' mt='2'><hr/></Box>
        <h5>Blog</h5>
        <h5>Newsroom</h5>
        <h5>Terms and Conditons</h5>
        <h5>Privacy Policy</h5>
        <h5>Refund and Return</h5>
        <h5>Shipping Policies</h5>
    </Box>
    <Box className="fdiv">
    <Heading as='h4' size='sm' fontWeight=''>SUPPORT</Heading>
    <Box w='20%' ml='38%' mt='2'><hr/></Box>
        
        <h5>About Us</h5>
        <h5>Contact Us</h5>
        <h5>Order Tracking</h5>
        <h5>All Products</h5>
        <h5>FAQ</h5>

    </Box>
    <Box className="fdiv">
    <Heading as='h4' size='sm' fontWeight=''>CONTACT US</Heading>
    <Box w='28%' ml='35%' mt='2'><hr/></Box>
        <h5><ChatIcon/> Office Location: Plot no. 417,</h5>
        <h5> Udyog Vihar Phase III,</h5>
        <h5> Gurgaon,Haryana ,India</h5>
        <h5><EmailIcon/> shop@bellavitaorganic.com</h5>
        <h5><PhoneIcon/> +91 9311732440</h5>
        <h5>Timing:9:00 AM To 9:00 PM , </h5>
        <h5>Monday To Sunday</h5>

        
    </Box>
    <Box className="fdiv">
    <Heading as='h4' size='sm' fontWeight=''>OUR NEWSLETTER</Heading>
    <Box w='36%' ml='27%' mt='2'><hr/></Box>
        <h5>Sign up here to get the latest news,</h5>
        <h5> updates and special offers delivered</h5>
        <h5>to your inbox.</h5>
        <h5>Plus, you'll be the first to know about</h5>
        <h5>our discounts!</h5>
        <Input placeholder='Enter Your Email Address' size='lg' />
        <Button colorScheme="green" pl='8' pr='8' mt='5' ml='5'>SUBMIT</Button>
    </Box>
</Box>
<Box><Image src={Aimage} alt='image'/></Box>
    </Box>
)
}