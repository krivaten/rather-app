App.info({
  name: 'Rather',
  description: 'Decisions made social',
  author: 'Sexy Dude Apps',
  email: 'krivaten@gmail.com',
  website: 'http://krivaten.com',
  version: '0.1.0'
});

App.icons({
  // iOS
  'iphone': 'public/img/icons/icon_60x60.png',
  'iphone_2x': 'public/img/icons/icon_120x120.png',
  'ipad': 'public/img/icons/icon_72x72.png',
  'ipad_2x': 'public/img/icons/icon_144x144.png',

  // Android
  'android_ldpi': 'public/img/icons/icon_36x36.png',
  'android_mdpi': 'public/img/icons/icon_48x48.png',
  'android_hdpi': 'public/img/icons/icon_72x72.png',
  'android_xhdpi': 'public/img/icons/icon_96x96.png'
});

App.launchScreens({
  // iOS
  'iphone': 'public/img/splash/splash_320x480.png',
  'iphone_2x': 'public/img/splash/splash_640x960.png',
  'iphone5': 'public/img/splash/splash_640x1136.png',
  'ipad_portrait': 'public/img/splash/splash_768x1024.png',
  'ipad_portrait_2x': 'public/img/splash/splash_1536x2048.png',
  'ipad_landscape': 'public/img/splash/splash_1024x768.png',
  'ipad_landscape_2x': 'public/img/splash/splash_2048x1536.png',

  // Android
  'android_ldpi_portrait': 'public/img/splash/splash_200x320.png',
  'android_ldpi_landscape': 'public/img/splash/splash_320x200.png',
  'android_mdpi_portrait': 'public/img/splash/splash_320x480.png',
  'android_mdpi_landscape': 'public/img/splash/splash_480x320.png',
  'android_hdpi_portrait': 'public/img/splash/splash_480x800.png',
  'android_hdpi_landscape': 'public/img/splash/splash_800x480.png',
  'android_xhdpi_portrait': 'public/img/splash/splash_720x1280.png',
  'android_xhdpi_landscape': 'public/img/splash/splash_1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#F9F9F9');

