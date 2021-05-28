// React imports
import React from 'react'
import * as Styles from './checkUserInfo.styles.js'
import { CloseIcon, EditButton } from 'components/atoms/index.js'
import { VerificationButtons } from 'components/molecules/index'

// React component
const CheckUserInfo = () => {
    const moveRight = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(0)'
    }

    const moveLeft = () => {
        const moveElement = document.querySelector('.stepsWrapper')
        moveElement.style.transform = 'translateX(-200vw)'
    }

    return (
        <Styles.Section>
            <header>
                <h1>Controleer je gegevens </h1>
                <p>Dit is een overzicht van je gegevens zoals die nu bij ons bekend zijn. </p>
                <CloseIcon width="19px" height="19px" />
            </header>

            <article>
                <p>Algemene gegevens</p>
                <EditButton />
            </article>
            <hr />
            <article>
                <p>Voornaam</p>
                <p>Kelly</p>
                <p>Achternaam</p>
                <p>de Jong</p>
                <p>E-mailadres</p>
                <p>kellydjong@hotmail.com</p>
                <p>Telefoonnummer</p>
                <p>0645542811</p>
                <p>Geboortedatum</p>
                <p>23 februari 1997</p>
            </article>

            <VerificationButtons
                textPrimary="Volgende"
                textSecondary="Terug"
                linkPrimary="#"
                linkSecondary="#"
                callbackSecondary={moveRight}
                callbackPrimary={moveLeft}
            />
        </Styles.Section>
    )
}

export default CheckUserInfo
