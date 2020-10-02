import React, {ReactElement, useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StatusBar,
  Platform,
} from 'react-native';
import {colors} from 'src/constants/platformSpecificColors';
import {TodosList} from 'src/screens/TodosList/TodosList';
import {ListsIndex} from 'src/screens/ListsIndex/ListsIndex';
import {useDispatch} from 'react-redux';
import {Container} from 'src/components/Container/Container';
import {
  getTodosIndexAction,
  addListAction,
  addTodoAction,
} from 'src/store/todos/todos.actions';
import {ListType} from 'src/store/todos/todos.types';
import {styles} from './app.styles';
import {Modal} from 'src/components/Modal/Modal';

const App = (): ReactElement => {
  const [addModal, setAddModal] = useState(false);
  const [showList, setShowList] = useState<ListType | undefined>(undefined);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosIndexAction());
  }, [dispatch]);

  const _toggleNavigation = () => {
    setShowList(undefined);
  };

  const _addHandler = () => {
    if (!showList) {
      const params = {
        name: input,
        id: Date.now().toString(),
      };
      setAddModal(false);
      setInput('');
      dispatch(addListAction(params));
    }
    if (showList) {
      const params = {
        title: input,
        id: Date.now().toString(),
        listId: showList!.id,
        completed: false,
      };
      setAddModal(false);
      setInput('');
      dispatch(addTodoAction(params));
    }
  };

  const _addModal = () => {
    setAddModal(true);
  };

  const _setNavigation = (id: ListType) => setShowList(id);

  return (
    <>
      <View
        style={{
          backgroundColor: colors!.color,
          height: Platform.OS === 'ios' ? 60 : StatusBar.currentHeight,
        }}>
        <StatusBar barStyle="light-content" />
      </View>
      <Container>
        {showList ? (
          <TodosList listPointer={showList} back={_toggleNavigation} />
        ) : (
          <ListsIndex navigate={_setNavigation} />
        )}
        <View style={styles.container} />
        <Pressable style={styles.addButton} onPress={_addModal}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Modal visible={addModal} onDismiss={() => setAddModal(false)}>
          <>
            <Text style={styles.modalTitle}>
              {`TYPE NAME FOR ${showList ? 'TODO' : 'LIST'}`}{' '}
            </Text>
            <TextInput
              numberOfLines={1}
              maxLength={30}
              style={styles.modalInput}
              value={input}
              placeholder={'addList'}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={_addHandler}
            />
          </>
        </Modal>
      </Container>
    </>
  );
};

export default App;
