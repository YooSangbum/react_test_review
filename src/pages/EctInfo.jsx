import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import InfoDescription from './InfoDescription';
import InfoAditional from './InfoAditional';
import InfoReviews from './InfoReviews';

function EctInfo() {
  return (
    <section className="mw">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab
          eventKey="Description"
          title="Description"
          style={{ color: '#707070' }}
        >
          <InfoDescription />
        </Tab>
        <Tab eventKey="Aditional information" title="Aditional information">
          <InfoAditional />
        </Tab>
        <Tab eventKey="Reviews" title="Reviews">
          <InfoReviews />
        </Tab>
      </Tabs>
    </section>
  );
}

export default EctInfo;
