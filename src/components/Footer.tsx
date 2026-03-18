const Footer = () => {
  return (
    <footer id="footer" className="py-12 bg-near-black section-padding">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-warm-taupe">
          © {new Date().getFullYear()} mm concept. All rights reserved.
        </p>
        <p className="text-xs text-warm-taupe/60">
          Building structured digital ecosystems for Europe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
