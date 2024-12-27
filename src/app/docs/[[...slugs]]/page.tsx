export default function Docs(
    {params}: {
        params:{
            slugs: string[],
        }
    }
){
    if(params.slugs?.length === 2){
        return <h1>
            Views docs for feature {params.slugs[0]} and correct {params.slugs[1]}
        </h1>
    }else if(params.slugs?.length === 1){
        <h1>Views docs for feature {params.slugs[0]}</h1>
    }
    return <h1>Check</h1>
}