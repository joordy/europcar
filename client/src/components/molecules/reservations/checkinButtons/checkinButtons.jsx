// React & Components imports
import React from 'react'
import * as Styles from './checkinButtons.styles.js'
import { ButtonPrimaryLarge, ButtonTertiaryMore } from 'components/atoms/index'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { checkIn } from 'store/actions/index'

// Component
const CheckinButtons = ({ ...props }) => {
    const reservation = { ...props }
    const day = reservation.pickUpDate.slice(0, 2)
    const month = reservation.pickUpDate.slice(3, 5)
    let pickupDay = [day, month]
    let today = new Date()
    let bday = new Date(today.getFullYear(), pickupDay[1] - 1, pickupDay[0])
    let difference = bday.getTime() - today.getTime()
    let days = Math.floor(difference / (1000 * 60 * 60 * 24))

    if (today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear() + 1)
    }

    //
    // const checkInCar = useSelector((state) => state.checkIn)
    const dispatch = useDispatch()

    return (
        <Styles.Wrapper>
            {(() => {
                if (days > 0 && days < 7) {
                    return (
                        <div className="buttonWrapper">
                            <ButtonPrimaryLarge
                                text="Inchecken"
                                linkTo="/addressdata"
                                width="100%"
                                height="48px"
                                _callback={() =>
                                    dispatch(
                                        checkIn(reservation.reservationID, reservation.user.userID),
                                    )
                                }
                            />
                        </div>
                    )
                } else {
                    return <p>Inchecken kan over 8 dagen.</p>
                }
            })()}
        </Styles.Wrapper>
    )
}

export default CheckinButtons
