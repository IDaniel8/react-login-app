import React from 'react';

export interface WithLoadingProps {
  loading: boolean;
}

const withLoader = <P extends unknown>(Component: React.ComponentType<P>): React.SFC<P & WithLoadingProps> => {
  const Loading = ({ loading, ...props }) => {
    return loading ? <div>Loading...</div> : <Component {...(props as P)} />;
  };
  return Loading;
};

export default withLoader;
