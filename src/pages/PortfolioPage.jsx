import { Link } from 'react-router-dom';
import Projects from '../data/cards.js';
import Card from '../components/UI/Card';

export default function PortfolioPage() {
  const projectList = Projects();

  return (
    <>
      <h2 id="Work" className="work-header">
        Portfolio
      </h2>
      <section className="row justify-center">
        {projectList.map((project) => {
          const { id, title, description, image, cardClass, altText } = project;
          return (
            <Link
              key={id}
              to={`/project/${id}`}
              className={cardClass}
            >
              <Card
                title={title}
                description={description}
                image={image}
                altText={altText}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
}