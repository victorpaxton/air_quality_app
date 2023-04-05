import { Image } from "react-native";
import { assets } from "../constants";

const Face = ({ value }) => {
  if (value >= 0 && value <= 50)
    return (
      <Image
        source={assets.good}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />
    );
  else if (value > 50 && value <= 100)
    return (
      <Image
        source={assets.moderate}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />
    );
  else if (value > 100 && value <= 150)
    return (
      <Image
        source={assets.sensitive}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />
    );
  else if (value > 150 && value <= 200)
    return (
      <Image
        source={assets.unhealthy}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />
    );
  else if (value > 200 && value <= 300)
    return (
      <Image
        source={assets.very_unhealthy}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />
    );
  else
    return (
      <Image
        source={assets.hazardous}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}
      />
    );
};

export default Face;
