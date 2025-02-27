import { render, screen} from '@testing-library/react'
import AppInput from './AppInput'

describe('AppInput', () => {
    beforeEach(()=>{
        render(<AppInput type="text" placeholder='Escribir algo' label='data'/>)
    })
    test('should input defined', () => {
        const input = screen.queryByTestId('input')
        expect(input).toBeDefined()

    })

});
