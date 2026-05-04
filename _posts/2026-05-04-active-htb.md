---
layout: post
title: "HTB Machine: Active"
---

# Active Machine Write-up

## 1. Machine Information
* **Name:** Active
* **IP Address:** `10.129.31.152`
* **Difficulty:** Easy
* **OS:** Windows

---

## 2. Enumeration
### Nmap Scan
`nmap -sS -sV -sC -Pn -T4 10.129.31.152`

**Interesting Ports:**
* `139/tcp` SMB
* `445/tcp` SMB
* `389/tcp` LDAP
* `636/tcp` LDAPS

### Service Discovery
Anonymous login was allowed. Using `smbmap`, I found `READ ONLY` access on the **Replication** share. Inside, I found `Groups.xml` which contained:
* **Username:** `SVC_TGS`
* **cpassword:** `edBSHOwhZLTjt/QS9FeIcJ83mjWA98gw9guKOhJOdcqh`

---

## 3. Exploitation
I used `gpp-decrypt` to crack the cpassword.
* **Plaintext Password:** `GPPstillStandingStrong2k18`

Using these credentials, I accessed the **Users** share and retrieved `user.txt`.

---

## 4. Privilege Escalation
Since LDAP was accessible, I used Impacket's `GetUserSPNs.py` for **Kerberoasting**. I successfully requested a TGS hash for the **Administrator** account.

I cracked the hash using `hashcat` (Mode 13100):
* **Admin Password:** `Ticketmaster1968`

I logged into the `C$` share as Administrator and captured the root flag.

---

## 5. Lessons Learned
* Disable anonymous SMB enumeration.
* Remove legacy GPP passwords (cpassword is insecure).
* Enforce strong password policies to prevent Kerberoasting success.
