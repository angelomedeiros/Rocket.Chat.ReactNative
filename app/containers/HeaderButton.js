import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

import { CustomIcon } from '../lib/Icons';
import { isIOS } from '../utils/deviceInfo';

const color = isIOS ? '#1D74F5' : '#FFF';

const CustomHeaderButton = React.memo(props => (
	<HeaderButton {...props} IconComponent={CustomIcon} iconSize={23} color={color} />
));

export const CustomHeaderButtons = React.memo(props => (
	<HeaderButtons
		HeaderButtonComponent={CustomHeaderButton}
		{...props}
	/>
));

export const DrawerButton = React.memo(({ navigation }) => (
	<CustomHeaderButtons left>
		<Item iconName='customize' onPress={navigation.toggleDrawer} />
	</CustomHeaderButtons>
));

DrawerButton.propTypes = {
	navigation: PropTypes.object
};

export { Item };

export default () => <Text>a</Text>