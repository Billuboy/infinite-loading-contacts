import 'styles/components/home/contactCard.css';

import { User } from 'types/apiResponse';

type ContactCardProps = {
  info: User;
};

export default function ContactCard({ info }: ContactCardProps) {
  return (
    <article className="contact-card">
      <div className="contact-card-top-element">
        <img
          loading="lazy"
          src={info.picture.thumbnail}
          alt={info.name.first}
        />
        <p>{info.location.city.split('(')[0]}</p>
      </div>
      <div className="contact-card-bottom-element">
        <h3>{`${info.name.title} ${info.name.first} ${info.name.last}`}</h3>
        <h4>{info.phone}</h4>
        <p>{info.email}</p>
      </div>
    </article>
  );
}
