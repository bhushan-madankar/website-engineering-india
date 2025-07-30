import React from 'react';
import HomePage from './Homepg';
import ClgSec from '../ClgSec/ClgSec';
import EventsPage from '../../components/Eventpage';
import AbhyudayaPage from '../Abhyudaya/Abyudaya';
import MagazinePage from '../Magazine';

const UnifiedLanding = () => {
  return (
    <div className="space-y-20 px-4 py-8">
      <HomePage />
      <ClgSec />
      <EventsPage />
      <AbhyudayaPage />
      <MagazinePage />
    </div>
  );
};

export default UnifiedLanding;
