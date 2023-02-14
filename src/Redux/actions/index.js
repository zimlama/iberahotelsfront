import * as hotelsActions from "./hotels";
import * as servicesActions from "./services";
import * as amenitiesActions from "./amenities";

const allActions = {
  ...hotelsActions,
  ...servicesActions,
  ...amenitiesActions,
};

export default allActions;
