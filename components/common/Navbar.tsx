import Image from "next/image";
import Icon from 'public/icon.png';

const Navbar = () => {
  return (
    <div className="px-16">
      <Image src={Icon} alt="icon got" className="w-20 h-auto" />
    </div>
  );
};

export default Navbar;
