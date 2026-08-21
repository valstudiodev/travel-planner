interface SubtitleProps {
  children: React.ReactNode;
  className?: string
}

function Subtitle({
  children,
  className
}: SubtitleProps) {
  return (
    <h3 className={`subtitle ${className}`}>
      {children}
    </h3>
  );
}

export default Subtitle;