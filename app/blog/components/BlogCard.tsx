const BlogCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-md shadow-neutral">
      <figure className="bg-secondary">
        <img
          src="/images/1.webp"
          alt="blog"
        />
      </figure>
      <div className="card-body text-sm sm:text-normal">
        <h2 className="card-title text-sm sm:text-normal">Memory Game</h2>
        <div className="badge badge-secondary">NEW</div>
        <p>Made using: ???</p>
        <p>Secrets: ???</p>
        <div className="card-actions justify-center sm:justify-end lg:justify-center">
          <button className="btn btn-primary btn-sm">Unlock info</button>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
