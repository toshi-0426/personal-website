import Image from "next/image";
import H1 from "@/components/h1";
import { photos } from "../data/photos";


export const metadata = {
    title: "Photos"
  };

export default function PhotosPage() {

    return (
        <div>
            <H1>My Photos</H1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photos.map((photo, i) => (
                    <div key={photo.src} className="relative h-60 overflow-y-hidden">
                    <Image fill key={photo.src}
                        src={photo.src} 
                        className="object-contain w-full h-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        alt={photo.alt} priority={true} quality={50}/>
                    </div>
                ))}
                
            </div>
            {/*
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-60 overflow-y-hidden">
                    <Image fill src={dog1} className="object-contain w-full h-full" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt="Picture of my dog" priority={true} quality={50} placeholder="blur" /> 
                </div>
                <div className="relative h-60 overflow-y-hidden">
                    <Image fill src={dog2} className="object-contain w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt="Picture of my dog" priority={true} quality={50} placeholder="blur" /> 
                </div>
                <div className="relative h-60 overflow-y-hidden">
                    <Image fill src={dog3} className="object-contain w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt="Picture of my dog" quality={50} placeholder="blur" /> 
                </div>
                <div className="relative h-60 overflow-y-hidden">
                    <Image fill src={dog4} className="object-contain w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt="Picture of my dog" quality={50} placeholder="blur" /> 
                </div>
                
                         
            </div>
            */}
        </div>
    )
}