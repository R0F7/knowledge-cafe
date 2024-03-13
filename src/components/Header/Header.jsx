import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center my-5 pb-2 border-b-4 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'> Knowledge Cafe </h1>
        <img src={profile} alt="" />
        </header>
    );
};

export default Header;