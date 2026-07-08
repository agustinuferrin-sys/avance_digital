const fs = require('fs');
const content = fs.readFileSync('/app/applet/src/sections/Navbar.tsx', 'utf8');

const target1 = `<Link to="/plantillas" className="text-brand font-medium hover:text-white transition-colors border border-brand/50 rounded-pill px-4 py-1.5 hover:bg-brand/20 whitespace-nowrap">`;
const replacement1 = `<Link to="/plantillas" onClick={() => window.scrollTo(0, 0)} className="text-brand font-medium hover:text-white transition-colors border border-brand/50 rounded-pill px-4 py-1.5 hover:bg-brand/20 whitespace-nowrap">`;

const target2 = `<Link to="/plantillas" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold text-left text-brand">`;
const replacement2 = `<Link to="/plantillas" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }} className="text-2xl font-display font-bold text-left text-brand">`;

if (content.includes(target1) && content.includes(target2)) {
    let newContent = content.replace(target1, replacement1);
    newContent = newContent.replace(target2, replacement2);
    fs.writeFileSync('/app/applet/src/sections/Navbar.tsx', newContent);
    console.log("Success");
} else {
    console.log("Target not found");
}
