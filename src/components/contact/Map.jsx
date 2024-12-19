import { useState } from 'react';

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 h-full">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Our Location</h2>

      {isLoading && (
        <div className="flex items-center justify-center h-40">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-gray-900 mb-2"></div>
            <p className="text-gray-500 text-sm">Loading map...</p>
          </div>
        </div>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7757287264156!2d91.74531141498268!3d26.14451668346905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5944719a1d33%3A0xe3b62bc44946b6e4!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1702991008492!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`rounded-md transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        title="Map showing the location of Guwahati, Assam"
        onLoad={() => setIsLoading(false)}
      ></iframe>

      {!isLoading && (
        <p className="mt-4 text-gray-600 text-sm">
          Showing the location of Guwahati, Assam.
        </p>
      )}
    </div>
  );
}
