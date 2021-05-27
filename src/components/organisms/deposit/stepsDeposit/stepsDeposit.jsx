// React imports
import React from 'react'
import * as Styles from './stepsDeposit.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge } from 'components/atoms/index'
import { IconListItem } from 'components/molecules/index'

// React component
const StepsExplainer = () => {
    return (
        <Styles.Section>
            <article>
                <h1>Gelukt! Je kunt verder naar stap 2</h1>
                <ul>
                    <IconListItem
                        iconName="UserCheckIcon"
                        opacity="0.75"
                        title="Verificatie"
                        text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar bent."
                        completed
                    />
                    <IconListItem
                        iconName="CreditcardIcon"
                        opacity="0.75"
                        title="Borg"
                        text="Geef een garantie op je creditcard of betaal contant."
                    />
                    <IconListItem
                        iconName="QRCodeIcon"
                        opacity="0.75"
                        title="Klaar!"
                        text="Je ontvangt een QR-code waarmee je op de Europcar locatie je sleutels kunt ophalen."
                    />
                </ul>
            </article>
            <Styles.BtnWrapper>
                <ButtonPrimaryLarge text="Regel je borg" linkTo="#" />
                <ButtonSecondaryLarge text="Terug" linkTo="#" />
            </Styles.BtnWrapper>
        </Styles.Section>
    )
}

export default StepsExplainer
