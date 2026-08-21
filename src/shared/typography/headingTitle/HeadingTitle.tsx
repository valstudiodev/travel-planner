interface HeadingTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

function HeadingTitle({
  title,
  className,
}: HeadingTitleProps): React.JSX.Element {
  return (
    <h1 className={className}>
      {title}
    </h1>
  );
}

export default HeadingTitle; 