const fs = require('fs');
const content = fs.readFileSync('/app/applet/src/pages/Plantillas.tsx', 'utf8');

const target1 = `import React, { useState } from 'react';`;
const replacement1 = `import React, { useState, useEffect } from 'react';\nimport { useLenis } from 'lenis/react';`;

const target2 = `export default function Plantillas() {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [status, setStatus] = useState<Status>('idle');`;
const replacement2 = `export default function Plantillas() {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [status, setStatus] = useState<Status>('idle');
  const lenis = useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);`;

if (content.includes(target1) && content.includes(target2)) {
    let newContent = content.replace(target1, replacement1);
    newContent = newContent.replace(target2, replacement2);
    fs.writeFileSync('/app/applet/src/pages/Plantillas.tsx', newContent);
    console.log("Success");
} else {
    console.log("Target not found");
}
