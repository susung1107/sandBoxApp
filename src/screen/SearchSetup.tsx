import React from 'react';
import {Text, View} from 'react-native';
import {FunnelProps, StepProps} from '../hooks/useFunnel/useFunnel';
import SearchField from '../components/searchField/SearchField';

export interface SearchSetupInterface {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const SearchSetup = ({
  steps,
  nextClickHandler,
  Funnel,
  Step,
}: SearchSetupInterface) => {
  return (
    <View>
      <Funnel>
        <Step name="통합 검색">
          <SearchField onNext={() => nextClickHandler(steps[1])} />
        </Step>
        <Step name="통합 검색">
          <SearchField onNext={() => nextClickHandler(steps[2])} />
        </Step>
      </Funnel>
    </View>
  );
};

export default SearchSetup;
