
interface ArticleCardProps {
  children: React.ReactNode;
  className?: string;
}

function ArticleCard({
  children,
  className
}: ArticleCardProps) {
  return (
    <article
      className={`
      bus-card bg-bg
      text-text text-xl rounded
      p-4 border-primary border-2
       items-end gap-10 justify-between 
      ${className}
      `}>
      {children}
    </article>
  );
}

export default ArticleCard;