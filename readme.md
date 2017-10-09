# Messaging Client

### To run application on localhost:3000

1. Clone this repository `git clone https://github.com/Heli-Copter/messaging-client.git`

2. Install npm dependencies with `npm install`

3. Run application using npm script `npm run start`

4. To get production ready built code, run `npm run build`

###### You can run this application on a virtual DNS using nginx server (for eg. `messaging.gsharma.com`) by following nginx setup steps.

### To setup nginx 
This is needed to run application with name in url bar.

1. Install nginx with homebrew `brew install nginx`

2. Add `127.0.0.1   messaging.gsharma.com` in '/etc/hosts'

```
127.0.0.1   messaging.gsharma.com
```

3. Add directory `sites-available` and `sites-enabled`.

4. Add file 'messaging.gsharma.com' inside the directory 'sites-available' amd add below code:

```
server {
  listen   messaging.gsharma.com;
  server_name messaging.gsharma.com;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

5. include created server blocks to '/usr/local/etc/nginx.conf' by adding following piece of code inside http section:

```
http {
    include       mime.types;
    include       sites-enabled/*.com;
    ...
    ...
}
```

6. Create a soft link from sites-available to sites-enabled
```
ln -s /usr/local/etc/nginx/sites-available/messaging.gsharma.com /usr/local/etc/nginx/sites-enabled
```

7. Reload nginx with the command `sudo nginx -s reload`