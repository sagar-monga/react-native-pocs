import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetContentView from './BottomSheetContentView';
import BottomSheetContentFlatList from './BottomSheetContentFlatlist';

const ButtonWithBottomSheet = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => setSheetOpen(prev => !prev)}
        style={{
          marginTop: 10,
          backgroundColor: '#897671',
          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          height: 50,
          borderRadius: 25,
        }}>
        <Text style={{fontSize: 20}}>{`${
          sheetOpen ? 'Hide' : 'Show'
        } BottomSheet`}</Text>
      </Pressable>
      {sheetOpen && (
        <BottomSheet
          enablePanDownToClose
          // snapPoints={[100, 200]}
          snapPoints={['10%', '30%']}
          backgroundStyle={{backgroundColor: 'red'}}

          // Applied to the container in the bg when sheet is active, uncomment to see
          // containerStyle={{backgroundColor: 'blue'}}

          // For custom handle
          // handleComponent={Handle}
          onChange={index => {
            // console.log(`Sheet position is: ${index}`);
            if (index === -1) {
              setSheetOpen(false);
            }
          }}>
          {/* <BottomSheetContentView /> */}
          <BottomSheetContentFlatList />
        </BottomSheet>
      )}
    </View>
  );
};

export default ButtonWithBottomSheet;

const styles = StyleSheet.create({});
