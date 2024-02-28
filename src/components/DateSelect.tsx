import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {COLORS, FONTS} from '../utils/Constants';

import RenderOptions from './RenderOptions';

const DateSelect = ({
  itemHeight,
  pointColor,
  pointBackgroundColor,
  itemFontSize,
}: any) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getDay());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const yearScrollViewRef = useRef(null);
  const monthScrollViewRef = useRef(null);
  const dayScrollViewRef = useRef(null);

  const years = Array.from(
    {length: 21},
    (_, index) => new Date().getFullYear() - 10 + index,
  );
  const months = Array.from({length: 12}, (_, index) => index + 1);
  const days = Array.from(
    {length: new Date(selectedYear, selectedMonth, 0).getDate()},
    (_, index) => index + 1,
  );

  return (
    <View style={styles.container}>
      <View style={styles.dateBox}>
        <RenderOptions
          options={years}
          selectedValue={selectedYear}
          setSelectedValue={setSelectedYear}
          text="년"
          scrollViewRef={yearScrollViewRef}
          itemHeight={itemHeight}
          pointColor={pointColor}
          pointBackgroundColor={pointBackgroundColor}
          itemFontSize={itemFontSize}
        />
        <RenderOptions
          options={months}
          selectedValue={selectedMonth}
          setSelectedValue={setSelectedMonth}
          text="월"
          scrollViewRef={monthScrollViewRef}
          itemHeight={itemHeight}
          pointColor={pointColor}
          pointBackgroundColor={pointBackgroundColor}
          itemFontSize={itemFontSize}
        />
        <RenderOptions
          options={days}
          selectedValue={selectedDay}
          setSelectedValue={setSelectedDay}
          text="일"
          scrollViewRef={dayScrollViewRef}
          itemHeight={itemHeight}
          pointColor={pointColor}
          pointBackgroundColor={pointBackgroundColor}
          itemFontSize={itemFontSize}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          Alert.alert(`${selectedYear}년 ${selectedMonth}월 ${selectedDay}일`)
        }>
        <Text style={styles.btntext}>선택완료</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  dateBox: {
    flex: 1,
    flexDirection: 'row',
  },
  optionContainer: {
    maxHeight: 200,
    width: '30%',
    borderRadius: 5,
    marginVertical: 10,
  },
  option: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 356,
    height: 60,
    backgroundColor: COLORS.defaultColor.main,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btntext: {
    fontFamily: FONTS.bold,
    lineHeight: 60,
    color: COLORS.defaultColor.white,
    fontSize: 16,
  },
});
export default DateSelect;
