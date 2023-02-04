import { Link } from 'react-router-dom';

const About = (): JSX.Element => {
  return (
    <div className='about'>
      <h1 className='title'>About</h1>
      <div className='pageButtonsContainer'>
        <Link to='/' className='preventDefaultStyle genericButton'>
          Back
        </Link>
      </div>
      <div>
        <h3 className='subtitle'>About this</h3>
        <p className='about__item w600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          corporis tempore facilis ratione minima sint earum rem nulla autem?
          Distinctio vel ducimus fugit deleniti, eligendi earum reprehenderit
          aperiam nisi ipsa. Recusandae inventore quasi non, delectus voluptatem
          harum magni provident dolores adipisci rerum laudantium ullam, totam
          nam quidem error. Officia aut exercitationem, accusantium tempore
          possimus debitis dolor vel quia aliquam molestiae?
        </p>
      </div>
      <div>
        <h3 className='subtitle'>About that</h3>
        <p className='about__item w600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid
          molestiae quos similique sequi quibusdam maiores illo ipsam dolorum
          iusto? Maxime deserunt, corrupti eum similique velit quam molestias
          quas reiciendis?
        </p>
      </div>
    </div>
  );
};

export default About;
