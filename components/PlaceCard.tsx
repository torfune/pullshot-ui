import { Place } from '../types/Place'
import styled from 'styled-components'
import { COLOR } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as iconStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as iconStarRegular } from '@fortawesome/free-regular-svg-icons'
import { Table } from '../types/Table'

type Props = {
  place: Place
}
export const PlaceCard = ({ place }: Props) => {
  let bestTable: Table | null = null
  for (const table of place.attributes.tables) {
    if (!bestTable || table.attributes.rating > bestTable.attributes.rating) {
      bestTable = table
    }
  }

  return (
    <Container>
      <NameText>{place.attributes.name}</NameText>

      <RatingsWrapper>
        {bestTable && (
          <RatingSection>
            <Label>Table&nbsp;rating</Label>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                size="sm"
                icon={
                  bestTable!.attributes.rating >= star
                    ? iconStarSolid
                    : iconStarRegular
                }
              />
            ))}
          </RatingSection>
        )}

        <RatingSection>
          <Label>Beer&nbsp;rating</Label>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              size="sm"
              icon={
                place.attributes.beerRating >= star
                  ? iconStarSolid
                  : iconStarRegular
              }
            />
          ))}
        </RatingSection>
      </RatingsWrapper>
    </Container>
  )
}

const Container = styled.div`
  background: ${COLOR.YELLOW_LIGHT};
  border-radius: 4px;
  padding: 32px;
  box-shadow: 2px 1px 32px #00000066;

  // -- Gradient
  background: #fffa65;
  background: -webkit-linear-gradient(to right, #fffa65 0%, #32ff7e 100%);
  background: -moz-linear-gradient(to right, #fffa65 0%, #32ff7e 100%);
  background: linear-gradient(to right, #fffa65 0%, #32ff7e 100%);
  // ----
`
const NameText = styled.h2`
  margin: 0;
  margin-right: 64px;
  letter-spacing: 1px;
  line-height: 1.2;
  color: ${COLOR.GREY_DARK};
`
const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
`
const RatingSection = styled.div``
const Label = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  color: ${COLOR.GREY_LIGHT};
  text-transform: uppercase;
  font-size: 8px;
  letter-spacing: 2px;
`
const StarIcon = styled(FontAwesomeIcon)`
  path {
    fill: #c56cf0;
  }
`
