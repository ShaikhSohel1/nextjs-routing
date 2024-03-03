export default function ProductDetails({ params } : {
    params: { postId: string };
}) {
    return(
        <>
            <h1>Details about post {params.postId}
            file structure will be like this:
             /src
                /app
                    /post
                        /[postId]
                            /page.tsx
            </h1>
            <div className=" flex justify-center font-bold text-5xl mt-12 mb-20 ">
                Post Details
    </div> 
        </>
    )
}
