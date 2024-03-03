export default function PostDetail({
    params,
  }: {
    params: {
      postId: string;
      reviewId: string;
    };
  }) {
    return (
      <>
        <h1>
          Review {params.reviewId} for post {params.postId}
         
          <div className=" flex justify-center font-bold text-5xl mt-12 mb-20 ">
            Post Details with Review
    </div> 
        </h1>
      </>
    );
  }