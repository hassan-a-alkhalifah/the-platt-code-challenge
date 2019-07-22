import React from 'react';
import App from '../../components/App';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe('<App /> tests', () => {
    it('Snapshot test. Does render', () => {
        const AppComponent = <App />;
        const component = shallow(AppComponent);
        expect(component).toMatchSnapshot();
    });
});