---
layout: post
title: "HTB 'Delivery' Write-up"
date: 2026-07-04
categories: [Writeups, HTB]
tags: [Linux, Mattermost, Ticketing System, Hashcat, MySQL]
author: Zeyad Mahmoud
---

## **Delivery Machine Write-up**

### **1. Machine Information**

* **Name:** `Delivery`
* **IP Address:** `10.129.33.109`
* **Difficulty:** `Easy`
* **OS:** `Linux`

---

## **2. Enumeration**

### **Nmap Scan**

# Initial TCP scan

```bash
nmap -sS -sV -sC -Pn -T4 10.129.33.109
```

![alt_text](/assets/images/delivery/image1.png "image_tooltip")

---

### **Website Enumeration**

After checking port `80`, we see a note stating that we can approach the helpdesk through their ticketing system since we don’t have a `@delivery.htb` email... **YET**

![alt_text](/assets/images/delivery/image2.png "image_tooltip")

By investigating both the ticketing system and Mattermost, we noticed that we are allowed to use a normal email but we never receive an activation link, apparently unless it's a `@delivery.htb` email.

![alt_text](/assets/images/delivery/image3.png "image_tooltip")

After submitting a ticket we noticed that the system automatically creates a `@delivery.htb` email with our ticket id:

```text
5848101@delivery.htb
```

Can we use that in our favour?

![alt_text](/assets/images/delivery/image4.png "image_tooltip")

Replies are shown in the Ticket Thread and according to the information provided we can email this address `5848101@delivery.htb` any updates regarding the ticket and it will be shown in the thread...

I am thinking...

even an activation link?

![alt_text](/assets/images/delivery/image5.png "image_tooltip")

Will it work?

(since you are reading this ... it worked)

![alt_text](/assets/images/delivery/image6.png "image_tooltip")

We got our activation link, and we are in.

![alt_text](/assets/images/delivery/image7.png "image_tooltip")

---

## **3. Initial Access**

After joining the internal team chat we find a very interesting conversation.

![alt_text](/assets/images/delivery/image8.png "image_tooltip")

### **Credentials Obtained**

```text
username: maildeliverer
password: Youve_G0t_Mail!
```

Additional password discovered but with a note that they are using different variations from this password

```text
PleaseSubscribe!
```

---

### **SSH Access**

```bash
ssh maildeliverer@10.129.33.109
```
password: Youve_G0t_Mail!

![alt_text](/assets/images/delivery/image9.png "image_tooltip")

After logging in successfully, we captured the user flag.

![alt_text](/assets/images/delivery/image10.png "image_tooltip")

---

## **4. Privilege Escalation**

Oops, `sudo` is not allowed.

![alt_text](/assets/images/delivery/image11.png "image_tooltip")

Let’s look for another way.

By looking inside the Mattermost configuration files and using the command:

```bash
cat config.json | grep -iE "user"
```
(Initially tried `grep -iE "pass"` but it did not reveal anything useful.)

![alt_text](/assets/images/delivery/image12.png "image_tooltip")

we found the following credentials:

```text
mmuser:Crack_The_MM_Admin_PW
```

We also noticed that localhost is using port `3306`.

But what is running on port `3306`?

![alt_text](/assets/images/delivery/image13.png "image_tooltip")

Using `netcat` we confirm that port `3306` is MySQL.


---

### **Database Access**

Using the credentials we found:

```text
mmuser:Crack_The_MM_Admin_PW
```

we successfully logged into the database.

```bash
mysql -u mmuser -p
```
![alt_text](/assets/images/delivery/image14.png "image_tooltip")

Inside the Mattermost database, we found a table called `Users` containing `Username` and `Password` fields.

Using the following command:

```sql
select Username, Password from Users;
```

![alt_text](/assets/images/delivery/image15.png "image_tooltip")

we obtained the hash of the root user’s password:

```text
$2a$10$VM6EeymRxJ29r8Wjkr8Dtev0O.1STWb4.4ScG.anuu7v0EFJwgjjO
```

---

### **Hash Cracking**

The root user left us a hint that he is using variations of:

```text
PleaseSubscribe!
```

So we use Hashcat rules to generate our own custom wordlist.

![alt_text](/assets/images/delivery/image16.png "image_tooltip")


After using `hashcat` mode `3200` against our custom wordlist, we successfully cracked the password.

![alt_text](/assets/images/delivery/image17.png "image_tooltip")

---

### **Root Access**

By switching to the root user and entering the cracked password:

```bash
su root
```

Password:

```text
PleaseSubscribe!21
```

We are Root!

![alt_text](/assets/images/delivery/image18.png "image_tooltip")

and we have successfully captured the root flag.

![alt_text](/assets/images/delivery/image19.png "image_tooltip")

---

Never leave hints for hackers.


See you on the next one.
