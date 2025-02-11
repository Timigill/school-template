export default function Footer() {
  return (
    <footer className="bg-[#034D27] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC107]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#FFC107] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#FFC107] transition-colors">About</a></li>
              <li><a href="/academics" className="hover:text-[#FFC107] transition-colors">Academics</a></li>
              <li><a href="/contact" className="hover:text-[#FFC107] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC107]">Academics</h3>
            <ul className="space-y-2">
              <li><a href="/academics/programs" className="hover:text-[#FFC107] transition-colors">Programs</a></li>
              <li><a href="/academics/faculty" className="hover:text-[#FFC107] transition-colors">Faculty</a></li>
              <li><a href="/academics/research" className="hover:text-[#FFC107] transition-colors">Research</a></li>
              <li><a href="/academics/library" className="hover:text-[#FFC107] transition-colors">Library</a></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC107]">Portals</h3>
            <ul className="space-y-2">
              <li><a href="/portals/student" className="hover:text-[#FFC107] transition-colors">Student Portal</a></li>
              <li><a href="/portals/teacher" className="hover:text-[#FFC107] transition-colors">Teacher Portal</a></li>
              <li><a href="/portals/parent" className="hover:text-[#FFC107] transition-colors">Parent Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC107]">Contact Us</h3>
            <ul className="space-y-2">
              <li>📍 College Address, City, Country</li>
              <li>📞 +92-XXX-XXXXXXX</li>
              <li>📧 info@chenabcollege.edu</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Chenab College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 