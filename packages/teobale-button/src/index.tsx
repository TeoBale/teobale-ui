import { Props } from './types';


const Button = ({
  className,
  children,
}: Props) => {


  return (
    <button className={className}>{children}</button>
  );
};

export default Button;
