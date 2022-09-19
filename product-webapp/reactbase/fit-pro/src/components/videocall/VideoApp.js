import React, { useEffect, useRef, useState } from "react";
import { MeetingProvider, useMeeting, useParticipant, useConnection, usePubSub, } from "@videosdk.live/react-sdk";
import { getToken, validateMeeting, createMeeting } from "./Api";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./SubJoining/VideoCall.css"
import { BsFillMicFill, BsFillMicMuteFill, BsChatRightText } from "react-icons/bs";
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from "react-icons/bs";
import { ImPhoneHangUp } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
import axios from "axios";

// import { JoiningScreen } from "./components/JoiningScreen";

const primary = "#3E84F6";

const width = 400;
const height = (width * 2) / 3;
const borderRadius = 8;

const chunk = (arr) => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const Title = ({ title, dark }) => {
  return <h2 style={{ color: dark ? 'black' : "black" }}>{title}</h2>;
};

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages?.map((message, i) => {
        const { senderName, message: text, timestamp } = message;

        return (
          <div
            style={{
              margin: 8,
              backgroundColor: "darkblue",
              borderRadius: 8,
              overflow: "hidden",
              padding: 8,
              color: "#fff",
            }}
            key={i}
          >
            <p style={{ margin: 0, padding: 0, fontStyle: "italic" }}>
              {senderName}
            </p>
            <h3 style={{ margin: 0, padding: 0, marginTop: 4, wordBreak: 'break-word' }}>{text}</h3>
            <p
              style={{
                margin: 0,
                padding: 0,
                opacity: 0.6,
                marginTop: 4,
              }}
            >
              {formatAMPM(new Date(timestamp))}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const MeetingChat = ({ tollbarHeight }) => {
  const { publish, messages } = usePubSub("CHAT", {});
  const [message, setMessage] = useState("");
  return (
    <div
      style={{
        // marginLeft: borderRadius,
        // width: "30%",
        backgroundColor: "#ffff",
        // overflowY: "scroll",
        // borderRadius,
        height: `calc(100vh - ${tollbarHeight + 2 * borderRadius}px)`,
        padding: borderRadius,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div style={{ height: '10%', textAlign: 'center' }}>
        <Title title={"Chat"} style={{ color: "black" }} />
      </div>
      <div style={{ overflowY: "auto" }} >
        <MessageList messages={messages} />
      </div>

      <div style={{ display: "flex", height: '10%', position: 'relative' }}>
        <input placeholder="Type message here" style={{ width: '100%', border: 'none' }} value={message} onChange={(e) => { const v = e.target.value; setMessage(v); }} />
        <button c style={{ position: 'absolute', border: 'none', margin: 0, background: 'transparent', height: '100%', right: '1px' }} onClick={() => {
          const m = message;
          if (m.length) {
            publish(m, { persist: true });
            setMessage("");
          }
        }}
        >
          <RiSendPlaneFill style={{ width: '34px', height: '25px' }} />
        </button>
      </div>
    </div>
  );
};

const ParticipantView = ({ participantId, index, len }) => {
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  const screenShareRef = useRef(null);

  const onStreamEnabled = (stream) => { };
  const onStreamDisabled = (stream) => { };

  const {
    webcamStream,
    micStream,
    screenShareStream,
    webcamOn,
    micOn,
    screenShareOn,
    isLocal
  } = useParticipant(participantId, {
    onStreamEnabled,
    onStreamDisabled,
  });

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  useEffect(() => {
    if (screenShareRef.current) {
      if (screenShareOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(screenShareStream.track);

        screenShareRef.current.srcObject = mediaStream;
        screenShareRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        screenShareRef.current.srcObject = null;
      }
    }
  }, [screenShareStream, screenShareOn]);

  return (
    // <div
    //   style={{
    //     width,
    //     backgroundColor: primary,
    //     // borderRadius: borderRadius,
    //     overflow: "hidden",
    //     // margin: borderRadius,
    //     // padding: borderRadius,
    //     display: "flex",
    //     flex: 1,
    //     flexDirection: "column",
    //     position: "relative",
    //     height:"100%"
    //   }}
    // >

    //len == 1 ? "bigInVideo" : 
    <div className={len == 1 ? "smallInVideo" : "bigInVideo"}>
      <audio ref={micRef} autoPlay muted={isLocal} />

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <video
            height={"100%"}
            width={"100%"}
            ref={webcamRef}
            style={{
              backgroundColor: "black",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              objectFit: "contain",
            }}
            autoPlay
          />
          <div
            style={{
              position: "absolute",
              top: borderRadius,
              right: borderRadius,
            }}
          >
            {/* <p
              style={{
                color: webcamOn ? "green" : "red",
                fontSize: 16,
                fontWeight: "bold",
                opacity: 1,
              }}
            >
              WEB CAM
            </p> */}
          </div>

          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
          >
            {/* <button
              className="button blue"
              style={
                {
                  // height: 50,
                  // width: 200,
                }
              }
              onClick={async () => {
                const meetingId = prompt(
                  `Please enter meeting id where you want to switch ${displayName}`
                );
                const token = await getToken();
                if (meetingId && token) {
                  try {
                    await switchTo({
                      meetingId,
                      payload: "Im Switching",
                      token: token,
                    });
                  } catch (e) {
                    console.log("swithc To Error", e);
                  }
                } else {
                  alert("Empty meetingId!");
                }
              }}
            >
              Switch Participant
            </button> */}
          </div>
        </div>
      </div>

      {/* <div
        style={{
          marginTop: borderRadius,
          position: "relative",
          borderRadius: borderRadius,
          overflow: "hidden",
          backgroundColor: "lightgreen",
          width: "100%",
          height: 300,
        }}
      >
        <div
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <video
            height={"100%"}
            width={"100%"}
            ref={screenShareRef}
            style={{
              backgroundColor: "black",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              objectFit: "contain",
            }}
            autoPlay
          />
          <div
            style={{
              position: "absolute",
              top: borderRadius,
              right: borderRadius,
            }}
          >
            <p
              style={{
                color: screenShareOn ? "green" : "red",
                fontSize: 16,
                fontWeight: "bold",
                opacity: 1,
              }}
            >
              SCREEN SHARING
            </p>
          </div>
        </div>
      </div>
      <table>
        {[
          { k: "Name", v: displayName },
          { k: "webcamOn", v: webcamOn ? "YES" : "NO" },
          { k: "micOn", v: micOn ? "YES" : "NO" },
          { k: "screenShareOn", v: screenShareOn ? "YES" : "NO" },
          { k: "isLocal", v: isLocal ? "YES" : "NO" },
          { k: "isActiveSpeaker", v: isActiveSpeaker ? "YES" : "NO" },
          { k: "isMainParticipant", v: isMainParticipant ? "YES" : "NO" },
        ].map(({ k, v }) => (
          <tr key={k}>
            <td style={{ border: "1px solid #fff", padding: 4 }}>
              <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{k}</h3>
            </td>
            <td style={{ border: "1px solid #fff", padding: 4 }}>
              <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{v}</h3>
            </td>
          </tr>
        ))}
      </table> */}
    </div>
  );
};

const ParticipantsView = () => {
  const { participants } = useMeeting();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        // padding: borderRadius,
        height: '100%'
      }}
    >


      {/* <Title dark title={"Participants"} /> */}
      {chunk([...participants.keys()]).map((k) => (
        <div style={{ display: "flex", height: "100%", position: "relative" }}>
          {k.map((l, i) => (
            <ParticipantView key={l} participantId={l} index={i} len={k.length} />
          ))}
        </div>
      ))}
    </div>
  );
};

function MeetingView({ onNewMeetingIdToken, onMeetingLeave }) {
  const [participantViewVisible, setParticipantViewVisible] = useState(true);
  const [showChat, setShowChat] = useState(false)
  const [mic, setMic] = useState(true)
  const [webcam, setWebcam] = useState(true)

  const $meeting = useMeeting();

  //  meeting
  function onParticipantJoined(participant) {
    console.log(" onParticipantJoined", participant);
  }
  function onParticipantLeft(participant) {
    console.log(" onParticipantLeft", participant);
  }
  const onSpeakerChanged = (activeSpeakerId) => {
    console.log(" onSpeakerChanged", activeSpeakerId);
  };
  function onPresenterChanged(presenterId) {
    console.log(" onPresenterChanged", presenterId);
  }
  function onMainParticipantChanged(participant) {
    console.log(" onMainParticipantChanged", participant);
  }
  function onEntryRequested(participantId, name) {
    console.log(" onEntryRequested", participantId, name);
  }
  function onEntryResponded(participantId, name) {
    console.log(" onEntryResponded", participantId, name);
  }
  function onRecordingStarted() {
    console.log(" onRecordingStarted");
  }
  function onRecordingStopped() {
    console.log(" onRecordingStopped");
  }
  function onChatMessage(data) {
    console.log(" onChatMessage", data);
  }
  function onMeetingJoined() {
    console.log("onMeetingJoined");
  }
  function onMeetingLeft() {
    console.log("onMeetingLeft");
    onMeetingLeave();
  }
  const onLiveStreamStarted = (data) => {
    console.log("onLiveStreamStarted example", data);
  };
  const onLiveStreamStopped = (data) => {
    console.log("onLiveStreamStopped example", data);
  };

  const onVideoStateChanged = (data) => {
    console.log("onVideoStateChanged", data);
  };
  const onVideoSeeked = (data) => {
    console.log("onVideoSeeked", data);
  };

  const onWebcamRequested = (data) => {
    console.log("onWebcamRequested", data);
  };
  const onMicRequested = (data) => {
    console.log("onMicRequested", data);
  };
  const onPinStateChanged = (data) => {
    console.log("onPinStateChanged", data);
  };
  const onSwitchMeeting = (data) => {
    window.focus();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to switch Meeting ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            onNewMeetingIdToken(data);
          },
        },
        {
          label: "No",
          onClick: () => { },
        },
      ],
    });
  };

  const onConnectionOpen = (data) => {
    console.log("onConnectionOpen", data);
  };

  const {
    startRecording,
    stopRecording,
    startVideo,
    stopVideo,
    resumeVideo,
    pauseVideo,
    seekVideo,
    startLivestream,
    stopLivestream,
  } = useMeeting({
    onParticipantJoined,
    onParticipantLeft,
    onSpeakerChanged,
    onPresenterChanged,
    onMainParticipantChanged,
    onEntryRequested,
    onEntryResponded,
    onRecordingStarted,
    onRecordingStopped,
    onChatMessage,
    onMeetingJoined,
    onMeetingLeft,
    onLiveStreamStarted,
    onLiveStreamStopped,
    onVideoStateChanged,
    onVideoSeeked,
    onWebcamRequested,
    onMicRequested,
    onPinStateChanged,
    onSwitchMeeting,
    onConnectionOpen,
  });

  const handlestartVideo = () => {
    console.log("handlestartVideo");

    startVideo({
      link: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    });
  };
  const handlestopVideo = () => {
    stopVideo();
  };
  const handleresumeVideo = () => {
    resumeVideo();
  };
  const handlepauseVideo = () => {
    pauseVideo({ currentTime: 2 });
  };
  const handlesseekVideo = () => {
    seekVideo({ currentTime: 5 });
  };
  const handleStartLiveStream = () => {
    startLivestream([
      {
        url: "rtmp://a.rtmp.youtube.com/live2",
        streamKey: "key",
      },
    ]);
  };
  const handleStopLiveStream = () => {
    stopLivestream();
  };
  const handleStartRecording = () => {
    startRecording();
  };
  const handleStopRecording = () => {
    stopRecording();
  };

  const tollbarHeight = 120;

  return (
    <div
      style={{ backgroundColor: "#ffff", height: '93.5vh', position: "relative", overflow: "hidden" }}>
      <div style={{ display: 'flex', position: 'absolute', top: '90%', zIndex: '9999', alignItems: 'center', justifyContent: 'center', width: '100%', }}>

        <button className={"button blue"} onClick={ () => {
          if(mic){
            setMic(false)
            $meeting?.muteMic()
          }else{
            setMic(true)
            $meeting?.unmuteMic()
          }
        } }>
          {mic ? <BsFillMicFill /> : <BsFillMicMuteFill/>}
          
        </button>
        <button className={"button red"} onClick={ () => $meeting?.leave()}>
          <ImPhoneHangUp />
        </button>
        <button className={"button blue"} onClick={() =>{
           if(webcam){
            setWebcam(false)
            $meeting?.disableWebcam()
          }else{
            setWebcam(true)
            $meeting?.enableWebcam()()
          }
        } }>
          {webcam ? <BsFillCameraVideoFill /> : <BsFillCameraVideoOffFill/>}
         
        </button>
        <button className={"button black"} onClick={() => setShowChat(!showChat)}>
          <BsChatRightText />
        </button>
      </div>
      <div style={{ height: '100%', width: '100%', position: 'absolute', display: 'flex' }}>
        <div className="bigVideo">
          <ParticipantsView />
        </div>
        {showChat &&<MeetingChat tollbarHeight="100%" />}
      </div>
    </div>
  );
}

