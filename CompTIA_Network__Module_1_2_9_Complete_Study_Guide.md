# **Module 1.2.9: Open Systems Interconnection (OSI) Model & Encapsulation**

## **Quick Reference Answer Key**

* **Q1:** C) Presentation Layer, E) Application Layer, F) Session Layer (Select three)  
* **Q2:** A) A chunk of data with protocol-specific headers added at each OSI layer  
* **Q3:** D) To add additional data headers for routing and delivery  
* **Q4:** B) Media converter  
* **Q5:** C) Physical  
* **Q6:** A) Network interface cards (NICs), B) Switches, E) Bridges (Select three)  
* **Q7:** A) Checksum for basic error checking, C) Source hardware address, D) Destination hardware address (Select three)  
* **Q8:** A) To filter network traffic by permitting or blocking packets based on IP addresses and other criteria  
* **Q9:** A) The primary function of the Network layer is to move data around an internetwork using logical network and host IDs.  
* **Q10:** B) End-to-end flow control, C) Reliable message delivery, E) Data segmentation and reassembly (Select three)  
* **Q11:** D) Layer 4  
* **Q12:** C) The Presentation layer supports data compression and encryption to prepare data for network transmission.  
* **Q13:** B) The Session layer administers the process of establishing, managing, and terminating a dialog between client and server.  
* **Q14:** Application Layer ![][image1] HTTP; Presentation Layer ![][image1] Translates data; Session Layer ![][image1] Session ID number; Transport Layer ![][image1] Port number; Network Layer ![][image1] Router; Data Link Layer ![][image1] Switch  
* **Q15:** D) Layer 2 (Data Link Layer)

## **Question 1: Identification of OSI Model Layers**

### **1\) THE QUESTION AND OPTIONS**

Which of the following are layers of the OSI reference model? (Select three.)

* **A)** Connection Layer  
* **B)** Transmission Layer  
* **C)** Presentation Layer  
* **D)** Encryption Layer  
* **E)** Application Layer  
* **F)** Session Layer  
* **G)** WAN Layer

### **2\) CORRECT ANSWER**

* **C) Presentation Layer**  
* **E) Application Layer**  
* **F) Session Layer**

### **3\) WHY IT'S CORRECT**

* **Standardized 7-Layer Architecture:** The Open Systems Interconnection (OSI) reference model, defined by ISO/IEC 7498-1, categorizes network communication into seven distinct logical layers. Layers 5, 6, and 7 represent the upper (software) layers of the stack.  
* **Application Layer (Layer 7):** Serves as the window for users and application processes to access network services (e.g., HTTP, FTP, SMTP, DNS).  
* **Presentation Layer (Layer 6):** Formats, translates, encrypts, and compresses data, ensuring that information sent from the application layer of one system is readable by the application layer of another.  
* **Session Layer (Layer 5):** Establishes, manages, synchronizes, and terminates dialogues (sessions) between presenting application entities.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Complete 7-Layer OSI Stack Structure:**

\+-------------------------------------------------------------+  
| Layer 7: Application  | Data Payload (HTTP, SMTP, DNS)      | Upper / Software  
| Layer 6: Presentation | Formatting, Encryption, Compression | Layers  
| Layer 5: Session      | Session Setup, Sync, Teardown       |  
\+-------------------------------------------------------------+  
| Layer 4: Transport    | TCP/UDP, Segments, Port Numbers     | Lower / Hardware  
| Layer 3: Network      | IP, Packets, Routers, Logical IDs   | & Transport  
| Layer 2: Data Link    | Ethernet, Frames, MAC Addresses     | Layers  
| Layer 1: Physical     | Bits, Cables, Signals, Transceivers |  
\+-------------------------------------------------------------+

* **Architectural Boundaries:** The upper three layers (7, 6, 5\) deal with application-specific details and are typically implemented in software within the operating system or application runtime. The lower four layers (4, 3, 2, 1\) handle data transport, addressing, switching, physical media, and bit delivery.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) Connection Layer:**  
  * *Why it is incorrect:* "Connection Layer" is a distractor term. Connection setup occurs logically across multiple layers (Session Layer for dialogs, Transport Layer for TCP handshakes, Data Link Layer for virtual circuits), but no layer in the official 7-layer OSI model is named "Connection Layer."  
  * *What the question would need to ask instead:* "Which term is often incorrectly used to describe the Data Link Layer when referring to point-to-point node connections?"  
* **B) Transmission Layer:**  
  * *Why it is incorrect:* This is a common trap confusing the **Transport Layer** (Layer 4\) or physical transmission media with a fake layer name.  
  * *What the question would need to ask instead:* "Which official OSI Layer 4 protocol layer manages transparent end-to-end data transfer between hosts?" (Points to Transport Layer).  
* **D) Encryption Layer:**  
  * *Why it is incorrect:* Encryption is a security *function* performed primarily at Layer 6 (Presentation Layer) or Layer 3 (IPsec) / Layer 4 (TLS), but it is not a standalone layer in the OSI stack.  
  * *What the question would need to ask instead:* "At which OSI layer is cryptographic formatting, data compression, and character syntax translation primarily handled?"  
* **G) WAN Layer:**  
  * *Why it is incorrect:* A Wide Area Network (WAN) describes a geographical scope of networking infrastructure (spanning cities or countries), not an OSI reference model layer.  
  * *What the question would need to ask instead:* "Which network classification describes long-distance enterprise connectivity across cities or countries?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **OSI Model (Open Systems Interconnection):** A conceptual 7-layer framework developed by ISO to standardize how different computer systems communicate over a network.  
* **Layer 7 (Application):** The network layer closest to the end user, exposing network services to software programs.  
* **Layer 6 (Presentation):** The network layer responsible for converting data formats, compressing data, and applying cryptographic encryption/decryption.  
* **Layer 5 (Session):** The network layer that opens, maintains, and closes interactive communication sessions between devices.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A web developer builds a secure banking portal.  
* **The Problem:** When a user logs in, the portal needs to request user data, encrypt financial statements before sending them over the wire, and maintain an active user login session without timing out during account edits.  
* **The Implementation:** The web browser uses **Layer 7 (Application)** to render HTTP requests, **Layer 6 (Presentation)** via TLS/SSL to encrypt the payload, and **Layer 5 (Session)** to track the active session token between client and server.  
* **The Outcome:** Understanding the distinct operational responsibilities of layers 7, 6, and 5 allows developers and network engineers to isolate web app bugs versus encryption failures versus session dropouts.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Preparing and Mailing an International Business Letter.  
* **Mapping Incorrect Options:**  
  * *Transmission / Connection / Encryption / WAN Layers* are fake job titles made up by someone who doesn't work at the post office.  
* **Mapping Correct Options:**  
  * *Application Layer (L7)* is the CEO drafting the raw letter text in English.  
  * *Presentation Layer (L6)* is the translator translating English to Japanese and sealing the letter inside an encrypted, tamper-evident envelope.  
  * *Session Layer (L5)* is the executive secretary placing a call to Tokyo to confirm: *"Are you ready to receive this 3-page document? Okay, keeping the line open until page 3 arrives."*

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **Top-Down Mnemonic (Layers 7 to 1):** "**A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing" (**A**pplication, **P**resentation, **S**ession, **T**ransport, **N**etwork, **D**ata Link, **P**hysical).  
* **Bottom-Up Mnemonic (Layers 1 to 7):** "**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way".

### **10\) STUDENT CHECKLIST**

* \[ \] Can you list all 7 OSI layers in exact numerical order from bottom (Physical) to top (Application)?  
* \[ \] Does the question ask for the upper three software layers? (Points to **Application, Presentation, Session**).  
* \[ \] Did an option mention "Encryption Layer" or "Transmission Layer"? (Rule them out—these are non-existent OSI layer names\!).  
* \[ \] **Remember:** Layers 7, 6, and 5 govern software payloads; Layers 4, 3, 2, and 1 govern network transport and physical connectivity.

## **Question 2: Definition and Role of Protocol Data Units (PDUs)**

### **1\) THE QUESTION AND OPTIONS**

What is a Protocol Data Unit (PDU)?

* **A)** A chunk of data with protocol-specific headers added at each OSI layer  
* **B)** A type of encryption used in data transmission  
* **C)** A measure of data transmission speed  
* **D)** A device that manages data transmission rates

### **2\) CORRECT ANSWER**

* **A) A chunk of data with protocol-specific headers added at each OSI layer**

### **3\) WHY IT'S CORRECT**

* **Layer-Specific Data Representation:** A Protocol Data Unit (PDU) is the formal architectural term describing the state of data as it travels through each layer of a networking stack.  
* **Encapsulation Envelope:** As raw user data moves down the OSI model from Layer 7 to Layer 1, each individual layer appends its own protocol-specific header (and sometimes trailer) containing operational metadata (e.g., port numbers, IP addresses, MAC addresses, checksums). The resulting structured block of data is that layer's PDU.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **PDU Names across the OSI Layers:**

\+-------------------+------------------------------------+---------------------+  
| OSI Model Layer   | Protocol Data Unit (PDU) Name      | Key Header Added    |  
\+-------------------+------------------------------------+---------------------+  
| Layer 7, 6, 5     | Data / Payload                     | Application Headers |  
| Layer 4           | Segment (TCP) / Datagram (UDP)     | Port Numbers (L4)   |  
| Layer 3           | Packet                             | IP Addresses (L3)   |  
| Layer 2           | Frame                              | MAC Addresses (L2)  |  
| Layer 1           | Bits                               | Preamble / Signals  |  
\+-------------------+------------------------------------+---------------------+

* **PDU Encapsulation Sequence:**  
  ![][image2]

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) A type of encryption used in data transmission:**  
  * *Why it is incorrect:* A PDU is a structural container for data, not a cryptographic security algorithm like AES, RSA, or 3DES.  
  * *What the question would need to ask instead:* "Which term describes a mathematical algorithm used to encode data payloads for confidential transmission across public networks?"  
* **C) A measure of data transmission speed:**  
  * *Why it is incorrect:* Data transmission speed is measured in throughput metrics such as Bits Per Second (bps), Megabits Per Second (Mbps), or Gigabits Per Second (Gbps).  
  * *What the question would need to ask instead:* "Which networking metric quantifies the volume of digital data successfully transmitted across a medium per unit of time?"  
* **D) A device that manages data transmission rates:**  
  * *Why it is incorrect:* A PDU is a software/protocol data formatting concept, not a hardware appliance. Hardware devices that manage transmission rates include bandwidth shapers, rate-limiting switches, or traffic-policing routers.  
  * *What the question would need to ask instead:* "Which hardware appliance or router feature regulates and restricts data transmission throughput across an interface?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Protocol Data Unit (PDU):** The complete package of data payload plus protocol control headers at any specific layer of the OSI model.  
