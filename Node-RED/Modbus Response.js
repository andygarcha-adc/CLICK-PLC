if((msg.payload[7]==15) || (msg.payload[7]==16)){
    msg.payload=msg.payload.slice(0,12);
}
return msg;