import { VectorMap } from '@south-paw/react-vector-maps';
import { data } from './store'
import { Map } from './appc'

function App() {
  return (
    <Map>
      <VectorMap {...data} checkedLayers={['nz-auk']} currentLayers={['nz-wgn']} />
    </Map>
  );
}

export default App;
