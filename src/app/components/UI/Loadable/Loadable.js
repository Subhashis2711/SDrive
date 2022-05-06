import React, { Suspense } from 'react';
import Loading from '../Loading/Loading';

const Loadable = (Component) => (props) => (
   <Suspense fallback={<Loading />}>
      <Component {...props} />
   </Suspense>
);

export default Loadable;