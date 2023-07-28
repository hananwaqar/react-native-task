import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

function Content({ children, style, onScroll, ...props }) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      onScroll={onScroll}
      keyboardShouldPersistTaps ="handled"
      {...props}>
      <View style={[styles.view, style]}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  }
});

export default Content;