* **Segment:** The Layer 4 PDU created by TCP.  
* **Packet:** The Layer 3 PDU created by IP.  
* **Frame:** The Layer 2 PDU created by Ethernet, Wi-Fi, or PPP containing hardware MAC addresses and a Frame Check Sequence (FCS) trailer.  
* **Bits:** The Layer 1 PDU consisting of raw electrical, optical, or radio frequency pulses.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A Wireshark network analyst captures network traffic during a connectivity troubleshooting session.  
* **The Problem:** The analyst needs to inspect why a web page request failed at the router interface.  
* **The Implementation:** In Wireshark's packet details pane, the analyst clicks through the frame layers: expand the Ethernet II block (**Layer 2 Frame PDU**), expand the Internet Protocol Version 4 block (**Layer 3 Packet PDU**), expand the Transmission Control Protocol block (**Layer 4 Segment PDU**), and inspect the Hypertext Transfer Protocol block (**Layer 7 Data PDU**).  
* **The Outcome:** Recognizing PDUs at each layer allows the engineer to determine whether the failure was caused by a bad MAC address (L2), bad IP routing (L3), or a blocked port (L4).

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Russian Nesting Dolls (Matryoshka) or Shipping Boxes inside Freight Containers.  
* **Mapping Incorrect Options:**  
  * *Option B* claims a PDU is a padlock on the box.  
  * *Option C* claims a PDU is the speedometer reading on the delivery truck.  
  * *Option D* claims a PDU is the traffic cop directing the truck.  
* **Mapping Correct Option:**  
  * *PDU* is the actual box itself at each stage of packaging. The raw item (**Data**) goes in an inner box (**Segment**), which goes inside an addressed shipping box (**Packet**), which is loaded onto a wooden cargo pallet (**Frame**), which is loaded onto a freight train (**Bits**).

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **PDU Acronym Matching Trick:** "**D**on't **S**ome **P**eople **F**ear **B**easts" ![][image1] **D**ata (L7-5), **S**egment (L4), **P**acket (L3), **F**rame (L2), **B**its (L1).

### **10\) STUDENT CHECKLIST**

* \[ \] Do you know the exact PDU name for Layer 4 (Segment), Layer 3 (Packet), Layer 2 (Frame), and Layer 1 (Bits)?  
* \[ \] Does the question define a PDU as a data unit wrapped with protocol-specific headers? (Points directly to **Option A**).  
* \[ \] Did an option confuse PDU with hardware equipment or network speed (Mbps)? (Rule out C and D instantly).  
* \[ \] **Remember:** Data ![][image1] Segment ![][image1] Packet ![][image1] Frame ![][image1] Bits as you move DOWN the stack\!

## **Question 3: Primary Purpose of Data Encapsulation**

### **1\) THE QUESTION AND OPTIONS**

What is the primary purpose of data encapsulation in network protocols?

* **A)** To compress data for faster transmission  
* **B)** To encrypt data for secure transmission  
* **C)** To convert data into an analog signal for transmission  
* **D)** To add additional data headers for routing and delivery

### **2\) CORRECT ANSWER**

* **D) To add additional data headers for routing and delivery**

### **3\) WHY IT'S CORRECT**

* **Protocol Control Formatting:** As raw data passes down the OSI stack, each layer wraps the payload with specific header information required for addressing, error detection, flow control, and protocol processing.  
* **Decoupled Layer Architecture:** Encapsulation allows lower layers to carry upper-layer payloads transparently without needing to understand the content of the user application payload. The Layer 3 header provides IP addresses for internetwork routing; the Layer 2 header provides MAC addresses for local hop delivery.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Anatomy of an Encapsulated Ethernet Frame:**

\+-------------------+------------------+------------------+---------------+------------------+  
| Ethernet Header   | IPv4 Header      | TCP Header       | Application   | Ethernet Trailer |  
| (Dest/Src MAC)    | (Dest/Src IP)    | (Dest/Src Ports) | Data Payload  | (FCS Checksum)   |  
\+-------------------+------------------+------------------+---------------+------------------+  
|\<--- Layer 2 \-----\>|\<--- Layer 3 \----\>|\<--- Layer 4 \----\>|\<-- L5 \- L7 \--\>|\<--- Layer 2 \----\>|

* **Encapsulation vs. Decapsulation:**  
  * **Encapsulation (Sender):** Moves TOP ![][image1] BOTTOM (Data ![][image1] Headers Added ![][image1] Physical Signal).  
  * **Decapsulation (Receiver):** Moves BOTTOM ![][image1] TOP (Physical Signal ![][image1] Headers Stripped ![][image1] Raw Data).

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) To compress data for faster transmission:**  
  * *Why it is incorrect:* Encapsulation actually *increases* total frame size because it appends additional protocol headers (header overhead). Data compression is a separate function performed at upper layers (Layer 6 Presentation).  
  * *What the question would need to ask instead:* "Which data reduction process minimizes payload size prior to transmission to conserve network bandwidth?"  
* **B) To encrypt data for secure transmission:**  
  * *Why it is incorrect:* Encapsulation wraps data in standard protocol headers (which are usually plaintext readable by routers and switches). Encryption is a cryptographic security function (like TLS/IPsec) rather than the generic process of header encapsulation.  
  * *What the question would need to ask instead:* "What cryptographic procedure transforms plaintext payloads into ciphertext to ensure data confidentiality across public links?"  
* **C) To convert data into an analog signal for transmission:**  
  * *Why it is incorrect:* Signal modulation (converting digital bits into analog radio or optical pulses) occurs at Layer 1 (Physical Layer), long after digital frame encapsulation at Layers 4, 3, and 2 has completed.  
  * *What the question would need to ask instead:* "Which Physical layer process modulates digital bitstreams into electromagnetic or light signals for physical medium transport?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Data Encapsulation:** The process of adding layer-specific protocol headers and trailers around a data payload prior to transmission.  
* **Header:** Control data added to the beginning of a PDU containing addresses, port numbers, flags, and options.  
* **Trailer:** Control data added to the end of a PDU (specifically at Layer 2\) containing Frame Check Sequence (FCS) error-detection bits.  
* **Payload:** The actual user data or higher-layer PDU enclosed within a lower-layer header/trailer wrapper.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A workstation sends an HTTP POST request to an e-commerce server.  
* **The Problem:** The raw HTTP POST data cannot travel across routers and local switches by itself because intermediate network devices do not know where to send it.  
* **The Implementation:** The OS encapsulates the HTTP data into a TCP segment (adding Port 80/443 headers), encapsulates the segment into an IP packet (adding Source/Dest IP addresses), and encapsulates the packet into an Ethernet frame (adding Source/Dest MAC addresses).  
* **The Outcome:** Routers read the IP header to route the packet across the internet, while local switches read the Ethernet header to deliver the frame locally.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Addressing a Envelope for Postal Mail.  
* **Mapping Incorrect Options:**  
  * *Option A* claims encapsulation is vacuum-packing your letter to make it thinner.  
  * *Option B* claims encapsulation is writing the letter in secret invisible ink.  
  * *Option C* claims encapsulation is reading the letter out loud into a telephone.  
* **Mapping Correct Option:**  
  * *Encapsulation* is slipping the letter inside an envelope, writing the recipient's name and Street Address (**Layer 2 Local MAC**), writing the City/State/ZIP Code (**Layer 3 Network IP**), and writing the Department Name (**Layer 4 Port Number**) on the outside so the post office can route and deliver it.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Encapsulation \= Envelope":** **E**ncapsulation is like putting your data inside an **E**nvelope stamped with addressing instructions.

### **10\) STUDENT CHECKLIST**

* \[ \] Do you understand that encapsulation ADDS headers, which increases packet metadata rather than compressing it?  
* \[ \] Does the option mention adding headers for routing and delivery? (Points directly to **Option D**).  
* \[ \] Remember: Encapsulation happens from Layer 7 down to Layer 1 on the sender; Decapsulation happens from Layer 1 up to Layer 7 on the receiver.

## **Question 4: Physical Layer Transceivers and Media Converters**

### **1\) THE QUESTION AND OPTIONS**

An engineer uses a type of network adapter to connect a fiber link to a router. The transceiver fits into an optical interface on a Layer 3 Ethernet router. Of the choices, which Layer 1 implementation does the engineer utilize?

* **A)** Switch  
* **B)** Media converter  
* **C)** Bridge  
* **D)** VoIP endpoint

### **2\) CORRECT ANSWER**

* **B) Media converter**

### **3\) WHY IT'S CORRECT**

* **Physical Layer Cable/Signal Conversion:** A media converter is a pure Layer 1 (Physical Layer) device designed to convert signals between different network physical media types—most commonly translating optical light signals from fiber-optic cabling into electrical copper signals for twisted-pair Ethernet (RJ-45), or converting multi-mode fiber to single-mode fiber.  
* **Transceiver Mechanics:** Small Form-factor Pluggable (SFP/SFP+) transceivers act as modular interface converters that fit into optical slots on routers and switches to adapt physical medium interfaces at Layer 1\.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Media Converter Architectural Placement:**

\[ Fiber Optic Cable \] \---\> ( Optical SFP Transceiver )   
                                  |  
                      \[ Layer 1 Media Converter \]   
                       ( 光-to-电 Signal Translator )  
                                  |  
\[ Cat6 Copper RJ-45 \] \---\> \[ Router Layer 3 Interface \]

* **Layer 1 Characteristics of Media Converters:**  
  * Media converters do **NOT** evaluate MAC addresses, IP addresses, or VLAN tags.  
  * They operate purely at the bit level, repeating electrical/optical impulses from one physical medium to another without buffering frames or making forwarding decisions.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) Switch:**  
  * *Why it is incorrect:* A standard Ethernet switch is a **Layer 2 (Data Link Layer)** device that inspects MAC address tables (CAM tables) to make frame forwarding and filtering decisions across multiple ports.  
  * *What the question would need to ask instead:* "Which Layer 2 device uses a MAC address table to forward Ethernet frames directly to specific destination ports within a local area network?"  
* **C) Bridge:**  
  * *Why it is incorrect:* A bridge is a **Layer 2** legacy device or software function that connects two separate physical network segments into a single logical broadcast domain using MAC address inspection.  
  * *What the question would need to ask instead:* "Which Layer 2 appliance joins two legacy coaxial network segments together into a single collision domain based on hardware MAC filtering?"  
* **D) VoIP endpoint:**  
  * *Why it is incorrect:* A VoIP endpoint (such as an IP desktop desk phone or softphone app) is an **Application/Upper-Layer (Layers 5–7)** end system that processes Session Initiation Protocol (SIP) signaling and audio voice streams (RTP).  
  * *What the question would need to ask instead:* "Which network end device processes real-time voice conversations over IP using protocols like SIP and RTP?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Media Converter:** A hardware device that converts one cabling/signaling format (e.g., fiber optics) into another (e.g., copper Ethernet) at Layer 1\.  
* **Transceiver (SFP/SFP+):** A modular, hot-swappable optical or copper interface module plugged into switches and routers to provide physical network connectivity.  
* **Single-Mode Fiber (SMF):** Fiber optic cabling using laser light designed for long-distance network runs.  
* **Multi-Mode Fiber (MMF):** Fiber optic cabling using LED light designed for short-distance datacenter runs.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A university campus expands to a new building 2 kilometers away.  
* **The Problem:** The core network switch in the main building only has copper RJ-45 Ethernet ports (100-meter distance limit), but the connection to the new building requires single-mode fiber optic cable to cross the 2 km distance.  
* **The Implementation:** The network administrator installs a **Layer 1 Media Converter** at both ends. The main switch plugs into the media converter via Cat6 copper; the media converter translates electrical signals to light signals over single-mode fiber across the campus.  
* **The Outcome:** The network extends 2 km cleanly without needing to replace the main core switch, operating seamlessly at Layer 1\.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Power Outlet Travel Adapters.  
* **Mapping Incorrect Options:**  
  * *Option A (Switch)* is a post office sorting facility reading address labels.  
  * *Option C (Bridge)* is a customs bridge inspector inspecting passports.  
  * *Option D (VoIP Endpoint)* is a telephone handset sitting on a desk.  
