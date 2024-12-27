export default function ProductDetail({
    params,
}: { params: { productId: string } }
) {
    return <h1>Detail {params.productId}</h1>
}