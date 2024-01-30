
type HeaderProps = {
    title: string;
  };
  


const Header = ({title}:HeaderProps) => {
    return (
        <h1 className="text-5xl font-bold text-[#2BAE7A] text-center">
            {title}
        </h1>
    );
};

export default Header;