import { shoe8 } from "../../../../../public/assets/images"
import Button from "../Button/Button"
import Image from "next/image"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between item-center
       max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl font-bold capitalize
      lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Crafted with precision, designed for durability. Our shoes blend
          premium materials with expert craftsmanship to deliver lasting quality
          and style.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Experience next-level comfort with our advanced cushioning technology.
          Whether you're running errands or hitting the gym, your feet stay
          supported all day long.
        </p>
        <div className="mt-11">
          <Button label="View Details" iconURL="" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={shoe8}
          alt="Super Quality"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
