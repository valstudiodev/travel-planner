import { Link, LinkProps } from "react-router";

interface ButtonLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  children: React.ReactNode;
}

function ButtonLink({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonLinkProps): React.JSX.Element {
  return (
    <Link
      {...props}
      className={`button-link ${className} 
                ${variant === 'primary'
          ? 'bg-primary' : variant === 'secondary'
            ? 'bg-success' : 'bg-danger'
        } `}>
      {children}
    </Link>
  );
}

export default ButtonLink;