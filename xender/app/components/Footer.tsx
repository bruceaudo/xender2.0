const os = require("node:os");

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-12 z-10 bg-gray-200 fixed bottom-0 left-0 right-0 flex items-center px-5 border-t border-t-gray-300 justify-end gap-x-8">
      <p className="text-[13px]">
        <strong>Device name:</strong> {os.hostname()}
      </p>
    </footer>
  );
};
export default Footer;
