import { useState } from 'react';
import { nanoid } from 'nanoid';

const userNameId = nanoid();
const userPhoneId = nanoid();

interface IUserData {
  userName: string;
  userPhone: string;
}

interface Props {
  onFormSubmit: ({ userName, userPhone }: IUserData) => void;
}

export const FormInput = ({ onFormSubmit }: Props) => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const resetForm = () => {
    setUserName('');
    setUserPhone('');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (name === 'userName') setUserName(value);
    if (name === 'userPhone') setUserPhone(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onFormSubmit({ userName, userPhone });
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div role="group">
          <input
            type="text"
            name="userName"
            id={userNameId}
            onChange={handleInput}
            value={userName}
          />
          <label htmlFor={userNameId}>Имя</label>
        </div>

        <div>
          <input
            type="tel"
            name="userPhone"
            id={userPhoneId}
            minLength={4}
            value={userPhone}
            onChange={handleInput}
          />
          <label htmlFor={userPhoneId}>Телефон</label>
        </div>

        <button type="submit">
          {userName} Отправить {userPhone}
        </button>
      </form>
    </div>
  );
};
