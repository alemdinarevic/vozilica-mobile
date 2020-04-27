import React from 'react';
import {View} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calendars = (props) => {
	return (
		<View>
			{/* //Start date calendar */}
		<Calendar />
		{/* //End date calendar */}
		<Calendar />
		</View>
	);
}

export default Calendars;
