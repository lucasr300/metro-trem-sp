package com.metrotremsp;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends Activity
{
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
        WebView telaBrowser = (WebView)findViewById(R.id.webview);
        telaBrowser.getSettings().setJavaScriptEnabled(true);
        telaBrowser.loadUrl("file:///android_asset/www/index.html");
    }
}
