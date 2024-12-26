import Image from "next/image";
import proFile from '../../public/file.svg'

export default function Home() {
  return (
    <div className="w-5">
      <Image src={proFile} width={200} height={200} alt="image" />
    </div>
  )
}
