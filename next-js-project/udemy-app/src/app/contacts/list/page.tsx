'use client';

import { useEffect, useState } from 'react';
import { useToggle } from 'react-use';

type Contact = {
  id?: string;
  name: string;
  email: string;
};

const ListPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isName, toggle_isName] = useToggle(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/contact?isName=${isName}`);
      const data: Contact[] = await response.json();

      setContacts(data);
    };

    fetchData();
  }, [isName]);

  return (
    <div>
      <button onClick={toggle_isName}>{isName ? '名前非表示' : '名前表示'}</button>
      <br />
      {`${contacts.length}件:取得`}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}:{contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
