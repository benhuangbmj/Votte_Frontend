import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEvents } from '../api/API';
import Navbar from '../components/Navbar';
import IdeaSubmission from '../components/IdeaSubmission';
import IdeasList from '../components/IdeasList';

function EventScreen() {
  const { eventId } = useParams();
  const email = localStorage.getItem('userEmail'); // Get email directly from local storage
  const [event, setEvent] = useState(null);
  const [ideasRefreshKey, setIdeasRefreshKey] = useState(0); // Key to trigger re-render for IdeasList
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!email) {
      console.error('Error: Email not provided');
      setError('Email not provided.');
      setLoading(false);
      return;
    }

    const fetchEventDetails = async () => {
      try {
        const events = await getEvents();
        const eventDetails = events.find((evt) => evt.id === parseInt(eventId, 10));
        if (!eventDetails) {
          throw new Error('Event not found');
        }
        setEvent(eventDetails);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Failed to load event details');
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId, email]);

  const refreshIdeas = () => {
    setIdeasRefreshKey((prevKey) => prevKey + 1); // Update key to force IdeasList re-render
  };

  if (loading)
    return (
      <div style={{ backgroundColor: '#030C18', minHeight: '100vh', color: '#FFF' }}>
        <Navbar userName={email} />
        <p className="text-center mt-10">Loading event details...</p>
      </div>
    );

  if (error)
    return (
      <div style={{ backgroundColor: '#030C18', minHeight: '100vh', color: '#FFF' }}>
        <Navbar userName={email} />
        <p className="text-center mt-10">{error}</p>
      </div>
    );

  return (
    <div style={{ backgroundColor: '#030C18', minHeight: '100vh' }}>
      <Navbar userName={email} />
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">{event?.title}</h2>
        <p className="text-center text-gray-400 mb-6">
          {new Date(event?.event_date).toLocaleDateString()}
        </p>
        <div className="mb-10">
          <IdeaSubmission email={email} eventId={eventId} refreshIdeas={refreshIdeas} /> {/* Pass refreshIdeas */}
        </div>
        <IdeasList key={ideasRefreshKey} eventId={eventId} /> {/* Trigger re-render */}
      </div>
    </div>
  );
}

export default EventScreen;
