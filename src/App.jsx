import { useState } from 'react';
import './App.css';

import { Banner } from './components/banner/Banner';
import { NavBar } from './components/navbar/NavBar';
import { Skills } from './components/skill/Skills';
import { Journey } from './components/journey/Journey';
import { Credentials } from './components/credentials/Credentials';
import { Footer } from './components/footer/Footer';
import { ContactModal } from './components/contact/ContactModal';

function App() {

    const handleDownloadResume = () => {
    const link = document.createElement("a");

    link.href = "/Franck_Resume.pdf";
    link.download = "Franck_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="App">

            <NavBar
                onDownloadResume={handleDownloadResume}
            />

            <Banner
                onConnect={() => setIsContactOpen(true)}
            />

            <Skills />

            <Journey />

            <Credentials />

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

        </div>
    );
}

export default App;