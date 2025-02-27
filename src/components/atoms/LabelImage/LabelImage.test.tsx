import { LabelImage } from "./LabelImage"
import {render, screen} from '@testing-library/react'
import captus from '../../../assets/captus.png'
describe('LabelImage', ()=> {

    beforeEach(()=>{
        render(<LabelImage label="test" img={captus}/>)
    })

    test('should show the LabelImage component', () => {
        expect(screen.getByText('test')).toBeDefined()
    })
    test('should show image all the time', ()=>{
        const image = screen.getByTestId('image');
        expect(image).toBeDefined()
    })
})