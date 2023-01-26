package com.example.yogamitra;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.WindowManager;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import android.widget.TextView;

public class FirstActivity extends AppCompatActivity {
    Animation top, bot;
    ImageView image;
    TextView logo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_first);

        top = AnimationUtils.loadAnimation(this,R.anim.top_animation);
        bot = AnimationUtils.loadAnimation(this,R.anim.bottom_animation);
        image = findViewById(R.id.imageView);
        logo = findViewById(R.id.textView4);
        image.setAnimation(top);
        logo.setAnimation(bot);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {

                Intent intent = new Intent(FirstActivity.this,StartActivity.class);
                startActivity(intent);
                finish();
            }
        },6000);
    }
}