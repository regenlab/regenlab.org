import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text, Flex, Box } from 'rebass'
import theme from '../../config/theme'

const Line = styled.span`
  width: 100px;
  border-top: 1px solid white;
  display: inline-block;
  margin-top: ${props => props.theme.space[2]}px;
`

const Wrapper = styled.div`
  background: url("${props => props.theme.bgImage}") #000;
  display: flex;
  position: relative;
  background-size: cover;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 20rem 1.0875rem 10rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  height: 1000px;
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: 500px;
  }
`

const Logo = styled.div`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  background: rgb(68, 58, 180);
  background: linear-gradient(
    25deg,
    rgba(68, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 53%,
    rgba(252, 123, 55, 1) 76%,
    rgba(69, 252, 198, 1) 100%
  );

  border-radius: 50%;
  height: 125px;
  width: 125px;
`

const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${props => props.theme.colors.color};
  font-weight: 200;
  font-size: 72px;
`

const Location = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SocialMedia = styled.div`
  margin-top: 2rem;

  a {
    margin: 0 0.3rem;
  }
`

const Header = ({ name }) => (
  <Wrapper>
    <Content>
      <Flex>
        <Box mr={3}>
          <div dangerouslySetInnerHTML={{ __html: theme.logo }} />
        </Box>
        <Name>{name}</Name>
      </Flex>

      <Flex ml={6} mt={3} alignItems="top">
        <Line />
        <Text fontFamily="sans" ml={3} width="240px" textAlign="left">
          A laboratory of technology and design in service to regenerative agriculture
        </Text>
      </Flex>
    </Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
}
