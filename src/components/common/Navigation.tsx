import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BriefcaseIcon from '../../assets/BriefcaseIcon'
import DiskIcon from '../../assets/DiskIcon'
import FlagIcon from '../../assets/FlagIcon'
import HomeIcon from '../../assets/HomeIcon'
import MagazineIcon from '../../assets/MagazineIcon'
import { colors } from '../../styles/variables'

interface NavigationType {
  userType: string
}
const Navigation = ({ userType }: NavigationType) => {
  const [hidden, setHidden] = useState(false)
  const [activeNavigationTab, setActiveNavigationTab] = useState(0)

  useEffect(() => {
    let prevScrollPos = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setHidden(prevScrollPos > currentScrollPos)
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleTabClick = (index: number) => {
    setActiveNavigationTab(index)
  }

  const travelerTypeNavigationIconList = [
    <MagazineIcon />,
    <HomeIcon />,
    <BriefcaseIcon />,
  ]
  const guideTypeNavigationIconList = [<FlagIcon />, <HomeIcon />, <DiskIcon />]
  const navigationIconList =
    userType === 'traveler'
      ? travelerTypeNavigationIconList
      : guideTypeNavigationIconList

  return (
    <StyledNavigationContainer hidden={hidden}>
      {navigationIconList.map((item, index) => (
        <StyledNavigationItemContainer key={index} onClick={() => handleTabClick(index)}>
          <StyledNavigationItem selected={index === activeNavigationTab}>
            {item.type === HomeIcon && (<HomeIcon active={index === activeNavigationTab} />)}
            {userType === 'traveler' ? (
              <>
                {item.type === MagazineIcon && (<MagazineIcon active={index === activeNavigationTab} />)}
                {item.type === BriefcaseIcon && (<BriefcaseIcon active={index === activeNavigationTab} />)}
              </>
            ) : (
              <>
                {item.type === FlagIcon && (<FlagIcon active={index === activeNavigationTab} />)}
                {item.type === DiskIcon && (<DiskIcon active={index === activeNavigationTab} />)}
              </>
            )}
          </StyledNavigationItem>
        </StyledNavigationItemContainer>
      ))}
    </StyledNavigationContainer>
  )
}
export default Navigation

const StyledNavigationContainer = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100px;
  border-radius: 50px 50px 0px 0px;
  background-color: white;
  box-shadow: 0px -20px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: ${({ hidden }) =>
    (hidden ? 'translateY(100%)' : 'translateY(0)') + ' translateX(-50%)'};
  @media (min-width: 769px) {
    width: 768px;
  }
`
const StyledNavigationItemContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50px 50px 0px 0px;
`
const StyledNavigationItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: ${({ selected }) =>
    selected ? `${colors.green}` : 'transparent'};
  box-shadow: ${({ selected }) =>
    selected ? `0px 0px 10px ${colors.green}` : 'none'};
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px;
  cursor: pointer;
`
