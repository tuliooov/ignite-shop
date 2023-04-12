import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const SuccessSectionImage = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4.8rem',

  'div + div': {
    marginLeft: '-5.2rem',
  },
})


export const SuccessImageContainer = styled('div', {
  width: '14rem',
  height: '14rem',
  background: '$backgroundGradient',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    aspectRatio: 1.09,
    objectFit: 'cover',
  },
})


export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  // background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    objectFit: 'cover',
    width: '100%'
  }
});
