# **Module 1.3.11: SOHO Networking, Addressing, and Telecommunications**

## **Quick Reference Answer Key**

* **Q1:** C) SOHO (Small Office/Home Office) Network  
* **Q2:** C) RJ-45 ports, F) Radio antennas, G) WAN port (Select three)  
* **Q3:** D) Ethernet switch, E) Wireless access point (Select two)  
* **Q4:** A) 192.168.1.1  
* **Q5:** A) Configuring a strong administrative account passphrase  
* **Q6:** D) By a unique port number assigned to the application  
* **Q7:** C) The point at which the telco's cabling enters the customer premises  
* **Q8:** A) Transit and peering arrangements  
* **Q9:** B) 205.57.169.66  
* **Q10:** A) 0 through 9 and A through F

## **Question 1: SOHO Network Scope and Classification**

### **1\) THE QUESTION AND OPTIONS**

A freelance photographer is setting up a home office. They need to connect a desktop, a laptop, a network printer, and occasionally, guests' devices to the Internet and to each other for file sharing and printing. Which type of network is MOST suitable for this scenario?

* **A)** CAN (Campus Area Network)  
* **B)** PAN (Personal Area Network)  
* **C)** SOHO (Small Office/Home Office) Network  
* **D)** MAN (Metropolitan Area Network)

### **2\) CORRECT ANSWER**

* **C) SOHO (Small Office/Home Office) Network**

### **3\) WHY IT'S CORRECT**

* **Targeted Geographic and Device Scale:** A Small Office/Home Office (SOHO) network is specifically tailored for small business operations or residential offices supporting 1 to 10 endpoints. It connects desktops, laptops, mobile devices, and shared peripherals (printers, NAS storage) within a localized room or building footprint.  
* **Integrated Multifunction Appliance:** SOHO networks utilize a single, cost-effective consumer/business router that combines switching, wireless access, routing, firewalling, and IP assignment into one physical box, perfectly matching the photographer’s operational scale.  
* **Shared Local Resource Access:** A SOHO network creates a unified broadcast domain and private IP subnet, enabling local file transfers, print sharing, and guest Wi-Fi access seamlessly.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Network Scope Comparison Hierarchy:**

\+-----------------------------------------------------------------------+  
| MAN (Metropolitan Area Network): City-wide scope (Municipal Fiber)    |  
\+-----------------------------------------------------------------------+  
       ^  
       |  
\+-----------------------------------------------------------------------+  
| CAN (Campus Area Network): Multi-building scope (University/Enterprise) |  
\+-----------------------------------------------------------------------+  
       ^  
       |  
\+-----------------------------------------------------------------------+  
| SOHO / LAN (Small Office / Home Office): Single building / Home footprint |  
\+-----------------------------------------------------------------------+  
       ^  
       |  
\+-----------------------------------------------------------------------+  
| PAN (Personal Area Network): Ultra-short range (\~10 meters / 30 feet)   |  
\+-----------------------------------------------------------------------+

* **SOHO Architecture Basics:** A standard SOHO environment relies on a single RFC 1918 private IPv4 subnet (e.g., 192.168.1.0/24) bound to an internal Ethernet switch and an IEEE 802.11 Wireless Access Point (WAP), using Network Address Translation (NAT) to multiplex all local traffic out a single public WAN IP address.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) CAN (Campus Area Network):**  
  * *Why it is incorrect:* A CAN spans multiple interconnected Local Area Networks (LANs) across a defined geographical campus (such as a university or corporate headquarters) using high-speed fiber backbones. It is far too large and complex for a single home office.  
  * *What the question would need to ask instead:* "A university needs to connect its library, administration building, and student dormitories across a 50-acre property. What network classification is required?"  
* **B) PAN (Personal Area Network):**  
  * *Why it is incorrect:* A PAN is an ultra-short-range network centered around a single person (typically within 10 meters / 30 feet) using technologies like Bluetooth or USB. It cannot support network printers, guest isolation, or multi-device LAN file sharing across a home.  
  * *What the question would need to ask instead:* "A user pair-connects a wireless smartwatch and Bluetooth headphones directly to their smartphone while running. What network type is active?"  
* **D) MAN (Metropolitan Area Network):**  
  * *Why it is incorrect:* A MAN spans an entire town, city, or municipality (typically 5 to 50 kilometers) using dark fiber or regional telecom infrastructure. It is designed for municipal services or enterprise inter-site links, not a home office.  
  * *What the question would need to ask instead:* "A city government links its police stations, fire houses, and city hall facilities across town using a dedicated fiber ring. What network type is this?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **SOHO (Small Office/Home Office):** A small business or residential network catering to 1–10 users using a single integrated internet gateway router.  
* **PAN (Personal Area Network):** A personal, short-range network (Bluetooth/Zigbee) spanning a radius of a few feet around an individual.  
* **CAN (Campus Area Network):** A network connecting multiple adjacent LANs across a college or enterprise campus.  
* **MAN (Metropolitan Area Network):** A high-speed network covering an entire metropolitan city region.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A commercial photographer sets up a photo studio in their converted garage.  
* **The Problem:** Clients arrive with iPads to view photos, the photographer needs to edit raw files on a desktop, send proofs from a laptop, and output glossy prints to a networked photo printer.  
* **The Implementation:** They buy an off-the-shelf wireless router, plug in the desktop and printer via Ethernet cables, connect the laptop over 5 GHz Wi-Fi, and enable a isolated "Guest Wi-Fi" network for visiting clients.  
* **The Outcome:** All local devices print and share files smoothly while guest traffic is kept safely separated from client photo archives on the SOHO network.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Transportation for different group sizes and distances.  
* **Mapping Incorrect Options:**  
  * *PAN (Option B)* is a pair of roller skates. Great for one person moving a short distance, but useless for carrying guests or heavy furniture.  
  * *CAN (Option A)* is a regional commuter train system connecting multiple towns.  
  * *MAN (Option D)* is an entire city subway grid spanning miles of tracks.  
* **Mapping Correct Option:**  
  * *SOHO Network (Option C)* is a family minivan. It easily holds the photographer, a few passengers (guests), and cargo (printers/desktops), providing the perfect balance of local capacity and comfort.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"SOHO \= Single Office, Home Operations":** Remember SOHO is built for **Single** room/house setups with **Home** scale needs.  
* **"PAN \= Person, SOHO \= Site, CAN \= Campus, MAN \= Municipality":** Use the first letter to match the physical geographical boundary size\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the scenario describe a single home or small office with a few PCs and a printer? (Points directly toward **SOHO**).  
* \[ \] Is the range limited to a single personal workspace or room? (Rules out **CAN** and **MAN**).  
* \[ \] Does the setup require connecting printers and guest devices over Ethernet/Wi-Fi? (Rules out short-range **PAN**).  
* \[ \] **Remember:** SOHO networks combine router, switch, and WAP functions into a single affordable appliance for 1–10 users.

## **Question 2: Physical Layer Interfaces on SOHO Routers**

### **1\) THE QUESTION AND OPTIONS**

Which of the following interfaces does a SOHO router provide at the Physical Layer of the OSI model? (Select three.)

* **A)** HDMI ports for multimedia streaming  
* **B)** USB ports for direct computer connection  
* **C)** RJ-45 ports for a local cabled network  
* **D)** SATA ports for internal storage connection  
* **E)** VGA ports for video output  
* **F)** Radio antennas for wireless signal transmission  
* **G)** WAN port for Internet Service Provider (ISP) connection

### **2\) CORRECT ANSWER**

* **C) RJ-45 ports for a local cabled network**  
* **F) Radio antennas for wireless signal transmission**  
* **G) WAN port for Internet Service Provider (ISP) connection**

### **3\) WHY IT'S CORRECT**

* **RJ-45 Local Network Interfaces (Layer 1 Media):** SOHO routers feature an integrated Ethernet switch providing 8P8C (RJ-45) copper jacks. These physically terminate Twisted-Pair cabling (Cat5e/Cat6) to deliver Layer 1 electrical signals across the local wired LAN.  
* **Radio Antennas (Layer 1 RF Transceivers):** Integrated internal or external dipole radio antennas convert digital bits into high-frequency Radio Frequency (RF) electromagnetic waves (2.4 GHz, 5 GHz, 6 GHz) to provide Layer 1 wireless media transmission.  
* **WAN Port (Layer 1 ISP Demarcation):** The dedicated WAN (Wide Area Network) port physically connects the SOHO router to the ISP modem or optical terminal, accepting RJ-45 (Ethernet), RJ-11 (DSL), or F-type coaxial connectors depending on the access technology.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Anatomy of SOHO Physical Layer Interfaces:**

  \+-----------------------------------------------------------------+  
  |                       SOHO ROUTER BACK PANEL                    |  
  |                                                                 |  
  |   \[ (o) Antenna \]                               \[ (o) Antenna \] |  \<-- RF Air Medium (802.11)  
  |                                                                 |  
  |   \+-------+   \+-------+   \+-------+   \+-------+    \+-------+    |  
  |   | LAN 1 |   | LAN 2 |   | LAN 3 |   | LAN 4 |    |  WAN  |    |  \<-- Copper Ethernet (8P8C)  
  |   | RJ-45 |   | RJ-45 |   | RJ-45 |   | RJ-45 |    | RJ-45 |    |  
  |   \+-------+   \+-------+   \+-------+   \+-------+    \+-------+    |  
  |   |\<--------- Integrated Switch (LAN) \--------\>|  (To Modem)    |  
  \+-----------------------------------------------------------------+

* **Physical vs. Peripheral Interfaces:**  
  * *Networking Media Interfaces (RJ-45, Antennas, WAN):* Transport Layer 1 digital bitstreams across network communication paths.  
  * *Peripheral / Storage / Video Interfaces (USB, SATA, HDMI, VGA):* Used for host computer buses or video display outputs; they are **not** physical network communication interfaces for forwarding transit traffic.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) HDMI ports for multimedia streaming:**  
  * *Why it is incorrect:* High-Definition Multimedia Interface (HDMI) is a video/audio bus connector used on TVs, monitors, and media players. Routers do not process video outputs.  
  * *What the question would need to ask instead:* "Which display port carries uncompressed digital audio and video signals directly from a computer to a monitor?"  
* **B) USB ports for direct computer connection:**  
  * *Why it is incorrect:* While some SOHO routers feature USB ports, they are used exclusively for attaching external storage drives (NAS mode) or print servers—**not** for establishing primary computer network link connections at Layer 1\.  
  * *What the question would need to ask instead:* "Which peripheral bus interface on a PC is commonly used to attach external flash drives, mice, and webcams?"  
* **D) SATA ports for internal storage connection:**  
  * *Why it is incorrect:* Serial ATA (SATA) is an internal bus interface used inside desktop computers and NAS appliances to connect hard drives and SSDs to the motherboard.  
  * *What the question would need to ask instead:* "Which internal motherboard interface connects 2.5-inch and 3.5-inch solid-state drives inside a PC tower?"  
* **E) VGA ports for video output:**  
  * *Why it is incorrect:* Video Graphics Array (VGA) is an obsolete 15-pin analog video output connector used for computer monitors. It has zero networking functionality.  
  * *What the question would need to ask instead:* "Which legacy 15-pin analog connector was historically used to connect CRT monitors to computer graphics cards?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **RJ-45 (8P8C):** The standard 8-pin plastic network jack used on twisted-pair copper Ethernet cables.  
* **WAN Port:** The single blue or yellow Ethernet port on a router designed to connect to the Internet Service Provider's modem.  
* **Radio Antenna:** The physical metal element that sends and receives Wi-Fi radio waves through the air.  
* **Physical Layer (Layer 1):** The OSI layer responsible for transmitting raw electrical, optical, or radio signals across physical cable or wireless air media.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A technician unpacks a new Wi-Fi 6 SOHO router for a client.  
* **The Problem:** The client needs to connect two desktop PCs via wired cables, run smart TVs wirelessly, and hook the router up to the ISP cable modem.  
* **The Implementation:** The technician plugs the cable modem into the router's **WAN port**, plugs the two desktops into **RJ-45 LAN ports 1 and 2**, and screws on the dual-band **radio antennas**.  
* **The Outcome:** The physical layer links are fully established across copper wire, radio waves, and broadband lines.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** An International Airport Terminal.  
* **Mapping Incorrect Options:**  
  * *HDMI/VGA/SATA/USB* are decorative paintings, internal baggage conveyor belts inside the walls, or local vending machines inside the terminal. They don't fly passengers anywhere.  
* **Mapping Correct Option:**  
  * *WAN Port* is the international customs gate leading out to long-distance flights (**Internet**).  
  * *RJ-45 Ports* are the physical ground taxiways connecting local passenger buses (**Wired LAN PCs**).  
  * *Radio Antennas* are the air traffic radio control towers broadcasting signals to incoming airplanes through the sky (**Wireless Wi-Fi clients**).

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"RAW \= Real Antenna, WAN, RJ-45":** SOHO routers use **R**J-45, **A**ntennas, and **W**AN ports (**RAW**) to move Layer 1 physical signals\!  
* **"If it displays video or holds a hard drive, it's not a router network port\!":** Rule out HDMI, VGA, SATA, and USB immediately when asked for Layer 1 networking ports.

### **10\) STUDENT CHECKLIST**

* \[ \] Can you select the three core physical interfaces on a router? (**RJ-45 LAN**, **WAN Port**, **Radio Antennas**).  
* \[ \] Did an option mention USB, SATA, HDMI, or VGA? (Rule them out—these are computer peripheral/display buses\!).  
* \[ \] Do you know that the WAN port connects to the modem, while RJ-45 LAN ports connect local PCs?  
* \[ \] **Remember:** Layer 1 deals with the physical medium (copper jacks, fiber interfaces, and radio antennas).

## **Question 3: Layer 2 Functions Implemented on SOHO Routers**

### **1\) THE QUESTION AND OPTIONS**

Which of the following functions does a SOHO router implement at Layer 2 to make use of its Physical layer adapters? (Select two.)

* **A)** DHCP server  
* **B)** Network Address Translation (NAT)  
* **C)** Firewall  
* **D)** Ethernet switch  
* **E)** Wireless access point

### **2\) CORRECT ANSWER**

* **D) Ethernet switch**  
* **E) Wireless access point**

### **3\) WHY IT'S CORRECT**

* **Ethernet Switch (Layer 2 Framing & MAC Switching):** The physical RJ-45 ports on the back of a SOHO router are tied together internally by an **Ethernet switch**. This switch operates at Layer 2 (Data Link Layer), keeping track of MAC addresses in a Content Addressable Memory (CAM) table to forward frames directly between local wired nodes.  
* **Wireless Access Point (Layer 2 Wireless-to-Wired Bridging):** An integrated WAP accepts 802.11 wireless radio frames from smartphones and laptops and **bridges** them directly into 802.3 Ethernet frames at Layer 2, combining wired and wireless devices into a single logical broadcast domain.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Multi-Layer SOHO Router Component Disassembly:**

\+-----------------------------------------------------------------------+  
|                       SOHO MULTIFUNCTION APPLIANCE                    |  
|                                                                       |  
|  \[ Layer 3 / 4 / 7 Services \]                                         |  
|    \- Firewall (L3/L4 Packet Filtering)                                |  
|    \- NAT (L3 IP Header Address Translation)                           |  
|    \- DHCP Server (L7 Application Service assigning L3 IP Addresses)   |  
\+-----------------------------------------------------------------------+  
                                  |  
                                  v  
