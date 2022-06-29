#!/usr/bin/env python

import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import requests


GREEN_LED = 17
RED_PIN = 27
GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)
GPIO.setup(27, GPIO.OUT)
reader = SimpleMFRC522()

try:
    id, text = reader.read()
    print(id)
    print(text)
    r = requests.post(
        'https://rfid-rest.azurewebsites.net/api/create-log', json={"cardId": id})
    if r.statusCode == 200:
        GPIO.output(GREEN_LED, GPIO.HIGH)
    if r.statusCode == 400:
        GPIO.output(GREEN_LED, GPIO.HIGH)
        GPIO.output(RED_LED, GPIO.HIGH)


    GPIO.output(GREEN_LED, GPIO.LOW)
    GPIO.output(RED_LED, GPIO.LOW)

finally:
    GPIO.cleanup()