* **Mapping Correct Option:**  
  * *Media Converter* is a simple physical plug adapter you use when traveling to Europe. It takes the European round-prong wall outlet (**Fiber Optic SFP**) and physically adapts it so your US flat-prong laptop charger (**Copper RJ-45**) can plug in. It doesn't modify the electricity; it just changes the physical interface format.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Media Converter \= Cable Conversion \= Layer 1":** Changing physical media (Copper ![][image3] Fiber) is strictly a **Layer 1 (Physical)** job\!

### **10\) STUDENT CHECKLIST**

* \[ \] Is the scenario describing signal/cable conversion (Fiber ![][image1] Copper) without inspecting MAC or IP addresses? (Points directly to **Media converter**).  
* \[ \] Is the device identified specifically as a Layer 1 implementation? (Rules out Switches, Bridges, and Routers\!).  
* \[ \] **Remember:** Switches/Bridges \= Layer 2; Routers \= Layer 3; Media Converters/Hubs/Repeaters \= Layer 1\.

## **Question 5: Environmental Factors Affecting Layer 1 (Physical Layer)**

### **1\) THE QUESTION AND OPTIONS**

A communications engineer notices that every time it rains the signal becomes very degraded. Which layer of the OSI model is the engineer most likely troubleshooting?

* **A)** Transport  
* **B)** Data Link  
* **C)** Physical  
* **D)** Application

### **2\) CORRECT ANSWER**

* **C) Physical**

### **3\) WHY IT'S CORRECT**

* **Physical Medium Environmental Susceptibility:** Layer 1 (Physical Layer) encompasses the physical transmission media (copper cabling, fiber optics, free-space RF wireless waves), connectors, transceivers, and electrical/optical/radio signaling mechanisms.  
* **Rain Fade and Attenuation:** Environmental weather conditions such as heavy rainfall, fog, high humidity, and atmospheric interference cause wireless signal attenuation (known as "rain fade") and scattering of radio frequency (RF) or outdoor free-space optical (FSO) signals. Because weather directly impacts physical radio wave propagation across the air medium, this is a Layer 1 issue.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Layer 1 Impairments Summary:**

\+---------------------------+-----------------------------------+--------------------+  
| Physical Layer Medium     | Common Environmental Impairment   | OSI Layer Impacted |  
\+---------------------------+-----------------------------------+--------------------+  
| Wireless RF / Microwave   | Rain Fade, Moisture Absorption    | Layer 1 (Physical) |  
| Unshielded Copper (UTP)   | EMI (Fluorescent Lights, Motors) | Layer 1 (Physical) |  
| Fiber Optics              | Micro-bends, Dust on Ferrules     | Layer 1 (Physical) |  
| Coaxial Cable             | Corrosion, Loose BNC/F-Connectors | Layer 1 (Physical) |  
\+---------------------------+-----------------------------------+--------------------+

* **Signal-to-Noise Ratio (SNR):** Rain absorption decreases the received signal strength (![][image4]), degrading the Signal-to-Noise Ratio at the physical receiver and causing bit error rate (BER) spikes at Layer 1\.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) Transport:**  
  * *Why it is incorrect:* The Transport layer (Layer 4\) handles logical end-to-end ports, TCP handshakes, windowing, and segment retransmissions. It operates purely in software memory on endpoints and is unaware of outdoor weather conditions like rain.  
  * *What the question would need to ask instead:* "An engineer notices TCP connections dropping because segment acknowledgments (ACKs) are timing out. Which OSI layer handles end-to-end retransmissions?"  
* **B) Data Link:**  
  * *Why it is incorrect:* The Data Link layer (Layer 2\) manages frame creation, MAC addressing, and local error detection (FCS). While physical bit errors cause Layer 2 frames to fail checksums, the *root cause* of environmental signal degradation is at Layer 1\.  
  * *What the question would need to ask instead:* "A technician troubleshoots port errors on a switch and observes a high count of CRC/FCS frame corruption counters on an Ethernet interface."  
* **D) Application:**  
  * *Why it is incorrect:* The Application layer (Layer 7\) provides high-level software interfaces for end-user programs (e.g., HTTP, SMTP). Application code does not interact with atmospheric weather phenomena.  
  * *What the question would need to ask instead:* "A user receives an HTTP 504 Gateway Timeout error in their web browser when attempting to load a web page."

### **6\) PLAIN ENGLISH GLOSSARY**

* **Physical Layer (Layer 1):** The lowest layer of the OSI model, governing physical cabling, wireless frequencies, connectors, voltage levels, and bit transmission.  
* **Attenuation:** The gradual loss of signal strength (wave amplitude) as an electromagnetic signal propagates through a medium.  
* **Rain Fade:** The degradation of microwave or satellite wireless signals caused by atmospheric precipitation absorbing RF energy.  
* **EMI (Electromagnetic Interference):** Disruption caused by external electrical sources impacting copper cable signals.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A wireless Internet Service Provider (WISP) installs a point-to-point 60 GHz millimeter-wave link between two office buildings separated by 1 mile.  
* **The Problem:** During sunny weather, throughput is 1 Gbps. During heavy summer thunderstorms, link throughput drops to near zero and physical link alarms fire.  
* **The Implementation:** The network engineer evaluates **Layer 1 parameters**. They measure the optical/RF signal power level (dBm), recalculate the link budget, and upgrade to a 5 GHz backup wireless frequency that resists rain fade.  
* **The Outcome:** The physical link remains stable through storms, demonstrating proper Layer 1 environmental design.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Talking to a Friend across a Room during a Loud Thunderstorm.  
* **Mapping Incorrect Options:**  
  * *Application Layer* is the joke you are trying to tell your friend.  
  * *Transport Layer* is checking if your friend heard the whole sentence or needs you to repeat it.  
  * *Data Link Layer* is speaking in English grammar rules.  
* **Mapping Correct Option:**  
  * *Physical Layer* is the physical air carrying your voice sound waves. When a loud clap of thunder or heavy rainfall physically muffles and blocks the sound waves traveling through the air, the physical communication channel is degraded.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Physical Media \= Physical Environment":** If weather, broken cables, bent fiber, or electrical interference distorts the physical signal, it is always a **Layer 1 (Physical)** problem\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the scenario involve physical conditions like rain, water, severed cables, or EMI? (Points directly to **Layer 1 / Physical**).  
* \[ \] Is the issue affecting signal propagation across a wireless or wired medium? (Points to **Physical Layer**).  
* \[ \] **Remember:** Software doesn't get wet; cables and radio waves do\!

## **Question 6: Identification of Layer 2 (Data Link) Networking Devices**

### **1\) THE QUESTION AND OPTIONS**

Which of the following devices operate at the Data Link layer of the OSI model? (Select three.)

* **A)** Network interface cards (NICs)  
* **B)** Switches  
* **C)** Gateways  
* **D)** Hubs  
* **E)** Bridges  
* **F)** Routers  
* **G)** Repeaters

### **2\) CORRECT ANSWER**

* **A) Network interface cards (NICs)**  
* **B) Switches**  
* **E) Bridges**

### **3\) WHY IT'S CORRECT**

* **MAC Address Hardware Processing:** Devices operating at Layer 2 (Data Link Layer) make frame forwarding, filtering, and network access decisions using physical hardware addresses burned into interface chips: Media Access Control (**MAC**) addresses.  
* **Switches:** Multi-port Layer 2 devices that inspect destination MAC addresses in frame headers to forward traffic selectively out specific ports.  
* **Bridges:** Two-port legacy Layer 2 appliances that connect separate physical segments and filter traffic based on MAC addresses.  
* **Network Interface Cards (NICs):** Hardware adapters installed in host systems that implement Layer 2 framing protocols (e.g., Ethernet 802.3, Wi-Fi 802.11) and store the hardcoded Layer 2 MAC address in burner EEPROM.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Networking Device OSI Layer Matrix:**

\+-----------------------+-------------------+-----------------------------------------+  
| OSI Layer             | Operating Devices | Addressing / Forwarding Mechanism       |  
\+-----------------------+-------------------+-----------------------------------------+  
| Layer 7 (Application) | Gateways, Proxies | Application Protocols (HTTP, SIP)       |  
| Layer 3 (Network)     | Routers           | Logical IP Addresses (Routing Tables)   |  
| Layer 2 (Data Link)   | Switches, Bridges,| Physical MAC Addresses (CAM Tables,     |  
|                       | NICs              | Frame Checks)                           |  
| Layer 1 (Physical)    | Hubs, Repeaters,  | Electrical/Optical Bits (No Addresses,  |  
|                       | Media Converters  | Signal Amplification)                   |  
\+-----------------------+-------------------+-----------------------------------------+

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **C) Gateways:**  
  * *Why it is incorrect:* Application Gateways operate at upper layers (Layer 7 Application), while Default Gateways act as Layer 3 routing interfaces.  
  * *What the question would need to ask instead:* "Which network entity acts as an entry/exit translation point between different networks or upper-layer application environments?"  
* **D) Hubs:**  
  * *Why it is incorrect:* Hubs are Layer 1 physical repeaters that broadcast incoming electrical bits out every connected port without inspecting MAC addresses.  
  * *What the question would need to ask instead:* "Which legacy Layer 1 hardware device repeats all incoming bits out all ports, creating a single shared collision domain?"  
* **F) Routers:**  
  * *Why it is incorrect:* Routers operate at **Layer 3 (Network Layer)**, forwarding packets across different IP subnets using logical IP routing tables.  
  * *What the question would need to ask instead:* "Which Layer 3 device interconnects different subnets and routes packets using IP addresses?"  
* **G) Repeaters:**  
  * *Why it is incorrect:* Repeaters operate at **Layer 1 (Physical Layer)**, amplifying electrical or optical signals to extend cable run distances.  
  * *What the question would need to ask instead:* "Which Layer 1 device regenerates degraded electrical or optical signals to extend transmission range?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Layer 2 (Data Link Layer):** The OSI layer responsible for node-to-node frame transfer on the same local network segment using physical MAC addresses.  
* **Switch:** An intelligent multi-port Layer 2 forwarding device.  
* **Bridge:** A Layer 2 device connecting two physical segments.  
* **NIC (Network Interface Card):** The expansion card or integrated chip providing a computer with a Layer 2 hardware identity (MAC) and physical media jack.  
* **MAC Address:** A unique 48-bit (6-byte) hexadecimal hardware identifier assigned to network interfaces (e.g., 00:1A:2B:3C:4D:5E).

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** An IT administrator sets up a new office workstation.  
* **The Problem:** The workstation needs to communicate with local office printers on the same subnet without sending traffic to the internet router.  
* **The Implementation:** The workstation's **NIC (Layer 2\)** formats an Ethernet frame containing the printer's destination **MAC address** and sends it over a cable to the building **Switch (Layer 2\)**. The switch looks up the printer's MAC address in its internal CAM table and forwards the frame directly to the printer port.  
* **The Outcome:** Local communication is completed entirely at Layer 2 without involving Layer 3 routers.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Internal Office Intercom and Room Numbers.  
* **Mapping Incorrect Options:**  
  * *Hubs & Repeaters (Layer 1\)* are megaphones shouting loudly down every hallway.  
  * *Routers (Layer 3\)* are international express shipping couriers delivering across different cities.  
