import sys
import json
from django.apps import AppConfig



from pubnub.callbacks import SubscribeCallback
from pubnub.enums import PNStatusCategory
from pubnub.pnconfiguration import PNConfiguration
from pubnub.pubnub import PubNub

class TaskConfig(AppConfig):
    name = 'task'

    def ready(self):

        # if 'runserver' not in sys.argv:
        #     return True

        import os
        from django.conf import settings
        from .models import Message


        ENTRY = "Earth"
        CHANNEL = "iotchannel123789"

        pnconfig = PNConfiguration()
        pnconfig.publish_key = "pub-c-9241f442-1b30-4a6a-afa5-6f61fea5d79c"
        pnconfig.subscribe_key = "sub-c-0c51be16-f942-11ea-8ff3-ca9fd24ed40e"
        pnconfig.uuid = "sec-c-MTE2NzYyNDAtZmFiMS00ZjQ3LTgyZmYtNjM4M2E1MTQ5ZTI5"

        pubnub = PubNub(pnconfig)


        class MySubscribeCallback(SubscribeCallback):
            def presence(self, pubnub, event):
                print("[PRESENCE: {}]".format(event.event))
                print("uuid: {}, channel: {}".format(event.uuid, event.channel))

            def status(self, pubnub, event):
                if event.category == PNStatusCategory.PNConnectedCategory:
                    print("[STATUS: PNConnectedCategory]")
                    print("connected to channels: {}".format(event.affected_channels))

            def message(self, pubnub, event):
                print("[MESSAGE received]")

                if event.message["update"] == "42":
                    print("The publisher has ended the session.")
                    os._exit(0)
                else:
                    if event.message["entry"] == "SENSOR":
                        param = json.loads(event.message["update"].replace("'",'"'))

                        if param["SCOUNT"] == "50":
                            print("-------- SAVE  ---------")
                            article = Message()
                            article.sensor_pressure_in = param["PSIIN"]
                            article.sensor_pressure_out = param["PSIOUT"]
                            article.sensor_toc = param["TOC"]
                            article.sensor_cod = param["COD"]
                            article.sensor_uv254 = param["UV254"]
                            article.sensor_air_pressure = param["AIRPRESSURE"]
                            article.sensor_temperature = param["AIRTEMPERATURE"]
                            article.sensor_altitude = param["ALTITUDE"]
                            article.sensor_cistern = param["CISTERNLEVEL"]
                            article.sensor_flow = param["WATERFLOW"]
                            article.sensor_asu_p10 = param["PM10SCU"]
                            article.sensor_asu_p25 = param["PM25SCU"]
                            article.sensor_asu_p100 = param["PM100SCU"]
                            article.sensor_aeu_p10 = param["PM10ECU"]
                            article.sensor_aeu_p25 = param["PM25ECU"]
                            article.sensor_aeu_p100 = param["PM100ECU"]
                            article.sensor_practice03 = param["PARTICLE03UM"]
                            article.sensor_practice05 = param["PARTICLE05UM"]
                            article.sensor_practice10 = param["PARTICLE10UM"]
                            article.sensor_practice25 = param["PARTICLE25UM"]
                            article.sensor_practice50 = param["PARTICLE50UM"]
                            article.sensor_practice100 = param["PARTICLE100UM"]
                            article.save()

                    print("{}: {}".format(event.message["entry"], event.message["update"]))

        pubnub.add_listener(MySubscribeCallback())
        pubnub.subscribe().channels(CHANNEL).with_presence().execute()

        print("***************************************************")
        print("* Waiting for updates to The Guide about {}... *".format(ENTRY))
        print("***************************************************")
        pass
