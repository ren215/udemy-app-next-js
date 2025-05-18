import { getContacts, getFistContact } from '@/lib/contact';

const ListPage = async () => {
  const contacts = await getContacts();
  const contact = await getFistContact();

  return (
    <div>
      {`${contacts.length}件:取得`}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}:{contact.name}
          </li>
        ))}
      </ul>
      <div>{contact?.name ?? '登録されていません'}</div>
    </div>
  );
};

export default ListPage;
