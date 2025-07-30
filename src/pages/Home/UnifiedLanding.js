import React from 'react';
import HomePage from './Homepg';
import ClgSec from '../ClgSec/ClgSec';
import EventsPage from '../../components/Eventpage';
import AbhyudayaPage from '../Abhyudaya/Abyudaya';
import MagazinePage from '../Magazine';

const UnifiedLanding = () => {
  return (
    <div className="space-y-12 px-4">
      <HomePage />
      <ClgSec />
      <EventsPage />
      <AbhyudayaPage />
      <MagazinePage />
    </div>
  );
};

export default UnifiedLanding;
