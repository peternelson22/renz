import { User } from 'firebase/auth';
import { FaUserCircle } from 'react-icons/fa';

type Props = {
  id: string;
  users: User;
};

const Chat = ({ id, users }: Props) => {
  return (
    <div>
      <FaUserCircle />
      <p>{id}</p>
    </div>
  );
};
export default Chat;
