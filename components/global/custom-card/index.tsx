import Image from "next/image"

interface CardProps  {
    image: string
}
export default function CustomCard({image}: CardProps) {
    return <div>
        <Image src={image} width={100} height={100} alt="image" style={{objectFit:"cover"}} />
    </div>
}