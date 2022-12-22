import { Stack, Link } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function SocialIcons({ ...rest }) {
  return (
    <Stack className="social-icons" {...rest}>
      <Link
        className="icon"
        href="https://www.linkedin.com/in/saqib-aziz41/"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "blue.400" }}
      >
        <AiFillLinkedin />
      </Link>
      <Link
        className="icon"
        target="_blank"
        href="https://github.com/Saqib-Aziz33"
        rel="noopener noreferrer"
        _hover={{ color: "black" }}
      >
        <AiFillGithub />
      </Link>
      <Link
        className="icon"
        href="mailto:saqib.aziz41@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "red.400" }}
      >
        <AiFillMail />
      </Link>
      <Link
        className="icon"
        href="https://wa.me/+923459084214"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "green.400" }}
      >
        <AiOutlineWhatsApp />
      </Link>
    </Stack>
  );
}
export default SocialIcons;