\+-----------------------------------------------------------------------+  
|  \[ Layer 2 Data Link Functions \]                                     |  
|    \- Ethernet Switch: Forwards 802.3 frames using MAC addresses       |  
|    \- Wireless Access Point: Bridges 802.11 wireless frames to 802.3   |  
\+-----------------------------------------------------------------------+  
                                  |  
                                  v  
\+-----------------------------------------------------------------------+  
|  \[ Layer 1 Physical Adapters \]                                        |  
|    \- RJ-45 Copper Jacks  |  Radio Antennas (RF)  |  WAN Interface     |  
\+-----------------------------------------------------------------------+

* **Layer 2 Bridging Function:** The internal WAP is not a router; it is a Layer 2 media bridge. When a Wi-Fi client sends a frame, the WAP strips the 802.11 wireless header, attaches an 802.3 Ethernet header, and hands the frame to the integrated Layer 2 switch.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) DHCP server:**  
  * *Why it is incorrect:* Dynamic Host Configuration Protocol (DHCP) is an **Application Layer (Layer 7\)** service that uses UDP ports 67/68 to assign **Layer 3 (Network Layer)** IP addresses. It does not perform Layer 2 MAC switching or framing.  
  * *What the question would need to ask instead:* "Which upper-layer protocol running on a SOHO router dynamically assigns IP addresses, subnet masks, and default gateways to local clients?"  
* **B) Network Address Translation (NAT):**  
  * *Why it is incorrect:* NAT is a **Network Layer (Layer 3\)** function that alters source and destination IP addresses in IP packet headers to translate private RFC 1918 IPs to a public WAN IP.  
  * *What the question would need to ask instead:* "Which Layer 3 service translates private local IP addresses into a single public IP address for internet routing?"  
* **C) Firewall:**  
  * *Why it is incorrect:* Basic firewalls evaluate IP addresses (**Layer 3**) and port numbers (**Layer 4**), while stateful/application firewalls operate up to **Layer 7**. They do not function as baseline Layer 2 media access adapters.  
  * *What the question would need to ask instead:* "Which Layer 3/4 security mechanism filters inbound and outbound network traffic based on IP addresses and TCP/UDP port rules?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Layer 2 (Data Link Layer):** The OSI layer governing node-to-node frame transfer, physical MAC addressing, switching, and bridging.  
* **Ethernet Switch:** An intelligent Layer 2 device that forwards frames based on physical MAC addresses.  
* **Wireless Access Point (WAP):** A Layer 2 bridge that connects wireless radio Wi-Fi devices to a wired Ethernet network.  
* **MAC Address:** A unique 48-bit hardware identifier burned into network cards.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A user plugs a smart TV into Port 1 of a SOHO router and connects their smartphone over Wi-Fi.  
* **The Problem:** The phone needs to send a video stream frame directly to the TV without sending traffic out to the internet router or ISP.  
* **The Implementation:** The SOHO router's **WAP (Layer 2\)** receives the 802.11 frame from the phone, translates it to an Ethernet 802.3 frame, and hands it to the internal **Ethernet Switch (Layer 2\)**. The switch looks up the TV's MAC address in its CAM table and forwards the frame directly out Port 1\.  
* **The Outcome:** High-speed local video streaming occurs entirely within Layer 2 switching.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** An International Airport Customs and Terminal Hall.  
* **Mapping Incorrect Options:**  
  * *DHCP (A)* is the passport desk issuing visa numbers (**IP addresses**).  
  * *NAT (B)* is the currency exchange booth converting local money to foreign money.  
  * *Firewall (C)* is the security guard checking passports at the gate.  
* **Mapping Correct Option:**  
  * *Ethernet Switch (D)* is the internal walking hallway allowing passengers inside the building to walk directly between room gates based on door numbers (**MAC Addresses**).  
  * *Wireless Access Point (E)* is the shuttle bus taking passengers from the open tarmac (**Wireless air**) through a door directly into the main hallway (**Wired switch**).

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"L2 \= Switch & Bridge (WAP)":** Remember that **Switches** and **Wireless Access Points** are the **L2 Pair** that handle MAC addresses and frames\!  
* **"IPs are L3, MACs are L2":** DHCP and NAT deal with IP addresses (Layer 3). Switches and WAPs deal with frames and MAC addresses (Layer 2).

### **10\) STUDENT CHECKLIST**

* \[ \] Does the question specifically ask for functions operating at **Layer 2 (Data Link)**? (Points directly to **Ethernet switch** and **Wireless access point**).  
* \[ \] Did an option mention DHCP or NAT? (Rule them out—DHCP is Layer 7/IP assignment, NAT is Layer 3 IP translation\!).  
* \[ \] Do you recognize that a WAP acts as a Layer 2 bridge between wireless 802.11 and wired 802.3 Ethernet?  
* \[ \] **Remember:** Layer 2 \= Frames, MAC Addresses, Switches, WAPs.

## **Question 4: SOHO IPv4 Subnetting and Default Gateway Assignment**

### **1\) THE QUESTION AND OPTIONS**

A small office/home office (SOHO) network is configured to use the private IP address range of 192.168.1.0/24. If you are setting up a SOHO router for this network, which of the following IP addresses would be the MOST appropriate for the router?

* **A)** 192.168.1.1  
* **B)** 203.0.113.1  
* **C)** 192.168.1.255  
* **D)** 192.168.2.1

### **2\) CORRECT ANSWER**

* **A) 192.168.1.1**

### **3\) WHY IT'S CORRECT**

* **Subnet Boundary Compliance:** The specified private IPv4 subnet is 192.168.1.0/24. A /24 prefix (subnet mask 255.255.255.0) dictates that the first three octets (192.168.1) represent the Network ID, while the fourth octet provides usable host IP addresses from .1 to .254. The address 192.168.1.1 falls squarely within this usable range.  
* **Default Gateway Convention:** By universal networking convention, the very first usable host IP address (.1) or the very last usable host IP address (.254) in a subnet is assigned to the local router’s LAN interface to act as the **Default Gateway** for all connected hosts.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Anatomy of the 192.168.1.0/24 Subnet:**

**![][image1]**\+-------------------+--------------------+-------------------------------------------+  
| IP Address Role   | IP Address         | Technical Purpose / Limitation            |  
\+-------------------+--------------------+-------------------------------------------+  
| Network ID        | 192.168.1.0        | Identifies the subnet itself (Unusable)   |  
| Default Gateway   | 192.168.1.1        | Assigned to Router LAN Interface (Usable) |  
| Usable Host Range | 192.168.1.2 \- .254 | Available for PCs, Printers, Phones       |  
| Broadcast Address | 192.168.1.255      | Sends traffic to ALL hosts (Unusable)     |  
\+-------------------+--------------------+-------------------------------------------+

* **Routing Table Configuration Example:**

\# SOHO Client Routing Table showing Default Gateway  
c:\\\> route print  
Network Destination        Netmask          Gateway       Interface  
          0.0.0.0          0.0.0.0      192.168.1.1     192.168.1.50

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) 203.0.113.1:**  
  * *Why it is incorrect:* 203.0.113.1 is a public IPv4 address (specifically belonging to the RFC 5737 TEST-NET-3 documentation range). It cannot be used on an internal private SOHO LAN subnet.  
  * *What the question would need to ask instead:* "Which address represents a public IPv4 address assigned to a router's WAN interface for internet routing?"  
* **C) 192.168.1.255:**  
  * *Why it is incorrect:* In a /24 subnet, the final host address (.255) is reserved as the **Directed Broadcast Address**. Assigning .255 to a router interface causes IP address conflicts and crashes subnet routing.  
  * *What the question would need to ask instead:* "What is the reserved IPv4 broadcast address for the 192.168.1.0/24 network?"  
* **D) 192.168.2.1:**  
  * *Why it is incorrect:* 192.168.2.1 belongs to an entirely different logical subnet (192.168.2.0/24). A router interface must reside on the exact same IP subnet as the local client endpoints it serves.  
  * *What the question would need to ask instead:* "If a secondary office network is assigned the 192.168.2.0/24 subnet, what would be the standard gateway IP for that router interface?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Default Gateway:** The IP address of the local router interface that host computers send traffic to when attempting to reach external networks or the Internet.  
* **RFC 1918 Private IPs:** IPv4 ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) reserved exclusively for local private networks.  
* **Subnet Mask:** A 32-bit value that separates an IP address into its Network ID and Host ID portions.  
* **Broadcast Address:** A special reserved IP address used to send data simultaneously to every device on a subnet.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** An administrator installs a new Wi-Fi router for a dental clinic assigned the 192.168.1.0/24 network.  
* **The Problem:** The administrator needs to configure the router's internal LAN IP address so DHCP can automatically instruct workstations where to send internet traffic.  
* **The Implementation:** The admin sets the router's internal interface to **192.168.1.1** and configures the DHCP pool to hand out host IPs from 192.168.1.10 to 192.168.1.200, setting Gateway \= 192.168.1.1.  
* **The Outcome:** All clinic computers obtain IP addresses in the 192.168.1.X range and forward external web traffic smoothly through gateway 192.168.1.1.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Apartment Street Addresses and Exit Gates.  
* **Mapping Incorrect Options:**  
  * *203.0.113.1 (Public IP)* is a highway exit sign in a completely different city.  
  * *192.168.1.255 (Broadcast)* is a megaphone speaker system mounted on the roof that shouts to all apartments at once. You can't live inside the megaphone.  
  * *192.168.2.1 (Different Subnet)* is the exit gate for a different apartment complex across the street.  
* **Mapping Correct Option:**  
  * *192.168.1.1 (Gateway)* is Apt \#1, sitting right next to the front exit gate of the 192.168.1.X apartment complex. Whenever any tenant wants to leave the building, they walk past Apt \#1 out the front gate.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"First Host for Gateway Most":** Network engineers almost always pick the **First Usable Host IP (.1)** for the default gateway router address\!  
* **"Zero \= Net, 255 \= Broadcast, Usable In-Between":** Never assign .0 or .255 to a router or PC in a /24 network\!

### **10\) STUDENT CHECKLIST**

* \[ \] Is the network specified as 192.168.1.0/24? (Rule out addresses outside 192.168.1.X like 192.168.2.1).  
* \[ \] Is .255 an option? (Rule it out immediately—that's the reserved broadcast address\!).  
* \[ \] Is a public IP listed? (Rule it out—internal router interfaces require private IPs\!).  
* \[ \] **Remember:** SOHO routers use the .1 address in private subnets as the Default Gateway.

## **Question 5: Hardening SOHO Router Management Interfaces**

### **1\) THE QUESTION AND OPTIONS**

What is the MOST effective method for protecting the management interface of a SOHO router?

* **A)** Configuring a strong administrative account passphrase  
* **B)** Disabling the firewall  
* **C)** Enabling UPnP (Universal Plug and Play)  
* **D)** Setting the router to automatically accept firmware updates

### **2\) CORRECT ANSWER**

* **A) Configuring a strong administrative account passphrase**

### **3\) WHY IT'S CORRECT**

* **Credential Hardening at the Management Plane:** SOHO routers host a Web-based Graphical User Interface (HTTP/HTTPS administrative portal) accessible via the LAN. Configuring a complex, non-default administrative passphrase prevents unauthorized users or automated brute-force scripts from logging into the management interface and changing core network settings.  
* **Stopping Default Credential Exploitation:** SOHO routers ship from factories with well-known default login credentials (e.g., admin/admin or admin/password). Changing these defaults to a long, complex passphrase stops 99% of unauthorized management takeover attempts.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **SOHO Router Hardening Best Practices Checklist:**

\+------------------------------------+-----------------------------------------------------+  
| Hardening Control                  | Technical Security Impact                           |  
\+------------------------------------+-----------------------------------------------------+  
| 1\. Change Default Admin Password   | Prevents administrative account takeover.           |  
| 2\. Disable Remote WAN Management   | Restricts Web GUI access strictly to local LAN.     |  
| 3\. Disable UPnP                    | Prevents malware from opening unauthenticated ports.|  
| 4\. Keep Firmware Updated           | Patches known OS buffer overflows and exploits.     |  
| 5\. Change Default SSID & WPA3 Key  | Prevents unauthorized local wireless association.   |  
\+------------------------------------+-----------------------------------------------------+

* **HTTP/HTTPS Management Access CLI Logic:**

\# Example Cisco SOHO Router Management Hardening  
Router(config)\# username admin privilege 15 secret C0mpLEX\#PassPhra5e\!2026  
Router(config)\# ip http secure-server  
Router(config)\# no ip http server   \! Disables unencrypted HTTP management

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) Disabling the firewall:**  
  * *Why it is incorrect:* Disabling the stateful firewall destroys perimeter defense, exposing all local LAN computers directly to inbound malicious probes and exploit traffic from the Internet.  
  * *What the question would need to ask instead:* "Which dangerous configuration change removes all perimeter packet filtering on a router, leaving internal devices completely exposed to public internet attacks?"  
* **C) Enabling UPnP (Universal Plug and Play):**  
  * *Why it is incorrect:* Universal Plug and Play (UPnP) is a high-risk convenience protocol that allows local apps and smart TVs to automatically open incoming firewall ports **without authentication**. Attackers and malware routinely exploit UPnP to bypass firewalls.  
  * *What the question would need to ask instead:* "Which convenient but insecure protocol allows local devices to automatically modify router port-forwarding rules without entering administrator credentials?"  
* **D) Setting the router to automatically accept firmware updates:**  
  * *Why it is incorrect:* While automatic firmware updates maintain system stability and patch software bugs, they do **not** protect the management interface if the administrative login credentials remain weak or default. A hacker can log in using admin/password on a fully updated router.  
  * *What the question would need to ask instead:* "Which maintenance configuration ensures a SOHO router continuously receives security vulnerability patches from the vendor without manual administrator intervention?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Management Interface:** The web portal page (Web GUI) or command console used by administrators to change router settings.  
* **Passphrase:** A long, secure password made up of multiple words, numbers, and symbols.  
* **UPnP (Universal Plug and Play):** A feature that lets smart home devices automatically open router ports without prompting for passwords (a security risk).  
* **Firmware:** The embedded operating system software permanently stored on a router's memory chip.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A small accounting firm buys a new Wi-Fi router. An employee connects to the Wi-Fi and types 192.168.1.1 in a browser.  
* **The Problem:** The router still uses the factory default login (admin/admin). Anyone on the Wi-Fi network can log in, view the WPA2 key, forward DNS traffic to a malicious server, or lock out the business owner.  
* **The Implementation:** The network administrator logs in immediately and changes the admin passphrase to Tr0u$er\#79\!K29$mL and disables Remote WAN Access.  
* **The Outcome:** The router's management interface is fully secured against unauthorized local and remote account takeover.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Locking the Master Control Room of a Bank.  
* **Mapping Incorrect Options:**  
  * *Disabling the Firewall (B)* is tearing down the bank's exterior brick walls.  
  * *Enabling UPnP (C)* is installing an automatic unlock button on the back door that opens whenever any stranger pushes against it.  
  * *Auto Firmware Updates (D)* is buying newly painted front doors every month.  
