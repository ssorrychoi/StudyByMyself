package com.example.myapplication.ui.login;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

import com.example.myapplication.R;

public class RegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        EditText idTxt = (EditText) findViewById(R.id.idTxt);
        EditText pwdTxt = (EditText) findViewById(R.id.passwordview);
        EditText nameTxt = (EditText) findViewById(R.id.nameTxt);

        Button signup_btn = (Button) findViewById(R.id.signup_btn);
    }
}
