import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";
export default function ProductsList({products}:{products:Product[]}){
  return(
    <div>
        {products.map((product)=>(
            <>
           <Link href={"/products/"+product.id}>
            <div key={product.id}>{product.name}</div>
            <Image src={'/'+product.imageUrl} alt={product.name} width={150} height={150}/>
            <p> {product.description}</p>
            <span>${product.price}</span>
            </Link>
            </>
        ))}
    </div>
  )
}