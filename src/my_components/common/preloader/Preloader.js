import loaderGif from "../../../assets/images/loader.gif";
import s from './Preloader.module.scss';


let Preloader = (props) => {
    return (
        <div className={s.preloader_box}>
            <img src={loaderGif} className={s.preloader_img}/>
        </div>

    )
}

export default Preloader;