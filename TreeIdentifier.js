
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Text,
  Button,
  View

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Geolocation from 'react-native-geolocation-service'
import openMap from 'react-native-open-maps';


  const TreeIdentifier = function () {
    return (
      <Text>
          testst
      </Text>
    );
  };

export default TreeIdentifier