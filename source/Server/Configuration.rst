Server Configuration
====================

How to set up a server from scratch, to be used a working machine for the Tutorial sessions.

::

  sudo aptitude update
  sudo aptitude upgrade

  cd /home/ubuntu
  mkdir Documents
  cd Documents/


  sudo aptitude install git
  sudo aptitude install apache2

  sudo aptitude install python-sphinx
  sudo aptitude install make

  git clone git://github.com/luisibanez/open-source-databases-tutorial.git

  sudo cp ./open-source-databases-tutorial/Server/root/var/www/index.html  /var/www/index.html

  cd /home/ubuntu/Documents/open-source-databases-tutorial/
  make

  sudo ln -s /home/ubuntu/Documents/open-source-databases-tutorial/build/html/ /var/www/OSDB-Tutorial

  sudo aptitude install postgresql

  sudo aptitude install mongodb

  sudo aptitude install redis-server

  sudo aptitude install couchdb

