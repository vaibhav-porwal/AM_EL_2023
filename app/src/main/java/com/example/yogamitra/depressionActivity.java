package com.example.yogamitra;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class depressionActivity extends AppCompatActivity {

    private Button but1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_depression);
        but1 = findViewById(R.id.button13);
        but1.setOnClickListener(v->{startActivity(new Intent(depressionActivity.this,depvedio.class));});

    }

}