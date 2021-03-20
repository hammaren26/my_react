import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";

export default function Header(props) {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img
                    src="https://yandex.ru/images/_crpd/A99w3PM36/ec5cb5MuT52/TfIzU-Ss9riVC7xWARn5YwwHQWLU_Ckf19YeYGOQoPGwrxU5A15Xq_67RxHVBXbbVLL7snPb0uxhaSPBW3w_ok21p9bne6T8gInrQc_XdzjHCc-9nOIhFUbCSbS0w_I1YTXM_V1ESy-iMxlM3hX6w9_u5PaiwI9rPzjuBtMjtvaUZTcfKL9wNUqA8FPEk3F1g4BNfdLoIJjJSwZzNIbrcy17Q60eiM-sZj7ciVhRvMJepO3_pUjNbjy7IsSSKbH_3-cznO37dHGFiDidRdUxOwdIQfca4yuVAosDtrzA6r-l9wujVU3DIq78VkaSGrEMn2Pt9qNOxmB4PW4JXGO9PdstfVvifL4xgMywkwFQNngHAsE93ugpUIqKR7e-zW-1ofMIZRMFRWLqt5dO3dU1zNCnajPoyIAlsfJohx1gePRVqDyWKn60vEfIuRAInbx7ScwMNNfvrdOABED29MTtO2T0DWPaSULh4L_XwtjYOo0Z4Oo_4o8O4P285YgcbvYxFWOyE6D0-3BMBHZYjd0xdIoABXXcIqnUwYmLuTaI5fqo8o_jVYRHIS80XwWYl_IIWGuiuu-EyeC4tesMU-Kxt9pndR_uM_L5D0E-WUhTvPDMDol8HyZtFArOgXlwxG33rzCILdBAwCTl-5-CUJJ5y1Qip39qyw7p97MgBByu8L4b7bSaYHvztYMEfFcMHP5-BcZBOxZnadxFgUt8MUUpNeAzgq2dyMmoafGSjp1X-cVRryRwYo_BIzf6YsufrvV2GaT7GiY0sHUPR3UUQRy5NoUCxXvdJWgbygBGPPmBJ7Ws80clEoJIZig_k8-d2TaGligs8StEhWtw8m0LnCf2tJ1jP90ktz81Qg_2WYudOTHJjoWzUyEtVoFHyXl5wep_rnlH6FfIjisieJgKFhF-Q9WjLvaqxQku8LwqT91iejQV6T-Ypfa5dwSGcNFCmbo4zksAfNVi7psIxIG2dE"
                    alt=""/>
            </div>

            <div className='loginBlock'>
                {
                    props.isAuth
                        ? <div>
                            <button onClick={props.logout}>Log out</button>
                          </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
                <div>
                    Почта: {props.email}
                </div>
                <div>
                    ID: {props.userId}
                </div>
            </div>
        </header>
    );
}