* **Mapping Correct Option:**  
  * *Strong Admin Passphrase (A)* is putting a heavy combination lock on the Master Control Room door and changing the factory master key code from 0000 to a secret code known only to the Bank Manager.

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Passphrase Protects Management, UPnP Unlocks Misfortune":** Always pair **Strong Passphrase** with securing the management interface, and treat **UPnP** as a security vulnerability\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the question ask for protecting the router's **management interface**? (Points directly to **configuring a strong administrative passphrase**).  
* \[ \] Is UPnP listed? (Recognize UPnP as a security risk, not a hardening feature\!).  
* \[ \] Did an option suggest disabling the firewall? (Instantly rule it out\!).  
* \[ \] **Remember:** Upgrading firmware is good maintenance, but a strong administrative password is the primary gatekeeper for router management security.

## **Question 6: Transport Layer Port Addressing**

### **1\) THE QUESTION AND OPTIONS**

At layer 4 of the OSI model, how is each application identified to facilitate proper routing and delivery of data?

* **A)** By the MAC address of the destination device  
* **B)** Through the use of encryption algorithms  
* **C)** Through the application's unique username and password  
* **D)** By a unique port number assigned to the application

### **2\) CORRECT ANSWER**

* **D) By a unique port number assigned to the application**

### **3\) WHY IT'S CORRECT**

* **Transport Layer Multiplexing:** Layer 4 (Transport Layer) uses 16-bit numeric identifiers called **Port Numbers** (ranging from 0 to 65535\) within TCP and UDP headers to direct data streams to specific software applications or background processes running on a host.  
* **Process-to-Process Communication:** While IP addresses (Layer 3\) route data to the correct computer, port numbers (Layer 4\) ensure data reaches the exact application process inside that computer (e.g., separating Web traffic on Port 80/443 from Email traffic on Port 25).

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Network Socket Identifier Formula:**  
* **![][image2]OSI Layer Addressing Reference Matrix:**

\+-------------------+--------------------+-------------------------------------------+  
| OSI Model Layer   | Addressing Type    | Technical Example                         |  
\+-------------------+--------------------+-------------------------------------------+  
| Layer 7 (App)     | User / Credentials | Username / Password / Uniform Resource ID |  
| Layer 4 (Transport)| Port Numbers      | TCP Port 80 (HTTP), TCP Port 443 (HTTPS)  |  
| Layer 3 (Network) | IP Addresses       | IPv4: 192.168.1.1 | IPv6: 2001:db8::1    |  
| Layer 2 (Data Link)| MAC Addresses     | Hardware Address: 00:1A:2B:3C:4D:5E       |  
\+-------------------+--------------------+-------------------------------------------+

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) By the MAC address of the destination device:**  
  * *Why it is incorrect:* MAC addresses operate exclusively at **Layer 2 (Data Link Layer)** to identify physical hardware network cards on a local link segment. They do not distinguish between individual software applications running on a host.  
  * *What the question would need to ask instead:* "How are hardware devices uniquely identified on a local network link at Layer 2 of the OSI model?"  
* **B) Through the use of encryption algorithms:**  
  * *Why it is incorrect:* Encryption algorithms (such as AES or RSA) protect data confidentiality at upper layers or Layer 3 (IPsec). They provide security, not process addressing or packet routing.  
  * *What the question would need to ask instead:* "How is payload confidentiality maintained during transit across public networks?"  
* **C) Through the application's unique username and password:**  
  * *Why it is incorrect:* Usernames and passwords are **Layer 7 (Application Layer)** authentication credentials used to verify user identities. They play no role in Layer 4 Transport header multiplexing.  
  * *What the question would need to ask instead:* "How does an application verify user identity and authorize user access at Layer 7?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Port Number:** A 16-bit number (0–65535) in TCP/UDP headers directing network traffic to specific software programs.  
* **Layer 4 (Transport Layer):** The OSI layer responsible for process-to-process communication, segmentation, flow control, and port multiplexing.  
* **Multiplexing:** Combining multiple application data streams over a single physical network connection simultaneously.  
* **Socket:** The combination of an IP address and a Port Number defining a specific network process connection.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A web designer opens a web browser (HTTP/443), an FTP client (FTP/21), and a Spotify music app (Streaming) on a single laptop simultaneously over one Wi-Fi card.  
* **The Problem:** When network packets arrive at the laptop's Wi-Fi card, the OS must know which application gets which packet without mixing web pages into the music stream.  
* **The Implementation:** The laptop OS inspects the **Layer 4 TCP Header Port Number**. Packets with Dest Port 443 go to Chrome; packets with Dest Port 21 go to FileZilla.  
* **The Outcome:** Smooth concurrent application multiplexing is achieved at Layer 4\.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Apartment Buildings and Mailboxes.  
* **Mapping Incorrect Options:**  
  * *MAC Address (A)* is the physical concrete curb where the delivery truck parks (**Layer 2**).  
  * *Username/Password (C)* is checking the tenant's driver's license inside the apartment before handing them a package (**Layer 7**).  
* **Mapping Correct Option:**  
  * *IP Address (Layer 3\)* gets the delivery truck to the correct building street address (**100 Main Street**).  
  * *Port Number (Layer 4\)* is the specific **Apartment Unit Number (Apt 4B)** written on the envelope. Without the unit number (Port), the mail carrier knows which building to visit, but doesn't know whose front door to knock on inside\!

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Port Four \= Layer 4":** Always link application **PORTS** directly with **Layer 4 (Transport)**\!  
* **"IP delivers to the Computer, Port delivers to the Program":** IP \= Machine; Port \= Application.

### **10\) STUDENT CHECKLIST**

* \[ \] Does the question ask how applications are identified at **Layer 4 (Transport)**? (Points directly to **unique port number**).  
* \[ \] Did an option mention MAC addresses? (Rule it out—MAC is Layer 2\!).  
* \[ \] Did an option mention Usernames/Passwords? (Rule it out—that's Layer 7 authentication\!).  
* \[ \] **Remember:** Well-known ports include Port 80 (HTTP), Port 443 (HTTPS), Port 22 (SSH), Port 25 (SMTP), and Port 53 (DNS).

## **Question 7: Telecommunications Demarcation Point**

### **1\) THE QUESTION AND OPTIONS**

Which of the following BEST describes a demarcation point in the context of telecommunications?

* **A)** The maximum data transfer rate achievable by the ISP  
* **B)** The protocol used for encrypting data over the Internet  
* **C)** The point at which the telco's cabling enters the customer premises  
* **D)** The central hub where all ISPs connect and exchange data

### **2\) CORRECT ANSWER**

* **C) The point at which the telco's cabling enters the customer premises**

### **3\) WHY IT'S CORRECT**

* **Organizational Responsibility Boundary:** The Demarcation Point (commonly called the **Demarc** or Minimum Point of Entry / MPOE) is the physical boundary separating the telecommunications service provider's (telco/ISP) network infrastructure from the Customer Premises Equipment (CPE).  
* **Maintenance Liability Divider:**  
  * *Telco Side (Before Demarc):* The service provider is legally and financially responsible for repairing broken cabling, poles, and central office links up to the Demarc.  
  * *Customer Side (After Demarc):* The property owner or enterprise IT department is entirely responsible for maintaining all internal cabling (Customer On-Premises Wiring), jacks, patch panels, and internal routers beyond the Demarc.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Physical Demarcation Layout Diagram:**

  TELCO RESPONSIBILITY (Provider Loop)     |    CUSTOMER RESPONSIBILITY (CPE Wiring)  
                                           |  
  \[ ISP Central Office \]                   |    \[ Customer Building \]  
           |                               |  
  (Underground / Pole Cable)               |  
           |                               |  
           v                               |  
\+---------------------+                    |        \+-----------------------+  
|  Demarcation Point  |  \<=================|======\> | Internal Patch Panel  |  
| (NID / Smart Jack)  |                    |        | & SOHO/Enterprise Router|  
\+---------------------+                    |        \+-----------------------+  
                                           |

* **Network Interface Devices (NID / Smart Jack):** The physical Demarc hardware is often a Network Interface Device (NID) or "Smart Jack." A Smart Jack contains loopback testing circuitry that allows the ISP to remotely test their line up to the Demarc without entering the customer building.

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) The maximum data transfer rate achievable by the ISP:**  
  * *Why it is incorrect:* Maximum data transfer rate refers to **Bandwidth** or **Throughput** capacity (measured in Mbps or Gbps), not a physical cabling boundary.  
  * *What the question would need to ask instead:* "Which metric defines the maximum theoretical volume of data an ISP connection can transmit per second?"  
* **B) The protocol used for encrypting data over the Internet:**  
  * *Why it is incorrect:* Encryption protocols (like TLS/SSL or IPsec) operate in software across upper layers or Layer 3\. They have no relationship with physical telecom cabling entries.  
  * *What the question would need to ask instead:* "Which cryptographic protocol suite secures transport layer web sessions using SSL/TLS algorithms?"  
* **D) The central hub where all ISPs connect and exchange data:**  
  * *Why it is incorrect:* A facility where different ISPs connect their networks together to exchange traffic is called an **Internet Exchange Point (IXP)** or Carrier-Neutral Datacenter, not a Demarcation point.  
  * *What the question would need to ask instead:* "What type of data center facility allows multiple major ISPs to physically peer and route internet traffic between their networks?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Demarcation Point (Demarc):** The physical box/jack where the telephone or cable company's wires end and the customer's private building wires begin.  
* **NID (Network Interface Device):** The weather-proof plastic box mounted on an outside wall containing the Demarc connection.  
* **CPE (Customer Premises Equipment):** Routers, switches, and modems owned or leased by the customer inside their building.  
* **Smart Jack:** An intelligent Demarc box capable of remote loopback testing by the telecom provider.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A retail store loses internet access. The store owner calls their ISP (Comcast/AT\&T) to report an outage.  
* **The Problem:** The ISP technician arrives and tests the line at the **Demarc box** on the outside wall, finding a clean, active signal entering the building.  
* **The Implementation:** The ISP tech states: *"The line to the Demarc is working perfectly. The fault is in the internal cable running through your ceiling to your register."*  
* **The Outcome:** Because the issue is on the customer side of the Demarcation point, the store owner must hire a local cabling contractor to fix the damaged internal wire.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** The City Water Meter outside a Residential House.  
* **Mapping Incorrect Options:**  
  * *Bandwidth (A)* is the maximum water pressure (gallons per minute) the city pipes can push.  
  * *IXP (D)* is the main city water reservoir lake where rivers join together.  
* **Mapping Correct Option:**  
  * *Demarcation Point (C)* is the **City Water Meter** sitting in your front yard. If a city water main breaks under the street before the meter, the city city utility department must dig up the road and fix it for free. If a pipe bursts inside your basement past the water meter, it is your personal responsibility to pay a plumber to fix it\!

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Demarc Divides Dependency":** The **Demarc** divides ISP dependency (**their side**) from Customer dependency (**your side**)\!  
* **"Demarc \= Doorway":** Think of the Demarc as the physical doorway where the telco hands the wires over to you.

### **10\) STUDENT CHECKLIST**

* \[ \] Does the question ask for the boundary where telecom cabling enters a customer building? (Points directly to **Demarcation point**).  
* \[ \] Does the scenario ask who is responsible for fixing a broken wire before vs. after a wall jack? (Points to the **Demarc**).  
* \[ \] Did an option mention IXP or bandwidth? (Rule them out\!).  
* \[ \] **Remember:** Telco owns before the Demarc; Customer owns after the Demarc.

## **Question 8: ISP Peering and Transit at Internet Exchange Points**

### **1\) THE QUESTION AND OPTIONS**

What do Internet Service Providers (ISPs) use to establish links between their networks within an Internet eXchange Point (IXP) data center?

* **A)** Transit and peering arrangements  
* **B)** NFC (Near Field Communication)  
* **C)** Peer-to-peer file sharing  
* **D)** Bluetooth connectivity

### **2\) CORRECT ANSWER**

* **A) Transit and peering arrangements**

### **3\) WHY IT'S CORRECT**

* **Inter-Autonomous System Routing Architecture:** The global Internet is a "network of networks." At Internet Exchange Points (IXPs)—which are specialized high-speed datacenter facilities—different Internet Service Providers (ISPs) and Content Delivery Networks (CDNs) establish physical and logical Border Gateway Protocol (BGP) routing links using **Transit** and **Peering** agreements.  
* **Peering vs. Transit Mechanics:**  
  * *Peering:* An agreement between two ISPs to exchange traffic directly between their respective customers for free (Settlement-Free Peering) or shared cost, bypassing upstream networks.  
  * *Transit:* A commercial agreement where a smaller regional ISP pays a larger Tier-1 backbone ISP to carry traffic across the global Internet.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Internet Routing Hierarchy at an IXP:**

                  \+-----------------------------------+  
                  |   Tier-1 Global Backbone ISP      |  
                  \+-----------------------------------+  
                                    ^  
                                    | (Paid Transit Agreement)  
                                    v  
\+-----------------------------------------------------------------------+  
|                 INTERNET EXCHANGE POINT (IXP) DATA CENTER             |  
|                                                                       |  
|   \+-------------------+    (Free Peering Link)   \+----------------+   |  
|   |  Regional ISP A   | \<======================\> |  ISP B / CDN   |   |  
|   | (e.g., Comcast)   |   (BGP Fiber Cross-Conn) | (e.g., Netflix)|   |  
|   \+-------------------+                          \+----------------+   |  
\+-----------------------------------------------------------------------+

* **BGP Peering Session CLI Syntax:**

\# Example BGP Peering Configuration on an IXP Edge Router  
Router\_ISP\_A(config)\# router bgp 65001  
Router\_ISP\_A(config-router)\# neighbor 198.51.100.2 remote-as 65002  
Router\_ISP\_A(config-router)\# neighbor 198.51.100.2 description \--- IXP Peering with Netflix \---

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) NFC (Near Field Communication):**  
  * *Why it is incorrect:* Near Field Communication (NFC) is a low-power, short-range wireless standard (under 4 cm / 1.5 inches) used for contactless credit card payments (Apple Pay) and smart badges. It cannot connect ISP datacenters.  
  * *What the question would need to ask instead:* "Which short-range wireless protocol allows smartphone users to make contactless payments at retail checkout terminals?"  
* **C) Peer-to-peer file sharing:**  
  * *Why it is incorrect:* Peer-to-peer (P2P) file sharing (like BitTorrent) is an **Application Layer (Layer 7\)** software protocol used by end users to distribute files across hosts. It is not an infrastructure carrier arrangement used by ISPs to route global internet backbones.  
  * *What the question would need to ask instead:* "Which software application architecture allows desktop users to download files directly from multiple host computers simultaneously?"  
* **D) Bluetooth connectivity:**  
  * *Why it is incorrect:* Bluetooth is a short-range Personal Area Network (PAN) wireless technology (\~10 meters) used for wireless headphones and mice. It has zero capability to transport gigabits of internet backbone traffic.  
  * *What the question would need to ask instead:* "Which short-range wireless technology connects wireless computer keyboards and audio headsets to laptops?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **IXP (Internet Exchange Point):** A physical datacenter building where ISPs meet to interconnect their fiber optic networks.  
