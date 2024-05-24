/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {config} from '@gluestack-ui/config';
import {
  GluestackUIProvider,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Button,
  ButtonText,
  SafeAreaView,
  Heading,
} from '@gluestack-ui/themed';

function ActionsheetExample2({showActionsheet, handleClose}: any) {
  return (
    <>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favorite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}

function ActionsheetExample() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [showActionsheet2, setShowActionsheet2] = React.useState(false);

  const handleOpen = () => setShowActionsheet(true);
  const handleOpen2 = () => setShowActionsheet2(true);

  const handleClose = () => setShowActionsheet(false);
  const handleClose2 = () => setShowActionsheet2(false);

  return (
    <>
      <Button onPress={handleOpen}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favorite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
          <Button onPress={handleOpen2}>
            <ButtonText>Open</ButtonText>
          </Button>
        </ActionsheetContent>
      </Actionsheet>

      {showActionsheet2 && (
        <ActionsheetExample2
          handleClose={handleClose2}
          showActionsheet={showActionsheet2}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <GluestackUIProvider config={config} colorMode="light">
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Heading>hello world</Heading>
        <ActionsheetExample />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
