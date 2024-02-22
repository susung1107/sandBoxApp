import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// codepush
import {DownloadProgress} from 'react-native-code-push';

interface SyncProgressViewProps {
  syncProgress: DownloadProgress;
}

const SyncProgressView = ({syncProgress}: SyncProgressViewProps) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.loadingContainer]}>
        <Text style={[styles.text]}>
          안정적인 서비스 사용을 위해 내부 업데이트를 진행합니다.
        </Text>
        <Text style={[styles.text]}>재시작까지 잠시만 기다려주세요.</Text>
        <View style={[styles.progressContainer]}>
          <View
            style={[
              styles.progressBar,
              {
                width:
                  (syncProgress.receivedBytes / syncProgress.totalBytes) * 250,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    width: 350,
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {
    letterSpacing: -0.8,
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  progressContainer: {
    width: 250,
    height: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ff5555',
    marginTop: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#ff5555',
    borderRadius: 25,
  },
});

export default SyncProgressView;