* **Peering:** A mutually beneficial agreement where two ISPs exchange traffic directly for free.  
* **Transit:** A paid business relationship where a smaller ISP pays a larger carrier to access the entire global Internet.  
* **BGP (Border Gateway Protocol):** The core routing protocol used to route data between different ISP networks across the Internet.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** Video streaming site Netflix generates massive movie traffic requested by Comcast internet customers.  
* **The Problem:** Sending all that video traffic through third-party paid internet routes is expensive and causes video buffering delays.  
* **The Implementation:** Netflix and Comcast install fiber optic routers inside the same **Internet Exchange Point (IXP)** datacenter in Chicago and set up a **Settlement-Free Peering** arrangement over Border Gateway Protocol (BGP).  
* **The Outcome:** Movies stream directly from Netflix routers to Comcast routers at 100 Gbps speeds with ultra-low latency and zero third-party transit fees.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** International Airline Alliances and Toll Roads.  
* **Mapping Incorrect Options:**  
  * *NFC / Bluetooth (B, D)* are Whispering in someone's ear across a desk. Useful for two people sitting together, but impossible for flying thousands of passengers.  
  * *P2P Sharing (C)* is passengers sharing vacation photos with each other on the plane.  
* **Mapping Correct Option:**  
  * *Transit & Peering (A)* is an **Airline Code-Share Agreement**. Delta Airlines (**ISP A**) doesn't fly to small towns in Europe, so they partner with Air France (**ISP B**) through a **Peering/Transit agreement** at a major airport hub (**IXP**). Delta hands passengers over to Air France so travelers can reach their destination smoothly\!

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"ISPs Peer at the IXP":** Remember that **ISPs** establish **Peering** and **Transit** links at the **IXP**\!  
* **"Peering is Free, Transit Fee":** Peering \= Equal direct trade; Transit \= Paying an upstream provider for access.

### **10\) STUDENT CHECKLIST**

* \[ \] Does the question ask how ISPs connect their networks inside an IXP? (Points directly to **Transit and peering arrangements**).  
* \[ \] Did an option list Bluetooth, NFC, or P2P file sharing? (Rule them out instantly—these are consumer/personal technologies\!).  
* \[ \] Do you know that BGP is the routing protocol used for ISP peering?  
* \[ \] **Remember:** IXPs are physical datacenters; Peering and Transit are the commercial routing relationships.

## **Question 9: Binary to Decimal IP Address Conversion**

### **1\) THE QUESTION AND OPTIONS**

What is the decimal form of the following binary IP address?

11001101.00111001.10101001.01000010

* **A)** 190.42.154.51  
* **B)** 205.57.169.66  
* **C)** 206.58.170.67  
* **D)** 238.90.202.99

### **2\) CORRECT ANSWER**

* **B) 205.57.169.66**

### **3\) WHY IT'S CORRECT**

* **Positional Binary Place Value Conversion:** An IPv4 address consists of 32 bits divided into four 8-bit octets. Each bit position in an octet corresponds to a specific positional binary power of 2 (![][image3] down to ![][image4]):  
  * Bit 1 \= 128 | Bit 2 \= 64 | Bit 3 \= 32 | Bit 4 \= 16 | Bit 5 \= 8 | Bit 6 \= 4 | Bit 7 \= 2 | Bit 8 \= 1  
* **Step-by-Step Octet Calculations:**  
  * **1st Octet (11001101):** ![][image5]  
  * **2nd Octet (00111001):** ![][image6]  
  * **3rd Octet (10101001):** ![][image7]  
  * **4th Octet (01000010):** ![][image8]  
* **Combined Decimal Notation:** Combining the four calculated octets results in **205.57.169.66**.

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Binary Octet Positional Value Master Grid:**  
* **![][image9]Exam Shortcut Tip (Odd vs. Even Numbers):** Look at the final bit (least significant bit / ![][image10]) of each octet:  
  * If the last bit is **1**, the decimal number **MUST BE ODD**.  
  * If the last bit is **0**, the decimal number **MUST BE EVEN**.  
  * *Verification:*  
    * Octet 1 ends in 1 ![][image11] ![][image12] (Odd)  
    * Octet 2 ends in 1 ![][image11] ![][image13] (Odd)  
    * Octet 3 ends in 1 ![][image11] ![][image14] (Odd)  
    * Octet 4 ends in 0 ![][image11] ![][image15] (Even)

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **A) 190.42.154.51:**  
  * *Why it is incorrect:* Result of miscalculating bit place values (e.g., calculating ![][image16] for octet 1 instead of evaluating 11001101).  
  * *What the binary string would need to be:* 10111110.00101010.10011010.00110011  
* **C) 206.58.170.67:**  
  * *Why it is incorrect:* An "Off-by-One" distractor trap where every octet value is incremented by ![][image17] (![][image18], ![][image19], etc.).  
  * *What the binary string would need to be:* 11001110.00111010.10101010.01000011  
* **D) 238.90.202.99:**  
  * *Why it is incorrect:* Result of completely incorrect bit addition values across all four octets.  
  * *What the binary string would need to ask instead:* 11101110.01011010.11001010.01100011

### **6\) PLAIN ENGLISH GLOSSARY**

* **Binary (Base-2):** A numbering system using only two digits (0 and 1).  
* **Decimal (Base-10):** Standard human numbering system using digits 0 through 9\.  
* **Octet:** A group of 8 binary bits (e.g., 11001101\) representing one section of an IPv4 address.  
* **Least Significant Bit (LSB):** The rightmost bit in a binary octet (value \= 1).

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A network engineer analyzes a raw Wireshark packet capture file.  
* **The Problem:** The packet analyzer displays the source IP address in raw binary format as 11001101.00111001.10101001.01000010.  
* **The Implementation:** The engineer writes out the 8-bit place values (128, 64, 32, 16, 8, 4, 2, 1\) and sums the active 1 bits for each octet.  
* **The Outcome:** The engineer converts the string to **205.57.169.66** and enters the IP into the firewall blocklist.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** Light Switches on an 8-Switch Light Panel.  
* **Mapping the Process:** Imagine an 8-switch panel where each light bulb has a specific wattage power label:  
  * \[128W\] \[64W\] \[32W\] \[16W\] \[8W\] \[4W\] \[2W\] \[1W\]  
* **Executing Octet 1 (11001101):**  
  * Switches 128W, 64W, 8W, 4W, and 1W are turned **ON (1)**.  
  * Switches 32W, 16W, and 2W are turned **OFF (0)**.  
  * Total electricity consumed \= ![][image20].

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"128 \- 64 \- 32 \- 16 \- 8 \- 4 \- 2 \- 1":** Memorize these 8 numbers in order\! Write them across the top of your scratch paper on exam day immediately.  
* **"Odd Ends in 1, Even Ends in 0":** Always check the last bit first to eliminate obviously wrong choices instantly\!

### **10\) STUDENT CHECKLIST**

* \[ \] Did you write down the binary place value row (128 64 32 16 8 4 2 1)?  
* \[ \] Did you sum ONLY the values where a 1 is present?  
* \[ \] Does the fourth octet 01000010 end in 0? (Confirms the decimal number MUST be even ![][image11] 66).  
* \[ \] **Remember:** Each octet ranges strictly from 0 (00000000) to 255 (11111111).

## **Question 10: Hexadecimal Notation Digit Representation**

### **1\) THE QUESTION AND OPTIONS**

Which of the following sets correctly represents the possible values that can be represented by each digit in hexadecimal notation?

* **A)** 0 through 9 and A through F  
* **B)** 0 through 7  
* **C)** 0 through 9 and A through E  
* **D)** 1 through 10

### **2\) CORRECT ANSWER**

* **A) 0 through 9 and A through F**

### **3\) WHY IT'S CORRECT**

* **Base-16 Numerical Foundation:** Hexadecimal (Hex) is a Base-16 positional numbering system. A single hexadecimal digit represents 16 distinct numerical values (![][image21] to ![][image22]).  
* **Alpha-Numeric Value Representation:** Because standard Arabic numerals only provide single digits for ![][image21] through ![][image23], hexadecimal uses the letters **A through F** to represent decimal values ![][image24] through ![][image22]:  
  * 0-9 \= Values ![][image21] to ![][image23]  
  * A \= ![][image24] | B \= ![][image25] | C \= ![][image26] | D \= ![][image27] | E \= ![][image28] | F \= ![][image22]  
* **4-Bit Nibble Alignment:** A single hex digit perfectly represents 4 binary bits (a "nibble", where ![][image29]). Thus, two hex digits represent one full 8-bit byte (00 to FF \= ![][image21] to ![][image30]).

### **4\) MINI LESSON: TECHNICALS BEHIND THE QUESTION**

* **Hexadecimal, Decimal, and Binary Conversion Matrix:**  
* **![][image31]Networking Applications of Hexadecimal:**  
  * *Layer 2 MAC Addresses:* 48-bit hex strings (e.g., 00:1A:2B:3C:4D:5E).  
  * *Layer 3 IPv6 Addresses:* 128-bit hex strings (e.g., 2001:0db8:85a3::8a2e:0370:7334).

### **5\) ANALYSIS OF INCORRECT ANSWERS**

* **B) 0 through 7:**  
  * *Why it is incorrect:* 0 through 7 defines the **Octal (Base-8)** numbering system, where each digit represents 3 binary bits (![][image32]). It is not hexadecimal.  
  * *What the question would need to ask instead:* "Which set of digits represents the possible values for each character in the Octal (Base-8) numbering system?"  
* **C) 0 through 9 and A through E:**  
  * *Why it is incorrect:* This range only provides 15 values (![][image21] to ![][image28]), missing the final letter F (which represents ![][image22]). Base-16 requires 16 total values (![][image21] through ![][image22]).  
  * *What the question would need to ask instead:* "Which incomplete set incorrectly omits the value 15 from hexadecimal notation?"  
* **D) 1 through 10:**  
  * *Why it is incorrect:* All positional computing numbering systems (Binary, Octal, Decimal, Hexadecimal) **MUST start at zero (0)**. Furthermore, 1 through 10 is an arbitrary counting range, not a Base-16 positional system.  
  * *What the question would need to ask instead:* "Which range represents standard elementary counting numbers from one to ten?"

### **6\) PLAIN ENGLISH GLOSSARY**

* **Hexadecimal (Base-16):** A shorthand numbering system using digits 0-9 and letters A-F to represent 16 values.  
* **Nibble:** A 4-bit binary group (half a byte) represented by a single hexadecimal digit.  
* **Base-8 (Octal):** A numbering system using digits 0 through 7\.  
* **Base-2 (Binary):** A numbering system using digits 0 and 1\.

### **7\) REAL-LIFE SCENARIO EXAMPLE**

* **The Scenario:** A network technician inspects a switchport security log and sees a blocked MAC address listed as 00:E0:4C:68:01:AF.  
* **The Problem:** A junior intern asks why the letter F is inside a physical network address.  
* **The Implementation:** The technician explains that network hardware addresses use **Hexadecimal (Base-16)** notation, where F represents the decimal number 15 (binary 1111).  
* **The Outcome:** The intern realizes AF is simply a compact way of writing the byte 10101111\.

### **8\) THE METAPHOR EXAMPLE**

* **The Analogy:** An Egg Carton with 16 Slots.  
* **Mapping the Concept:**  
  * Imagine an egg carton that holds 16 eggs (labeled ![][image21] through ![][image22]).  
  * You have single-digit number stamps for ![][image21] through ![][image23].  
  * When you fill 10 slots (![][image24] eggs), you run out of single number stamps\! Instead of using two digits ("10"), you use single letter stamps: **A** for 10 eggs, **B** for 11 eggs... up to **F** for a completely full carton of 15 eggs (![][image21] to ![][image22] \= 16 total slots).

### **9\) MNEMONICS AND MEMORIZATION TRICKS**

* **"Hex \= Sixteen, Ends at F":** **Hex**adecimal has 16 values, starting at **0** and ending at **F** (![][image22]).  
* **"A=10, F=15":** Memorize that **A** is ![][image24] and **F** is ![][image22]\!

### **10\) STUDENT CHECKLIST**

