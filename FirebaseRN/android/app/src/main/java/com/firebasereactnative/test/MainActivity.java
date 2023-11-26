package com.firebasereactnative.test;

import android.app.ActionBar;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MainActivity extends ReactActivity {

    private static final String EVENT = "event";
    private static final String ACTIVITY_STATE_CHANGE = "ActivityStateChange";

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "FirebaseRN";
    }

    /**
     * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
     * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
     * (aka React 18) with two boolean flags.
     */
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new DefaultReactActivityDelegate(
                this,
                getMainComponentName(),
                // If you opted-in for the New Architecture, we enable the Fabric Renderer.
                DefaultNewArchitectureEntryPoint.getFabricEnabled());
    }
    
    /**
     * These methods are used for creating custom AppState as android has no inactive state
     * windowHasFocus = 'active'
     * windowLosesFocus = 'inactive'
     * onStop = 'background'
     */

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        ReactContext reactContext = getReactInstanceManager()
                .getCurrentReactContext();
        WritableMap params = Arguments.createMap();
        if (hasFocus) {
            params.putString(EVENT, "active");
        } else {
            params.putString(EVENT, "inactive");
        }

        if (reactContext != null) {
            getReactInstanceManager()
                    .getCurrentReactContext()
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(ACTIVITY_STATE_CHANGE, params);
        }
    }

    @Override
    public void onStop() {
        super.onStop();
        ReactContext reactContext = getReactInstanceManager().getCurrentReactContext();
        WritableMap params = Arguments.createMap();
        params.putString(EVENT, "background");

        if (reactContext != null) {
            getReactInstanceManager().getCurrentReactContext()
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(ACTIVITY_STATE_CHANGE, params);
        }
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
    }
}
