import './App.css'
import React from 'react';
import Card from './componentes/layout/card';






export default function App(props) {

    return (

        <div className='App'>
            <div className='titulo'>
                Jogo da velha <span className='dark'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </svg></span>

            </div>
    
            <div className='Cards'>
                


                <Card color='#0c5776'>
                    

                    <table>
                        <tr >
                            <td className='num1 all'></td>
                            <td className='num2 all'></td>
                            <td className='num3 all'></td>
                        </tr>
                        <tr>
                            <td className='num4 all'></td>
                            <td className='num5 all'></td>
                            <td className='num6 all'></td>
                        </tr>
                        <tr>
                            <td className='num7 all'></td>
                            <td className='num8 all'></td>
                            <td className='num9 all'></td>
                        </tr>
                    </table>
                </Card>



            </div>





        </div>
    )
}