* \[ \] Does the option include both digits **0 through 9** and letters **A through F**? (Points directly to **Hexadecimal**).  
* \[ \] Did an option stop at E? (Rule it out—missing F \= 15\!).  
* \[ \] Did an option list 0 through 7? (Rule it out—that's Octal/Base-8\!).  
* \[ \] **Remember:** MAC addresses and IPv6 addresses are written exclusively in Hexadecimal\!

## **Section 11: Summary Reference Table of Module 1.3.11**

| Concept / Tool / Term | Primary Function / Purpose | Core Technical Attribute | Key Distinguishing Exam Trigger |
| :---- | :---- | :---- | :---- |
| **SOHO Network** | Serves small business/home offices (1–10 users). | Multifunction router, RFC 1918 private IPs, NAT | "Freelance home office, desktop, laptop, printer, guests" |
| **RJ-45 (LAN Ports)** | Connects local wired Ethernet devices at Layer 1\. | 8P8C copper twisted-pair jack (Cat5e/Cat6) | "Physical Layer cabled local network connection" |
| **Radio Antennas** | Transmits/receives Wi-Fi radio signals at Layer 1\. | 802.11 RF electromagnetic transceiver | "Wireless signal transmission at Physical Layer" |
| **WAN Port** | Connects SOHO router to ISP modem/demarcation. | RJ-45, RJ-11, or F-type coaxial connector | "Interface for Internet Service Provider connection" |
| **Ethernet Switch** | Forwards frames between local wired nodes at Layer 2\. | MAC address tables (CAM table), 802.3 framing | "SOHO Layer 2 function connecting RJ-45 jacks internally" |
| **Wireless Access Point** | Bridges 802.11 wireless frames to 802.3 Ethernet at Layer 2\. | Layer 2 MAC bridging between radio and wire | "SOHO Layer 2 function using antennas for Wi-Fi" |
| **Default Gateway** | Local router IP where clients send external traffic. | First usable host IP (.1) in private subnet | "Most appropriate router IP for 192.168.1.0/24 subnet" |
| **Admin Passphrase** | Secures router management interface against takeover. | Credential hardening, changes default admin/admin | "MOST effective method for protecting management interface" |
| **Layer 4 Port Number** | Identifies specific application processes on a host. | 16-bit number (0–65535) in TCP/UDP headers | "Identifies each application at Layer 4 for routing/delivery" |
| **Demarcation Point** | Boundary between Telco responsibility and Customer CPE. | Smart Jack / NID on external building wall | "Point where telco cabling enters customer premises" |
| **Transit & Peering** | BGP routing relationships used by ISPs at IXPs. | Peering \= direct trade; Transit \= paid upstream | "ISPs use to establish links within an IXP data center" |
| **Binary Conversion** | Converts Base-2 0/1 strings into decimal IP octets. | Place values: 128, 64, 32, 16, 8, 4, 2, 1 | "Decimal form of 11001101.00111001..." ![][image11] 205.57.169.66 |
| **Hexadecimal (Base-16)** | Shorthand notation for MACs and IPv6 addresses. | Digits 0-9 and letters A-F (representing 0–15) | "Possible values represented by each digit in hex" |

## **Module Student Master Checklist**

* \[ \] **Network Scope Profiling:** Can you instantly identify a SOHO network based on scenario clues (home office, 1–10 devices, single integrated router)?  
* \[ \] **Physical Layer Interfaces:** Do you know the three primary Layer 1 interfaces on a SOHO router (RJ-45 LAN ports, WAN port, Radio Antennas) and can you rule out peripheral/video ports (USB, SATA, HDMI, VGA)?  
* \[ \] **Layer 2 vs. Upper Layer Router Functions:** Can you explain why the internal Ethernet Switch and WAP operate at Layer 2 (MAC addressing/framing/bridging), while DHCP (Layer 7), NAT (Layer 3), and Firewalls (Layer 3/4) operate at higher layers?  
* \[ \] **Subnet Addressing Rules:** Given 192.168.1.0/24, do you know why 192.168.1.1 is the correct gateway IP, while .0 is Network ID, .255 is Broadcast, and 203.0.113.1 is Public?  
* \[ \] **Management Interface Hardening:** Do you understand why changing default credentials to a strong passphrase is the \#1 defense for router Web GUIs, and why UPnP is a security risk?  
* \[ \] **Transport Layer Addressing:** Can you state why Layer 4 uses Port Numbers (0–65535) for application process multiplexing, while Layer 2 uses MAC addresses and Layer 3 uses IP addresses?  
* \[ \] **Telecom Demarcation Boundaries:** Can you define the Demarc (MPOE/Smart Jack) as the physical boundary where telco legal responsibility ends and customer premise responsibility begins?  
* \[ \] **IXP Operations:** Do you understand how ISPs exchange global traffic at IXP datacenters using BGP Transit and Peering agreements?  
* \[ \] **Binary-to-Decimal Math:** Can you convert 8-bit octets using 128 64 32 16 8 4 2 1 in under 30 seconds on scratch paper?  
* \[ \] **Hexadecimal Notation:** Do you know that Hexadecimal is Base-16 using 0-9 and A-F, representing 4-bit nibbles used in MAC addresses and IPv6?

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAA+0lEQVR4XmNgGEDAgi5AFlBUVLSTl5f/j4ZfoasjCgA19qDxlyHzUYCMjIw0UMETqI1vFBQUPNDVwABQ/qmysrIsujgYAL2gD9S8EsYHsg2ghm5BVgeV88BpEAgANZ1TV1fnRRMDhwuyGFR8P7oYCsCmEcjvA4kBXS2OJo5hAQoAKrAE4hxkMaB3ZoI0AsOSE0mYiaBh2ABQ0x90jUALONDFCAI5OTlfkCZxcXFudDmSANCQ8yCDQK5AlyMJGBsbs0IjYwq6HMkAaMhfZD7Iu9LS0sLIYkQBoEE/gTEnBPSeANAQQWiOuI6ujiAAavoM9R4GRlc7CkbBQAMA2oREVydHCp8AAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAABNklEQVR4XmNgGEigoqLChy5GFpCXl/8OpBiB9HIgfocuTzRQUFBolJOT84XxgeyT6urqvMhq4EBGRkYaaNsTIP4PxG+Amj2Q5YFirxQVFfVhfKD8KqBYCbIaMAApAkquhPGBbAOooVtAfGlpaWEoXxOmBsheCnTddBgfDoAS59CdDNX8H8QGupoTxAZq1kaSXwbEfQgdCAm4RiSxPpAY0NXiUP4DoIvNkeQ3A3EKQgdCwhKIc5DFgBpnggwDuQrK9wfyi6HSTED2GyTl+AFQ8R8srj0PNLQBSH8F0u7IcjgBKAmADBIXF+dGlyMJgGwHGQS0mQNdjiRgbGzMCjIIiKegy5EMgIb8ReaDvAtKY8hiRAGgQT+BMScE9J4A0BBBaI64jq6OIABq+gz1HgZGVzsKRsFAAwBJ8VBXKf9ZiAAAAABJRU5ErkJggg==>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,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>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,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>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAACDCAYAAAAwGEdbAAAonElEQVR4Xu2dCZhtVXXni0Elmti25uVJvaq36/EqoA9NDBUVUaPRGCKmQ3AiEemOkgSHz7Y7jjhL/FSgURE60kFbE7E1iaLYbdDWj2CYQWwHAhGDCAroA2SefED1f927d71Vq/Y5d+0z3Jr+v+9b3z177bXHM/3vueeeMzFBCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ0opt27Y9mEaj0Wi0vs2efwghBYQQ5q1vJbF58+b/aH3jYrnnZrna37Jly6+j7Y9Zf1f0Oa699trr36H+r1l/V/TZd123jEHGovMJWUvMzMz8F+sjhNTQ5wmoCyjYxg8FWzV99p2CjawnKNgIKaTPE1AXULCNHwq2avrs+1oUbDgp758M29WT8PkEfO5j41YSmPvfRj+PwrFnX5s3NTX1eOTNYAwBy786OTn5yykP7sdInvh1mRyo+6Vo52jrX09QsBFSSMkJCAeZOcTfZ/0C/F+SumDXIe69Nh8758ExX+wvbX4VXsG2adOmKdR7k9SPtv6TzU8g/6PeMXvj0N6709iwfGAm/59j/pVYfoXNr8LbPtgFsedbZwJtPgH5d8f+PdnmW0oEG+Iui2O7F/Zym5+jYFwLoMyt1pfDK9gwD6+M/RZzjVUo6Ttiz4d9yfqr0HXLGNaCYMM4XpLmWfZL7M+HY/n46HuejS8B5e8rWR9e5JgT+3eQzcMY/gj+0yQfcW9CeiblwffJ6F9y/LMg7p/66PtqYoaCjZAyPAeNePBasEz+bdj5TojL90uMHJxTPpbfBd8OFS/1XJ7SdXgEG2LeJ3Xim+0mScsyBNyjbJxQNYYcnjjEXAu7Q5Yxzj+J9R+v8iV9CBZ3S21PT08/bqGCGka1H4aCYFBnVSz8Z0jePvvs80tzc3MPqorTeAUbYs6EqNhblrEOnuOpW/DGJVD3V7xlPIIN+d9O9WGdHVk3fxZPXKov2lk2vwpdt4xhLQg2ITe/8QvWyLmsA+V/ALvH+rsg9nmJYEtIfu5KWkl/2o5/tUPBRkghJQeN3IE353ekP5erJ4dHsMX6PxWTcrVJ6t5dxwipH962PXG6Pvm2beuP6YGgs/GjKIj7RkXs7uLHHP6ZJORnnIq4RRQINqn7jSp9A2w/HZPD04cEYu9EG1/3lnEKtnldn03X4Y0TYr3nWH8Vpk9rWrAJ8hNpzr8SiH2uFWy279hOL5zIHHeqsOXXGxRshBRSctDIHaQEuXqj0zYupcVwUHthXP6cLlPFKMG2eXgviNT7UhwA/ljuMbExAmJ2TE9P/6btWx2euA0bNvyiXF2S5RB/bg3qp0Es77kzeunc1OGNw7gvysWm/sjVDPTxz0Ww2ZgcJYIt2datW6dzfcjhjQO7IvYfYG/zlvEINrnSiDH+VkqnMeiYKrxxQqz3XOuvQtctY1jrgk2wfqS/H+O/qf3q6rXE7xpjvwm7U5axbz8dyxfArpXHR+Dz6hCPMbKusf1fAztZVSnlz4513iz7iMkTf6VgQ3++KDGzs7MPSb7YtwWQ3hP2vVjXEuGe4nHMeiSWL4XdK2n08x1h+CVs0baD9I1SBmPdqv2rFQo2QgqxB5k64oGnNn4m3q9lf5KE745UXgwn+F/R+VWMEmyo6zzdL7T/GFnGQXA2xaCOT0zEb76eMSS8cUKqFwfTJ9q8RIgHXCzuYvNyeNsPwxPVklj4Hoj9Gtx3KFfaJI052sPGaryCTUjjTmbzc3ji5GdjxN0vy6FjwWaJfR+c+Efh7YcQ66Vgq9k2xI91/QdpOflFCCF9cfLDTpJlbLsvg50uy/JFydYb07vF5VfDHlB5P0fZ75jYJcspHWoEmxBjfq7S9svZDtgtshxF5JI21PJxOo19cCPS58lynItFfZX4lF6tULARUog9iNQRDxS18bmDCdJXRr9cLRnUMaqehEOwfVXqws5/jPJJ/YMDafzmfbfJc7XtjUugrclY/7U2T4h5h1l/Fd72Q7Vg+3lsc3DimZycfGhMX2JjNV7Bhpg7Zob3J14S65X18H4bZ8n11aJjQo+CDbE3YBv7svVX4e2HEOeEgi1uG9YvxG1mBuvgTbIsX/SSpTI1ZQ+weWYOD4OdqNK3wG5OacXg1gHtiH0eJdgGV89kGUP4I5uvwfj+fa4NtfwenZZ/n4Yo2EK8DzXNy8zwS7HrTzgrGQo2QgqxB5E64kEsG4+d7xnmAJQOZEfF5YV7O5D+WlU9Fodgk2/RctA/WPkW+pmWc7azljzeGB1n09H3ethdOkbnV1EQVyXYBgJZnfjTHx8Wrjrk8Ai2zZk/AiD9I+vLMSpmZvE/OK3dZOM1JYJN6ktXerH8XJufQ8pYXxWxvxRscd1Zvz5m4PNTuRihyp+7B06nsY2+cLP6xybytgcldCQW+dvScvKndHD8izWWk5/ul/QxDL+oyp+tFq7um3y9vhd9KZmdnd0Qdgo2+WPTkvpXOxRshBRSciCIB7FsvPjjN79zYd9KcTggvlaWN27c+DAbr9NVjBJsQuzXq0x64aqapm4MFk+crc+mk0/NzXdtfhUFcVnBln5KSSeleK+MpL9iYzUewYb8z9s2431st2lfDltuFCHe12T9ObyCDTGXxXUi9zHJFcLBz6+j8PZDkNhAwZbdJ6JfHssx+BlxZvjomUUx2E4Pj3FS/rHJj9hD4+eTbRmdRvkXZQTbYPuE/zMo/y6VNygX4mNYJI2Y30/5VSDuTtgliH1HJm/R7QeSlp860/2Tpq+DK4wpLTFIXxDzBsfQlCcg/RKdXo1QsBFSiD0Q5AjxeUfWVP6SvLD4itLg2zPsTBx8viDLM5nnleVwCrZTYp1/F9s5IxOT+rVgNsbijJEbn6W+wbOZxNCPR0seBNIv2Daj/aOtJ4fEWp8Gc/O0TN2LyszEPyTg8/SY/wGdn8Mj2ISw86dQeQaf6+qa4I0T0piUtb7ClqlzYDYuhyfO1hvNe7UmLa8JwYZxfFjNwV9hmz057LzvdIuOjaLtOnw+A/bMiXivZ1ynIqCeKlfV0sNqQxTy8H8Cn0+ZiX8EwOf/wOcHYD8Ow5/tT8DnIbFNiX+R7KNYvg+f8nPshbCPI30sPv8DXB+Kcdfo/lWQvbomxPbkPjz5yfWeMHwW4v+JafnyJvmDe/PA4N/taPsx8TaOY2MfPhHrkp93vxHnaHtqYzUzQ8FGSBlyULC+vsAO+nv633kePIItgbE8317Ja0PJ3GBsh26OV7K6oqT9UaCug+TfkdafwyvYBDnxyU3jcuXA5lXR5bgsHsHWhj77ruuWMawFwVaKbKPYj16c255ETE0UPDbDgxwzVHLw79NSsA+82foScjyS4571VyFiTe41lWX0bT+9DciyHGd2Rq9uKNgIKaTPE1AXlAi2rlnuuVmu9ksEWxP6HBcFGyGrAwo2Qgrp8wTUBRRs44eCrZo++07BRtYTFGyEFNLnCagLKNjGDwVbNX32nYKNrCco2AgpQMSQnCTC8E8BK9XkBmXrG5fNZ3zjtPmMbxz2j2H4SALr78rmM76uTB5lcn3G35XNZ3xd2bxaljHIWGwMjbZqTX8Bp2AjpIAwfHWK/NV8n5Vq2MHfZH3jsuWem+VqHwfSg9H2Z62/K+tzXPH1Y+dZf1fWZ9913TIGGYuNodFWs8k5J51/KNgIKUROEta3kuBPouNnC38SraTPvuu6ZQz8SZSsZSjYCCmkzxNQF1CwjR8Ktmr67DsFG1lPULARUoC6h41Go9FotF6N97AR0gLZiaxvJcErbOOHV9iq6bPvum4ZA6+wkbUMBRshhfR5AuoCCrbxQ8FWTZ99p2Aj6wkKNkIK6foEBIH1GutrQxvBFha/dqaYNnODg9H70feXWn8JTduP7yI8CcLr12yeh4aCzf1an9JxYS4/ZH1VlAi2NE/WX0dJ3+P8N5qXLgUb5u9AbIvvCOofegn0Mcj8oq29bV5XyIkZbR87UfFaKeS9zvq6AO3uj3G/b2pq6pE2r0vQzumYv83W3xG7WUcP7Ip9Yat1ajCPT53IbMuZcQ/e/+qBgo2QQkpOQHWgnm/NDF+6fI7Na0MTwYY+3Iu+/E3bsTUpjzJHwHao9P06v4SG7S+0Nzs7+xCkj9P5HryCTcQ54j4X+5k9GefwjCvW/W8S64lPeAWbnicsX+2dJ09fEPNA23mRMXgFW6jZ3uH7qlr+mWnjgbQc08frdBWI+6T15UDcAak9fG6p6N8bcv4qCtq+VSXlZeuuNrxzoJG6sb3uZf05vPUj7ibYf/f2uwno84tT/fLlQpbFIN4el2Ki7+oY/07bn1RG2Td0fh0UbIQUYnfANqCuZ4UVINgSbcfWpLyUwYHoyJSWgxLGMKdjvJS2v23btgfbMjbtwSvYErGNRsJkFPEk4I73CDY7T1hHT/C24Y0T2syLjMEr2BK5volPxivLW7du/RXTxr07I/Plc5TEwQ6TZXkJejACMcac661P8MZin/u6TnvLIe5666sjRBFcINhK63f1uwmo+06pX640S3pycvKX4zpLbe4iy7LdqDIy1vfqdDLsRwcmvwcKNkIK6fKAECjY0gFsv5SWnxJC/IZaSmn7iD/Dlon92aJ9o1jrgq1qnnS6Cm+c0GZeZAwdCbbnpuWpqalNpo2FucXJc//Z2dkNKa+OXDs5VN1/h/3gOZn8s+Knqz7BG2vGJj/J1m4TiVAgqBB7Y/xclYJNgFj7A50283a6bV/np7TOL4GCjZBC2uxwlkDBlg7e+6Z0fPJ+cT1CabkwfJ3UkgNs7mRZxzoQbNl50ukqvHFCm3mRMXQh2DTI/6qOwQnz0Wl+YZfp2DpGtZOI9d4uyzPD2yX+NeXJvU/yE1uKS/5ReGND/Dk22qk2v4rgFFSIOwRjemZcXlbBhpi3jDJbJgfGc1Qcy2sljeXLbfuS1r6Uhl0XP/+Xjq+Dgo2QQuwO2YYwFGznWn8bVqNggz1WpfdrUo9QWg7xP7ZlYn8GP0t5aSLY5ubmHmT9Vdg+1hH77453CrbsPOl0Fd44oc28yBi6FGzpZ2DsT09LPhFN8O1Iczw7O/twXaaKunYSGzZs+EWJm5ycfGjymfHp+zxH1pfwxmKcv4PY7WlswX/vm0tQBXXVXOpfTsHWEbvGcXwkOZC+w7af5lOl9XqU9z5LnuuPBxRshBRid8g2hKFgu8D627AaBZtcVUvp+E/Eq3SMl9L2MVefsWUkLf8E1L5RNBFsOPjuYf1V2D7WIbEl8R7BVjVPOl2FN05oMy8yhi4FW8hcQYPvS2lZxFpVebkhXZvEWZ8tI9j6UhqfL4D9xtTU1OPlBnfxy6e+Vyph2ylo+w1pecvwHZbesd1ofbYMYk6U/kufU/9hz5X79GysrctTv6aq312Srqylex1Tm9hPLrTtx7Em3y4o+/cq7y9j/v9Ovjoo2AgpxO6QbUBdz8JOeJH1t2E1Cjb0+YUpjeXDMSfH6Bgvpe0j/vm2jE172NJAsOkrKaMo6VM8AbjjPYLNzhOEwrS3DW+c0GZeZAxdCbaw+B+Tid1lPWtHLD/y6khVOxYbl9Jo90lh+G/qZPPyudnx5xxbZw65umZ9KPfX1pcjOK6AYX8+2PYfvjdDvE3aWIunfo1jvLuF4b+ca80W0gT1hVLGkNrEmI6MywuPFpE07HJZxjx/QdLp6iKWj435rn9cU7ARUkjaObsAO+6zUd8l1t+G1SbYNg+fd7Xw7zss36fzS2jSflD/xJOrO7Av6nwPTQTbPvvs80vWX0XJuOIJwB3vEWyCnicsX+Wdp5K+tJkXGUMXgi3NnzaVt+iRM0j/QKeryLWTA3E7MK8vi8vZx3oIVf4c3thghFHI/EM1hy3nQfqEcT7G+nOU1u8dbxNwrPpzqT9jA0EmxPQNMf6Nuj9yfNHpVD6lR0HBRkghJTtYHWH43KDrw/Dm0+0TBTdb19FEsIXh39V/GvsifbrZxnhoOjfo81dQ9lTYT7B8ss330rB9+Sv+XbBTGpZ3C7Yw/Alc7hNK8/wzG5PD069YtzwyQeoebFO5KycWr2CbWDxPZ9vMKpx9v8fMyz02JoeuW8bgFWyhZnuXOq2lPJwwnxl939X+URTEyhzfAvuWlLHiVa4+hp39vgF2tM7P4W0bca+TWGwz18gnxvoIG5MjFAgqxB4EuzH2X/b1Z9sYi7d+xJ0ldaa6YbfZmLbIvFTYwsOkN23a9KgQH10SMqIXx4qNqRzm+DsTmYfrVkHBRkghsqNZ30qiiWDriuWem+Vq3yvYmtLnuAoEWyP67LuuW8bgFWzjBn37qPWNi77bhoh4v/V1Sd/1ryYo2AgppM8TUBdQsI0fCrZq+uz7ahFshHQBBRshhfR5AuoCCrbxQ8FWTZ99p2Aj6wkKNkIK6fME1AUUbOOHgq2aPvtOwUbWExRshBQgYkhOErD3rFRDH79ofWO0+YxvnDaf8Y3D5EZ8uVHc+ruy+YyvK/tvsKsy/q5sPuPryubV8lVhOBYbQ6OtWtNfwCnYCCkk9HjFoAt4hW388ApbNX32XdctY+AVNrKWoWAjpJA+T0BdQME2fijYqumz7xRsZD1BwUZIIV2dgFDPW2G3wm4L6rUwbWkq2NCHB2BnwO6caPhMuDZzg7KfhZ1j/SU0bR9zthfK3j3RcNylgg2xx08UtOUdF/rxuzKHYfjuT1d/SgRbGL5H8zRv3YK370LpOtB1yxiWS7CF4dPxvxfn5y9Mnjw37X7p60x8KG7XYPt9cdU8h+FP9ZdU5bcBdV4Zn9t2NT5fZPO7QOazj74nUPfZsDPlmXCw54Th66LOUPmHSPvR5Bl58rzAa8V0PeOAgo2QQro6eITFLwFe9AT1NjQRbDKmqampWVlG+X2bjrFJOZT5XIgPCg3LINjCUKi+PZZ1iwWNV7Bhbl8Tx1vUlmdcWH+/quPCiNfrJLyCLahtVOoOztfpePoe10GreZExLIdgk4fbou2XpLT0CSfWP5RlfO6v/PI+0JFzIehyo0Cd52C7+nKubvHBDkjLNj+Ht+3Z2dmHzM3NPSilUf/t8G3QMW2Q96aizp+gP1d4+94E1H15nKcFM/kn2fxo39Jx44CCjZBC7A7dBNTxV7CDVFoO5m/VMU1pKtjq0l6alhPiQXDsgi2yayzrFgsar2BLlLblGVecvwURFZ+4/lUdk8Mj2OwVnFj3yD4J3jihzbzIGJZDsIHd5SpTSkifZuILvsPwCvqNJu/NKV1F6YkZ9R5t53nL8P2jCy+r1+KqDm/bqPtE/S5QpE/BPLxJx3QB+vPPdmxdgrq/J+sLn4fZPCEMr/rq9NvlSpz2jQvvuiGERLo4eIThK372S2kcAJ4anFdERtFAsMnrcCjYCsWCZgUJNvtz3MhyHsEWhj+VN9pGvHFCm3mRMSyTYFtE7FP2dUOSh5PuwdZvQdzrrK+OkBFsSP8b7A3xZz7ZLrJ9snjblivy0ibsREnb9rtiHIINc/RG60/otrH8lD77MgoKNkIK6WKHlTpm1MuPkd6vi3qFUsGGk9zetu3Yv0drnwdbTwnx4H+u9ZfQov2BYPNehbA0EWwlbXnGFdfZK6xPp3M4BZu8n3HJNqLTVXjjhDbzImNYLsEWfxb9Nuz+jRs3PszmC9gvP+idC8S93vrqCHnBNm/mp/O2Efu21A7sBTa/CzyCDfnfl6uc2uD7IewHsCtRxxX6aqAmxPfCynY3E98Vi8932ThhVD/6hoKNkEK62GmlDhxU9k1pHEx+s4t6hVLBhoPAI2zbkpZ7VLTPg62nBCkLO8/6S2jR/kCwbdu27cE2w0MTwVbSlmdccf5ebX06ncMp2Ab3GBrfyLoFb5zQZl5kDMsl2DTSJ/kJOeeXF39bvwB/kHu2kiH2eJ0Wm6i58hgqBBv27Q+p9L+EjKhq0fYuqP90WUCZH8X2nmFi5Hi0zdZnzZbReARbS3bRCWkr1x76cWTOP04o2AgppIudFjved/TBDcu/hwPbhTqmKaWCTbBjsmkvTcsJUrbtHLRofyDYcPL4BZvhoYlgK2nLM644f+9MaWxTe8D3gI7J4RRsH9Z9iHWP7JPgjRPazIuMYTkEG/r7SHzsltLSJztmncaXsyfqvByh4CqXEPKC7eaZ+OcHQfatUetZ8LadaW/wb0rt64K+BZtdXymNdp+pwpL/NO0bNxRshBTSxcFDDgZ658Pym2FP1jFNWc2CDXNwkfWX0KL9gWCbnJx8qM3w0ESwlbTlGVcY3hf5+ZTGXO6/2XETuEewSV91H6RuT58Eb5zQZl5kDMsh2KQPsOtMWvdr4d/gAtbJ03Q6R3CKpkTICDa5ymeOMVd4jg3etm17Vb62zDgEm2zniHlLnU0oUa2RunX9Nm38J1n/ONHrkxDiILczN0HqwQ74iJJ/3HnwHJQtaP8bsLPi8nlpuZQm40CZ58qBMB0oYR+dcN4gbWnSPtbBh1Du0rg+rpC0jRmFV7BNDR+98VHV1gk2Jod3XCpuN28Zj2ATEPNh+XkrLrvvcfT0I64DPS+udaDrljEsh2CTK2bo73+V5Xgvm/RpIA6w/K+S1raocAXBKZqEMPzH+T1SN9bPR2D/WeXJz7C/vnn4p6ZO245jTX8SSn9cWvTzYkukzsGV3WgnBvXP+q5AncfF+k8N8Xl5E+YnYPmZXvxpPS8XFGyEFBJ36E7AgfSD2An/xPrb0ESwCXJQh30c/ZmxeV66nJsmLFf7XsHWlJJxIfbT8cDuEr1ewSag3ncj9rMTzrqFkr6XouuWMSyHYBOiIPq0CCab14TgFE0eUNex6Nc7rL+Kkrbl/jdwnFdgr2TkimTdc+TwZWuT9Y0bCjZCCunzBNQFTQVbFyz33CxX+ytJsJVSItia0GffV4pg6xpsT0+yvnGxnG2TeijYCCmkzxNQF1CwjR8Ktmr67PtaFWyE5KBgI6SQPk9AXUDBNn4o2Krps+8UbGQ9QcFGSCF9noC6gIJt/FCwVdNn3ynYyHqCgo2QAkQMyUkC9uMVbD/L+MZl8xnfOG0+4xuH/RR2Z8bflc1nfF2ZvMVA/mVo/V3ZfMbXlc2rZRmDjMXG0Gir1vQXcAo2QgoJPV4x6AJeYRs/vMJWTZ9913XLGHiFjaxlKNgIKaTPE1AXULCNHwq2avrsOwUbWU9QsBFSSNcnIAis11hfG5oKNnnFDsZ23KZNm6Zsnpe2c9N2Lpq2Pz09/XSUPQnC69dsnoeGgq2XZ5nhoH7UjHkJfB0lgi3Nk/XXUdL3OP+N5mUcgi3uI1usX/Y5zPkJM5l3acL3hyhzSslL7UtA24fLc9bQxp6ZvEG/rL8r0Oafoo2PYL39ls3ritJtog0bN258mPVp6o4PmIsD5GHC1t8lFGyEFFJyAqoD9Xxe6go7nxbeCU0E28zwSfPnxuWLQrn4GNBkbsLwHYSdzEWT9jHeQ2fia8Fk3E1eeu8VbFg3c4i7OPYz90LtLN5xIe7n8ilj8JbxCjYzT/PeefL0IwxfrdRqXmQMfQk21P02rLuvS3v4/B2dh/SX4d8icyP5sENSHraLjejT3rIM/42IednOku2R/TaJBNR/7Wb1loO6fnWBiPc032jjBNT/GzamDaHhNlEK6j8Ic/XeOEdn2nwB/gdi/qdjf3TeN2Pep+QTdb1P53fJDAUbIWXYHbYNqOtZoaVIsTQRbHZMNu2laTkhHvRazUVp++mVM9pn0x68gi0R23CfhDx9Qsx22KdTGgf3JyD9Oh2TwyPY7DzFukf2SfDGCW3mRcbQl2BLSHtasGF5Lzs+Saf3oebydLoKvR7rkPrSg251X2y/wvD1VZ23XZeuAnE3W18dsV73NtEUaQd2doV/8I7ezcMrmfJl5eGSjq+ak/yFfV/SIqRTukso2AgpxHtg8hAo2BaIB75Wc1HafojvMDU+OeDuoX2jWCGCTebv7SkdRdY9OiaHR7DZebICrg5vnNBmXmQM4xZsyWfTSUTFdfIUWRYRh+XbdWwVwSma9M+s8SrX4AqroPuFvCNtP6vwti316dc1IX2+zq8CcbdZXx2x3+5toilxXQ1+ZVC+I8SPdf7U5MNcHqPyj4/ljlU+SbvmuhQKNkIK6XJnDCtAsG3dunXajknSclLWPg+2nhLiga7VXJS2j/grbRlJYw6fo32jWEGC7dXWp9M5nIItO086XYU3TmgzLzKG5RBsGuQ9zY43rhcp92faX0dwiiZBrvrgRH4Fytxo8xKpD9afw9u2iMVUL+wum18FYu+wvjpiv2u3CcS8pc4wP4faMpY4jkWCDXN7TfRfBXs97F5JqzIHxfwPKJ+kXXNdCgUbIYV0uTOGoWBbdJBoS6lgw7fkWTsmSTd52bGtp4R4oGs1F6Xth+GzjpaMHXaY9o2iiWAruQnd9jGHxOCA/krr0+kcTsGWnSedrsIbJ7SZFxnDmARbpZiP/Vl0gzx8l4g/2hE6r4rgFE0alLkrZP4QIeT6VYW3bbkKjdh/SGOTfcDG5AgNBFvJNtGUOA57hW0wNqzzz0ha7kmMvj81MT+My3+dyqT8LqFgI6SQLnfGMBRsrp8SvJQKNrCLHZNNe2laTogHulZzUdo+4r9my0gaczinfaNoIti8N+0Lto85Yr8X/cvWU84p2LLzpNNVeOOENvMifRyHYMNJ80DrF5B3Neb/g8an+zdfNRcpr85smRwxbhfju9r6NLadnNkygvZj+Zy6uFFmy2gkv2SbaErsixVsV4sf63Wv6No9xt2dYpD3IjWWv0jLKb9LKNgIKaTLnRF1PQs74UXW34YGgm3JmGzaS9NygpRtOxel7SP++baMTXtoItjSjekePH2KJ4qFR27IT93YFi7UMTmcgm3RPOV+Rq/CGye0mRcZwzgEG+ygjP/etIxt+BnT09Nb4XtPiDerq7wrdLqK4LjKFdtYsu2ijaNUelG/0nIdnrYRcw62rdcan+uLTmhwhW3UNhGGwqrOLrZlLNJOWCrYDov+wSNT4lVFGec1KkbSHzHpk1O6SyjYCClEdkjra0oYXmEbeTApYTULtrZz0aR9W8amPTQRbKOe+aTx9Akxp4X400xMv0r+xaZCsngEm6D7IHV7+iR444Q28yJjGJNge5724ST6iiietsgjPPD57Rh7QFB/Aoi+BQFVR/CJppfbudXzp/uFz8elfo3C2bbcG/b/jM+1nkMDwVayTTRF2gmZWzKi/+WyjGPrNknj89km/864fKJ3HppAwUZIIV3tkKjnJtj1Yfj+w+0TI26s9dJEsMWTthx4TpXPUd9oq2gyNzgIvTvOhcxDq7lo0v7E8Cdhuf/nlIbl3YItDAW6PH5Dxinr/mc2Joe3X5jLY7D+v4D4y0LmEQU5vIJtYvE8ueoWPH0Pw/eA6nkZ+e9WQdctY+hLsKHu+0z/BqIDn8+TPlhL5dLz8GBnh+FJfbeFSmsIDtEkIO4FYTh339XthhH9qsPbtjxgG7H3wy7w1i0Ep2ALDbeJUlDvLbCfqHZuCEaUI/09GSNsB8TvE3Xe5vioj2gjjwFtoGAjpBDZMa1vJdFEsHXFcs/NcrXvFWxN6XNcBYKtEX32XdctY+hLsI2b4BRNfdB328Ep2MhSKNgIKaTPE1AXULCNHwq2avrs+1oVbITkoGAjpJA+T0BdQME2fijYqumz7xRsZD1BwUZIIX2egLqAgm38ULBV02ffKdjIeoKCjZACRAzJSQI7zv9dqYb+XWp947Llnpvlah/tng+71vq7sj7HhbrPhN1k/V1Zz31fqFvGIGOxMTTaajb9BXyGgo2QMvq8YtAFvMI2fniFrZo++67rljHwChtZy1CwEVJInyegLqBgGz8UbNX02XcKNrKeoGAjpJA+T0BdQME2fijYqumz7xRsZD1BwUZIIV2dgKQe2J7T09OTXdUpNBFsaP9YHAyuaNuPhuUX3mXadi6alMW4D4U9WZZR/mNN3ltYItgQd338/BjsX2x+Du+4Qnyyfnpgq83P4RVsiDk6DB+U6qo34YmXdaDnxbsOdN0yhvUi2DDWizHWvePyDTZf8Mx7KahzB+y31b28e9iYrkD9t0obsL/NjSXmyVsH5EHRku96KPFqhoKNkEJyB48moJ7/qZblYZWVL2guoYlgm5ube5B8th1bk/I4CF3U1Vw0ad+WQfp+nfbgFWyIORYfu6q0q7+eOKkb9v2UxrwemU7qdXgFW3w90K6evmg88TFGz4trHei6ZQzrQbBh//54iK9C2rRp06Ny8wvf5Tl/FYi9yfpyIO6zalleT+VuowTUe3zaJrAdz8gyPg5U+bfDblHpedj5Kb1WoWAjpJAuDlKo49Lp6emnpzRO+L+LA/HXdUxTmgi2RNuxNSkvZbqai9L2EX+SLRNPDkVXDgoEW6O2bLkc8aT19pTetm3bg4PjdT5ewRbpU7AtSpfOi4xhPQg2GfPs7OzDrT8h610+7ZzWgdjbrC+HrdOmu0Defxu35bcmH5bfoJY/GdtdEPjYVk7Q6bUKBRshhXRxkJI6cGB6fErjhP8k+G7XMU1ZjYKtq7kobT+YdzBGn/zMMqd9o2gh2O7ytGXL5Yj9fo316XSOlSrYSudFxrBeBBvmZt9Q8aLxEH8Wz+VVERq8LgplDilpwwvG9k6pNwzfkyqfMt4vp/ww/FlW/Pup/NfqOtYqFGyEFNLFQSoeaB6r0oODj45pymoUbF3NRWk5xP/Ylon9OUz7RtFCsN3macuWyyExOKC/0vp0OsdKFWyl8yJjWC+CTV+RNnNwd84/ilAo2OLVW3f9JaDeS+P6/5HySfpUtSzb+itM/gMpvVahYCOkkC4OVKhjR1dXlSyrUbB1NRel7SP+a7aMpD1XdzQtBBuvsE0sjfGuA11OxrBeBJtNh/iFR9+zaOM0sUyt2TIayZerfNbfBRAlfxP78PLk033K9S/nW4tQsBFSSBcHBtTxYRzwXpjSWD4cO+MxOqYpq1GwdTUXpe0j/vm2jE17aCHYXG154uJJ66SU3rp16zTm8kIdk2OlCjadrkLHyRjWsWDbIusbn0coE/8R2AZ+X8fnCAVX2BB7q1r+J52nQd7Vo8yWEbAON0vfcQz44+SLYxmMG5+npOVc/lqGgo2QQjo6MOwm3yRTAst/P9Hwn5GWVSjYtnc1Fw3bX3Lw12kPBYLttAk1Nm9bnjipG/ZDlX6V3MCtQrKsIMHWal5kDOtFsMG26LTOT1T5cwSnYEPcZTi+bIPtheXHlrRRQhzj35r00TotfTD521N6rULBRkghXR2kcMD5Cuq6HvYTLJ9s85vSRLChD3fCfgq7LvbpZhvjoencxLk4te1cNGxfngN3V8h8c/fiFWwC4u7fHJ8dhXLB5ufw9kuuTMa6L4OdbfNzeAUbYu4Jw21DtpHtkrYxOZx9l3Ugz3grWgc6VsawHgSbgLFeCbugaq7i+knr6Sybbwl+wTZv7Cob0xWo+2LVzpL7GcNwW0z5e9r8tQgFGyGFyAHC+lYSTQRbVyz33CxX+yWCrQl9jssr2JrSZ9913TKG9SLYuiY4BRtZXijYCCmkzxNQF1CwjR8Ktmr67DsFG1lPULARUkifJ6AuoGAbPxRs1fTZdwo2sp6gYCOkkD5PQF1AwTZ+KNiq6bPvFGxkPUHBRkgBIobkJEGj0Wg0Wt+mv4BTsBFCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQkgj/j8d5vLi2xOqiwAAAABJRU5ErkJggg==>

[image10]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAZCAYAAABkdu2NAAABmklEQVR4Xu2XTysFURjG70aKEKmpuTNzxrg1sZ2UjyDsbC0sZc/KykJZKT6CLIitsvAFlERZkwUpK8RK1/M253Dua9zOjLp3LudXT3Pef3PP09zmT6ViaaRWq/Xz3J9BCPFKxzAM97B+5PWOBobWgiCY1eIzx3F69Z6OACYGeY7AVbuEJlWMvmOYnNF72kEURQM8lwk2+wRtQYfQG1R3XbdHq7/D1LiKYXafrqqKWwn2EeG3V3G8pX3y+jfQdB7HcR/L1fVhGY+pmAxCGypuJTA2nyRJF46bpgYbzMjcNuU8zxuS8Y3v+xNa/QgGFz4H2kAegy+8EcMr0viI7NmBplUd5k5hePRrovUYG8wCg1f6MP0lEF/TGuYWhXxktJPfGqSrd5CRX8LNZ5jnf0Kex1h8vhmFDFarVQ9Dd9AJr5WNQgYxcEFDeCXr5rWykdsgmnehZRXTe6f+LCwbuQySMWhOz+EE63pcBJE+bozF55thbBB3xSlqzBLvLRPGBrmpshsU6WvlA3Qv0hsirZ/pK4f3WiwWi8Xyn/kAuIaW8AzShlEAAAAASUVORK5CYII=>

[image11]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAAeklEQVR4XmNgGAWjgDSgoKCwEl2MLCAjIyMkLy8fiC5OFgAadAJdjCwA9F66nJycC4qgiooKu7i4ODepGOiqWpTwAnIsgILepGKgvkYg/RAYZpxI7iIdAA15BzSMA12cJAA05CW6GDmAGRjQeeiCJAOgdzahi40COgIAlrgbgMJjCQ0AAAAASUVORK5CYII=>

[image12]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAZCAYAAADJ9/UkAAABzUlEQVR4Xu1UPUsDQRRMNKBi4TeRJJc7LlEM2NlY2Fn5UdmmUQut7G0UBLEQwS6NWgkpLBQEexv/gDaKlZWIH4VoEMXEeXH3fPfMbdDCxhsYsm/e3M7e47KRSIh/j0Qi0S21Wkgmk11SI2Sz2Sap1YVt20/pdHoTXMb6FaxAjnEPNu4hHSw4jjOA3xI4xT3Q55XHR7QauM8DmmfxeLxVaPohn+a6bpvUeI3Dz0G7A8vgG+o13v+GgKCi0qJU442GpYdAGgIWWD0L5rjHCPtzfDJ8nTSENqt6Q3qUTgc/0jX8Mz8KrwVscM3DsOmpIfxF1/BNUzimMYLfS/AYcuPXE/URVZsWtID1jSG8kslkLFXnwVvLsgapTqVSLdTHodr9TwYA5nvwQGgXpnD6J8iehvI84iCdsucDGVSIb1TQTgzh5YhhtPqA4ITseUBzH3zXtXqb6qbQtw3h56y+AvPC80w+jH6F6x7QXALHhbaj13TzBYXj45rkNUIOpYeIqfZxvQp6WBskuU8Fjepa33jCU+I1XbfkweXUz3UPMpBTWGNKfwC3aI3DdAiPN2ZbfaTwDEnPr4DNcuAquBv0Nhh7L7gI7sE3JvshQoT4U3wADYepZ/Gcyb0AAAAASUVORK5CYII=>

[image13]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAABSUlEQVR4Xu2SvUoDURCFN1go2gYWlv1ntbNIYa8gPoNVsBcRwSKFDyCCaGOhIBhQLGxsFZ9AsAyWgtiJoGATJOg3YRMmk4WokG4PHO6955wZZu9dxykxNkRR9JAkyYrv+/Psa2EYHsRxfGwy3/AU7uBvwg3260KyazqrCzTvfpHpk6ZbNi8Fnyp0ZX0B+jvTXYsPL+A55xupwa7YvIN5ZjWNIAgWuJpZq9OwA5es3sWopkWg2SPLhNX7INDiXu7hLvsj2LYZDXKLZC6tPgB5bX2m4AO+ZFk2qfUe8nv8G5ikKYXyMNZL03TuX00p2pdCuZYCb29k07x4IMT5RDQmvtU65yn0ts0PgUCHz1w22iv8gjWjb+dDvGl9CJ7nVQk9sU7LmWlWpbDokeTXE4/12XpFqNDsUB4G1q3Zg+u6M+QaPFZovRIlxoQfn0JliFzQmj0AAAAASUVORK5CYII=>

[image14]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAZCAYAAADJ9/UkAAABzElEQVR4Xu1UPUsDQRS8iIqFoiBXSC7ZXAxEglbB1kLsJZWI+gusxFSSTizERkEE9S/YpbYQwULUyk7UQsUPUGyMGPBjnvfOrO/2LoVgdQPD7s6b29m9O55lxYgBJJPJXqmZkMlkeqSmQynVh6FF6hKJVCo1iM028cAL+CkNPlArg+/wrmEs0dzgeQbf0un0GHyHROn5AW7qwDBOczx0FhYOfZbCcNB+WmMcJi8dXPNcg6eWdmPygFP+OhRNwmmTUV3Doef0NXsWhHYC1pt9ptDwYrHYRjqNsqaDw+eFts969O3DwqGtkE6nx7fcw/wcrBUKhXbho5Cy0I5Y39D1ACLCd3mDY4u/Zzab7ZZeWuOAq1Ij0qF1PYCI8O9XZ7opwpb9NQJmOGia6y54ywfYajxpQET4TohOm94Lraa8H2wS44VqfPOK7gsgIrwSotOmdPsOWfOB+hN7BmTtF8LCgYRJ5/Cqtl6iBmTwlHTNiIhwqj2Ci/46n893sVc2lA/ltVbqAxOY1/16ALZtdyqvJd4p7+cgPoCv0qu8DkYBBzTmcjlbrzuOM8T1K/AGvNTrfwI1Gf6jq67rjsg6QXlteBtcx7JV1mPEiPGv+AL9bKgjQH65bAAAAABJRU5ErkJggg==>

[image15]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAABdklEQVR4Xu1TsUrDUBQNKhYVJ9FAEpJAAikRB3FQcBMEhQ4q6OCi9AcEJ6GIP9AfcHDp0lFw8APcHMVB8AvcKhTUUjSeKzftfdfQrVsOXPLOuefed98jz7JKjBVRFC0FQdBEZIiO4ziz2kPwPG8F+XfyhWF4ovMDIHkKU9f3/RpxrBtcVBW2CdZeicRxXAH/RrwJzxCURMNDwfs88YHQzhE9TOoy32VPlnsGgFjXCUwTQluVGnkgb0gNg5zlmxjIp6K167oLWG9pD12L3Bj8CJ9JYTHBR6CLv4d5DTvPkIY7WxSeNvteEE3S4H3EumUVNWezcXzwS9Jw3B3mz8zXlY9qP6QmE0bT/LiIPntutYf1f7Uy8Sk1mlAWgF8XFY9q2kX8SE1M+lcAvllUPKrpsU4Ew5//QmhZmqbTylfclIBEB9NcJUkyb/HLAV9Wnn3EFzbaI47vA/iTbdtz0mcATbZhaiFuQKd0nsBPs46Gd/pPKFFiTPgFcRl+Jk1w6KgAAAAASUVORK5CYII=>

[image16]: <data:image/png;base64,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>

[image17]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAAq0lEQVR4Xu2STQrCMBSEu/cAQfOfvVdx6V08i0co3qqoK3EpCtrJpouh9pXYjZAPPgjDS4aQNE2lshRKqZUxZuu9P8IPXPOMCDa1nDEhhIO1dpfXvxSdOJuiFg2UFOG9NpyLlBThB2rOBzDQweeI75Es2/EZmVyktTaci5TcKKXkOBcpKYoxes5FSopg5FxkThFmXvAOr/AML/AGHzz7lTlFi+Cc23NWqfwPPQi4PctjqOcGAAAAAElFTkSuQmCC>

[image18]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAYCAYAAABz00ofAAAD70lEQVR4Xu1YTUiUQRg2tX8qK2hxd91vda3NpQ61FEGB1qGLEQURpFBQVBRSEFGHkrp1MIoOSoQF0SE6dIjC8hBBh4LyVilEPxSUkRhRUfmD9jztjL2+zrpqa0J8D7zszDPPO/O+883M983m5Pjw4cOHj/8enucVRiKRt/jth32KRqObtIZA205YJ+wb7IFuJ8A/hVWGQqFwcXHxepSPw15r3UShtLR0KuJpM7l+hx3SGgJzUM64YT3MCVS+1hjkor3F9NeLeVyjBU6Ew+GlcLhu63BMsBMMfF/qwF2Etdo6/KZTJzWECWDA0M9zrZkoBAKBmYipzdZLSkrmmDg/SB1i3gGuS3Im10mSg/8i8olEYorRlBldZkDYwgAU16c7IFdUVLRRcQx6meK4ish/xUPcwxUm2ycSiOk0JnWV4todub6CnVFcF6xGca2wJltHvmd1X2lhJmmQGMGdNHwZ63yiWkOAe8kgJYfBm2V9vIBxGzSXCWbydK4VJtf9QtePPOZKnZfa8QO+WIRB3ReQD26X4tzgCsAgByQH5zp2ys5NvcYxCPl7mv+HE9+juUzAO8dDfKckh34qmQOsinXkvETnRMDvhOR5FNs6fFagXPxHPUagk59yEJQvuIIB16R5L7ULnsGqvdRLeIhfNoB3zEJMxkHNjxaI74nKtcoVM8Y6Ynk+QJaNvTfvu3WwDk/snFEBjmvZIZ5ogeCuuoIBd0vz8Lus6gMrI9vwUjvzh+ZHCnx5zWdsmNSk5RDvXle84A5bHvoNLJt6rtUEg8EZLt+MgNNDOvLtL3l75kuOAHfbxUvwBWs0ebrNAv0v5gTCusdonLxBR0gmYMxz9OPOUXwFeckR6P+o5bHi4yy7dIZv1PxwyDNOl3SDl/6Mv+viJdC+mRqcgzHdJpCLxLYi6W2jNS91T/iMyQjoToeDyfWx5tOd8eBqLY9xC4y/S8dFcEfzaQGHPlmH82p+p7KM30iaQV7AelmOplbtkGDQz3Zy3IaSzwbQ7xtYveYzAT49yWRysqDyuTNFu+urplHmhnxv6FwJMwdXNO8EhN3YcvP4JDkgv2ZQfqQ03JYhzUG3j2X8TmM/UXXrBXfTFeDfAnHu1pMzEiCWTp7tNlfUC2ENsVhsgdBw8qqV3zv4XLN14zsoL3upxN1ltuSdgPCLGWiIKR3f9r9XN4GBt3hql8Tj8VngOsyFjFfpj+yHZ6LUZQPeGF6qnvmCcZnU2RtpjrmpRsxtXmoM3+yZv06Q40qU26Pq4yIrMGcbt1wtyuW63QLtdQjqPH6X67ZsYTwepgIvQ/Ww0/rGLmGOYe7qYyzrdh8+fPjw4cOHDx8+soxfKDRtR/5ykxYAAAAASUVORK5CYII=>

[image19]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAZCAYAAAB9/QMrAAACzklEQVR4Xu2Xz2sTQRTHY4uCir8OGglJNiSRQNCLOQiKB8GL9iT1D9CDiIIoPYg/EOvFg6XgSb3oQQT15iEgeFEUPYi3HkRQKggiiqK0aq2G+H3kJbx+d5Ldtiu1MB94bOY735mdeTszu0mlPB6PZ5GQyWRW2HI+nz9py/8blUplFWu9KBQKa3FZwnpXgiBoOmIghqcdQ9a7EDjGJPHW4XuGB34e1wHEGfFB7mNfCBh/aKcTyPCDarW6zOGR+jpucAfXWyYa7F0IdHy/9PoRsYc9GPshxG7S1sE7aTUnMN1njXFtN7R7n4rzFGYB+nzNWhwkOawx8IxhEZx26JFtI5Mk+zeXy+1kHe0+sDZf0GedtTjEmSg8jxB/rFYsFtdAe2c1J5IkWSm4fkKMIyGb2WPJZrNb4JtiPQnS6fRK9H2O9SgkSXiYGxHP8fsLrhfYUy6X14tP47u8nDS50Qe4GvttGXHJWGagA7rLelKg/zriDeu90DEdMeWziGnrEfQMaidK2lxmTyzQcFgTFwL6XkSDPxGSRp/ypEyK6+KiSThhpD7RsBOWY7dkTLIeGk880OioJim0DHHTx8EsDld5o8A/PcdoIia4z7ho+855i7FcQ/m2qd+nHueC6ADDDcRT0galoZw9Vte6Jm52kfWkwT32u84VF7qFQltLE/DZlm19G9FLpdIG1ju4MonBnWKtjeioP8h6ksiEMfHjrHcD/iEZl7ypSJ9x5vSYU6NWqy1lvQMMo+hoG2lTiCdWU327JnWQ65ICq3cT+t/KegRy1ryyApJ8jJOC8jdJqNX0EyC0CkMEre+H34ivmoTr7BHwCl0t9VGfCPMhmOMZhKTs0LG/CFpf3j9Tjg9d6C8lKYixoPVPY5w9XYF5BDe6ilV1mOss8N1kLUnQ/y7W4oKxH8Ac7slcsELyXK/0y3EBzxU58/71W9rj8Xg8Hs+i5C+hsvGn/DGlHwAAAABJRU5ErkJggg==>

[image20]: <data:image/png;base64,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>

[image21]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAbCAYAAABFuB6DAAAA5ElEQVR4Xu2RLQsCQRRFF01qM7iwLDsLW/xPBj+KuCYxCFZBg2A2bVTEIDar2SpGo/9BDHqvPse3my2CFx7MnDkz78E4zg/Gdd1SlqXieV4xCIKJMeaGOvu+X8g6TA6Hd9T0DbjHxb2WCNeoTYYtKGtGeEXNNMNrY4oYoWyhtO0rjywWPtKQIFaeE4ZhU/jSQgIctJVHsU6OEXYWithRHsWG8K2F0qKrPLKW8ERDgqHy+GJPWg8sBLgYPfSLJRSxzFuIW3PA40d7igcR05H2J66jKKrIPvUJNpirilpBqGXP/vlOHoDwQvMGWI7hAAAAAElFTkSuQmCC>

[image22]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAA+ElEQVR4XmNgGAU0B1JSUiLy8vL/0cVBACj+U05OLk9BQcFeUVFRHkhHAsXeg2h0tQxAhTYgg4D4HRD/xmMoSA0y/gs0kANdHRgoKSkBzZXzBbGBCl8QMBRsKVD9IyBthK4GKyBkKLoYUWBADAXiz0C8HRiW8SA+MMLU0dVhAAKGXkHmI0XwamRxDIDPUGwAaih+9fgMxZZ8KDIUaGAhSFxZWVkMWZwiQ0HpGCi+HFlMRkZGF2roA2RxmCQnUKILiA/AbAa6bCbQoHagy2Rh6oDiP4DiFkAmEzDD8IPUgdQgGUUeABqaCbIQaGAz0DFC6PKjYBTQAAAAdJBf+ZpUQDUAAAAASUVORK5CYII=>

[image23]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAbCAYAAABFuB6DAAAA9ElEQVR4XmNgGIJAWlpaGEgxo4vDgYKCAgcQN8jLy/8H4gfGxsas6GoYZGRkOEEK5OTk5kOFGKH86SgKgYL/gPg2mthLkGJkMZAgyLqjaGKnoQoR7gUJAN23C6EMLLYbKh6PLAgy8TiSOpDYfajCTmTBP0CBW0jqYO4GGTAPLqiioiIKFZwL4isqKooD2S+gJlbAFYIAUPA6VHEyEN8ABs1BEB9Ix6AoRAdARa9ACoFhLIQs6AjUuQNkJZIYyHTUcAQq2gC1Jh8mBlV4GVkdSLAEiBcxQAIXFH2fgJ5IQFEEA0DTfIAKJgHxbGAosKPLjwLqAADKSkkVub8AoAAAAABJRU5ErkJggg==>

[image24]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAA7UlEQVR4XmNgGAU0B1JSUiLy8vL/0cVhACjXo6CgcAqkBkjPRJeHAzk5ORuQIiB+B8S/cRkKFL8LVFsH4wMNTQSKPZORkRFCVgcGSkpKQLVyviA2UNELPIb+FxcX50YSYoI6ZjGSGCbAZSjMN+jiUEMxxFEALkOBYltwiJNvKNClj7CJU2SoPCQSsYmDDUULa1SAx9ATOMQpcilNwjQNmzhFhoIANnGooffQxRmAOYITKNEFxAdgNoOyINB17crKyrIwdUDx1UB8QVFRURzK3wPSA2QywdSQBYAO0AVa1gbEC4AGKqLLj4JRQAMAAKVBZJ5QGLDsAAAAAElFTkSuQmCC>

[image25]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAk0lEQVR4XmNgGAU0B1JSUiLy8vL/0cXRAVDNcXQxFCAnJ2cDMgiI3wHxb1yGQtWA8EtcauBASUkJaK6cL4gNVPwClwYFBYUCaWlpYSCtgUsNVoDPUBgYNXTUUPxqUADVDJWRkeEEKuoC4gMgxSAM1DgTmCHalZWVZWHqgGIdQLmpQHwDqm4fSA2QbkY2bxSMgqEAAHuuR/r4SWabAAAAAElFTkSuQmCC>

[image26]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAABAklEQVR4XmNgGAU0B1JSUiLy8vL/0cVhQEFB4RBQ/jMQ/wHiaejycCAnJ2cDMgiI3wHxb1yGggxC4/8DqVdUVHRDFgcDJSUloLlyviA2UNELbIYqKyvLAsUXIYsBXb0S6pjXyOIYAJehQLEWqAHeSMJMUDEM9SgAl6FAwAT0zQJkAWD4c1FqKAYAquuDGnoTXQ4FkGgoyMAUdHEMQKyhQDW/gDgYXRwrIMZQYNhqAdV8QBfHCQgZCkxGl4DyD9DEDiHzMQA+Q4EuXAHE2kAsCDRIAJjoxUFhilW9jIwMJ1CiC4gPgBSAMFDTTKDmdlCiB6kBsmNhcljwD3QzR8EoGOwAAJjMXH03Inv4AAAAAElFTkSuQmCC>

[image27]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAABFElEQVR4XmNgGAU0B1JSUiLy8vL/0cVhACi3FYi/APFrOTm5NnR5OABK2oAMAuJ3QPwbl6Ho4kD+W6g+b2RxMFBSUgKaK+cLYgMVvEDXDANQA3JgfAUFhU0gMSB9CVkdBiDC0HlI/L1QsbfI6jAAPkPRAdTAf4qKimbociiAkKEyMjLSQHlHoJcPAel36PJYASFDgYBFVFSUB2ioBUgd0JV26AowABGGwgHQ4HRoEHxFl0MBpBgKTDHGUEPxq8dlKNBVkVBxZpiYsbExK0WGAsXWgcSVlZVlYWJAi+xxGgqMUU6gRBcQH4ApAmqYCfReO5IhjEDxf2h8kNrLQDExmFlkAaBlBVAL5wMN1ESXHwWjgAYAAHwqYV4xgGkVAAAAAElFTkSuQmCC>

[image28]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAA30lEQVR4XmNgGAU0B1JSUiLy8vL/0cWxAaC6o3JycnHo4mAAlLABGQTE74D4NzGGKikpqYHU4TQUqAAoJ+cLYgMVviDGUKCaI3gNRQbEGCojI6MCNCyfaoYC5bKB+DuUTR1DgYacBFLMIDZVDAWKv0fjU2aogoJCBBAbIItRbChQ7DUwDXMZGxuzArksIAxSB7QoEcpnRNWBBPAY2owFgwzdCGIDaQt0PXCAy1BsAK/3gemOE6igC4gPgBRCXTATqKFdWVlZFl09UL4WiBdD1d4HqpsBpK3Q1Y2CUTCYAQBMgVXjX5XBfAAAAABJRU5ErkJggg==>

[image29]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAYCAYAAAChg0BHAAACMUlEQVR4Xu2Uyy8DURTGJUVEECQN+ppO26h0waISj1iy0KQrwsYfYCGxZG2D2FeIpZUlC7YSK4IFsSBhYS0EK6/6TnonOT2d6SPSdqLzS05m7nfOnLn3u3emrs7hb2iapgcCgXGp1yQwIw0zjqVec8CIq39vht/v92CRj7RQxBMiIWugjcZisUa7mBEMBocxlxupczDPOdRcFD1nXdf70XiPjQeUKYe8DuMVdS2ucZlQc/tR17TMGyD3gNiOx+MNakym7Mq6LKgoEom0CS3rRbgfYU2ragY2bj4ajbbKOXJQ0yRzqv6SazmYNcV4gzSfz+fFwmdw/444w0tOVf0r7vf5M5XGbN4G0D/lwrGOaY/H08y1HPDQCGJBaCl6kdvtbuG6ylX1ZBgUMIPmuESnGZs2hE9fkzVFo5zNeZGWOSHPiBfEvcxzaBfwYx4sJWSPfFiZAU1XuR0YMas+mUnEl6wtCB5KUDOzU1EiLtoRqwiHw36v1+ujTxHv68Gku2WDfFiZgRORVLlzrmuZDT7hWl6oATUiN2XObliZgbn3kQ5TFrkO7c6s3op61WRTJuyIlRk4aZ1qHUmuQ7sxqzcFhd9iPInj3MW1UsBkJuhHW0rIHvmwMoNQuSmu4cTcWtVngaIPchQPtGNSHeo7vpZ1dqKAGfR/SJloT1zLAQVvRmMZstYOYMPWEFvGHLF5R4hVUeaiXCgU6qUB8mN2XU/FgGnrMOEA12WZc3BwcHBwcCgrv04M0IUX5NzrAAAAAElFTkSuQmCC>

[image30]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAZCAYAAADJ9/UkAAABzUlEQVR4Xu1UOy8EYRSdtRJEJCJY2czu7IuNRKcTlUTh8Q+2QYIfoKAh0SiQ6EgkWoWCxC+g1lGJSkPhGWEjNqxzNt9M7tzMshQac5KT+e65Z+69c63PskL8e8Tj8Xatucjn8y1aA+pkkMvlGmRcExzHeU4mkxvgEs5vYBlyvfKUA3giPalUajbAw1q+IT0geRaLxZqV5r6ktcpg4BU4IPMEhp+Bfgt+gCXEK9rjQ5VGu0aLCM3nCQI8U2Cv1qsC5qIujHiVGtbYKLRvm8M/+aPmQUCBa92McTqddrDKLZzvwTmZJ9B8gs3hGcTzAjyCHNW+rxBhI3BTikYriHgbfFSeAniTSCT6GNu23cT3MFSr9FUFzHfggdaDwML4ymGtS5ihnzBIm875QAPNVo2rMoXXtC5hPOSYznlAch98d2NcGB2WGYJn5F49s4H58mMRXzriT2O0F/qw+mWpe0ByERxV2o57RoN5U8D79RsPm0/LGJ5D7SGx1W6pV4CXx12DprBFUfRUxCy6rjzUijLmdUtPJpPpkboH3VBS+YaM/gCW+JR5F45ZM3jOJz6uX3t+BV6f/D/ntZnNZjt1nsCGusAFcA/NR3Q+RIgQf4pPUtOgw2idsbMAAAAASUVORK5CYII=>

[image31]: <data:image/png;base64,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>

[image32]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAZCAYAAABkdu2NAAACCklEQVR4Xu2WvUvDQBjG6wf4gR8oRKFNm6QpFPQ/cBBBBxGcBMXRwVEcRMFBEAQXN0UnVxetuLjq6OjH0NFBUCkOVUSoCqU+b7yU820SimCaSn7wcHfPvde87901bSQS8pNkMtnNvX9BKpVq0TRtg/pon6EPHlPXJBKJMRRVoj7ajN2vO1BID/cEjZgbpQ6KewhIgc2qqrZx0xEk/AptQ8dQgQqIRqPtcoyu663QOnTosRF/Dp4/g/xO0c4hj0nKFe0gjyuDgKt0Ot3JvJLbKcG/hvLc9ws8+9zBo3yXuG/hVAzGO+ThCvTSmN6edILUNwxjWOzagrzGD/DMaTz7nvuihhPuW2DijReID1oRiwwRcwkdif6EKHBeXuMH9svONM0+2ScPBzAre55gQVYuGotXcXJpMXfBN8RPxMZbisfjJtoX5KfzOE/EB2RkT1GUDuzgIrpNsu+FnEw14uvdYOuyfN6VWCymYsEjdMbnggJyy+HARtBtQD8vinyHhnhsBQi6oQX0z4XPBQHcoAHkV7DH+Nr0Syf5JMdWgIADaNkeo8gu/ltYa5DfJ/JSHPwiFcn9MlQYNCV72K1NefwbtO+fm6rF13OoCKfbBX+P5rhvgfs8TpNO4rG1BjltQbcOPuW7z30LXpQsHhsEkNeayC8H3UFFesPzuLpG3DoqdNfzf2hISEhISIg7X+1wstghzQOgAAAAAElFTkSuQmCC>