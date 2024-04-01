import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface DateBlockProps {
  digits: number[];
  type: string;
  text: string;
  value: number;
  height: number;
  onChange: (type: string, digit: number) => void;
  dHeight: number;
}

const DateBlock: React.FC<DateBlockProps> = ({
  digits,
  type,
  text,
  value,
  height,
  onChange,
  dHeight,
}) => {
  // scroll view Ref
  const scrollRef = useRef<ScrollView>(null);

  const offsets = digits.map((_, index) => index * dHeight);

  const snapScrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({y: dHeight * index, animated: true});
  };

  const handleMomentumScrollEnd = ({nativeEvent}: any) => {
    const digit = Math.round(nativeEvent.contentOffset.y / dHeight + digits[0]);

    onChange(type, digit);
  };

  useEffect(() => {
    snapScrollToIndex(value - digits[0]);
  }, [scrollRef.current]);

  return (
    <View style={styles.block}>
      <ScrollView
        ref={scrollRef}
        snapToOffsets={offsets}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={0}
        onMomentumScrollEnd={handleMomentumScrollEnd}>
        {digits.map((el, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onChange(type, digits[index]);
                snapScrollToIndex(index);
              }}>
              <Text
                style={[
                  styles.digit,
                  {
                    color: el === value ? '#07ABB7' : '#666',
                    marginBottom:
                      index === digits.length - 1
                        ? height / 2 - dHeight / 2
                        : 0,
                    marginTop: index === 0 ? height / 2 - dHeight / 2 : 0,
                    lineHeight: dHeight,
                    height: dHeight,
                  },
                ]}>
                {el}
                {text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  digit: {
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: -1,
    color: '#666',
    fontWeight: 'bold',
  },
  point: {
    color: '#07ABB7',
  },
});

export default DateBlock;
