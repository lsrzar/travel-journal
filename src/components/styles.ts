const styles = {
  typography: {
    fontFamily: 'Inter',
    color: '#2B283A',
  },
  card: {
    maxWidth: '470px',
    maxHeight: '168px',
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    width: '125px',
    height: '168px',
    borderRadius: '5px',
  },
  divider: {
    margin: '18px 0px 18px 0px',
  },
  locationBox: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Inter',
  },
  locationIcon: {
    width: '15px',
    alignSelf: 'center',
    paddingRight: '2px',
    paddingTop: '1px',
    paddingBottom: '1px',
    filter:
      'invert(67%) sepia(86%) saturate(346%) hue-rotate(346deg) brightness(90%) contrast(89%)',
  },
  locationTitle: {
    fontFamily: 'Inter',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    alignSelf: 'center',
  },
  locationLink: {
    color: '#918E9B',
    fontSize: '10.24px',
    alignSelf: 'center',
    paddingBottom: '1px',
    paddingLeft: '12px',
    textDecorationColor: '#918E9B',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: '25px',
    fontWeight: 'bold',
    padding: '0px',
    lineHeight: '25px',
  },
  date: {
    fontFamily: 'Inter',
    fontSize: '10.24px',
    fontWeight: '900',
    marginTop: '16px',
    marginBottom: '2px',
  },
  description: {
    fontFamily: 'Inter',
    fontSize: '10.24px',
    letterSpacing: '0px',
    fontWeight: '500',
    lineHeight: '15px',
  },
};

export default styles;
