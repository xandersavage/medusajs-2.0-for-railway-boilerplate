import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 sm:gap-6 lg:gap-8">
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              className="
                relative 
                w-full 
                aspect-square 
                md:aspect-[4/3] 
                lg:aspect-[3/4] 
                overflow-hidden 
                rounded-lg 
                shadow-md 
                hover:shadow-xl 
                transition-shadow 
                duration-300 
                bg-gray-100
              "
              id={image.id}
            >
              {!!image.url && (
                <Image
                  src={image.url}
                  priority={index <= 2}
                  className="
                    absolute 
                    inset-0 
                    w-full 
                    h-full 
                    object-cover 
                    hover:scale-105 
                    transition-transform 
                    duration-300 
                    ease-in-out
                  "
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="
                    (max-width: 640px) 100vw, 
                    (max-width: 768px) 50vw, 
                    (max-width: 1024px) 33.33vw, 
                    25vw
                  "
                />
              )}
            </Container>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
