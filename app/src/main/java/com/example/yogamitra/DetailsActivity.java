package com.example.yogamitra;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;


import java.util.HashMap;
interface store_data
{
  public void storedata(String t1,String t2,String t3,String t4);
}

public class DetailsActivity extends AppCompatActivity  {
    private Button button;
    private EditText bmi;
    private EditText wc;
    private EditText hr;
    private EditText br;
    private DatabaseReference ref;

    String BMI,WC,HR,BR;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);
        button = findViewById(R.id.button12);
        bmi = findViewById(R.id.editTextTextPersonName);
        wc = findViewById(R.id.editTextTextPersonName2);
        hr = findViewById(R.id.editTextTextPersonName3);
        br = findViewById(R.id.editTextTextPersonName4);
        ref = FirebaseDatabase.getInstance().getReference("users");
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                BMI = bmi.getText().toString();
                WC = wc.getText().toString();
                HR= hr.getText().toString();
                BR = br.getText().toString();
                storedata(BMI,WC,HR,BR);
               HashMap<String,Object> map = new HashMap<String,Object>();
                map.put("bmi","BMI");
                map.put("wc","WC");
               map.put("hr","HR");
               map.put("br","BR");
                startActivity(new Intent(DetailsActivity.this,MainActivity.class));
                //finish();
            }
        });
    }

    public void storedata(String BMI, String WC, String HR ,String BR ) {

       ref = FirebaseDatabase.getInstance().getReference("details");
        HelperClass addnew = new HelperClass(BMI,WC,HR,BR);
        ref.setValue(addnew);

    }



}