export default function checkReview({
    params,
}: { params: { reviewId: string, productId: string } }
) {
    return <h1>Review {params.reviewId} for Product {params.productId}</h1>
}