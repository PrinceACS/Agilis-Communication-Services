"use client";
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


const TawkTo = () => {

  const proprtyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {

    tawkMessengerRef.current.minimize();
    };
    const onTawkLoad = () => {
      // console.log("Tawk.to widget loaded");
     
      if (window.Tawk_API) {
        const userName = userData.full_name; 
        const userEmail = userData.email;
        const userPhone=userData.phone_number;
        // Use Tawk.to's identify method to set the visitor's information
        window.Tawk_API.setAttributes({
          name: userName,
          email: userEmail,
          phone: userPhone,
        }, function (error) {
          if (error) {
            console.error("Error setting Tawk.to user details:", error);
          } else {
            console.log("User details successfully sent to Tawk.to");
          }
        });
      
        // Alternatively, use this to set visitor attributes directly
        // window.Tawk_API.visitor = {
        //   name: userName,
        //   email: userEmail,
        // };
        
        // Use Tawk.to's postMessage method to send a message to the visitor
        // window.Tawk_API.postMessage("Hello, how can I help you today?");
      } else {
        console.error("Tawk_API is not available");
      }
    }
  return (
    
      <TawkMessengerReact
        propertyId={proprtyId}
        widgetId={widgetId}
        theme="light"
        minimize={true}
        onTawkLoad={onTawkLoad}
        ref={tawkMessengerRef}
        onMinimize={handleMinimize}
      />
    
  );
};

export default TawkTo;