* **Mapping Correct Option:**  
  * *Switches, Bridges, and NICs (Layer 2\)* are the internal mailroom staff reading employee desk nametags (**MAC Addresses**) inside a single office building and placing memos directly into the specific employee's inbox tray without sending mail outside the building.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Switches, Bridges, NICs use MACs":** Remember **S**witches, **B**ridges, and **N**ICs are the **L2 Trio** that operate on **MAC** addresses\!

### **10\) STUDENT CHECKLIST**

* \[ \] Do you know that Switches, Bridges, and NICs are the three fundamental Layer 2 devices?  
* \[ \] Did an option list Hubs or Repeaters? (Instantly classify them as **Layer 1**).  
* \[ \] Did an option list Routers? (Instantly classify them as **Layer 3**).  
* \[ \] **Remember:** Layer 1 \= Bits (Hubs); Layer 2 \= Frames/MACs (Switches/NICs); Layer 3 \= Packets/IPs (Routers).

## **Question 7: Layer 2 Data Link Encapsulation Header Fields**

### **1\) THE QUESTION AND OPTIONS**

When the Data Link layer performs encapsulation, it adds control information to the payload in the form of header fields. Which of the following are header fields added by the Data Link layer during encapsulation? (Select three.)

* **A)** Checksum for basic error checking  
* **B)** TTL (Time to Live)  
* **C)** Source hardware address  
* **D)** Destination hardware address  
* **E)** Encryption type  
* **F)** Sequence number  
* **G)** Window size

### **2\) CORRECT ANSWER**

* **A) Checksum for basic error checking**  
* **C) Source hardware address**  
* **D) Destination hardware address**

### **3\) WHY IT'S CORRECT**

* **Ethernet Frame Structure:** Layer 2 (Data Link Layer) encapsulation wraps a Layer 3 packet inside a Layer 2 **Frame**.  
* **Header Fields:** The Layer 2 header contains the **Source Hardware (MAC) Address** and **Destination Hardware (MAC) Address** to identify the sending and receiving network nodes on the local link.  
* **Trailer Fields:** The Layer 2 trailer appends a **Frame Check Sequence (FCS)** containing a 32-bit Cyclic Redundancy Check (**CRC / Checksum**) to detect frame corruption during physical transmission.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Standard IEEE 802.3 Ethernet II Frame Anatomy:**

\+-------------------+------------------+---------------+---------------+--------------------+------------------+  
| Preamble / SFD    | Dest MAC Address | Source MAC    | EtherType     | Payload Data       | Frame Check      |  
| (L1 Synchronization)| (6 Bytes \- L2)   | (6 Bytes \- L2)| (2 Bytes \- L2)| (L3 Packet Payload)| Sequence (FCS)   |  
\+-------------------+------------------+---------------+---------------+--------------------+------------------+  
|\<--- Physical \----\>|\<------------------- Layer 2 Header \-------------\>|\<--- Payload \------\>|\<-- L2 Trailer \--\>|

* **Control Field Mechanics:**  
  * **Source & Dest Hardware MACs:** Allow local switch ASICs to forward frames across switchports.  
  * **FCS Checksum:** Calculated by the sending NIC and recalculated by the receiving switch/NIC. If the checksum fails, the corrupted frame is dropped immediately.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) TTL (Time to Live):**  
  * *Why it is incorrect:* TTL is a 8-bit header field in the **Layer 3 (IP)** header used to prevent routing loops by decrementing at each router hop.  
  * *What the question would need to ask instead:* "Which Layer 3 IPv4 header field limits a packet's lifespan by decrementing at every router hop?"  
* **E) Encryption type:**  
  * *Why it is incorrect:* Encryption parameters are handled by upper-layer security protocols (e.g., Layer 6 Presentation or Layer 3 IPsec Security Association headers), not standard Layer 2 Ethernet headers.  
  * *What the question would need to ask instead:* "Which field in a security protocol header specifies the cipher suite used to encrypt the payload?"  
* **F) Sequence number:**  
  * *Why it is incorrect:* Sequence numbers are fields in the **Layer 4 (TCP)** header used for segment ordering and missing packet detection.  
  * *What the question would need to ask instead:* "Which Layer 4 TCP header field allows receiving hosts to reassemble out-of-order segments?"  
* **G) Window size:**  
  * *Why it is incorrect:* Window size is a **Layer 4 (TCP)** flow control header field regulating how many bytes a host can receive before requiring an acknowledgment.  
  * *What the question would need to ask instead:* "Which Layer 4 TCP header field manages dynamic flow control by defining the receive buffer capacity?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Frame:** The Layer 2 PDU containing hardware MAC addresses and error-checking trailers.  
* **MAC Address (Hardware Address):** Burned-in physical address used for Layer 2 delivery.  
* **FCS (Frame Check Sequence):** The 4-byte checksum field appended at the end of a Layer 2 frame to verify data integrity.  
* **TTL (Time to Live):** A Layer 3 IP header hop counter.  
* **Window Size:** A Layer 4 TCP buffer management value.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A network technician reviews interface drops on a core switch.  
* **The Problem:** Port 12 is showing thousands of "CRC/FCS Error" drops.  
* **The Implementation:** The technician realizes that the Layer 2 **Checksum (FCS)** is failing when frames arrive at Port 12\. They inspect the physical cable and find a damaged copper RJ-45 end causing signal corruption.  
* **The Outcome:** Replacing the cable fixes the Layer 1 physical link, allowing Layer 2 checksums to pass validation cleanly.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Sending a Certified Inter-Office Courier Envelope.  
* **Mapping Incorrect Options:**  
  * *TTL (B)* is an expiration date stamp set by international customs (**Layer 3**).  
  * *Sequence Numbers & Window Size (F, G)* are page numbers and inbox size limits set by the manager (**Layer 4**).  
* **Mapping Correct Options:**  
  * *Layer 2 Header & Trailer* is sticking a physical barcode label on the envelope containing the sender's desk badge number (**Source MAC**), the recipient's desk badge number (**Destination MAC**), and a wax seal on the back flap (**Checksum/FCS**) that snaps if anyone tampers with or damages the envelope in transit.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"L2 \= MAC \+ MAC \+ Checksum":** Layer 2 headers always contain **Source MAC**, **Destination MAC**, and an **FCS Checksum** trailer at the end\!

### **10\) STUDENT CHECKLIST**

* \[ \] Can you identify the three core elements of a Layer 2 Ethernet frame? (Source MAC, Destination MAC, FCS Checksum).  
* \[ \] Did an option mention TTL? (Instantly tag as **Layer 3 IP**).  
* \[ \] Did an option mention Sequence Number or Window Size? (Instantly tag as **Layer 4 TCP**).  
* \[ \] **Remember:** Layer 2 is the ONLY layer that appends both a Header AND a Trailer (FCS)\!

## **Question 8: Role of Layer 3 Access Control Lists (ACLs)**

### **1\) THE QUESTION AND OPTIONS**

What is the role of an Access Control List (ACL) at Layer 3 (Network layer) of the OSI model?

* **A)** To filter network traffic by permitting or blocking packets based on IP addresses and other criteria  
* **B)** To act as a routing protocol for determining the best path for data packets  
* **C)** To define the maximum size for packets transmitted across the network  
* **D)** To serve as a list of permissions for file access on the network

### **2\) CORRECT ANSWER**

* **A) To filter network traffic by permitting or blocking packets based on IP addresses and other criteria**

### **3\) WHY IT'S CORRECT**

* **Layer 3 Traffic Filtering:** A Layer 3 Access Control List (ACL) is a sequential set of permit or deny rules applied to router interfaces or firewalls to filter IP packet traffic based on source IP address, destination IP address, IP protocol numbers, or upper-layer port criteria.  
* **Perimeter Security Control:** Routers inspect incoming or outgoing Layer 3 packet headers against the ACL rules sequentially. If a packet matches a permit rule, it is forwarded; if it matches a deny rule (or hits the implicit deny at the end), it is dropped.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Cisco IOS Standard/Extended Layer 3 ACL Example:**

\! Standard Layer 3 ACL (Filtering by Source IP)  
access-list 10 deny host 192.168.1.50  
access-list 10 permit 192.168.1.0 0.0.255.255

\! Extended Layer 3/4 ACL (Filtering by Source IP, Dest IP, and Port)  
access-list 100 permit tcp 10.0.0.0 0.255.255.255 host 172.16.1.10 eq 80  
access-list 100 deny ip any any

* **OSI Layer Enforcement:**  
  * **Standard ACLs:** Filter strictly on **Layer 3** (Source IP addresses).  
  * **Extended ACLs:** Filter on **Layer 3** (IP addresses) and **Layer 4** (TCP/UDP port numbers).

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) To act as a routing protocol for determining the best path for data packets:**  
  * *Why it is incorrect:* Routing protocols (such as OSPF, BGP, or EIGRP) construct routing tables to determine network paths. ACLs do not calculate paths; they strictly filter traffic.  
  * *What the question would need to ask instead:* "Which Layer 3 mechanism dynamically calculates network paths and builds routing tables across internetworks?"  
* **C) To define the maximum size for packets transmitted across the network:**  
  * *Why it is incorrect:* Maximum packet size is governed by the Maximum Transmission Unit (**MTU**) parameter (e.g., 1500 bytes for standard Ethernet), not an ACL.  
  * *What the question would need to ask instead:* "Which network interface configuration parameter defines the maximum size of a Layer 3 packet that can be transmitted without fragmentation?"  
* **D) To serve as a list of permissions for file access on the network:**  
  * *Why it is incorrect:* File access permissions are governed by File System ACLs (NTFS/POSIX permissions) at the operating system / application level, not Layer 3 network ACLs on routers.  
  * *What the question would need to ask instead:* "Which operating system control defines file and folder read/write permissions for local domain users?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Access Control List (ACL):** A rulebook configured on routers and firewalls to permit or deny packet flow.  
* **Layer 3 ACL:** Traffic filtering based on IP addressing parameters.  
* **MTU (Maximum Transmission Unit):** The maximum size (in bytes) of an IP packet allowed on an interface.  
* **Routing Protocol:** Software (OSPF, BGP) that dynamically calculates optimal network paths.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A corporate network administrator needs to isolate the HR department's server subnet from guest Wi-Fi users.  
* **The Problem:** Guest Wi-Fi users on subnet 192.168.50.0/24 are attempting to ping payroll servers on 10.10.10.0/24.  
* **The Implementation:** The admin applies a **Layer 3 ACL** on the core router interface:  
  deny ip 192.168.50.0 0.0.0.255 10.10.10.0 0.0.0.255 followed by permit ip any any.  
* **The Outcome:** Guest Wi-Fi packets trying to reach the payroll subnet are dropped by the router at Layer 3, securing confidential HR records.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** A Security Bouncer Standing at a Building Entrance Gate.  
* **Mapping Incorrect Options:**  
  * *Option B* is a GPS navigation system planning a driving route.  
  * *Option C* is a measuring tape checking if a package fits through a doorway (**MTU**).  
  * *Option D* is a keycard unlocking a specific file cabinet drawer inside an office.  
