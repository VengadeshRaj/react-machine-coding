import Carousel from "./Carousel";
import jwAngry from "./images/jw-angry.jpg";
import jwAnimated from "./images/jw-animated.jpg";
import jwBlackWhite from "./images/jw-black-white.jpg";
import jwBomb from "./images/jw-bomb.jpg";
import jwGuns from "./images/jw-guns-surrounded.jpg";
import jwPublic from "./images/jw-public.jpg";
import jwRadiant from "./images/jw-radiant.jpg";
import jwBullet from "./images/jw-with-bullet-holes.jpg";
import jwCar from "./images/jw-with-car.jpg";
import jwGun from "./images/jw-with-gun.jpg";
import Image from "./components/Image";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-3xl font-bold">Carousel</h1>
      <Carousel>
        <Image src={jwAngry} />
        <Image src={jwAnimated} />
        <Image src={jwBlackWhite} />
        <Image src={jwBomb} />
        <Image src={jwGuns} />
        <Image src={jwPublic} />
        <Image src={jwRadiant} />
        <Image src={jwBullet} />
        <Image src={jwCar} />
        <Image src={jwGun} />
      </Carousel>
    </div>
  );
}

export default App;
