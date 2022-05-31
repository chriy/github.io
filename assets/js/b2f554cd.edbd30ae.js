"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[477],{10:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"/python-install","metadata":{"permalink":"/blog/python-install","editUrl":"https://github.com/chriy/chriy.github.io/blog/python-install.md","source":"@site/blog/python-install.md","title":"Python3\u7f16\u8bd1\u5b89\u88c5","description":"\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6\u5728Linux\u5b89\u88c5\u6700\u65b0\u7248\u672cPython3","date":"2022-05-31T12:34:53.000Z","formattedDate":"May 31, 2022","tags":[],"readingTime":0.715,"truncated":false,"authors":[],"frontMatter":{"title":"Python3\u7f16\u8bd1\u5b89\u88c5"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":":::info\\n\u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6\u5728Linux\u5b89\u88c5\u6700\u65b0\u7248\u672cPython3\\n:::\\n\\n\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e0b\u8f7d\u5730\u5740\uff1a[https://www.python.org/ftp/python](https://www.python.org/ftp/python/)\\n\\n### \u4e0b\u8f7d\\n```shell\\n$ wget https://www.python.org/ftp/python/3.10.0/Python-3.10.0.tgz\\n# \u89e3\u538b\u6587\u4ef6\\n$ tar -zxf Python-3.10.0.tgz\\n```\\n\\n### \u7f16\u8bd1 & \u5b89\u88c5\\n\u540c\u65f6\u5b89\u88c5\u67092.x\u548c3.x\u7248\u672c\u914d\u7f6e \u9700\u8981\u914d\u7f6e\u4e0d\u540c\u8def\u5f84\u533a\u5206 `/usr/local/python3`, \u5982\u679c\u53ea\u6709\u4e00\u4e2a\u7248\u672c `prefix=/usr/local/python` \u5373\u53ef\\n```shell\\n$ cd Python-3.10.0 && ./configure prefix=/usr/local/python3\\n$ make && make install\\n```\\n\\n### \u521b\u5efa\u8f6f\u94fe\\n```shell\\n$ ln -s /usr/local/python3/bin/python3 /usr/bin/python3\\n$ ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3\\n```\\n\u4e0d\u521b\u5efa\u8f6f\u94fe\u4e5f\u53ef\u4ee5\uff0c\u4f46\u662f\u5f97\u628a `/usr/local/python3/bin` \u76ee\u5f55\u52a0\u5165\u73af\u5883\u53d8\u91cf\\n\\n### \u9a8c\u8bc1\\n```shell\\n$ python3 --version\\nPython 3.10.0\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/chriy/chriy.github.io/blog/welcome.md","source":"@site/blog/welcome.md","title":"Welcome","description":"Intro","date":"2022-05-31T12:34:53.000Z","formattedDate":"May 31, 2022","tags":[],"readingTime":0.26,"truncated":false,"authors":[],"frontMatter":{"slug":"welcome","title":"Welcome"},"prevItem":{"title":"Python3\u7f16\u8bd1\u5b89\u88c5","permalink":"/blog/python-install"},"nextItem":{"title":"Samba","permalink":"/blog/samba"}},"content":"## Intro\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"samba","metadata":{"permalink":"/blog/samba","editUrl":"https://github.com/chriy/chriy.github.io/blog/2022-05-31-samba.md","source":"@site/blog/2022-05-31-samba.md","title":"Samba","description":"Samba\u662f\u5728Linux\u548cUNIX\u7cfb\u7edf\u4e0a\u5b9e\u73b0SMB\u534f\u8bae\u7684\u4e00\u4e2a\u514d\u8d39\u8f6f\u4ef6\uff0c\u53ef\u7528\u4e8e\u5728Linux\u4e0eWindows\u7cfb\u7edf\u6587\u4ef6\u5171\u4eab\u548c\u6253\u5370\u5171\u4eab","date":"2022-05-31T00:00:00.000Z","formattedDate":"May 31, 2022","tags":[],"readingTime":1.035,"truncated":false,"authors":[],"frontMatter":{"title":"Samba","slug":"samba"},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66","permalink":"/blog/2021/11/07/openssl"}},"content":":::info\\nSamba\u662f\u5728Linux\u548cUNIX\u7cfb\u7edf\u4e0a\u5b9e\u73b0SMB\u534f\u8bae\u7684\u4e00\u4e2a\u514d\u8d39\u8f6f\u4ef6\uff0c\u53ef\u7528\u4e8e\u5728Linux\u4e0eWindows\u7cfb\u7edf\u6587\u4ef6\u5171\u4eab\u548c\u6253\u5370\u5171\u4eab\\n:::\\n\\n## \u5b89\u88c5\\n```shell\\n$ sudo apt-get install samba samba-common\\n```\\n## \u914d\u7f6e\\n```shell\\n# \u914d\u7f6e\u4e00\u4e2a\u7528\u6237(\u6267\u884c\u540e\u8f93\u5165\u5bc6\u7801\u5373\u53ef)\\n$ sudo smbpasswd -a username\\n\\n# \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\\n$ sudo vim /etc/samba/smb.conf\\n```\\n\u5728\u914d\u7f6e\u6587\u4ef6\u6700\u540e\u4e00\u884c\u52a0\u5165\u4ee5\u4e0b\u914d\u7f6e\u5185\u5bb9\\n```text\\n[file] # \u8bbf\u95ee\u8def\u5f84\\n    comment = File path\\n    browseable = yes\\n    path = /home/xxx # \u9700\u8981\u5171\u4eab\u7684\u76ee\u5f55\\n    create mask = 0755\\n    directory mask = 0755\\n    valid users = username # \u914d\u7f6e\u7684\u7528\u6237\u540d\\n    public = yes\\n    available = yes\\n    writable = yes\\n```\\n\\n## \u542f\u52a8\\n\u4fee\u6539\u914d\u7f6e\u540e\u9700\u8981\u91cd\u542f\u670d\u52a1\\n```shell\\n$ sudo /etc/init.d/smbd restart\\n```\\n\\n## \u4f7f\u7528\\n\u8f93\u5165\u670d\u52a1IP\u5730\u5740 + \u914d\u7f6e\u7684\u8bbf\u95ee\u8def\u5f84\uff0c\u5982: `10.0.0.x/file` \u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u5c31\u53ef\u4ee5\u4e86"},{"id":"/2021/11/07/openssl","metadata":{"permalink":"/blog/2021/11/07/openssl","editUrl":"https://github.com/chriy/chriy.github.io/blog/2021-11-07-openssl.md","source":"@site/blog/2021-11-07-openssl.md","title":"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66","description":"\u5229\u7528openssl\u9881\u53d1\u672c\u5730SSL\u8bc1\u4e66.  \u4ee5\u4e0b\u811a\u672c\u6765\u81ea github  \u7565\u6709\u6539\u52a8","date":"2021-11-07T00:00:00.000Z","formattedDate":"November 7, 2021","tags":[],"readingTime":6.32,"truncated":false,"authors":[],"frontMatter":{"title":"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66"},"prevItem":{"title":"Samba","permalink":"/blog/samba"},"nextItem":{"title":"\u6734\u7d20\u8d1d\u53f6\u65af","permalink":"/blog/2020/04/02/naivebayes"}},"content":">\u5229\u7528openssl\u9881\u53d1\u672c\u5730SSL\u8bc1\u4e66.  \u4ee5\u4e0b\u811a\u672c\u6765\u81ea [github](https://github.com/etdey/ssl.ca)  \u7565\u6709\u6539\u52a8\\n\\n\u751f\u6210\u8bc1\u4e66\u4e00\u5171\u53ef\u4ee5\u5206\u4e3a\u4e09\u6b65:\\n\\n1. \u751f\u6210\u6839\u8bc1\u4e66, \u8fd9\u4e2a\u662f\u7528\u6765\u5b89\u88c5\u5728\u8bbe\u5907\u4e2d, \u8ba9\u8bbe\u5907\u4fe1\u4efb\u81ea\u5df1\u9881\u53d1\u7684\u8bc1\u4e66,  \u6ce8: Window\u5b89\u88c5\u9700\u8981\u5b89\u88c5\u5230 **\u53d7\u4fe1\u4efb\u7684\u6839\u8bc1\u4e66\u9881\u53d1\u673a\u6784**\\n2. \u521b\u5efa\u8bc1\u4e66\\n3. \u7b7e\u53d1\u8bc1\u4e66\\n\\n## 1. \u6839\u8bc1\u4e66\\n\\n`new-root-ca.sh`\\n\\n```bash\\n#!/bin/bash\\n##\\n##  new-root-ca.sh - create the root CA\\n##  Copyright (c) 2000 Yeak Nai Siew, All Rights Reserved.\\n##\\n\\nKEYBITS=4096\\nHASHALGO=\\"sha256\\"\\nVALID_DAYS=3650\\nRANDOM_SRC=/dev/urandom\\n\\n# Create the master CA key. This should be done once.\\nif [ ! -f ca.key ]; then\\n        echo \\"No Root CA key found. Generating one\\"\\n        openssl genrsa -aes256 -out ca.key -rand ${RANDOM_SRC} $KEYBITS\\n        echo \\"\\"\\nfi\\n\\n# Self-sign it.\\nCONFIG=\\"root-ca.conf\\"\\ncat >$CONFIG <<EOT\\n[ req ]\\ndefault_bits                    = $KEYBITS\\ndefault_keyfile                 = ca.key\\ndefault_md              = $HASHALGO\\ndistinguished_name              = req_distinguished_name\\nx509_extensions                 = v3_ca\\nstring_mask                     = nombstr\\nreq_extensions                  = v3_req\\n[ req_distinguished_name ]\\ncountryName                     = Country Name (2 letter code)\\ncountryName_default             = CN\\ncountryName_min                 = 2\\ncountryName_max                 = 2\\nstateOrProvinceName             = State or Province Name (full name)\\nlocalityName                    = Locality Name (eg, city)\\n0.organizationName              = Organization Name (eg, company)\\n0.organizationName_default      = Chriy Personal Certificate Authority\\norganizationalUnitName          = Organizational Unit Name (eg, section)\\norganizationalUnitName_default  = Certification Services Division\\ncommonName                      = Common Name (eg, MD Root CA)\\ncommonName_default              = Chriy Root CA\\ncommonName_max                  = 64\\nemailAddress                    = Email Address\\nemailAddress_max                = 40\\n[ v3_ca ]\\nbasicConstraints                = critical,CA:true\\nsubjectKeyIdentifier            = hash\\n[ v3_req ]\\nnsCertType                      = objsign,email,server\\nEOT\\n\\necho \\"Self-sign the root CA...\\"\\nopenssl req -new -x509 -days ${VALID_DAYS} -config $CONFIG -key ca.key -out ca.crt\\necho \\"complete.\\"\\nrm -f $CONFIG\\n```\\n\\n**\u6267\u884c\u8fd9\u6bb5\u811a\u672c\u540e, \u53ef\u4ee5\u6309\u63d0\u793a\u8f93\u5165\u4e00\u4e9b\u4fe1\u606f, \u5982: \u56fd\u5bb6, \u57ce\u5e02, \u7ec4\u7ec7, \u9881\u53d1\u673a\u6784\u7b49\u7b49, \u8fd9\u4e9b\u5c31\u662f\u5bf9\u5e94\u4e86\u8bc1\u4e66\u7684\u4e00\u4e9b\u4fe1\u606f**. \u63a5\u4e0b\u6765\u8fd8\u6709\u4e2a\u8f93\u5165\u5bc6\u7801\u7684\u8fc7\u7a0b, \u8fd9\u4e2a\u5bc6\u7801\u5bf9\u5e94\u540e\u9762\u7b7e\u53d1\u8bc1\u4e66\u65f6\u7684\u5bc6\u7801,  \u540e\u9762\u8981\u7528\u5230.\\n\\n\\n\\n## 2. \u521b\u5efa\u8bc1\u4e66\\n\\n`new-server-cert.sh`\\n\\n```shell\\n#!/bin/bash\\n##\\n##  new-server-cert.sh - create the server cert\\n##  Copyright (c) 2000 Yeak Nai Siew, All Rights Reserved.\\n##\\n\\nKEYBITS=4096\\nHASHALGO=\\"sha256\\"\\n\\n# Create the key. This should be done once per cert.\\nCN=$1\\nif [ $# -lt 1 ]; then\\n    echo \\"Usage: $0 <www.domain.com> [subjectAltName1 [san2 ...]]\\"\\n    exit 1\\nfi\\n\\n# force the CN to become a SAN even if no other SANs; Chrome compatibility\\nsubjectAltNames=\\"$*\\"\\n\\n# if private key exists, ask if we want to generate a new key\\nif [ -f $CN.key ]; then\\n    read -p \\"a key for this cn is already existing, generate a new one? \\" ANSWER\\n    if [ \\"$ANSWER\\" == \\"Y\\" ] || [ \\"$ANSWER\\" == \\"y\\" ]; then\\n        rm -f $CN.key\\n    fi\\nfi\\n\\nif [ ! -f $CN.key ]; then\\n    echo \\"No $CN.key found. Generating one\\"\\n    openssl genrsa -out $CN.key $KEYBITS\\n    echo \\"\\"\\nfi\\n\\n# Fill the necessary certificate data\\nCONFIG=\\"server-cert.conf\\"\\ncat >$CONFIG <<EOT\\n[ req ]\\ndefault_bits                    = $KEYBITS\\ndefault_keyfile                 = server.key\\ndefault_md                      = $HASHALGO\\ndistinguished_name              = req_distinguished_name\\nstring_mask                     = nombstr\\nreq_extensions                  = v3_req\\n[ req_distinguished_name ]\\ncountryName                     = Country Name (2 letter code)\\ncountryName_default             = CN\\ncountryName_min                 = 2\\ncountryName_max                 = 2\\nstateOrProvinceName             = State or Province Name (full name)\\nstateOrProvinceName_default     = Shanghai\\nlocalityName                    = Locality Name (eg, city)\\nlocalityName_default            = Shanghai\\n0.organizationName              = Organization Name (eg, company)\\n0.organizationName_default      = Chriy Personal Organization\\norganizationalUnitName          = Organizational Unit Name (eg, section)\\norganizationalUnitName_default  = Secure Server\\ncommonName                      = Common Name (eg, www.domain.com)\\ncommonName_default              = $CN\\ncommonName_max                  = 64\\nemailAddress                    = Email Address\\nemailAddress_max                = 40\\n[ v3_req ]\\nnsCertType                      = server\\nbasicConstraints                = critical,CA:false\\nkeyUsage                = nonRepudiation, digitalSignature, keyEncipherment\\nEOT\\n\\n# Handle optional Subject Alternate Names\\nif [ \\"$subjectAltNames\\" != \\"\\" ]; then\\n    echo \\"subjectAltName = @alt_names\\" >> $CONFIG\\n    echo \\"[alt_names]\\" >> $CONFIG\\n    numi=1\\n    numd=1\\n    cn_already_added=0\\n\\n    # CN is added to the SAN list automatically\\n    for san in $CN  $subjectAltNames; do\\n        # if CN has already been seen, skip it\\n        if [ \\"$san\\" = \\"$CN\\" ]; then\\n            if [ $cn_already_added -eq 0 ]; then\\n                cn_already_added=1\\n            else\\n                continue     #skip to next SAN\\n            fi\\n        fi\\n\\n        # determine if this looks like an IP or a DNS name\\n        echo $san | egrep \'^[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}$\' &> /dev/null\\n    if [ $? -eq 0 ]; then\\n            echo \\"IP.$numi = $san\\" >> $CONFIG\\n            let numi++\\n        else\\n            echo \\"DNS.$numd = $san\\" >> $CONFIG\\n            let numd++\\n        fi\\n    done\\nfi\\n\\necho \\"Fill in certificate data\\"\\nopenssl req -new -config $CONFIG -key $CN.key -out $CN.csr\\n\\nrm -f $CONFIG\\n\\necho \\"\\"\\necho \\"You may now run ./sign-server-cert.sh to get it signed\\"\\n```\\n\\n\\n\\n```bash\\n./new-server-cert.sh *.test.org\\n```\\n\\n\\n\\n## 3. \u7b7e\u53d1\u8bc1\u4e66\\n\\n`sign-server-cert.sh`\\n\\n```shell\\n#!/bin/bash\\n##\\n##  sign-server-cert.sh - sign using our root CA the server cert\\n##  Copyright (c) 2000 Yeak Nai Siew, All Rights Reserved.\\n##\\n\\nHASHALGO=\\"sha256\\"\\nVALID_DAYS=365\\nRANDOM_SRC=/dev/urandom\\n\\nCN=$1\\nif [ $# -ne 1 ]; then\\n    echo \\"Usage: $0 <www.domain.com>\\"\\n    exit 1\\nfi\\nif [ ! -f $CN.csr ]; then\\n    echo \\"No $CN.csr found. You must create that first.\\"\\n        exit 1\\nfi\\n# Check for root CA key\\nif [ ! -f ca.key -o ! -f ca.crt ]; then\\n        echo \\"You must have root CA key generated first.\\"\\n        exit 1\\nfi\\n\\n# Sign it with our CA key #\\n\\n#   make sure environment exists\\nif [ ! -d ca.db.certs ]; then\\n    mkdir ca.db.certs\\nfi\\nif [ ! -f ca.db.serial ]; then\\n    echo \'01\' >ca.db.serial\\nfi\\nif [ ! -f ca.db.index ]; then\\n    cp /dev/null ca.db.index\\nfi\\n\\n\\n#  create the CA requirement to sign the cert\\ncat >ca.config <<EOT\\n[ ca ]\\ndefault_ca              = default_CA\\n[ default_CA ]\\ndir                     = .\\ncerts                   = \\\\$dir\\nnew_certs_dir           = \\\\$dir/ca.db.certs\\ndatabase                = \\\\$dir/ca.db.index\\nserial                  = \\\\$dir/ca.db.serial\\nRANDFILE                = ${RANDOM_SRC}\\ncertificate             = \\\\$dir/ca.crt\\nprivate_key             = \\\\$dir/ca.key\\ndefault_days            = ${VALID_DAYS}\\ndefault_crl_days        = 30\\ndefault_md              = $HASHALGO\\npreserve                = no\\nx509_extensions         = server_cert\\npolicy                  = policy_anything\\n[ policy_anything ]\\ncountryName             = optional\\nstateOrProvinceName     = optional\\nlocalityName            = optional\\norganizationName        = optional\\norganizationalUnitName  = optional\\ncommonName              = supplied\\nemailAddress            = optional\\n[ server_cert ]\\n#subjectKeyIdentifier   = hash\\nauthorityKeyIdentifier  = keyid:always\\nextendedKeyUsage        = serverAuth,clientAuth,msSGC,nsSGC\\nbasicConstraints        = critical,CA:false\\n[req]\\ndefault_md              = $HASHALGO\\nreq_extensions          = v3_req\\n[ v3_req ]\\nextendedKeyUsage        = serverAuth, clientAuth\\nEOT\\n\\n# Test for Subject Alternate Names\\nsubjaltnames=\\"`openssl req -text -noout -in $CN.csr | sed -e \'s/^ *//\' | grep -A1 \'X509v3 Subject Alternative Name:\' | tail -1 | sed -e \'s/IP Address:/IP:/g\'`\\"\\nif [ \\"$subjaltnames\\" != \\"\\" ]; then\\n    echo \\"Found subject alternate names: $subjaltnames\\"\\n    echo \\"\\"\\n    echo \\"subjectAltName          = $subjaltnames\\" >> ca.config\\nfi\\n\\n#  revoke an existing old certificate\\nif [ -f $CN.crt ]; then\\n    echo \\"Revoking current certificate: $CN.crt\\"\\n    openssl ca -revoke $CN.crt -config ca.config\\nfi\\n\\n#  sign the certificate\\necho \\"CA signing: $CN.csr -> $CN.crt:\\"\\nopenssl ca -config ca.config -extensions v3_req -out $CN.crt -infiles $CN.csr\\necho \\"\\"\\necho \\"CA verifying: $CN.crt <-> CA cert\\"\\nopenssl verify -CAfile ca.crt $CN.crt\\necho \\"\\"\\n\\n#  cleanup after SSLeay\\nrm -f ca.config\\nrm -f ca.db.serial.old\\nrm -f ca.db.index.old\\n```\\n\\n\\n\\n```bash\\n./sign-server-cert.sh *.test.org\\n```\\n\\n\\n\\n**\u7b7e\u53d1\u8bc1\u4e66\u65f6, \u9700\u8981\u8f93\u5165\u521b\u5efa\u6839\u8bc1\u4e66\u65f6\u8bbe\u7f6e\u7684\u5bc6\u7801**\\n\\n\\n\\n## 4. \u4f7f\u7528\\n\\n\u7b7e\u53d1\u8bc1\u4e66\u540e,  \u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210  `*.test.org.key` \u548c `*.test.org.crt` \u4e24\u4e2a\u6587\u4ef6,  \u5728nginx\u4e2d\u914d\u7f6e\u540e\u5373\u53ef\u4f7f\u7528"},{"id":"/2020/04/02/naivebayes","metadata":{"permalink":"/blog/2020/04/02/naivebayes","editUrl":"https://github.com/chriy/chriy.github.io/blog/2020-04-02-naivebayes.md","source":"@site/blog/2020-04-02-naivebayes.md","title":"\u6734\u7d20\u8d1d\u53f6\u65af","description":"\u4ece UCI \u4e0a\u4e0b\u8f7d\u6570\u636e\u96c6","date":"2020-04-02T00:00:00.000Z","formattedDate":"April 2, 2020","tags":[],"readingTime":5.415,"truncated":false,"authors":[],"frontMatter":{"title":"\u6734\u7d20\u8d1d\u53f6\u65af"},"prevItem":{"title":"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66","permalink":"/blog/2021/11/07/openssl"},"nextItem":{"title":"npm\u7684\u4f7f\u7528\u65b9\u6cd5","permalink":"/blog/2019/11/08/npm"}},"content":"## \u4ece UCI \u4e0a\u4e0b\u8f7d\u6570\u636e\u96c6\\n\\n[\u9e22\u5c3e\u82b1\u7279\u5f81\u96c6](https://archive.ics.uci.edu/ml/datasets/iris)\\n\\n### \u5b9e\u73b0\u65b9\u6cd5\u4e00\\n\\n> \u8c03\u7528 scikit-learn \u5e93\u6765\u5b8c\u6210\u5206\u7c7b\\n\\n```python\\nfrom sklearn.naive_bayes import GaussianNB  # \u9ad8\u65af\u6734\u7d20\u8d1d\u53f6\u65af\\nfrom sklearn.model_selection import train_test_split  # \u8bad\u7ec3\u96c6\u6d4b\u8bd5\u96c6\u5212\u5206\\nfrom sklearn.metrics import accuracy_score  # \u8ba1\u7b97\u51c6\u786e\u7387\\n# \u5bfc\u5165\u6570\u636e\u96c6 <\u9e22\u5c3e\u82b1>\\nfrom sklearn import datasets\\n\\n\\ndef sk_learn():\\n    \\"\\"\\"\\n    \u65b9\u5f0f\u4e00\uff0c\u76f4\u63a5\u8c03\u7528 sk_learn\u7c7b\u5e93\\n    :return:\\n    \\"\\"\\"\\n    iris = datasets.load_iris()\\n\\n    # \u5206\u7c7b\u6570\u636e\\n    # print(iris.data)\\n    # \u6807\u7b7e\\n    # print(iris.target)\\n\\n    # \u5207\u5206\u6570\u636e\u96c6\\n    trainSet, testSet, trainTarget, testTarget = train_test_split(iris.data, iris.target, random_state=37)\\n\\n    # \u5efa\u6a21\\n    clf = GaussianNB()\\n    # \u4f20\u5165\u6570\u636e\u548c\u6807\u7b7e\\n    clf.fit(trainSet, trainTarget)\\n\\n    # \u5728\u6d4b\u8bd5\u96c6\u4e0a\u8fdb\u884c\u9884\u6d4b\uff0cproba\u5bfc\u51fa\u7684\u662f\u6bcf\u4e2a\u6837\u672c\u5c5e\u4e8e\u67d0\u7c7b\u7684\u6982\u7387\\n    predict = clf.predict(testSet)\\n    clf.predict_proba(testSet)\\n\\n    target_name = iris.target_names\\n\\n    # \u6d4b\u8bd5\u51c6\u786e\u7387\\n    print(\\"\u9884\u6d4b\u7ed3\u679c\u51c6\u786e\u7387\uff1a{}\\".format(accuracy_score(testTarget, predict)))\\n\\n    for i in range(len(testSet)):\\n        print(\\"{}===>{}\\".format(testSet[i], target_name[predict[i]]))\\n        \\n        \\nif __name__ == \'__main__\':\\n    sk_learn()\\n    pass\\n```\\n\\n<mark>OUT</mark>\\n\\n```bash\\nD:\\\\Anaconda3\\\\envs\\\\TF2.1\\\\python.exe naive_bayes.py\\n\u9884\u6d4b\u7ed3\u679c\u51c6\u786e\u7387\uff1a1.0\\n[6.4 2.9 4.3 1.3]===>versicolor\\n[5.2 3.5 1.5 0.2]===>setosa\\n[6.5 3.  5.8 2.2]===>virginica\\n[5.8 2.7 5.1 1.9]===>virginica\\n[4.6 3.4 1.4 0.3]===>setosa\\n[5.6 2.7 4.2 1.3]===>versicolor\\n[4.7 3.2 1.3 0.2]===>setosa\\n[5.7 2.5 5.  2. ]===>virginica\\n[6.9 3.2 5.7 2.3]===>virginica\\n[6.  3.  4.8 1.8]===>virginica\\n[5.4 3.9 1.7 0.4]===>setosa\\n[5.9 3.  5.1 1.8]===>virginica\\n[6.7 3.1 5.6 2.4]===>virginica\\n[5.3 3.7 1.5 0.2]===>setosa\\n[4.3 3.  1.1 0.1]===>setosa\\n[6.5 3.  5.5 1.8]===>virginica\\n[5.6 2.5 3.9 1.1]===>versicolor\\n[6.4 3.1 5.5 1.8]===>virginica\\n[6.8 3.  5.5 2.1]===>virginica\\n[6.9 3.1 5.4 2.1]===>virginica\\n[5.6 3.  4.5 1.5]===>versicolor\\n[5.4 3.7 1.5 0.2]===>setosa\\n[6.7 3.3 5.7 2.1]===>virginica\\n[6.3 2.5 4.9 1.5]===>versicolor\\n[4.9 3.6 1.4 0.1]===>setosa\\n[5.7 2.9 4.2 1.3]===>versicolor\\n[7.2 3.2 6.  1.8]===>virginica\\n[5.2 2.7 3.9 1.4]===>versicolor\\n[5.1 3.3 1.7 0.5]===>setosa\\n[5.7 3.  4.2 1.2]===>versicolor\\n[4.6 3.1 1.5 0.2]===>setosa\\n[6.3 2.5 5.  1.9]===>virginica\\n[5.7 2.6 3.5 1. ]===>versicolor\\n[5.  3.5 1.3 0.3]===>setosa\\n[6.3 3.4 5.6 2.4]===>virginica\\n[7.1 3.  5.9 2.1]===>virginica\\n[6.3 2.3 4.4 1.3]===>versicolor\\n[6.6 3.  4.4 1.4]===>versicolor\\n\\nProcess finished with exit code 0\\n\\n```\\n\\n\\n\\n\\n\\n### \u5b9e\u73b0\u65b9\u5f0f\u4e8c\\n\\n> \u624b\u5199\\n\\n```python\\n# \u65b9\u5f0f\u4e8c\uff1a\\nimport pandas as pd\\nimport numpy as np\\nimport random\\n\\n\\ndef load_dataSet():\\n    csv = pd.read_csv(\'iris.data\', header=None)\\n    return csv\\n    pass\\n\\n\\ndef randSplit(dataSet, rate):\\n    \\"\\"\\"\\n    \u968f\u673a\u6253\u4e71\u6570\u636e\u96c6\\n    :param dataSet: \u6570\u636e\u96c6\\n    :param rate: \u63d0\u53d6\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u7684\u6bd4\u7387\\n    :return: train test\\n    \\"\\"\\"\\n    l_index = list(dataSet.index)  # \u63d0\u53d6\u51fa\u7d22\u5f15\\n    random.shuffle(l_index)  # \u968f\u673a\u6253\u4e71\u7d22\u5f15\\n    dataSet.index = l_index  # \u5c06\u6253\u4e71\u540e\u7684\u7d22\u5f15\u91cd\u65b0\u8d4b\u503c\u7ed9\u539f\u6570\u636e\u96c6\\n    n = dataSet.shape[0]  # \u603b\u884c\u6570\\n    m = int(n * rate)  # \u8bad\u7ec3\u96c6\u7684\u6570\u91cf\\n    train = dataSet.loc[range(m), :]  # \u63d0\u53d6\u524dm\u4e2a\u8bb0\u5f55\u4f5c\u4e3a\u8bad\u7ec3\u96c6\\n    test = dataSet.loc[range(m, n), :]  # \u5269\u4e0b\u7684\u4f5c\u4e3a\u6d4b\u8bd5\u96c6\\n    dataSet.index = range(dataSet.shape[0])  # \u66f4\u65b0\u539f\u6570\u636e\u96c6\u7684\u7d22\u5f15\\n    test.index = range(test.shape[0])  # \u66f4\u65b0\u6d4b\u8bd5\u96c6\u7684\u7d22\u5f15\\n    return train, test\\n\\n\\ndef gnb_classify(train, test):\\n    \\"\\"\\"\\n    \u5206\u7c7b\\n    :param train: \u8bad\u7ec3\u96c6 \\n    :param test:  \u6d4b\u8bd5\u96c6\\n    :return: \\n    \\"\\"\\"\\n    labels = train.iloc[:, -1].value_counts().index  # \u63d0\u53d6\u8bad\u7ec3\u96c6\u7684\u6807\u7b7e\u79cd\u7c7b\\n    mean = []  # \u5b58\u653e\u6bcf\u4e2a\u7c7b\u522b\u7684\u5747\u503c\\n    std = []  # \u5b58\u653e\u6bcf\u4e2a\u7c7b\u522b\u7684\u65b9\u5dee\\n    result = []  # \u5b58\u653e\u6d4b\u8bd5\u96c6\u7684\u9884\u6d4b\u7ed3\u679c\\n    for i in labels:\\n        item = train.loc[train.iloc[:, -1] == i, :]  # \u5206\u522b\u63d0\u53d6\u51fa\u6bcf\u4e00\u79cd\u7c7b\u522b\\n        m = item.iloc[:, :-1].mean()  # \u5f53\u524d\u7c7b\u522b\u7684\u5e73\u5747\u503c\\n        s = np.sum((item.iloc[:, :-1] - m) ** 2) / (item.shape[0])  # \u65b9\u5dee\\n        mean.append(m)\\n        std.append(s)\\n    means = pd.DataFrame(mean, index=labels)\\n    stds = pd.DataFrame(std, index=labels)\\n\\n    for j in range(test.shape[0]):\\n        iset = test.iloc[j, :-1].tolist()  # \u5f53\u524d\u6d4b\u8bd5\u5b9e\u4f8b\\n        iprob = np.exp(-1 * (iset - means) ** 2 / (stds * 2)) / (np.sqrt(2 * np.pi * stds))  # \u6b63\u6001\u5206\u5e03\u516c\u5f0f\\n        prob = 1  # \u521d\u59cb\u5316\u5f53\u524d\u5b9e\u4f8b\u603b\u6982\u7387\\n\\n        for k in range(test.shape[-1] - 1):\\n            prob *= iprob[k]\\n            cla = prob.index[np.argmax(prob.values)]  # \u8fd4\u56de\u6700\u5927\u6982\u7387\u7684\u7c7b\u522b\\n        result.append(cla)\\n    test[\'predict\'] = result\\n    acc = (test.iloc[:, -1] == test.iloc[:, -2]).mean()  # \u8ba1\u7b97\u9884\u6d4b\u51c6\u786e\u7387\\n    print(\\"\u9884\u6d4b\u51c6\u786e\u7387: {}\\".format(acc))\\n    # \u8f93\u5165\u9884\u6d4b\u7684\u7ed3\u679c\\n    print(test)\\n    \\n    \\nif __name__ == \'__main__\':\\n    data_set = load_dataSet()\\n    # \u7ed9 80% \u7684\u6570\u636e\u7528\u6765\u8bad\u7ec3\uff0c20% \u7528\u6765\u6d4b\u8bd5\\n    _train, _test = randSplit(data_set, 0.8)\\n    gnb_classify(_train, _test)\\n    pass\\n```\\n\\n<mark>OUT</mark>\\n\\n```bash\\nD:\\\\Anaconda3\\\\envs\\\\TF2.1\\\\python.exe /naive_bayes.py\\n\u9884\u6d4b\u51c6\u786e\u7387: 0.9666666666666667\\n      0    1    2    3                4          predict\\n0   6.8  2.8  4.8  1.4  Iris-versicolor  Iris-versicolor\\n1   7.4  2.8  6.1  1.9   Iris-virginica   Iris-virginica\\n2   4.6  3.1  1.5  0.2      Iris-setosa      Iris-setosa\\n3   7.0  3.2  4.7  1.4  Iris-versicolor  Iris-versicolor\\n4   6.3  2.3  4.4  1.3  Iris-versicolor  Iris-versicolor\\n5   6.9  3.2  5.7  2.3   Iris-virginica   Iris-virginica\\n6   6.0  2.2  5.0  1.5   Iris-virginica  Iris-versicolor\\n7   6.3  3.3  4.7  1.6  Iris-versicolor  Iris-versicolor\\n8   5.5  2.6  4.4  1.2  Iris-versicolor  Iris-versicolor\\n9   5.4  3.9  1.7  0.4      Iris-setosa      Iris-setosa\\n10  5.8  4.0  1.2  0.2      Iris-setosa      Iris-setosa\\n11  6.5  3.0  5.2  2.0   Iris-virginica   Iris-virginica\\n12  5.2  3.5  1.5  0.2      Iris-setosa      Iris-setosa\\n13  6.3  2.5  4.9  1.5  Iris-versicolor  Iris-versicolor\\n14  7.7  3.0  6.1  2.3   Iris-virginica   Iris-virginica\\n15  5.4  3.4  1.5  0.4      Iris-setosa      Iris-setosa\\n16  5.0  3.6  1.4  0.2      Iris-setosa      Iris-setosa\\n17  5.1  3.8  1.9  0.4      Iris-setosa      Iris-setosa\\n18  5.7  2.9  4.2  1.3  Iris-versicolor  Iris-versicolor\\n19  7.2  3.2  6.0  1.8   Iris-virginica   Iris-virginica\\n20  4.8  3.0  1.4  0.3      Iris-setosa      Iris-setosa\\n21  4.3  3.0  1.1  0.1      Iris-setosa      Iris-setosa\\n22  5.0  3.4  1.6  0.4      Iris-setosa      Iris-setosa\\n23  5.1  3.8  1.5  0.3      Iris-setosa      Iris-setosa\\n24  6.0  2.7  5.1  1.6  Iris-versicolor  Iris-versicolor\\n25  5.5  2.3  4.0  1.3  Iris-versicolor  Iris-versicolor\\n26  5.0  3.3  1.4  0.2      Iris-setosa      Iris-setosa\\n27  5.5  2.5  4.0  1.3  Iris-versicolor  Iris-versicolor\\n28  5.4  3.9  1.3  0.4      Iris-setosa      Iris-setosa\\n29  6.4  2.8  5.6  2.1   Iris-virginica   Iris-virginica\\n\\nProcess finished with exit code 0\\n\\n```\\n\\n\\n\\n*\u95ee\u9898\uff1a\u8bad\u7ec3\u6570\u662f\u968f\u673a\u7b5b\u9009\u7684\uff0c\u6bcf\u6b21\u8fd0\u884c\u7684\u51c6\u786e\u7387\u4e0d\u4e00\u6837*"},{"id":"/2019/11/08/npm","metadata":{"permalink":"/blog/2019/11/08/npm","editUrl":"https://github.com/chriy/chriy.github.io/blog/2019-11-08-npm.md","source":"@site/blog/2019-11-08-npm.md","title":"npm\u7684\u4f7f\u7528\u65b9\u6cd5","description":"\u4ec0\u4e48\u662fnpm","date":"2019-11-08T00:00:00.000Z","formattedDate":"November 8, 2019","tags":[],"readingTime":1.815,"truncated":false,"authors":[],"frontMatter":{"title":"npm\u7684\u4f7f\u7528\u65b9\u6cd5"},"prevItem":{"title":"\u6734\u7d20\u8d1d\u53f6\u65af","permalink":"/blog/2020/04/02/naivebayes"},"nextItem":{"title":"Vue\u7ec4\u4ef6\u4e4b\u95f4\u76f8\u4e92\u4f20\u503c","permalink":"/blog/2019/10/10/Vue\u7ec4\u4ef6\u4f20\u503c"}},"content":"### \u4ec0\u4e48\u662fnpm\\n\u4e00\u3001npm\u662f\u4e00\u4e2a\u5305\u7ba1\u7406\u5de5\u5177,\u7c7b\u4f3c\u540e\u7aef\u7684 maven, gradle\\n\\n> \u9996\u5148\uff0c\u9700\u8981\u4f7f\u7528npm\u5c31\u5f97\u5148\u5b89\u88c5nodejs\uff0c\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\u5462\uff0cnodejs\u662f\u4f1a\u81ea\u5e26 npm \u7684\u3002\\n\\n- npm \u5b89\u88c5\u7684\u4f9d\u8d56\u90fd\u4f1a\u4e0b\u8f7d\u5230 node_modules\u76ee\u5f55\u4e0b\u9762\\n\\n### \u5982\u679c\u521b\u5efapackage.json?\\n\\n> \u521d\u59cb\u5316\u4e00\u4e2apackage.json\\n\\n```shell\\nnpm init -y   npm init --yes \\n```\\n\\n```json\\n{\\n  \\"name\\": \\"\\",\\n  \\"version\\": \\"1.0.0\\",\\n  \\"description\\": \\"\\",\\n  \\"main\\": \\"index.js\\",\\n  \\"scripts\\": {\\n    \\"test\\": \\"echo \\\\\\"Error: no test specified\\\\\\" && exit 1\\",\\n    \\"hello\\": \\"hello world\\"\\n  },\\n  \\"keywords\\": [],\\n  \\"author\\": \\"\\",\\n  \\"license\\": \\"MIT\\"\\n}\\n```\\n\\npackage.json \u8fd9\u662f\u4e00\u4e2ajson\u6587\u4ef6\uff0c\u7528\u6765\u7ba1\u7406\u8fd9\u4e9b\u5305\u7684\u7248\u672c\u548c\u4e00\u4e9b\u4f9d\u8d56\u5173\u7cfb\uff0c\u5f53\u9879\u76ee\u4e2d\u7f3a\u5c11 node_modules\u76ee\u5f55\u65f6\uff0c\u6267\u884c `npm install` \u6216 `npm i` \u8fd9\u4e9b \u4f9d\u8d56\u5c31\u4f1a\u4e00\u4e2a\u4e00\u4e2a\u7684\u4e0b\u8f7d\u4e0b\u6765\\n\\n**script \u4e2d\u5b9a\u4e49\u7684 \u547d\u4ee4 \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u6765\u8fd0\u884c**\\n\\n```bash\\nnpm run hello\\n```\\n\\n### \u914d\u7f6e\u9ed8\u8ba4\u7684 package.json\\n\\n```bash\\nnpm set init.license \'MIT\'\\nnpm set init.author \'xxx\'\\n...\\n```\\n\\n### \u5b89\u88c5 - \u5378\u8f7d - \u66f4\u65b0\\n\\n```bash\\n#\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u5747\u53ef\u5b89\u88c5\\nnpm i vue   \\nnpm install vue #\u5b89\u88c5\u4e00\u4e2a\u4f9d\u8d56\uff0c\u8fd9\u4e2a\u547d\u4ee4\u80fd\u76f4\u63a5\u628a\u5305\u4e0b\u8f7d\u4e0b\u6765\uff0c\u653e\u5728node_modules\u76ee\u5f55\u4e0b\\n\\n#\u6307\u5b9a\u7248\u672c\u5b89\u88c5\\nnpm i jquery@3.0.0\\n\\n#\u5b89\u88c5\u5f00\u53d1\u7248\u672c\\nnpm i --save-dev vue #\u8fd9\u79cd\u5b89\u88c5\u65b9\u5f0f\u5c06\u53ea\u4f1a\u5728\u5f00\u53d1\u73af\u5883\u4e2d\u7528\u5230\uff0c\u751f\u6210\u73af\u5883\u4e0d\u4f1a\\n\\n#\u5378\u8f7d\u4f9d\u8d56\\nnpm uninstall vue \\n\\n#\u5982\u679c\u9700\u8981\u4ecepackage.json\u4e2d\u5220\u9664\u4f9d\u8d56\uff0c\u9700\u8981\u52a0\u4e0a --save\u53c2\u6570\\nnpm uninstall --save lodash\\n\\n#\u66f4\u65b0\u4f9d\u8d56\\nnpm update vue\\n\\n```\\n\\n## npm \u81ea\u8eab\u5347\u7ea7\\n\\n```bash\\nnpm install npm@latest -g\\n```"},{"id":"/2019/10/10/Vue\u7ec4\u4ef6\u4f20\u503c","metadata":{"permalink":"/blog/2019/10/10/Vue\u7ec4\u4ef6\u4f20\u503c","editUrl":"https://github.com/chriy/chriy.github.io/blog/2019-10-10-Vue\u7ec4\u4ef6\u4f20\u503c.md","source":"@site/blog/2019-10-10-Vue\u7ec4\u4ef6\u4f20\u503c.md","title":"Vue\u7ec4\u4ef6\u4e4b\u95f4\u76f8\u4e92\u4f20\u503c","description":"1. \u5b50\u7ec4\u4ef6\u5f80\u7236\u7ec4\u4ef6\u4f20\u503c","date":"2019-10-10T00:00:00.000Z","formattedDate":"October 10, 2019","tags":[],"readingTime":1.285,"truncated":false,"authors":[],"frontMatter":{"title":"Vue\u7ec4\u4ef6\u4e4b\u95f4\u76f8\u4e92\u4f20\u503c"},"prevItem":{"title":"npm\u7684\u4f7f\u7528\u65b9\u6cd5","permalink":"/blog/2019/11/08/npm"}},"content":"### 1. \u5b50\u7ec4\u4ef6\u5f80\u7236\u7ec4\u4ef6\u4f20\u503c\\n\\n- \u5b9a\u4e49\u4e00\u4e2a `\u4e2d\u95f4\u4f20\u8f93\u8005`\u7528\u6765\u4f20\u8f93\u6570\u636e\\n\\n```javascript\\n  //main.js\\n  \\n  /*\u5b9a\u4e49\u5168\u5c40\u4f20\u9001\u8005\uff0c\u7528\u6765\u5b50\u7ec4\u4ef6\u5f80\u7236\u7ec4\u4ef6\u4f20\u503c*/\\n  Vue.prototype.$vm = new Vue();\\n```\\n\\n- \u5b50\u7ec4\u4ef6\u5b9a\u4e49\u65b9\u6cd5\\n\\n```javascript\\n// methods\u4e2d\u5b9a\u4e49\u65b9\u6cd5\\ncloseSlideBar() {\\n  /* closeSlideBar: \u662f\u4e00\u4e2a\u4e8b\u4ef6\u540d\uff0c\u5b50\u7ec4\u4ef6\\n   * \u5b9a\u4e49\u4e86\u5565\uff0c\u7236\u7ec4\u4ef6\u63a5\u53d7\u7684\u65f6\u5019\u5c31\u5199\u5565\\n   * false: \u8fd9\u662f\u9700\u8981\u4f20\u9012\u7684\u503c\\n   */\\n  this.$vm.$emit(\\"closeSlideBar\\", false);\\n  console.log(\\"\u4f20\u503c\u65b9\u6cd5\u88ab\u8c03\u7528\\");\\n}\\n```\\n\\n- \u5728\u7236\u7ec4\u4ef6\u4e2d\u63a5\u53d7\\n\\n```javascript\\n// \u9700\u8981\u5728\u94a9\u5b50\u51fd\u6570\u4e2d\u5b9a\u4e49 mounted\\nmounted() {\\n    //  closeSlideBar: \u662f\u5b50\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u65f6\u95f4\u540d\\n    // val: \u5b50\u7ec4\u4ef6\u4f20\u9012\u8fc7\u6765\u7684\u503c\\n    this.$vm.$on(\\"closeSlideBar\\", (val) => {\\n        console.log(\'\u7236\u7ec4\u4ef6\u63a5\u6536\u5230\u503c\');\\n        this.show = val;\\n    })\\n}\\n```\\n\\n\\n\\n### 2. \u7236\u7ec4\u4ef6\u5f80\u5b50\u7ec4\u4ef6\u4f20\u503c\\n\\n- \u5728\u5b50\u7ec4\u4ef6\u4e2d\u5b9a\u4e49 props\\n\\n```javascript\\nexport default {\\n    name: \\"RecordList\\",\\n    data() {\\n        return {\\n        }\\n    },\\n    // \u7236\u7ec4\u4ef6\u4f20\u9012\u8fc7\u6765\u7684\u503c\\n    props: [\'type\']\\n}\\n```\\n\\n- \u5728\u7236\u7ec4\u4ef6\u8c03\u7528\u7684\u65f6\u5019\u4f20\u9012\\n\\n```html\\n\x3c!--\u6b64\u5904\u7684type\u5c31\u662f\u5728\u5b50\u7ec4\u4ef6 props \u4e2d\u63a5\u6536\u7684\u540d\u5b57--\x3e\\n<RecordList type=\\"In\\"/>\\n```"}]}')}}]);