import { Text } from 'react-native';

const AirStatus = ({ value }) => {
  if (value >= 0 && value <= 50)
    return <Text style={{ color: '#76d350' }}>Good</Text>;
  else if (value > 50 && value <= 100)
    return <Text style={{ color: '#ffe030' }}>Moderate</Text>;
  else if (value > 100 && value <= 150)
    return (
      <Text style={{ color: '#fc7d27' }}>Unhealthy for Sensitive Groups</Text>
    );
  else if (value > 150 && value <= 200)
    return <Text style={{ color: '#ea1b1b' }}>Unhealthy</Text>;
  else if (value > 200 && value <= 300)
    return <Text style={{ color: '#b24691' }}>Very Unhealthy</Text>;
  else return <Text style={{ color: '#994444' }}>Hazardous</Text>;
};

export default AirStatus;
