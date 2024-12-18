package com.example.lab1

import android.annotation.SuppressLint
import android.os.Bundle
import android.widget.Button
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarColors
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.lab1.ui.theme.Lab1Theme
import org.w3c.dom.Text

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Lab1Theme {
                    MyTopBar(
                        "Lab 1 Kotlin + Compose"
                    )
                    Spacer(
                        Modifier.height(16.dp)
                    )
                    Button(
                        enabled = true,
                        onClick = { }
                    ) {
                        Text("Button")
                    }
                }
            }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MyTopBar(title: String){
    TopAppBar(
        colors = TopAppBarDefaults.topAppBarColors(
            containerColor = Color(0xFF2d8577),
            titleContentColor = Color.White,
        ),
        title = {
            Text(title)
        }
    )
}

@Composable
fun MyButton() {
    Button(
        enabled = true,
        onClick = { },
        colors = ButtonDefaults.buttonColors(
            containerColor = Color(0xFFd8d4d4),
            contentColor = Color.Black
        ),
        shape = RectangleShape
    ) {
        Text("Button")
    }
}

@Composable
fun EmailTextField(){
    TextField(
        value = "",
        onValueChange = { },
        label = { Text("Email") },

    )
}

@Composable
fun MyButtonRow() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 40.dp)
    ) {
        MyButton()
        Spacer(
            Modifier.width(128.dp)
        )
        MyButton()
    }
}

@Composable
fun MyImage() {
    Image(
        painter = painterResource(id = R.drawable.ic_launcher_foreground),
        contentDescription = stringResource(R.string.my_image)
    )
}

@Preview(showBackground = true, showSystemUi = true)
@Composable
fun GreetingPreview() {
    Lab1Theme {
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            MyTopBar(
                "Lab 1 Kotlin + Compose"
            )
            Spacer(
                Modifier.height(40.dp)
            )
            MyImage()
            Spacer(
                Modifier.height(40.dp)
            )
            MyButtonRow()
            Spacer(
                modifier = Modifier.height(40.dp)
            )
            MyButtonRow()
            Spacer(
                modifier = Modifier.height(104.dp)
            )
            EmailTextField()
        }
    }
}