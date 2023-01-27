package com.example.yogamitra;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private Button btn5;
    private Button btn6;
    private Button btn7;
    private Button btn8;
    private Button btn9;
    private Button btn10;
    private Button bttn;
   // private Button btn11;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn5 = findViewById(R.id.button5);
        btn6 = findViewById(R.id.button6);
        btn7 = findViewById(R.id.button7);
        btn8 = findViewById(R.id.button8);
        btn9 = findViewById(R.id.button9);
        btn10 = findViewById(R.id.button10);
        bttn = findViewById(R.id.button18);
       // btn11 = findViewById(R.id.button11);
        btn9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,ObesityActivity.class));
                //finish();
            }
        });
        btn10.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,dailyActivity.class));
                //finish();
            }
        });
        btn5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,BodyPainsActivity.class));
                // finish();
            }
        });
        btn8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,depressionActivity.class));
                // finish();
            }
        });
        btn7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,diabetesActivity.class));
                // finish();
            }
        });
        btn6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this,breathActivity.class));
            }
        });
        bttn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com/search?q=yoga+centers+near+me&rlz=1C1CHBF_enIN960IN960&ei=tRIWYZiKI9yA1e8P14eV2A8&oq=yoga+centers+near+me&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEEMkDMggIABAWEAoQHjIICAAQFhAKEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yCAgAEBYQChAeMggIABAWEAoQHjIGCAAQFhAeMggIABAWEAoQHjoHCAAQRxCwAzoHCAAQsAMQQzoQCC4QxwEQrwEQyAMQsAMQQzoQCC4QxwEQowIQyAMQsAMQQzoQCC4QxwEQ0QMQyAMQsAMQQzoUCC4QgAQQsQMQgwEQxwEQ0QMQkwI6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToFCAAQgAQ6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToTCC4QsQMQgwEQxwEQ0QMQQxCTAjoECC4QQzoLCC4QxwEQrwEQkQI6BAgAEEM6CgguELEDEIMBEEM6BwgAEMkDEEM6BQgAEJIDOgoIABCxAxCDARBDOgUIABCRAjoFCC4QkQI6BggAEAoQQzoHCAAQsQMQQzoICAAQgAQQsQM6CggAELEDEMkDEEM6DgguEIAEELEDEMcBEK8BOgcIABCABBAKOgQIABAKSgUIOBIBMUoECEEYAFCeJ1iigAFg54gBaAJwAngEgAGZDogB03GSAQ8yLTUuNi41LjIuMS4xLjOYAQCgAQGwAQDIAQ_AAQE&sclient=gws-wiz&ved=0ahUKEwjYuOz3sK3yAhVcQPUHHddDBfsQ4dUDCA4&uact=5&dlnr=1&sei=zBIWYbuGO-X9hwPi3IaYBQ"));
                startActivity(intent);
            }
        });

    }
}