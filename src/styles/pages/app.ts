import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  width: '80vw',
  main: {
    width: '100%'
  }
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  margin: '0 auto',
})
