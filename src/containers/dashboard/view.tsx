import React from 'react';
import { colorModel } from './model';

import withLoading from '@components/loader';

interface DashboardViewProps {
  colors: typeof colorModel[];
}

const DashboardView: React.SFC<DashboardViewProps> = ({ colors }) => {
  return (
    <div>
      {colors.map((c, i) => (
        <div key={`${c.name}_${i}`}>
          <div>Name: {c.name}</div>
          <div>Year: {c.year}</div>
          <div style={{ width: '30px', height: '20px', background: c.color }} />
        </div>
      ))}
    </div>
  );
};

export default withLoading(DashboardView);
