// jest.mock('react-dom');
// import renderer from 'react-test-renderer';

import React from 'react';
import ReactDOM from 'react-dom';
import Detail from '../components/Detail';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Detail', () => {
    test('should be defined', () => {
        expect(Detail).toBeDefined();
    });

    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Detail/>, div);
    });

    it('testingMethods should be defined', () => {
        const wrapper = mount(<Detail />); wrapper.instance().testingMethods()
    });



    // it('should have a price value', () => {
    //     const tree = mount(
    //         <Detail productPrice='12' />
    //     );
    //     expect(typeof(tree.find('.detail').node.props.value)).toBe('string');
    //     expect(tree.find('.detail').node.props.value).toEqual('12');
    // });

 
});


