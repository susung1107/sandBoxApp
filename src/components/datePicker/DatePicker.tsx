import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

// dateBlock
import DateBlock from './DateBlock';

// type
type DatePickerProps = {
  value: Date;
  onChange: (date: Date) => void;
  height?: number;
  pointColor?: string;
  startDate?: Date;
  endDate?: Date;
};

const DatePicker = ({
  value,
  onChange,
  height,
  pointColor,
  startDate,
  endDate,
}: DatePickerProps) => {
  // 선택된 년, 월, 일 값 : 초기값은 오늘
  const [selectedYear, setSelectedYear] = useState(value.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(value.getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(value.getDate());

  // 년, 월, 일을 저장하는 배열
  const [years, setYears] = useState<number[]>([]);
  const [months, setMonths] = useState<number[]>([]);
  const [days, setDays] = useState<number[]>([]);

  // datePicker의 높이
  const pickerHeight: number = Math.round(
    height || Dimensions.get('window').height / 3.5,
  );

  const unexpectedDate: Date = new Date();
  const date = new Date(value || unexpectedDate);

  const dHeight: number = Math.round(pickerHeight / 4);
  const mHeight: number = Math.min(dHeight, 65);

  const changeHandle = (type: string, digit: number): void => {
    switch (type) {
      case 'dd':
        date.setDate(digit);
        setSelectedDay(digit);
        break;
      case 'mm':
        const selectedMonthDays = Array.from(
          {length: new Date(date.getFullYear(), digit, 0).getDate()},
          (_, index) => index + 1,
        );

        const newSelectedDay =
          selectedDay > selectedMonthDays.length
            ? selectedMonthDays.length
            : selectedDay;

        date.setMonth(digit - 1);
        date.setDate(newSelectedDay);
        setSelectedMonth(digit);
        setDays(selectedMonthDays);
        setSelectedDay(newSelectedDay);
        break;
      case 'yy':
        date.setFullYear(digit);
        setSelectedYear(digit);
        break;
    }

    onChange(date);
  };

  const getDateList = () => {
    const list = [];
    const yearData = {
      type: 'yy',
      text: '년',
      digits: years,
      value: selectedYear,
    };
    const monthData = {
      type: 'mm',
      text: '월',
      digits: months,
      value: selectedMonth,
    };
    const dayData = {type: 'dd', text: '일', digits: days, value: selectedDay};

    list.push(yearData, monthData, dayData);
    return list;
  };

  useEffect(() => {
    const today = new Date();

    const _startDate =
      startDate ||
      new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());

    const _endDate =
      endDate ||
      new Date(today.getFullYear() + 10, today.getMonth(), today.getDate());

    const yearLength = _endDate.getFullYear() - _startDate.getFullYear() + 1;

    const _years = Array.from(
      {length: yearLength},
      (_, index) => _startDate.getFullYear() + index,
    );
    const _months = Array.from({length: 12}, (_, index) => index + 1);
    const _days = Array.from(
      {length: new Date(selectedYear, selectedMonth, 0).getDate()},
      (_, index) => index + 1,
    );

    setYears(_years);
    setMonths(_months);
    setDays(_days);
  }, [endDate, selectedMonth, selectedYear, startDate]);

  return (
    <View style={[styles.pickerContainer, {height: pickerHeight}]}>
      <View
        style={[
          styles.markLine,
          {
            top: (pickerHeight - mHeight) / 2,
            height: mHeight,
            backgroundColor: pointColor,
          },
        ]}
      />
      {getDateList().map((el, index) => {
        return (
          <DateBlock
            key={index}
            digits={el.digits}
            type={el.type}
            text={el.text}
            value={el.value}
            height={pickerHeight}
            onChange={changeHandle}
            dHeight={dHeight}
            pointColor={pointColor}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    width: '100%',
    marginTop: 100,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  markLine: {
    position: 'absolute',
    width: '100%',
    opacity: 0.2,
    borderRadius: 11,
    left: 10,
  },
});

export default DatePicker;
