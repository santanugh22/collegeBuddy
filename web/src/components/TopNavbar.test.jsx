import {test,describe,expect} from 'vitest'
import {render,screen} from '@testing-library/react'


import LandingPage from '../pages/LandingPage'


describe('Meow',()=>{
   
    test('hello',()=>{
        render(<LandingPage/>)
        const LoginButton=screen.getByRole('button',{
            name:/Login/i
        })
         
        expect(LoginButton).toBeDefined()
    })
})