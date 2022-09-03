import React from 'react';

import { User } from 'types/apiResponse';

type ContactCardProps = {
  info: User;
};

export default function ContactCard({ info }: ContactCardProps) {
  return (
    <div>
      <img loading="lazy" src={info.picture.thumbnail} alt={info.name.first} />
      <p>{`${info.name.title} ${info.name.first} ${info.name.last}`}</p>
      <p>{info.email}</p>
      <p>{info.phone}</p>
    </div>
  );
}
