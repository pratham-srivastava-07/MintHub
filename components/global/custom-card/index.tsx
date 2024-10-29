import Image from "next/image"

interface CardProps  {
    image: string
}
export default function CustomCard({image}: CardProps) {
    return <div>
        <Image src={image} width={150} height={150} alt="image" style={{objectFit:"cover"}} />
    </div>
}