const VideoCall = () => {
  const [token, setToken] = useState(getToken);
  const [meetingId, setMeetingId] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [micOn, setMicOn] = useState(false);
  const [webcamOn, setWebcamOn] = useState(false);
  const [isMeetingStarted, setMeetingStarted] = useState(false);
  const [meetingData , setMeetingData] = useState([]);


  // const myMeetingData=()=>{
  //   fetch("http://localhost:3000/booking")
  //   .then(res=>res.json())
  //   .then(response => setMeetingData(response))
  //   .catch(err=>console.log(err))
  //  console.log(meetingData , "78787787")
  // }

  // useEffect(()=>{
  //   myMeetingData();
  // },[])

  async function startInstantMeeting() {

   

    
    const token = await getToken();
    // const id =  await createMeeting(token)
    const id = await createMeeting({ token });
    
    console.log(id,"id")
    // const id = 'r6wu-4s11-cipx'
    const valid = await validateMeeting({ meetingId: id, token });
    
 
   
  //  const {appointment_Date , appointment_Specialization,appointment_id,booked_On,end_Time,expertId,expert_emailId,patient_Concern,start_Time,status,user_EmailId} = meetingData;
  //  const jsonData = {
  //   expertId:expertId,
  //   appointment_id: appointment_id,
  //   user_EmailId: user_EmailId,
  //   expert_emailId:expert_emailId,
  //   appointment_Date:appointment_Date,
  //   booked_On: booked_On,
  //   appointment_Specialization: appointment_Specialization,
  //   patient_Concern: patient_Concern,
  //   start_Time: start_Time,
  //   end_Time: end_Time,
  //   status: status,
  //   meeting_id:id
  //  }
  //  console.log(jsonData,"90909990")
  //  const json = JSON.stringify(jsonData);
  //  const res = axios.put(`http://localhost:3000/fitPro/`, json, {
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //  });



    if (valid) {
      setParticipantName(localStorage.getItem('loginId'))
      setMeetingId(id)
      setToken(token)
      setMicOn(true)
      setWebcamOn(true)
      setMeetingStarted(true)
    } else {
      alert("Invalid Meeting Id");
    }

  }

  useEffect(() => {
    startInstantMeeting()
    
  }, [])


  // useEffect(()=>{
  //   console.log(`${token}token,${meetingId}meetingId,${participantName}participantName,${micOn}micOn,${webcamOn}webcamOn,${isMeetingStarted}isMeetingStarted`)
  // },[token,meetingId,participantName,micOn,webcamOn,isMeetingStarted])

  return isMeetingStarted ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: micOn,
        webcamEnabled: webcamOn,
        name: participantName ? participantName : "TestUser",
      }}
      token={token}
      reinitialiseMeetingOnConfigChange={true}
      joinWithoutUserInteraction={true}
    >
      <MeetingView
        onNewMeetingIdToken={({ meetingId, token }) => {
          setMeetingId(meetingId);
          setToken(token);
        }}
        onMeetingLeave={() => {
          setToken("");
          setMeetingId("");
          setWebcamOn(false);
          setMicOn(false);
          setMeetingStarted(false);
        }}
      />
    </MeetingProvider>
  ) : (
    <div></div>
  );
};

export default VideoCall
