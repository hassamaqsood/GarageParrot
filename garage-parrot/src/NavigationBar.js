import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const NavigationBar = () => {
  const items = [
    {
      label: 'Accueil',
      icon: 'pi pi-fw pi-home',
      command: () => { window.location.hash = "/"; },
    },
    {
      label: 'Services',
      icon: 'pi pi-fw pi-cog',
      command: () => { window.location.hash = "/services"; },
    }
  ];

  return (
    <div>
      <div className="card">
        <Menubar model={items}>
          <Button label="Laisser un avis" icon="pi pi-comments" className="p-button-success" style={{ marginLeft: 4 }} />
        </Menubar>
      </div>
    </div>
  );
}

export default NavigationBar;