* **Mapping Correct Option:**  
  * *Layer 3 ACL* is the security guard standing at the main gate holding a guest list (**ACL Rules**). The guard checks the guest's ID card (**IP Address**). If the ID says "Guest Subnet," the guard turns them away (**Deny**); if the ID says "Employee," the guard lets them enter (**Permit**).

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"ACL \= Allow or Block IP":** Remember that a Layer 3 ACL **A**llows or **C**ancel-**L**ocks traffic based on **IP Addresses**\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the option state that Layer 3 ACLs permit or block traffic based on IP addresses? (Points directly to **Option A**).  
* \[ \] Did an option confuse Layer 3 network ACLs with file system permissions (NTFS)? (Rule out Option D).  
* \[ \] Did an option confuse ACLs with routing protocols (OSPF) or MTU sizes? (Rule out Options B and C).  
* \[ \] **Remember:** ACLs filter packets; Routing protocols route packets; MTU defines size\!

## **Question 9: Primary Function of the Network Layer (Layer 3\)**

### **1\) THE QUESTION AND OPTIONS**

In the OSI model, what is the primary function of the Network layer?

* **A)** The primary function of the Network layer is to move data around an internetwork using logical network and host IDs.  
* **B)** The primary function of the Network layer is to ensure reliable transmission of data across a physical link.  
* **C)** The primary function of the Network layer is to establish, manage, and terminate connections between applications on different hosts.  
* **D)** The primary function of the Network layer is to encode and convert data into signals suitable for transmission over the physical medium.

### **2\) CORRECT ANSWER**

* **A) The primary function of the Network layer is to move data around an internetwork using logical network and host IDs.**

### **3\) WHY IT'S CORRECT**

* **Logical Addressing and Internetwork Routing:** Layer 3 (Network Layer) provides logical addressing (IPv4 / IPv6 addresses) and path selection (routing) to transfer packets across interconnected, heterogeneous networks (internetworks).  
* **Hierarchical Structure:** Unlike flat physical MAC addresses (Layer 2), IP addresses at Layer 3 are hierarchical, containing both a **Network ID** (subnet) and a **Host ID** (specific endpoint). Routers evaluate the Network ID to route packets hop-by-hop across global internetworks.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Layer 3 Addressing Structure (IPv4 Example):**  
* **![][image5]Core Functions of Layer 3:**  
  1. **Logical Addressing:** Assigning unique IP addresses to hosts.  
  2. **Routing:** Determining optimal paths using protocols like OSPF, BGP, RIP.  
  3. **Packet Encapsulation:** Wrapping Layer 4 segments into Layer 3 IP Packets.  
  4. **Fragmentation & Reassembly:** Breaking large IP packets down if they exceed the interface MTU.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) The primary function of the Network layer is to ensure reliable transmission of data across a physical link:**  
  * *Why it is incorrect:* Ensuring reliable end-to-end data transfer is a **Layer 4 (Transport Layer)** responsibility using TCP. Ensuring node-to-node transfer across a single physical link is a **Layer 2 (Data Link Layer)** function.  
  * *What the question would need to ask instead:* "Which OSI layer provides reliable, end-to-end data transport, error recovery, and segment acknowledgments?"  
* **C) The primary function of the Network layer is to establish, manage, and terminate connections between applications on different hosts:**  
  * *Why it is incorrect:* Establishing, managing, and tearing down dialog sessions is the exact definition of **Layer 5 (Session Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer manages interactive sessions, dialog control, and checkpoints between application entities?"  
* **D) The primary function of the Network layer is to encode and convert data into signals suitable for transmission over the physical medium:**  
  * *Why it is incorrect:* Encoding digital data into physical electrical, optical, or RF signals is the core role of **Layer 1 (Physical Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer converts digital bitstreams into electrical pulses or light signals for physical cable transmission?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Network Layer (Layer 3):** The OSI layer providing logical IP addressing and path selection across interconnected networks.  
* **Logical ID:** An IP address (IPv4/IPv6) assigned by software/DHCP that can change based on network location.  
* **Internetwork:** A collection of individual local area networks (LANs) connected together by routers.  
* **Router:** A Layer 3 device that routes packets between different logical networks.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A remote worker in Chicago accesses a company web server in Dallas.  
* **The Problem:** The worker's laptop MAC address cannot be read by internet switches across state lines because MAC addresses are non-routable local identifiers.  
* **The Implementation:** The worker's computer relies on **Layer 3 (Network Layer)**. It assigns the request a logical source IP (192.168.1.100) and target destination IP (172.16.50.25).  
* **The Outcome:** Internet routers examine the destination IP's Network ID and route the packet across multiple ISP hops from Chicago to Dallas.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Global GPS Navigation and Postal Zip Codes.  
* **Mapping Incorrect Options:**  
  * *Option B (Reliable Delivery)* is receiving a signed delivery receipt from the mailman (**Layer 4 TCP**).  
  * *Option C (Manage Connections)* is setting up a phone appointment to confirm someone is home before mailing (**Layer 5 Session**).  
  * *Option D (Signal Conversion)* is the delivery truck engine turning gasoline into mechanical wheel motion (**Layer 1 Physical**).  
* **Mapping Correct Option:**  
  * *Layer 3 Network Layer* is the Postal System sorting mail by Country, State, and ZIP Code (**Logical Network ID**). The ZIP code tells long-distance transport hubs where to send the box, regardless of what street the house sits on locally.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Layer 3 \= IP & Routing":** Always connect **Layer 3** directly with **IP Addresses**, **Routers**, and **Logical Network IDs**\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the option mention logical network and host IDs (IP addresses) and internetwork movement? (Points directly to **Option A**).  
* \[ \] Did an option mention signal conversion? (That's **Layer 1**).  
* \[ \] Did an option mention session setup/teardown? (That's **Layer 5**).  
* \[ \] Did an option mention reliable end-to-end transport? (That's **Layer 4**).  
* \[ \] **Remember:** Layer 3 is ALL about IP addresses and logical internetwork routing\!

## **Question 10: Functions Performed by the OSI Transport Layer (Layer 4\)**

### **1\) THE QUESTION AND OPTIONS**

Which of the following functions are performed by the OSI Transport layer? (Select three.)

* **A)** Packet formatting for delivery through a medium  
* **B)** End-to-end flow control  
* **C)** Reliable message delivery  
* **D)** Consistent data formatting between dissimilar systems  
* **E)** Data segmentation and reassembly  
* **F)** Media access control, logical topology, and device identification  
* **G)** Path identification and selection

### **2\) CORRECT ANSWER**

* **B) End-to-end flow control**  
* **C) Reliable message delivery**  
* **E) Data segmentation and reassembly**

### **3\) WHY IT'S CORRECT**

* **End-to-End Transport Services:** The Transport Layer (Layer 4\) manages transparent, end-to-end data delivery between source and destination endpoints.  
* **Segmentation and Reassembly:** Breaks large application data payloads into smaller, manageable chunks called **Segments** on the sending host, and reassembles them in exact numerical order on the receiving host.  
* **Reliable Message Delivery:** Uses TCP acknowledgments (ACKs), sequence numbers, and retransmissions to guarantee that lost segments are detected and resent.  
* **End-to-End Flow Control:** Uses sliding window mechanisms to regulate data transmission speeds, preventing a fast sender from overwhelming a slow receiver's buffer space.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Transport Layer Protocol Comparison:**

\+-----------------------------------+-----------------------------------+  
| TCP (Transmission Control Protocol)| UDP (User Datagram Protocol)      |  
\+-----------------------------------+-----------------------------------+  
| Connection-Oriented (3-Way Handshake)| Connectionless (Fire and Forget)  |  
| Reliable (ACKs & Retransmissions) | Unreliable (Best-Effort Delivery) |  
| Flow Control (Sliding Windows)    | No Flow Control                   |  
| Performs Segmentation & Ordering  | Performs Basic Datagram Padding   |  
| Used for: Web, Email, File Transfer| Used for: Voice, Video, DNS, VoIP |  
\+-----------------------------------+-----------------------------------+

* **3-Way Handshake Mechanism (Layer 4 Connection Setup):**  
  ![][image6]

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) Packet formatting for delivery through a medium:**  
  * *Why it is incorrect:* Packet formatting and routing is performed at Layer 3 (Network Layer) and Layer 1/2 for media framing.  
  * *What the question would need to ask instead:* "Which layer formats data into IP packets for routing across internetwork media?" (Network Layer).  
* **D) Consistent data formatting between dissimilar systems:**  
  * *Why it is incorrect:* Syntax translation, character set conversion (e.g., ASCII to EBCDIC), and uniform formatting are **Layer 6 (Presentation Layer)** tasks.  
  * *What the question would need to ask instead:* "Which OSI layer ensures that data sent from one system is translated into a consistent, readable format for dissimilar target OS systems?" (Presentation Layer).  
* **F) Media access control, logical topology, and device identification:**  
  * *Why it is incorrect:* MAC addressing, media access methods (CSMA/CD), and logical topologies occur at **Layer 2 (Data Link Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer handles media access control (MAC), physical switch framing, and local device identification?" (Data Link Layer).  
* **G) Path identification and selection:**  
  * *Why it is incorrect:* Path selection and routing table lookups are core functions of **Layer 3 (Network Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer determines path identification and optimal route selection across an internetwork?" (Network Layer).

### **6\) PLAIN ENGLISH GLOSSARY**

* **Layer 4 (Transport Layer):** The OSI layer responsible for end-to-end session transport, segmentation, flow control, and port identification.  
* **Segmentation:** Splitting large files into smaller segment blocks for transmission.  
* **Flow Control:** Controlling the rate of data transmission between two devices.  
* **Reliability:** Guaranteeing data delivery using acknowledgments and automatic retransmissions.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** An employee downloads a 2 GB software ISO file over a enterprise Wi-Fi link.  
* **The Problem:** Wi-Fi drops 1% of wireless frames during the download due to interference.  
* **The Implementation:** **Layer 4 (TCP)** manages the transfer. It segments the ISO into thousands of TCP segments. When Segment \#405 is dropped by Wi-Fi interference, the receiving host notices a gap in the TCP sequence numbers and sends a Selective ACK requesting Segment \#405 again.  
* **The Outcome:** The ISO file completes download without corruption, proving the necessity of Layer 4 reliable retransmission.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Shipping a 500-Piece Modular Furniture Set in Numbered Boxes.  
* **Mapping Incorrect Options:**  
  * *Option A & G (Routing & Delivery)* is the delivery truck driver picking which highway to take (**Layer 3**).  
  * *Option D (Formatting)* is translating the assembly instruction manual into Spanish (**Layer 6**).  
* **Mapping Correct Option:**  
  * *Layer 4 Transport Layer* is taking the huge sofa, disassembling it into 10 numbered boxes (**Segmentation**), writing "Box 1 of 10, Box 2 of 10" (**Sequence Numbers**), asking the buyer "Can you unload 2 boxes at a time?" (**Flow Control**), and sending a replacement box if Box \#4 gets lost off the truck (**Reliable Delivery**).

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Transport \= Segment, Flow, ACK":** **T**ransport layer **T**akes care of **S**egmentation, **F**low Control, and **R**eliably **A**cknowledging data\!

### **10\) STUDENT CHECKLIST**

* \[ \] Can you name the three core functions of Layer 4? (End-to-end flow control, Reliable delivery, Data segmentation & reassembly).  
* \[ \] Did an option mention path identification? (Instantly tag as **Layer 3 Network**).  
* \[ \] Did an option mention character formatting/translation? (Instantly tag as **Layer 6 Presentation**).  
* \[ \] **Remember:** TCP and UDP operate at Layer 4\!

## **Question 11: Firewalls and Layer 4 Port Identification**

### **1\) THE QUESTION AND OPTIONS**

A security engineer configures software-based port security on a hardware firewall. Which OSI model layer identifies the application ports to configure?

* **A)** Layer 2  
* **B)** Layer 3  
* **C)** Layer 1  
* **D)** Layer 4

