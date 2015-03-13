App.info({
  name: 'Rather',
  description: 'Decisions made social',
  author: 'XA',
  email: 'krivaten@gmail.com',
  website: 'http://krivaten.com',
  version: '0.1.0'
});

App.icons({
  // iOS
  'iphone': 'public/img/icons/ios-60x60.png',
  'iphone_2x': 'public/img/icons/ios-120x120.png',
  'ipad': 'public/img/icons/ios-72x72.png',
  'ipad_2x': 'public/img/icons/ios-144x144.png',

  // Android
  'android_ldpi': 'public/img/icons/android-36x36.png',
  'android_mdpi': 'public/img/icons/android-48x48.png',
  'android_hdpi': 'public/img/icons/android-72x72.png',
  'android_xhdpi': 'public/img/icons/android-96x96.png'
  //Need xxhdpi and xxxhdpi
});

App.launchScreens({
  // iOS
  'iphone': 'public/img/splash/ios-320x480.jpg',
  'iphone_2x': 'public/img/splash/ios-640x960.jpg',
  'iphone5': 'public/img/splash/ios-640x1136.jpg',
  'ipad_portrait': 'public/img/splash/ios-768x1024.jpg',
  'ipad_portrait_2x': 'public/img/splash/ios-1536x2048.jpg',
  'ipad_landscape': 'public/img/splash/ios-1024x768.jpg',
  'ipad_landscape_2x': 'public/img/splash/ios-2048x1536.jpg',

  // Android
  'android_ldpi_portrait': 'public/img/splash/android-200x320.jpg',
  'android_ldpi_landscape': 'public/img/splash/android-320x200.jpg',
  'android_mdpi_portrait': 'public/img/splash/android-320x480.jpg',
  'android_mdpi_landscape': 'public/img/splash/android-480x320.jpg',
  'android_hdpi_portrait': 'public/img/splash/android-480x800.jpg',
  'android_hdpi_landscape': 'public/img/splash/android-800x480.jpg',
  'android_xhdpi_portrait': 'public/img/splash/android-720x1280.jpg',
  'android_xhdpi_landscape': 'public/img/splash/android-1280x720.jpg'
  //Need xxhdpi and xxxhdpi
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#F9F9F9');
App.setPreference('orientation', 'portrait');

