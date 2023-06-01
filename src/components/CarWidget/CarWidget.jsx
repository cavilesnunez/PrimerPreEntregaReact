import './CarWidget.scss'
import carshop from '../../assets/carshop.png'


const CarWidget = () => {
    return(
        <div>
            <img className='carwidget__cart' src={carshop} alt="" srcset="" />
            <div className='carwidget__badge'>3</div>
        </div>
    )
}

export default CarWidget