### **2\) CORRECT ANSWER**

* **D) Layer 4**

### **3\) WHY IT'S CORRECT**

* **Transport Layer Port Multiplexing:** Layer 4 (Transport Layer) uses 16-bit numeric addresses called **Port Numbers** (ranging from 0 to 65535\) in TCP and UDP headers to identify specific application layer services running on a host.  
* **Firewall Port Security:** When a firewall inspects or blocks traffic by port numbers (e.g., permitting TCP port 443 for HTTPS or blocking TCP port 23 for Telnet), it operates at **Layer 4** to evaluate transport segment headers.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Common Well-Known Layer 4 Application Ports:**

\+-------------+---------------+-----------------------------------------------+  
| Port Number | Protocol      | Description / Service                         |  
\+-------------+---------------+-----------------------------------------------+  
| TCP 20/21   | FTP           | File Transfer Protocol (Data / Control)       |  
| TCP 22      | SSH / SFTP    | Secure Shell / Secure File Transfer           |  
| TCP 23      | Telnet        | Unencrypted Remote Text Terminal (Insecure)   |  
| TCP 25      | SMTP          | Simple Mail Transfer Protocol (Email Send)    |  
| UDP/TCP 53  | DNS           | Domain Name System (Name Resolution)          |  
| UDP 67/68   | DHCP          | Dynamic Host Configuration Protocol           |  
| TCP 80      | HTTP          | Hypertext Transfer Protocol (Web)             |  
| TCP 443     | HTTPS         | Secure Web Traffic (TLS/SSL Encrypted)        |  
| TCP 3389    | RDP           | Remote Desktop Protocol                       |  
\+-------------+---------------+-----------------------------------------------+

* **Layer 4 Multiplexing Syntax:**  
  \[ Source IP: 192.168.1.10 | Source Port: 52140 \] \---\> \[ Dest IP: 10.0.0.1 | Dest Port: 443 (HTTPS) \]

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) Layer 2:**  
  * *Why it is incorrect:* Layer 2 uses physical MAC addresses and 802.1Q VLAN IDs. It does not contain application port numbers.  
  * *What the question would need to ask instead:* "Which OSI layer utilizes hardware MAC addresses to configure port security rules on a switch interface?"  
* **B) Layer 3:**  
  * *Why it is incorrect:* Layer 3 uses IP addresses to route packets. While Layer 3 firewalls filter by IP address, *application port numbers* (like Port 80 or 443\) belong to Layer 4 headers.  
  * *What the question would need to ask instead:* "A firewall rule blocks traffic originating from IP address 198.51.100.25. Which OSI layer evaluates this rule?"  
* **C) Layer 1:**  
  * *Why it is incorrect:* Layer 1 uses physical jacks (RJ-45 ports, SFP slots) and electrical signals. Physical switch ports are Layer 1 hardware slots, not logical software application port numbers.  
  * *What the question would need to ask instead:* "Which OSI layer describes the physical RJ-45 copper jack or SFP fiber port interface on a hardware appliance?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Layer 4 (Transport Layer):** The OSI layer that manages end-to-end communication sessions and port addressing.  
* **Port Number:** A 16-bit number in TCP/UDP headers directing network traffic to specific software applications (e.g., Port 80 for HTTP).  
* **Layer 4 Firewall:** A security device filtering traffic based on TCP/UDP port numbers and stateful session inspection.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A security engineer hardens a perimeter firewall.  
* **The Problem:** Attackers are scanning the corporate network for unencrypted Telnet management sessions.  
* **The Implementation:** The engineer creates a Layer 4 firewall rule:  
  DENY TCP ANY ANY EQ 23 (Telnet) and PERMIT TCP ANY ANY EQ 22 (SSH).  
* **The Outcome:** The firewall inspects incoming **Layer 4 TCP headers**, drops all Port 23 traffic, and allows secure Port 22 SSH traffic through.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Apartment Building Addresses and Apartment Room Numbers.  
* **Mapping Incorrect Options:**  
  * *Layer 1* is the physical concrete driveway leading to the building.  
  * *Layer 2* is the building's street curb name.  
  * *Layer 3* is the Building Street Address (**100 Main Street \= IP Address**).  
* **Mapping Correct Option:**  
  * *Layer 4 Port Number* is the specific Apartment Unit Number (**Apt 4B \= Port 443**). The street address gets the mail truck to the right building (**Layer 3**), but the apartment unit number (**Layer 4 Port**) ensures the mail gets delivered to the correct person's door inside the building.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Port Four \= Layer 4":** Remember that application **PORTS** are always evaluated at **Layer 4**\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the question mention configuring application port numbers (e.g., Port 80, 443, 22)? (Points directly to **Layer 4**).  
* \[ \] Do you know the difference between physical hardware ports (Layer 1 RJ-45) and logical application ports (Layer 4 TCP/UDP)?  
* \[ \] **Remember:** IP Addresses \= Layer 3; Port Numbers \= Layer 4; MAC Addresses \= Layer 2\.

## **Question 12: Presentation Layer (Layer 6\) Data Compression and Encryption Functions**

### **1\) THE QUESTION AND OPTIONS**

What role does the Presentation layer (layer 6\) of the OSI model play in terms of data compression and encryption?

* **A)** The Presentation layer is primarily responsible for the physical encryption of data using hardware-based methods.  
* **B)** The Presentation layer handles the routing of data between different networks and supports encryption protocols like IPsec.  
* **C)** The Presentation layer supports data compression and encryption to prepare data for network transmission.  
* **D)** The Presentation layer is involved in the logical organization of data into frames for transmission.

### **2\) CORRECT ANSWER**

* **C) The Presentation layer supports data compression and encryption to prepare data for network transmission.**

### **3\) WHY IT'S CORRECT**

* **Data Formatting and Transformation:** Layer 6 (Presentation Layer) acts as the "translator" of the OSI model. It transforms raw application data into a standardized syntax and structure suitable for network transport.  
* **Core Responsibilities:**  
  1. **Data Encryption / Decryption:** Applying cryptographic wrapping (e.g., SSL/TLS, SSH syntax encryption) to secure application payloads before transmission.  
  2. **Data Compression / Decompression:** Reducing payload size (e.g., GZIP, JPEG, MPEG, ZIP compression) to optimize transmission efficiency.  
  3. **Syntax / Character Translation:** Converting character encodings (e.g., ASCII to EBCDIC or Unicode) so dissimilar operating systems can parse payloads accurately.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Presentation Layer Data Pipeline:**

\[ Application Data Payload (e.g., Raw HTML/JSON) \]  
                       |  
                       v  
    \[ Layer 6 Syntax Translation (ASCII / UTF-8) \]  
                       |  
                       v  
    \[ Layer 6 Data Compression (GZIP / Deflate) \]  
                       |  
                       v  
    \[ Layer 6 Cryptographic Encryption (TLS Payload) \]  
                       |  
                       v  
 \[ Prepared Payload Sent Down to Layer 5 Session \]

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) The Presentation layer is primarily responsible for the physical encryption of data using hardware-based methods:**  
  * *Why it is incorrect:* Physical hardware encryption (like optical fiber encryption or MACsec) operates at Layer 1 or Layer 2\. Layer 6 handles logical software payload syntax encryption.  
  * *What the question would need to ask instead:* "Which security implementation applies physical layer hardware encryption directly onto optical transceivers or Ethernet switchports?"  
* **B) The Presentation layer handles the routing of data between different networks and supports encryption protocols like IPsec:**  
  * *Why it is incorrect:* Routing and IPsec encryption operate at **Layer 3 (Network Layer)**, protecting IP packet headers across networks.  
  * *What the question would need to ask instead:* "Which layer handles internetwork packet routing and supports network-layer VPN encryption protocols like IPsec?"  
* **D) The Presentation layer is involved in the logical organization of data into frames for transmission:**  
  * *Why it is incorrect:* Organizing data into frames is the explicit definition of **Layer 2 (Data Link Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer logically organizes network packets into frames with hardware MAC addresses for transmission?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Presentation Layer (Layer 6):** The OSI layer that handles data formatting, character translation, compression, and software encryption.  
* **Syntax Translation:** Converting data character sets (ASCII, UTF-8) so different computer architectures can read the same message.  
* **Compression:** Encoding data using fewer bits to save bandwidth.  
* **IPsec:** A Layer 3 network security protocol suite (not Layer 6).

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A client browser connects to an HTTPS web server.  
* **The Problem:** The web server needs to compress large graphics files and encrypt sensitive web form text so hackers sniffing local Wi-Fi cannot read passwords.  
* **The Implementation:** **Layer 6 (Presentation Layer)** handles this task. It compresses the graphics into JPEG/PNG formats, translates JSON objects into UTF-8, and encrypts the payload using SSL/TLS algorithms.  
* **The Outcome:** The prepared, encrypted, and compressed payload is handed down to the transport stack safely.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** An International Diplomatic Translator and Code Cryptographer.  
* **Mapping Incorrect Options:**  
  * *Option A* is armored steel vault doors (**Layer 1/2**).  
  * *Option B* is a diplomatic courier driving a truck across borders (**Layer 3**).  
  * *Option D* is packing boxes onto a wooden crate (**Layer 2**).  
* **Mapping Correct Option:**  
  * *Presentation Layer* is the diplomatic assistant sitting in the office. They take a document written in French (**Syntax Translation**), compress the text using shorthand summaries (**Data Compression**), and translate it into a secret military code cipher (**Encryption**) before handing the written page to the messenger.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Presentation \= Prepare & Protect Formatting":** Layer 6 **P**resents data clearly by performing **C**ompression, **E**ncryption, and **T**ranslation (**"Presentation C-E-T"**).

### **10\) STUDENT CHECKLIST**

* \[ \] Does the option mention data compression, encryption, or formatting translation? (Points directly to **Presentation Layer / Layer 6**).  
* \[ \] Did an option mention IPsec or packet routing? (Instantly classify as **Layer 3 Network**).  
* \[ \] Did an option mention framing? (Instantly classify as **Layer 2 Data Link**).  
* \[ \] **Remember:** Layer 6 handles HOW data is formatted and represented to software programs\!

## **Question 13: Function of the Session Layer (Layer 5\)**

### **1\) THE QUESTION AND OPTIONS**

Which of the following statements accurately describes the function of the Session layer (layer 5\) in the OSI model?

* **A)** The Session layer is used for character set conversion, such as between ASCII and Unicode.  
* **B)** The Session layer administers the process of establishing, managing, and terminating a dialog between client and server.  
* **C)** The Session layer is responsible for routing packets across different networks.  
* **D)** The Session layer provides the physical transmission of data over network media.

### **2\) CORRECT ANSWER**

* **B) The Session layer administers the process of establishing, managing, and terminating a dialog between client and server.**

### **3\) WHY IT'S CORRECT**

