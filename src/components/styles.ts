const styles = {
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
  },
  locationIcon: {
    width: '12px',
    alignSelf: 'center',
    paddingRight: '2px',
    paddingBottom: '2px',
    filter:
      'invert(67%) sepia(86%) saturate(346%) hue-rotate(346deg) brightness(90%) contrast(89%)',
  },
  locationTitle: {
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
    fontSize: '25px',
    fontWeight: 'bold',
    padding: '0px',
    lineHeight: '25px',
  },
  date: {
    fontSize: '10.24px',
    fontWeight: 'bold',
    marginTop: '16px',
  },
  description: {
    fontSize: '10.24px',
    lineHeight: '15px',
  },
};

export default styles;
