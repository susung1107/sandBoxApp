package com.testapp;

import android.os.FileObserver;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class FileObserverModule extends ReactContextBaseJavaModule {
    private static final String TAG = "FileObserverModule";
    private static final String DIRECTORY_PATH = "/storage/emulated/0/DCIM";
    private FileObserver fileObserver;

    public FileObserverModule(ReactApplicationContext reactContext) {
        super(reactContext);
        startFileObserver();
    }

    private void startFileObserver() {
        fileObserver = new FileObserver(DIRECTORY_PATH) {
            @Override
            public void onEvent(int event, String path) {
                Log.d(TAG, "File event detected: " + event + ", path: " + path);
                // 파일 변경 이벤트를 React Native로 전달
                sendEvent(event, path);
            }
        };
        fileObserver.startWatching();
    }

    private void sendEvent(int event, String path) {
        try {
            WritableMap params = new WritableNativeMap();
            params.putInt("eventType", event);
            params.putString("filePath", path);

            getReactApplicationContext()
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("FileEvent", params);
        } catch (Exception e) {
            Log.e(TAG, "Error sending event: " + e.getMessage());
        }
    }

    @Override
    public String getName() {
        return "FileObserverModule";
    }
}