* **Dialog Control and Session Management:** Layer 5 (Session Layer) is responsible for opening, maintaining, synchronizing, and tearing down communication sessions (dialogs) between software application instances on separate devices.  
* **Session Functions:**  
  1. **Session Setup/Teardown:** Negotiating and establishing connection dialogs between endpoints.  
  2. **Dialog Control:** Managing duplexing modes (simplex, half-duplex, or full-duplex dialogs).  
  3. **Synchronization & Checkpointing:** Inserting recovery checkpoints into long data streams. If a connection drops, data transfer resumes from the last checkpoint rather than restarting from the beginning.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Session Layer Control Flow:**

\[ Client App \]                                        \[ Server App \]  
      |                                                     |  
      | \-------- 1\. Session Setup Request (L5) \-----------\> |  
      | \<------- 2\. Session ID Assigned (L5) \-------------- |  
      |                                                     |  
      | \=== 3\. Active Data Dialog & Checkpointing (L5) \==== |  
      |      (Checkpoint 100MB ... Checkpoint 200MB)        |  
      |                                                     |  
      | \-------- 4\. Session Teardown Request (L5) \--------\> |  
      | \<------- 5\. Session Closed Acknowledgment (L5) \---- |

* **Session Protocols / APIs:** NetBIOS, RPC (Remote Procedure Call), PPTP, SOCKS, and SQL session managers.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) The Session layer is used for character set conversion, such as between ASCII and Unicode:**  
  * *Why it is incorrect:* Character set translation (ASCII/Unicode) is explicitly performed at **Layer 6 (Presentation Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer translates character encodings such as converting ASCII text to Unicode syntax?" (Presentation Layer).  
* **C) The Session layer is responsible for routing packets across different networks:**  
  * *Why it is incorrect:* Routing packets across networks is the core responsibility of **Layer 3 (Network Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer handles logical addressing and packet routing across different networks?" (Network Layer).  
* **D) The Session layer provides the physical transmission of data over network media:**  
  * *Why it is incorrect:* Physical transmission over media is performed at **Layer 1 (Physical Layer)**.  
  * *What the question would need to ask instead:* "Which OSI layer provides physical bit transmission over copper, fiber, or wireless media?" (Physical Layer).

### **6\) PLAIN ENGLISH GLOSSARY**

* **Session Layer (Layer 5):** The OSI layer that opens, manages, synchronizes, and closes interactive communication sessions.  
* **Session ID:** A unique numerical key assigned to keep track of an active client-server session.  
* **Checkpointing:** Inserting synchronization markers into data transfers to allow recovery from network drops.  
* **RPC (Remote Procedure Call):** A Layer 5 protocol allowing a program to execute code on a remote server.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A database administrator queries a remote database server using an SQL management tool.  
* **The Problem:** The administrator needs to run a 30-minute database backup script without the server dropping the connection or mixing up query results with another administrator's concurrent query.  
* **The Implementation:** **Layer 5 (Session Layer)** establishes an RPC session and assigns a unique **Session ID**. It keeps the dialog open, coordinates checkpointing, and logs the session off cleanly when the script finishes.  
* **The Outcome:** The database query completes reliably with isolated session management.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** A Telephone Operator Placing and Managing a Conference Call.  
* **Mapping Incorrect Options:**  
  * *Option A* is translating English to Unicode (**Layer 6**).  
  * *Option C* is routing phone cables through city switches (**Layer 3**).  
  * *Option D* is copper telephone wire vibrations (**Layer 1**).  
* **Mapping Correct Option:**  
  * *Session Layer* is the secretary placing the call: *"Hello, I have Executive A on line 1 for Executive B. Establishing line now... \[Dialog Active\] ... Okay, Executive A says goodbye, closing call line now."* The secretary manages the lifecycle of the phone conversation.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Session \= Start, Synchronize, Stop":** Layer 5 controls the 3 S's: **S**tarting sessions, **S**ynchronizing checkpoints, and **S**topping connections\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the option mention establishing, managing, and terminating client-server dialogs? (Points directly to **Session Layer / Layer 5**).  
* \[ \] Did an option mention ASCII/Unicode character conversion? (That's **Layer 6 Presentation**).  
* \[ \] Did an option mention physical transmission? (That's **Layer 1 Physical**).  
* \[ \] **Remember:** Session Layer \= Dialog Control & Session IDs\!

## **Question 14: Comprehensive Matching of OSI Layers to Protocols and Devices**

### **1\) THE QUESTION AND OPTIONS**

Match each networking function or device on the left with its associated OSI model layer on the right.

* **Networking Functions / Devices:**  
  1. HTTP  
  2. Translates data  
  3. Session ID number  
  4. Port number  
  5. Router  
  6. Switch  
* **Associated OSI Layers:** Application Layer, Presentation Layer, Session Layer, Transport Layer, Network Layer, Data Link Layer.

### **2\) CORRECT ANSWER**

* **Application Layer** ![][image1] **HTTP**  
* **Presentation Layer** ![][image1] **Translates data**  
* **Session Layer** ![][image1] **Session ID number**  
* **Transport Layer** ![][image1] **Port number**  
* **Network Layer** ![][image1] **Router**  
* **Data Link Layer** ![][image1] **Switch**

### **3\) WHY IT'S CORRECT**

* **Mapping Rationale Across the OSI Stack:**  
  * **Application Layer (L7):** Runs high-level end-user network protocols like **HTTP**, HTTPS, FTP, SMTP, and DNS.  
  * **Presentation Layer (L6):** **Translates data** syntaxes (ASCII/UTF-8), performs encryption, and compresses payloads.  
  * **Session Layer (L5):** Assigns **Session ID numbers** and manages client-server conversation dialogs.  
  * **Transport Layer (L4):** Evaluates **Port numbers** (e.g., Port 80, 443\) for process-to-process multiplexing and flow control.  
  * **Network Layer (L3):** Operates hardware **Routers** that evaluate IP addresses to route packets across subnets.  
  * **Data Link Layer (L2):** Operates hardware **Switches** that evaluate MAC addresses to switch frames within local broadcast domains.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Complete OSI Matching Reference Blueprint:**

\+---------------+------------------------+-----------------------+-------------------------+  
| OSI Layer     | Primary Device         | Key Addressing / ID   | Example Protocol / Role |  
\+---------------+------------------------+-----------------------+-------------------------+  
| L7 Application| Web Browser / Client   | User / Service Name   | HTTP, FTP, DNS, SMTP    |  
| L6 Presentation| Software Engines      | Syntax / Cipher Type  | Data Translation, TLS   |  
| L5 Session    | RPC / SQL Engine       | Session ID Number     | NetBIOS, RPC, SOCKS     |  
| L4 Transport  | Firewall Port Engine   | Port Number (16-bit)  | TCP, UDP                |  
| L3 Network    | Router, L3 Switch      | IP Address (Logical)  | IPv4, IPv6, ICMP, OSPF  |  
| L2 Data Link  | Switch, Bridge, NIC    | MAC Address (Physical)| Ethernet, 802.11 Wi-Fi  |  
| L1 Physical   | Hub, Media Converter   | Electrical / Bits     | Cables, SFP Transceivers|  
\+---------------+------------------------+-----------------------+-------------------------+

### **5\) ANALYSIS OF INCORRECT MATCHING PAIRS (DISTRACTORS)**

* **Matching HTTP to Network Layer:**  
  * *Why it is incorrect:* HTTP is a high-level application protocol (Layer 7). The Network Layer (Layer 3\) handles IP packets, not web application commands.  
* **Matching Routers to Data Link Layer:**  
  * *Why it is incorrect:* Routers evaluate Layer 3 IP addresses. Switches and bridges operate at Layer 2 (Data Link Layer).  
* **Matching Port Numbers to Presentation Layer:**  
  * *Why it is incorrect:* Port numbers are 16-bit transport multiplexing identifiers in Layer 4 TCP/UDP headers. Layer 6 handles syntax formatting and encryption.  
* **Matching Session IDs to Application Layer:**  
  * *Why it is incorrect:* While web applications display sessions, the fundamental management of session dialogs and Session IDs is defined at Layer 5 (Session Layer).

### **6\) PLAIN ENGLISH GLOSSARY**

* **HTTP (Hypertext Transfer Protocol):** An Application Layer protocol used for transmitting web pages.  
* **Port Number:** A Transport Layer address identifying specific application applications.  
* **Router:** A Network Layer device forwarding IP packets between different subnets.  
* **Switch:** A Data Link Layer device forwarding Ethernet frames between MAC addresses.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A network engineer troubleshoots a web browsing failure.  
* **The Implementation:** The engineer traces the request up the stack:  
  1. **Layer 2:** The **Switch** forwards the frame to the gateway.  
  2. **Layer 3:** The **Router** routes the IP packet across the ISP.  
  3. **Layer 4:** The firewall permits TCP **Port 80**.  
  4. **Layer 5:** The server maintains the user's **Session ID number**.  
  5. **Layer 6:** The web server **translates data** from JSON to HTML.  
  6. **Layer 7:** The client browser displays the **HTTP** web page.  
* **The Outcome:** Identifying layer roles pinpoints exact failure points fast.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Organizing a Company Headquarters.  
* **Mapping Key Elements:**  
  * *Switch (L2)* is the hallway door monitor.  
  * *Router (L3)* is the mailroom loading dock.  
  * *Port Number (L4)* is the department office door number.  
  * *Session ID (L5)* is the employee desk phone line extension.  
  * *Translates Data (L6)* is the multi-lingual document translator.  
  * *HTTP (L7)* is the final business proposal document read by the CEO.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **Quick-Match Cheat Key:**  
  * HTTP \= **L7**  
  * Translate \= **L6**  
  * Session ID \= **L5**  
  * Port \# \= **L4**  
  * Router \= **L3**  
  * Switch \= **L2**

### **10\) STUDENT CHECKLIST**

* \[ \] Can you instantly pair HTTP with Layer 7?  
* \[ \] Can you pair Data Translation with Layer 6?  
* \[ \] Can you pair Session IDs with Layer 5?  
* \[ \] Can you pair Port Numbers with Layer 4?  
* \[ \] Can you pair Routers with Layer 3?  
* \[ \] Can you pair Switches with Layer 2?

## **Question 15: Layer 2 VLAN Segmentation and Broadcast Domains**

### **1\) THE QUESTION AND OPTIONS**

A network engineer is designing a network in various offices to create multiple broadcast domains. Each has its own Virtual Local Area Network (VLAN). When configuring these multiple broadcast domains on the switch, the switch will be operating at what layer of the OSI model?

* **A)** Layer 7 (Application Layer)  
* **B)** Layer 1 (Physical Layer)  
* **C)** Layer 4 (Transport Layer)  
* **D)** Layer 2 (Data Link Layer)

### **2\) CORRECT ANSWER**

* **D) Layer 2 (Data Link Layer)**

### **3\) WHY IT'S CORRECT**

* **Layer 2 VLAN Segmentation:** Virtual Local Area Networks (VLANs) defined by IEEE 802.1Q are a fundamental **Layer 2 (Data Link Layer)** technology.  
* **Broadcast Domain Isolation:** Switches operating at Layer 2 isolate local network broadcast traffic by assigning switchports to specific VLAN IDs. A single physical Layer 2 switch configured with VLAN 10 and VLAN 20 creates two completely separate, logically isolated Layer 2 broadcast domains.  
* **802.1Q Tagging:** Layer 2 switches append a 4-byte 802.1Q header tag into the Ethernet frame header containing a 12-bit VLAN ID.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **IEEE 802.1Q VLAN Encapsulation inside Layer 2 Frame:**

