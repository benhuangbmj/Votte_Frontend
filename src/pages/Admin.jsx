import AddEvent from '../components/admin/AddEvent';
import ManageIdeas from '../components/admin/ManageIdeas';
import EventsList from '../components/admin/EventsList';
import Navbar from '../components/Navbar';

const AdminPage = ({ userEmail }) => {
  return (
    <div className="bg-[#030C18] text-white min-h-screen">
      {/* Full-width Navbar */}
      <Navbar userName={userEmail} />

      <div className="flex flex-col items-center px-8 mt-4">
        <AddEvent userEmail={userEmail} />

        {/* Side-by-side layout for Events and Ideas sections */}
        <div className="flex flex-wrap justify-between max-w-6xl w-full mt-8">
          <div className="w-full md:w-1/2 p-4">
            <EventsList />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <ManageIdeas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
