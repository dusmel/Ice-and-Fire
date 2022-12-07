import Image from 'next/image';
import green1 from 'public/3d-items/Action+perm_identity_L.png';
import yellow1 from 'public/3d-items/Gon_3_Down_Standing_Outline_L Shadowless.png';
import yellow2 from 'public/3d-items/Sphere_Ring_Standing_L.png';
import blue1 from 'public/3d-items/Torus_Half_Laying_3__R.png';

const Patterns: React.FC<{}> = () => {
  return (
    <div>
      <div className="w-40 h-20 pattern-dots-md absolute top-16 left-0 text-slate-500 z-0"></div>
      <div className="w-40 h-20 pattern-dots-lg absolute bottom-5 right-0 text-slate-400 z-0"></div>
      <Image src={green1} alt="3d element" className='absolute w-20 right-5' />
      <Image src={yellow1} alt="3d element" className='absolute w-28 right-2/4 top-1/3' />
      <Image src={yellow2} alt="3d element" className='absolute w-28 right-1/4 bottom-3' />
      <Image src={blue1} alt="3d element" className='absolute w-28 left-2/4 bottom-1/3' />
    </div>
  );
};

export default Patterns;