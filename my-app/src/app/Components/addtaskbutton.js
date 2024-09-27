import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/image";

export default function App() {
    return (
      <Button >
        <Image
          width={300}
          alt="Add task button"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </Button>
    );
  }