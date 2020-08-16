import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


//adapter puede soportar las configuraciones que le pongamos para el testing
configure({adapter: new Adapter()})