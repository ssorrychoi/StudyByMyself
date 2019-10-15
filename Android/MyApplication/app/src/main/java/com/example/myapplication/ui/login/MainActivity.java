package com.example.myapplication.ui.login;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.EditText;
import android.widget.TextView;

import com.example.myapplication.R;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText usernameEditText = findViewById(R.id.idTxt);
        final EditText passwordEditText = findViewById(R.id.passwordview);
        TextView WelcomeMsg = (TextView) findViewById(R.id.WelcomeMsg);
    }
}
