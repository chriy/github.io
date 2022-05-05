"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[547],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,p=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?a.createElement(p,o(o({ref:n},m),{},{components:t})):a.createElement(p,o({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4540:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],c={title:"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66"},s=void 0,l={permalink:"/blog/2021/11/07/openssl",editUrl:"https://github.com/chriy/chriy.github.io/blog/2021-11-07-openssl.md",source:"@site/blog/2021-11-07-openssl.md",title:"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66",description:"\u5229\u7528openssl\u9881\u53d1\u672c\u5730SSL\u8bc1\u4e66.  \u4ee5\u4e0b\u811a\u672c\u6765\u81ea github  \u7565\u6709\u6539\u52a8",date:"2021-11-07T00:00:00.000Z",formattedDate:"November 7, 2021",tags:[],readingTime:6.32,truncated:!1,authors:[],frontMatter:{title:"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66"},prevItem:{title:"Welcome",permalink:"/blog/welcome"},nextItem:{title:"npm\u7684\u4f7f\u7528\u65b9\u6cd5",permalink:"/blog/2019/11/08/npm"}},m={authorsImageUrls:[]},u=[{value:"1. \u6839\u8bc1\u4e66",id:"1-\u6839\u8bc1\u4e66",level:2},{value:"2. \u521b\u5efa\u8bc1\u4e66",id:"2-\u521b\u5efa\u8bc1\u4e66",level:2},{value:"3. \u7b7e\u53d1\u8bc1\u4e66",id:"3-\u7b7e\u53d1\u8bc1\u4e66",level:2},{value:"4. \u4f7f\u7528",id:"4-\u4f7f\u7528",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5229\u7528openssl\u9881\u53d1\u672c\u5730SSL\u8bc1\u4e66.  \u4ee5\u4e0b\u811a\u672c\u6765\u81ea ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/etdey/ssl.ca"},"github"),"  \u7565\u6709\u6539\u52a8")),(0,i.kt)("p",null,"\u751f\u6210\u8bc1\u4e66\u4e00\u5171\u53ef\u4ee5\u5206\u4e3a\u4e09\u6b65:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u751f\u6210\u6839\u8bc1\u4e66, \u8fd9\u4e2a\u662f\u7528\u6765\u5b89\u88c5\u5728\u8bbe\u5907\u4e2d, \u8ba9\u8bbe\u5907\u4fe1\u4efb\u81ea\u5df1\u9881\u53d1\u7684\u8bc1\u4e66,  \u6ce8: Window\u5b89\u88c5\u9700\u8981\u5b89\u88c5\u5230 ",(0,i.kt)("strong",{parentName:"li"},"\u53d7\u4fe1\u4efb\u7684\u6839\u8bc1\u4e66\u9881\u53d1\u673a\u6784")),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8bc1\u4e66"),(0,i.kt)("li",{parentName:"ol"},"\u7b7e\u53d1\u8bc1\u4e66")),(0,i.kt)("h2",{id:"1-\u6839\u8bc1\u4e66"},"1. \u6839\u8bc1\u4e66"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"new-root-ca.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n##\n##  new-root-ca.sh - create the root CA\n##  Copyright (c) 2000 Yeak Nai Siew, All Rights Reserved.\n##\n\nKEYBITS=4096\nHASHALGO="sha256"\nVALID_DAYS=3650\nRANDOM_SRC=/dev/urandom\n\n# Create the master CA key. This should be done once.\nif [ ! -f ca.key ]; then\n        echo "No Root CA key found. Generating one"\n        openssl genrsa -aes256 -out ca.key -rand ${RANDOM_SRC} $KEYBITS\n        echo ""\nfi\n\n# Self-sign it.\nCONFIG="root-ca.conf"\ncat >$CONFIG <<EOT\n[ req ]\ndefault_bits                    = $KEYBITS\ndefault_keyfile                 = ca.key\ndefault_md              = $HASHALGO\ndistinguished_name              = req_distinguished_name\nx509_extensions                 = v3_ca\nstring_mask                     = nombstr\nreq_extensions                  = v3_req\n[ req_distinguished_name ]\ncountryName                     = Country Name (2 letter code)\ncountryName_default             = CN\ncountryName_min                 = 2\ncountryName_max                 = 2\nstateOrProvinceName             = State or Province Name (full name)\nlocalityName                    = Locality Name (eg, city)\n0.organizationName              = Organization Name (eg, company)\n0.organizationName_default      = Chriy Personal Certificate Authority\norganizationalUnitName          = Organizational Unit Name (eg, section)\norganizationalUnitName_default  = Certification Services Division\ncommonName                      = Common Name (eg, MD Root CA)\ncommonName_default              = Chriy Root CA\ncommonName_max                  = 64\nemailAddress                    = Email Address\nemailAddress_max                = 40\n[ v3_ca ]\nbasicConstraints                = critical,CA:true\nsubjectKeyIdentifier            = hash\n[ v3_req ]\nnsCertType                      = objsign,email,server\nEOT\n\necho "Self-sign the root CA..."\nopenssl req -new -x509 -days ${VALID_DAYS} -config $CONFIG -key ca.key -out ca.crt\necho "complete."\nrm -f $CONFIG\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6267\u884c\u8fd9\u6bb5\u811a\u672c\u540e, \u53ef\u4ee5\u6309\u63d0\u793a\u8f93\u5165\u4e00\u4e9b\u4fe1\u606f, \u5982: \u56fd\u5bb6, \u57ce\u5e02, \u7ec4\u7ec7, \u9881\u53d1\u673a\u6784\u7b49\u7b49, \u8fd9\u4e9b\u5c31\u662f\u5bf9\u5e94\u4e86\u8bc1\u4e66\u7684\u4e00\u4e9b\u4fe1\u606f"),". \u63a5\u4e0b\u6765\u8fd8\u6709\u4e2a\u8f93\u5165\u5bc6\u7801\u7684\u8fc7\u7a0b, \u8fd9\u4e2a\u5bc6\u7801\u5bf9\u5e94\u540e\u9762\u7b7e\u53d1\u8bc1\u4e66\u65f6\u7684\u5bc6\u7801,  \u540e\u9762\u8981\u7528\u5230."),(0,i.kt)("h2",{id:"2-\u521b\u5efa\u8bc1\u4e66"},"2. \u521b\u5efa\u8bc1\u4e66"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"new-server-cert.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n##\n##  new-server-cert.sh - create the server cert\n##  Copyright (c) 2000 Yeak Nai Siew, All Rights Reserved.\n##\n\nKEYBITS=4096\nHASHALGO="sha256"\n\n# Create the key. This should be done once per cert.\nCN=$1\nif [ $# -lt 1 ]; then\n    echo "Usage: $0 <www.domain.com> [subjectAltName1 [san2 ...]]"\n    exit 1\nfi\n\n# force the CN to become a SAN even if no other SANs; Chrome compatibility\nsubjectAltNames="$*"\n\n# if private key exists, ask if we want to generate a new key\nif [ -f $CN.key ]; then\n    read -p "a key for this cn is already existing, generate a new one? " ANSWER\n    if [ "$ANSWER" == "Y" ] || [ "$ANSWER" == "y" ]; then\n        rm -f $CN.key\n    fi\nfi\n\nif [ ! -f $CN.key ]; then\n    echo "No $CN.key found. Generating one"\n    openssl genrsa -out $CN.key $KEYBITS\n    echo ""\nfi\n\n# Fill the necessary certificate data\nCONFIG="server-cert.conf"\ncat >$CONFIG <<EOT\n[ req ]\ndefault_bits                    = $KEYBITS\ndefault_keyfile                 = server.key\ndefault_md                      = $HASHALGO\ndistinguished_name              = req_distinguished_name\nstring_mask                     = nombstr\nreq_extensions                  = v3_req\n[ req_distinguished_name ]\ncountryName                     = Country Name (2 letter code)\ncountryName_default             = CN\ncountryName_min                 = 2\ncountryName_max                 = 2\nstateOrProvinceName             = State or Province Name (full name)\nstateOrProvinceName_default     = Shanghai\nlocalityName                    = Locality Name (eg, city)\nlocalityName_default            = Shanghai\n0.organizationName              = Organization Name (eg, company)\n0.organizationName_default      = Chriy Personal Organization\norganizationalUnitName          = Organizational Unit Name (eg, section)\norganizationalUnitName_default  = Secure Server\ncommonName                      = Common Name (eg, www.domain.com)\ncommonName_default              = $CN\ncommonName_max                  = 64\nemailAddress                    = Email Address\nemailAddress_max                = 40\n[ v3_req ]\nnsCertType                      = server\nbasicConstraints                = critical,CA:false\nkeyUsage                = nonRepudiation, digitalSignature, keyEncipherment\nEOT\n\n# Handle optional Subject Alternate Names\nif [ "$subjectAltNames" != "" ]; then\n    echo "subjectAltName = @alt_names" >> $CONFIG\n    echo "[alt_names]" >> $CONFIG\n    numi=1\n    numd=1\n    cn_already_added=0\n\n    # CN is added to the SAN list automatically\n    for san in $CN  $subjectAltNames; do\n        # if CN has already been seen, skip it\n        if [ "$san" = "$CN" ]; then\n            if [ $cn_already_added -eq 0 ]; then\n                cn_already_added=1\n            else\n                continue     #skip to next SAN\n            fi\n        fi\n\n        # determine if this looks like an IP or a DNS name\n        echo $san | egrep \'^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$\' &> /dev/null\n    if [ $? -eq 0 ]; then\n            echo "IP.$numi = $san" >> $CONFIG\n            let numi++\n        else\n            echo "DNS.$numd = $san" >> $CONFIG\n            let numd++\n        fi\n    done\nfi\n\necho "Fill in certificate data"\nopenssl req -new -config $CONFIG -key $CN.key -out $CN.csr\n\nrm -f $CONFIG\n\necho ""\necho "You may now run ./sign-server-cert.sh to get it signed"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./new-server-cert.sh *.test.org\n")),(0,i.kt)("h2",{id:"3-\u7b7e\u53d1\u8bc1\u4e66"},"3. \u7b7e\u53d1\u8bc1\u4e66"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sign-server-cert.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n##\n##  sign-server-cert.sh - sign using our root CA the server cert\n##  Copyright (c) 2000 Yeak Nai Siew, All Rights Reserved.\n##\n\nHASHALGO="sha256"\nVALID_DAYS=365\nRANDOM_SRC=/dev/urandom\n\nCN=$1\nif [ $# -ne 1 ]; then\n    echo "Usage: $0 <www.domain.com>"\n    exit 1\nfi\nif [ ! -f $CN.csr ]; then\n    echo "No $CN.csr found. You must create that first."\n        exit 1\nfi\n# Check for root CA key\nif [ ! -f ca.key -o ! -f ca.crt ]; then\n        echo "You must have root CA key generated first."\n        exit 1\nfi\n\n# Sign it with our CA key #\n\n#   make sure environment exists\nif [ ! -d ca.db.certs ]; then\n    mkdir ca.db.certs\nfi\nif [ ! -f ca.db.serial ]; then\n    echo \'01\' >ca.db.serial\nfi\nif [ ! -f ca.db.index ]; then\n    cp /dev/null ca.db.index\nfi\n\n\n#  create the CA requirement to sign the cert\ncat >ca.config <<EOT\n[ ca ]\ndefault_ca              = default_CA\n[ default_CA ]\ndir                     = .\ncerts                   = \\$dir\nnew_certs_dir           = \\$dir/ca.db.certs\ndatabase                = \\$dir/ca.db.index\nserial                  = \\$dir/ca.db.serial\nRANDFILE                = ${RANDOM_SRC}\ncertificate             = \\$dir/ca.crt\nprivate_key             = \\$dir/ca.key\ndefault_days            = ${VALID_DAYS}\ndefault_crl_days        = 30\ndefault_md              = $HASHALGO\npreserve                = no\nx509_extensions         = server_cert\npolicy                  = policy_anything\n[ policy_anything ]\ncountryName             = optional\nstateOrProvinceName     = optional\nlocalityName            = optional\norganizationName        = optional\norganizationalUnitName  = optional\ncommonName              = supplied\nemailAddress            = optional\n[ server_cert ]\n#subjectKeyIdentifier   = hash\nauthorityKeyIdentifier  = keyid:always\nextendedKeyUsage        = serverAuth,clientAuth,msSGC,nsSGC\nbasicConstraints        = critical,CA:false\n[req]\ndefault_md              = $HASHALGO\nreq_extensions          = v3_req\n[ v3_req ]\nextendedKeyUsage        = serverAuth, clientAuth\nEOT\n\n# Test for Subject Alternate Names\nsubjaltnames="`openssl req -text -noout -in $CN.csr | sed -e \'s/^ *//\' | grep -A1 \'X509v3 Subject Alternative Name:\' | tail -1 | sed -e \'s/IP Address:/IP:/g\'`"\nif [ "$subjaltnames" != "" ]; then\n    echo "Found subject alternate names: $subjaltnames"\n    echo ""\n    echo "subjectAltName          = $subjaltnames" >> ca.config\nfi\n\n#  revoke an existing old certificate\nif [ -f $CN.crt ]; then\n    echo "Revoking current certificate: $CN.crt"\n    openssl ca -revoke $CN.crt -config ca.config\nfi\n\n#  sign the certificate\necho "CA signing: $CN.csr -> $CN.crt:"\nopenssl ca -config ca.config -extensions v3_req -out $CN.crt -infiles $CN.csr\necho ""\necho "CA verifying: $CN.crt <-> CA cert"\nopenssl verify -CAfile ca.crt $CN.crt\necho ""\n\n#  cleanup after SSLeay\nrm -f ca.config\nrm -f ca.db.serial.old\nrm -f ca.db.index.old\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./sign-server-cert.sh *.test.org\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b7e\u53d1\u8bc1\u4e66\u65f6, \u9700\u8981\u8f93\u5165\u521b\u5efa\u6839\u8bc1\u4e66\u65f6\u8bbe\u7f6e\u7684\u5bc6\u7801")),(0,i.kt)("h2",{id:"4-\u4f7f\u7528"},"4. \u4f7f\u7528"),(0,i.kt)("p",null,"\u7b7e\u53d1\u8bc1\u4e66\u540e,  \u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210  ",(0,i.kt)("inlineCode",{parentName:"p"},"*.test.org.key")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"*.test.org.crt")," \u4e24\u4e2a\u6587\u4ef6,  \u5728nginx\u4e2d\u914d\u7f6e\u540e\u5373\u53ef\u4f7f\u7528"))}f.isMDXComponent=!0}}]);