\+-------------------+--------------------+------------------+---------------+----------------+  
| Dest MAC (L2)     | Source MAC (L2)    | 802.1Q VLAN Tag  | EtherType     | Payload Data   |  
| (6 Bytes)         | (6 Bytes)          | (4 Bytes \- L2)   | (2 Bytes)     | (IP Packet)    |  
\+-------------------+--------------------+------------------+---------------+----------------+  
                                              |  
                                              \+---\> \[ TPID: 0x8100 | VLAN ID: 10 \]

* **Broadcast Domain Rules:**  
  * **Without VLANs:** A Layer 2 switch forms a single large broadcast domain. An ARP broadcast frame sent by Host A is flooded out ALL switchports.  
  * **With VLANs:** The Layer 2 switch restricts ARP broadcast frames strictly to ports assigned to the same VLAN ID. Communication between separate VLANs requires a Layer 3 Router or Layer 3 Switch (Inter-VLAN Routing).

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) Layer 7 (Application Layer):**  
  * *Why it is incorrect:* Layer 7 handles application software protocols like HTTP and FTP. It does not manage physical switchport VLAN assignments or Ethernet broadcast domains.  
  * *What the question would need to ask instead:* "At which layer does a web browser negotiate HTTP protocols to load web pages?"  
* **B) Layer 1 (Physical Layer):**  
  * *Why it is incorrect:* Layer 1 provides raw bit transmission over physical cables. Layer 1 hub devices cannot process 802.1Q tags or separate broadcast domains.  
  * *What the question would need to ask instead:* "Which OSI layer describes the physical copper cabling and electrical bits connecting a computer to a switchport?"  
* **C) Layer 4 (Transport Layer):**  
  * *Why it is incorrect:* Layer 4 manages TCP/UDP port numbers and segment delivery. It does not govern switch VLAN tagging or Data Link broadcast domain boundaries.  
  * *What the question would need to ask instead:* "Which OSI layer uses TCP port numbers to manage end-to-end socket connections?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **VLAN (Virtual Local Area Network):** A logical grouping of switchports at Layer 2 creating an isolated broadcast domain.  
* **Broadcast Domain:** The logical area on a network where a broadcast frame (e.g., ARP request) is received by all connected devices.  
* **802.1Q:** The IEEE industry standard protocol for tagging Ethernet frames with VLAN IDs.  
* **Layer 2 Switch:** A switch that forwards frames strictly using MAC addresses and VLAN tags.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A company shares a building with an external accounting firm.  
* **The Problem:** The company wants to plug both departments into the same 48-port core switch without allowing accounting staff to sniff internal company traffic or receive local ARP broadcasts.  
* **The Implementation:** The network engineer configures **Layer 2 VLANs** on the switch: Ports 1–24 are assigned to VLAN 10 (Corporate), and Ports 25–48 are assigned to VLAN 20 (Accounting).  
* **The Outcome:** The single switch functions as two logically isolated Layer 2 switches, creating two separate broadcast domains.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Dividing a Large Ballroom with Soundproof Retractable Walls.  
* **Mapping Incorrect Options:**  
  * *Layer 1* is the concrete slab floor of the room.  
  * *Layer 4* is assigning seat numbers at the tables.  
  * *Layer 7* is the keynote speaker delivering a presentation.  
* **Mapping Correct Option:**  
  * *Layer 2 VLAN Configuration* is pulling down a soundproof retractable wall (**VLAN ID Tag**) across the middle of the ballroom. People in Room A (**VLAN 10**) can talk freely without anyone in Room B (**VLAN 20**) hearing their conversations (**Broadcast Isolation**), even though everyone is standing inside the same building frame (**Physical Switch**).

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"VLAN \= Layer 2 Domain":** **V**irtual **L**ANs operate on **L**ayer **2** Ethernet frames\!

### **10\) STUDENT CHECKLIST**

* \[ \] Do you know that VLANs (802.1Q) and broadcast domains on a switch are strictly **Layer 2** concepts?  
* \[ \] Does the question mention configuring VLANs or MAC address forwarding on a switch? (Points directly to **Layer 2 / Data Link**).  
* \[ \] **Remember:** Switches create Layer 2 broadcast domains using VLANs; Routers interconnect broadcast domains at Layer 3\!

## **Section 11: Summary Reference Table of Module 1.2.9**

| Concept / Tool / Role | Primary Purpose / Function | Core Technical Mechanism | Key Distinguishing Exam Indicator |
| :---- | :---- | :---- | :---- |
| **Application Layer (L7)** | Exposes network services directly to end-user software applications. | HTTP, HTTPS, FTP, SMTP, DNS protocols | "Provides network services directly to user applications" |
| **Presentation Layer (L6)** | Formats, translates, encrypts, and compresses data payloads. | Syntax translation (ASCII/UTF-8), SSL/TLS, GZIP | "Data compression, encryption, character set conversion" |
| **Session Layer (L5)** | Establishes, manages, synchronizes, and terminates client-server dialogs. | Session IDs, RPC, NetBIOS, Checkpointing | "Establishes, manages, and terminates dialogs" |
| **Transport Layer (L4)** | Provides end-to-end segmentation, flow control, and port identification. | TCP/UDP port numbers, Sliding Windows, ACKs | "End-to-end flow control, segmentation, reliable delivery, ports" |
| **Network Layer (L3)** | Routes packets across internetworks using logical network/host IDs. | IPv4/IPv6 logical addresses, Routers, OSPF/BGP | "Moves data around internetwork using logical network/host IDs" |
| **Data Link Layer (L2)** | Transfers frames between adjacent nodes using physical MAC addresses. | Switches, Bridges, NICs, 802.1Q VLANs, FCS Checksum | "MAC addresses, frames, switches, VLAN broadcast domains" |
| **Physical Layer (L1)** | Transmits raw bits over physical cable, optical, or wireless media. | Media converters, Hubs, Repeaters, Cable signals | "Signals, bits, optical transceivers, weather/rain degradation" |
| **Protocol Data Unit (PDU)** | Structured representation of data wrapped with headers at each OSI layer. | Data (L7-5), Segment (L4), Packet (L3), Frame (L2), Bits (L1) | "Chunk of data with protocol-specific headers added at each layer" |
| **Data Encapsulation** | Wrapping payloads with layer headers for addressing, routing, and delivery. | Header/Trailer insertion moving DOWN the stack | "Add additional data headers for routing and delivery" |
| **Media Converter** | Converts signals between different physical medium types at Layer 1\. | Fiber-to-Copper translation, Optical SFP transceivers | "Layer 1 implementation", "Connect fiber link to Ethernet router" |
| **Access Control List (ACL)** | Filters IP packet traffic on routers based on addresses and rules. | Permitting/blocking Layer 3 IP packets and Layer 4 ports | "Filter network traffic by permitting/blocking packets based on IP" |

## **Module Student Master Checklist**

* \[ \] **OSI Layer Sequence:** Can you list all 7 layers of the OSI model in order from bottom-to-top (Physical to Application) and top-to-bottom (Application to Physical)?  
* \[ \] **PDU Naming:** Can you identify the exact PDU name for Layer 4 (Segment), Layer 3 (Packet), Layer 2 (Frame), and Layer 1 (Bits)?  
* \[ \] **Encapsulation Flow:** Do you understand why data encapsulation adds protocol headers moving DOWN the stack (sender) and decapsulation strips headers moving UP the stack (receiver)?  
* \[ \] **Layer 1 Environmental Factors:** Can you explain why weather degradation (rain fade) impacts Layer 1 Physical wireless radio mediums?  
* \[ \] **Layer 2 Hardware Devices:** Do you know that Switches, Bridges, and NICs operate at Layer 2 using physical MAC addresses?  
* \[ \] **Layer 2 Frame Structure:** Can you list the primary header fields of a Layer 2 frame (Source MAC, Destination MAC, FCS Checksum Trailer)?  
* \[ \] **Layer 3 Addressing & Routing:** Do you understand that Layer 3 Network layer uses logical IP addresses (Network ID \+ Host ID) and routers to route packets across internetworks?  
* \[ \] **Layer 3 ACL Filtering:** Can you explain how a Layer 3 ACL permits or blocks packets based on IP addresses?  
* \[ \] **Layer 4 Transport Controls:** Can you identify the three core functions of Layer 4 (Segmentation/Reassembly, End-to-End Flow Control, Reliable Message Delivery)?  
* \[ \] **Layer 4 Application Port Numbers:** Do you know that firewalls and OS sockets use 16-bit Layer 4 Port Numbers (e.g., Port 80, 443, 22\) to identify applications?  
* \[ \] **Layer 6 Presentation Duties:** Can you explain why Data Compression, Cryptographic Encryption, and Character Set Translation (ASCII/Unicode) occur at Layer 6?  
* \[ \] **Layer 5 Session Management:** Do you know that the Session Layer is responsible for establishing, managing, checkpointing, and terminating client-server dialogs?  
* \[ \] **Layer 2 VLAN Segmentation:** Can you explain why configuring VLANs on a switch creates multiple isolated broadcast domains at Layer 2?

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAfUlEQVR4XmNgGAWjYOCBvLz8eXQxioGcnJyPioqKKLo4xQDo2m/oYhQDBQUFAaDBt9HF4QAo+RSIf5GBfwPxfyB+h24myFZ3II4kFQMNWw+kLwHpKHQzyQJAw/xlZWX90MUpAkDXbUUXowgAk1Q7uhjFAOhtW3SxUTAKaAgArTMs15sbrcMAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAu0lEQVR4XmNgGAWjgPZAXl7+NboYMgDKX0UXIwiAmprRxZCBoqKinYqKiii6OFYgLi7ODTTwNro4NgBU9w1dDANADbxOtAsYGJjxOgAoeRiI/wPxLxLxb6i+d+hmMigoKBhAJaOB7EhiMVD9eiB9CUhHoZsJB0DJx0BFneji2ABQnb+srKwfujhWICcnVw6kWNDF0QHQAVvRxfACoCtOoYshA6DF7ehiBAHQFZ7oYsgA6G1bdLFRMApoCABu6Tdci/uExAAAAABJRU5ErkJggg==>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAABVElEQVR4Xu2Su0rEQBSG10KwVEGwCEmQVLYpbbzUVuIzqKWXxsZXsLQREQvBN7AXBFlQFlfFSgvRzsuqC4vF+h05wXiYIjumUMgHP7P5/5lz5rK1WsW/JgzDmSiKTlETXaIrdI4aqE6+Zdf8Ggqvoq7DXxEfdWzmDcXuXc0EbdbllOM280ILXlhfyJrFcTxqMy905/MOf67Ua6TJmBRMkmTEZvi3eqoFm3lBsT3d/RpFl9E6G9jU0x7a+d4EQZBkb2Kz0qHJvl7Tgc1Kh0YP2mzRZqVT5ArJb1CL99tgbMq/VkZ0huoyB++E38foyK7/Ik3T/iLNBOZMo0feeJjCEzlf1vYxXuMP5ZZ8Q9hGL+gZvaIPJs/aeRlc8yT5rsMfKLLZnpBmFN2xviDNyAet7w0Fp9C2w7/TURou2bxnKNTJXXlDvXf0hNr63dLvt5+rKyr+Cp8rYHCLo03gzAAAAABJRU5ErkJggg==>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,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>