const Blog = ({ params }: { params: { year: string[] } }) => {
  return (
    <div>
      {params.year ? (
        params.year.map((o, index) => <span key={index}>{o}</span>)
      ) : (
        <span>blog页面</span>
      )}
    </div>
  );
};

export default Blog;
