import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FormInput } from './FormInput';

interface IUserData {
  userName: string;
  userPhone: string;
}

export const Form = () => {
  const [userData, setUserData] = useLocalStorage<IUserData>('userData');
  const data = userData.userName + ' ' + userData.userPhone;

  const handleFormSubmit = (data: IUserData) => {
    setUserData(data);
  };

  return (
    <div>
      {!!userData && <p>{data}</p>}
      <FormInput onFormSubmit={handleFormSubmit} />
    </div>
  );
};
