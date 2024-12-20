// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Row 1: Company Name */}
        <div className="text-center text-2xl font-bold mb-4">
          <p>Change Trace</p>
        </div>

        {/* Row 2: Quote */}
        <div className="text-center text-lg italic mb-8">
          <p>"Every small action counts in the fight for a healthier planet. Challenge yourself, inspire others,
 and together we can create a sustainable future."</p>
        </div>

        {/* Row 3: Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <img src="/social.png" alt="Facebook" className="h-6 hover:opacity-75" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;