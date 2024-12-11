import Button from '@/components/ui/social_buttons';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const MyPage = () => {
  return (
    <div className="flex gap-4">
      <Button label="Join ABP Whatsapp" icon={<FaWhatsapp />} bgColor="bg-green-500" />
      <Button label="Join Telegram Channel" icon={<FaTelegram />} bgColor="bg-blue-500" />
    </div>
  );
};

export default MyPage;