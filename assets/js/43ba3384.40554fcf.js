"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[522],{3905:function(n,e,r){r.d(e,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function o(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var c=t.createContext({}),l=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},p=function(n){var e=l(n.components);return t.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,a=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),m=l(r),d=i,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?t.createElement(v,s(s({ref:e},p),{},{components:r})):t.createElement(v,s({ref:e},p))}));function d(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3307:function(n,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],o={title:"\u6734\u7d20\u8d1d\u53f6\u65af"},c=void 0,l={permalink:"/blog/2020/04/02/naivebayes",editUrl:"https://github.com/chriy/chriy.github.io/blog/2020-04-02-naivebayes.md",source:"@site/blog/2020-04-02-naivebayes.md",title:"\u6734\u7d20\u8d1d\u53f6\u65af",description:"\u4ece UCI \u4e0a\u4e0b\u8f7d\u6570\u636e\u96c6",date:"2020-04-02T00:00:00.000Z",formattedDate:"April 2, 2020",tags:[],readingTime:5.415,truncated:!1,authors:[],frontMatter:{title:"\u6734\u7d20\u8d1d\u53f6\u65af"},prevItem:{title:"OpenSSL\u81ea\u7b7e\u540d\u8bc1\u4e66",permalink:"/blog/2021/11/07/openssl"},nextItem:{title:"npm\u7684\u4f7f\u7528\u65b9\u6cd5",permalink:"/blog/2019/11/08/npm"}},p={authorsImageUrls:[]},u=[{value:"\u4ece UCI \u4e0a\u4e0b\u8f7d\u6570\u636e\u96c6",id:"\u4ece-uci-\u4e0a\u4e0b\u8f7d\u6570\u636e\u96c6",level:2},{value:"\u5b9e\u73b0\u65b9\u6cd5\u4e00",id:"\u5b9e\u73b0\u65b9\u6cd5\u4e00",level:3},{value:"\u5b9e\u73b0\u65b9\u5f0f\u4e8c",id:"\u5b9e\u73b0\u65b9\u5f0f\u4e8c",level:3}],m={toc:u};function d(n){var e=n.components,r=(0,i.Z)(n,s);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ece-uci-\u4e0a\u4e0b\u8f7d\u6570\u636e\u96c6"},"\u4ece UCI \u4e0a\u4e0b\u8f7d\u6570\u636e\u96c6"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://archive.ics.uci.edu/ml/datasets/iris"},"\u9e22\u5c3e\u82b1\u7279\u5f81\u96c6")),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u65b9\u6cd5\u4e00"},"\u5b9e\u73b0\u65b9\u6cd5\u4e00"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8c03\u7528 scikit-learn \u5e93\u6765\u5b8c\u6210\u5206\u7c7b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from sklearn.naive_bayes import GaussianNB  # \u9ad8\u65af\u6734\u7d20\u8d1d\u53f6\u65af\nfrom sklearn.model_selection import train_test_split  # \u8bad\u7ec3\u96c6\u6d4b\u8bd5\u96c6\u5212\u5206\nfrom sklearn.metrics import accuracy_score  # \u8ba1\u7b97\u51c6\u786e\u7387\n# \u5bfc\u5165\u6570\u636e\u96c6 <\u9e22\u5c3e\u82b1>\nfrom sklearn import datasets\n\n\ndef sk_learn():\n    """\n    \u65b9\u5f0f\u4e00\uff0c\u76f4\u63a5\u8c03\u7528 sk_learn\u7c7b\u5e93\n    :return:\n    """\n    iris = datasets.load_iris()\n\n    # \u5206\u7c7b\u6570\u636e\n    # print(iris.data)\n    # \u6807\u7b7e\n    # print(iris.target)\n\n    # \u5207\u5206\u6570\u636e\u96c6\n    trainSet, testSet, trainTarget, testTarget = train_test_split(iris.data, iris.target, random_state=37)\n\n    # \u5efa\u6a21\n    clf = GaussianNB()\n    # \u4f20\u5165\u6570\u636e\u548c\u6807\u7b7e\n    clf.fit(trainSet, trainTarget)\n\n    # \u5728\u6d4b\u8bd5\u96c6\u4e0a\u8fdb\u884c\u9884\u6d4b\uff0cproba\u5bfc\u51fa\u7684\u662f\u6bcf\u4e2a\u6837\u672c\u5c5e\u4e8e\u67d0\u7c7b\u7684\u6982\u7387\n    predict = clf.predict(testSet)\n    clf.predict_proba(testSet)\n\n    target_name = iris.target_names\n\n    # \u6d4b\u8bd5\u51c6\u786e\u7387\n    print("\u9884\u6d4b\u7ed3\u679c\u51c6\u786e\u7387\uff1a{}".format(accuracy_score(testTarget, predict)))\n\n    for i in range(len(testSet)):\n        print("{}===>{}".format(testSet[i], target_name[predict[i]]))\n        \n        \nif __name__ == \'__main__\':\n    sk_learn()\n    pass\n')),(0,a.kt)("mark",null,"OUT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"D:\\Anaconda3\\envs\\TF2.1\\python.exe naive_bayes.py\n\u9884\u6d4b\u7ed3\u679c\u51c6\u786e\u7387\uff1a1.0\n[6.4 2.9 4.3 1.3]===>versicolor\n[5.2 3.5 1.5 0.2]===>setosa\n[6.5 3.  5.8 2.2]===>virginica\n[5.8 2.7 5.1 1.9]===>virginica\n[4.6 3.4 1.4 0.3]===>setosa\n[5.6 2.7 4.2 1.3]===>versicolor\n[4.7 3.2 1.3 0.2]===>setosa\n[5.7 2.5 5.  2. ]===>virginica\n[6.9 3.2 5.7 2.3]===>virginica\n[6.  3.  4.8 1.8]===>virginica\n[5.4 3.9 1.7 0.4]===>setosa\n[5.9 3.  5.1 1.8]===>virginica\n[6.7 3.1 5.6 2.4]===>virginica\n[5.3 3.7 1.5 0.2]===>setosa\n[4.3 3.  1.1 0.1]===>setosa\n[6.5 3.  5.5 1.8]===>virginica\n[5.6 2.5 3.9 1.1]===>versicolor\n[6.4 3.1 5.5 1.8]===>virginica\n[6.8 3.  5.5 2.1]===>virginica\n[6.9 3.1 5.4 2.1]===>virginica\n[5.6 3.  4.5 1.5]===>versicolor\n[5.4 3.7 1.5 0.2]===>setosa\n[6.7 3.3 5.7 2.1]===>virginica\n[6.3 2.5 4.9 1.5]===>versicolor\n[4.9 3.6 1.4 0.1]===>setosa\n[5.7 2.9 4.2 1.3]===>versicolor\n[7.2 3.2 6.  1.8]===>virginica\n[5.2 2.7 3.9 1.4]===>versicolor\n[5.1 3.3 1.7 0.5]===>setosa\n[5.7 3.  4.2 1.2]===>versicolor\n[4.6 3.1 1.5 0.2]===>setosa\n[6.3 2.5 5.  1.9]===>virginica\n[5.7 2.6 3.5 1. ]===>versicolor\n[5.  3.5 1.3 0.3]===>setosa\n[6.3 3.4 5.6 2.4]===>virginica\n[7.1 3.  5.9 2.1]===>virginica\n[6.3 2.3 4.4 1.3]===>versicolor\n[6.6 3.  4.4 1.4]===>versicolor\n\nProcess finished with exit code 0\n\n")),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u65b9\u5f0f\u4e8c"},"\u5b9e\u73b0\u65b9\u5f0f\u4e8c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u624b\u5199")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# \u65b9\u5f0f\u4e8c\uff1a\nimport pandas as pd\nimport numpy as np\nimport random\n\n\ndef load_dataSet():\n    csv = pd.read_csv(\'iris.data\', header=None)\n    return csv\n    pass\n\n\ndef randSplit(dataSet, rate):\n    """\n    \u968f\u673a\u6253\u4e71\u6570\u636e\u96c6\n    :param dataSet: \u6570\u636e\u96c6\n    :param rate: \u63d0\u53d6\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u7684\u6bd4\u7387\n    :return: train test\n    """\n    l_index = list(dataSet.index)  # \u63d0\u53d6\u51fa\u7d22\u5f15\n    random.shuffle(l_index)  # \u968f\u673a\u6253\u4e71\u7d22\u5f15\n    dataSet.index = l_index  # \u5c06\u6253\u4e71\u540e\u7684\u7d22\u5f15\u91cd\u65b0\u8d4b\u503c\u7ed9\u539f\u6570\u636e\u96c6\n    n = dataSet.shape[0]  # \u603b\u884c\u6570\n    m = int(n * rate)  # \u8bad\u7ec3\u96c6\u7684\u6570\u91cf\n    train = dataSet.loc[range(m), :]  # \u63d0\u53d6\u524dm\u4e2a\u8bb0\u5f55\u4f5c\u4e3a\u8bad\u7ec3\u96c6\n    test = dataSet.loc[range(m, n), :]  # \u5269\u4e0b\u7684\u4f5c\u4e3a\u6d4b\u8bd5\u96c6\n    dataSet.index = range(dataSet.shape[0])  # \u66f4\u65b0\u539f\u6570\u636e\u96c6\u7684\u7d22\u5f15\n    test.index = range(test.shape[0])  # \u66f4\u65b0\u6d4b\u8bd5\u96c6\u7684\u7d22\u5f15\n    return train, test\n\n\ndef gnb_classify(train, test):\n    """\n    \u5206\u7c7b\n    :param train: \u8bad\u7ec3\u96c6 \n    :param test:  \u6d4b\u8bd5\u96c6\n    :return: \n    """\n    labels = train.iloc[:, -1].value_counts().index  # \u63d0\u53d6\u8bad\u7ec3\u96c6\u7684\u6807\u7b7e\u79cd\u7c7b\n    mean = []  # \u5b58\u653e\u6bcf\u4e2a\u7c7b\u522b\u7684\u5747\u503c\n    std = []  # \u5b58\u653e\u6bcf\u4e2a\u7c7b\u522b\u7684\u65b9\u5dee\n    result = []  # \u5b58\u653e\u6d4b\u8bd5\u96c6\u7684\u9884\u6d4b\u7ed3\u679c\n    for i in labels:\n        item = train.loc[train.iloc[:, -1] == i, :]  # \u5206\u522b\u63d0\u53d6\u51fa\u6bcf\u4e00\u79cd\u7c7b\u522b\n        m = item.iloc[:, :-1].mean()  # \u5f53\u524d\u7c7b\u522b\u7684\u5e73\u5747\u503c\n        s = np.sum((item.iloc[:, :-1] - m) ** 2) / (item.shape[0])  # \u65b9\u5dee\n        mean.append(m)\n        std.append(s)\n    means = pd.DataFrame(mean, index=labels)\n    stds = pd.DataFrame(std, index=labels)\n\n    for j in range(test.shape[0]):\n        iset = test.iloc[j, :-1].tolist()  # \u5f53\u524d\u6d4b\u8bd5\u5b9e\u4f8b\n        iprob = np.exp(-1 * (iset - means) ** 2 / (stds * 2)) / (np.sqrt(2 * np.pi * stds))  # \u6b63\u6001\u5206\u5e03\u516c\u5f0f\n        prob = 1  # \u521d\u59cb\u5316\u5f53\u524d\u5b9e\u4f8b\u603b\u6982\u7387\n\n        for k in range(test.shape[-1] - 1):\n            prob *= iprob[k]\n            cla = prob.index[np.argmax(prob.values)]  # \u8fd4\u56de\u6700\u5927\u6982\u7387\u7684\u7c7b\u522b\n        result.append(cla)\n    test[\'predict\'] = result\n    acc = (test.iloc[:, -1] == test.iloc[:, -2]).mean()  # \u8ba1\u7b97\u9884\u6d4b\u51c6\u786e\u7387\n    print("\u9884\u6d4b\u51c6\u786e\u7387: {}".format(acc))\n    # \u8f93\u5165\u9884\u6d4b\u7684\u7ed3\u679c\n    print(test)\n    \n    \nif __name__ == \'__main__\':\n    data_set = load_dataSet()\n    # \u7ed9 80% \u7684\u6570\u636e\u7528\u6765\u8bad\u7ec3\uff0c20% \u7528\u6765\u6d4b\u8bd5\n    _train, _test = randSplit(data_set, 0.8)\n    gnb_classify(_train, _test)\n    pass\n')),(0,a.kt)("mark",null,"OUT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"D:\\Anaconda3\\envs\\TF2.1\\python.exe /naive_bayes.py\n\u9884\u6d4b\u51c6\u786e\u7387: 0.9666666666666667\n      0    1    2    3                4          predict\n0   6.8  2.8  4.8  1.4  Iris-versicolor  Iris-versicolor\n1   7.4  2.8  6.1  1.9   Iris-virginica   Iris-virginica\n2   4.6  3.1  1.5  0.2      Iris-setosa      Iris-setosa\n3   7.0  3.2  4.7  1.4  Iris-versicolor  Iris-versicolor\n4   6.3  2.3  4.4  1.3  Iris-versicolor  Iris-versicolor\n5   6.9  3.2  5.7  2.3   Iris-virginica   Iris-virginica\n6   6.0  2.2  5.0  1.5   Iris-virginica  Iris-versicolor\n7   6.3  3.3  4.7  1.6  Iris-versicolor  Iris-versicolor\n8   5.5  2.6  4.4  1.2  Iris-versicolor  Iris-versicolor\n9   5.4  3.9  1.7  0.4      Iris-setosa      Iris-setosa\n10  5.8  4.0  1.2  0.2      Iris-setosa      Iris-setosa\n11  6.5  3.0  5.2  2.0   Iris-virginica   Iris-virginica\n12  5.2  3.5  1.5  0.2      Iris-setosa      Iris-setosa\n13  6.3  2.5  4.9  1.5  Iris-versicolor  Iris-versicolor\n14  7.7  3.0  6.1  2.3   Iris-virginica   Iris-virginica\n15  5.4  3.4  1.5  0.4      Iris-setosa      Iris-setosa\n16  5.0  3.6  1.4  0.2      Iris-setosa      Iris-setosa\n17  5.1  3.8  1.9  0.4      Iris-setosa      Iris-setosa\n18  5.7  2.9  4.2  1.3  Iris-versicolor  Iris-versicolor\n19  7.2  3.2  6.0  1.8   Iris-virginica   Iris-virginica\n20  4.8  3.0  1.4  0.3      Iris-setosa      Iris-setosa\n21  4.3  3.0  1.1  0.1      Iris-setosa      Iris-setosa\n22  5.0  3.4  1.6  0.4      Iris-setosa      Iris-setosa\n23  5.1  3.8  1.5  0.3      Iris-setosa      Iris-setosa\n24  6.0  2.7  5.1  1.6  Iris-versicolor  Iris-versicolor\n25  5.5  2.3  4.0  1.3  Iris-versicolor  Iris-versicolor\n26  5.0  3.3  1.4  0.2      Iris-setosa      Iris-setosa\n27  5.5  2.5  4.0  1.3  Iris-versicolor  Iris-versicolor\n28  5.4  3.9  1.3  0.4      Iris-setosa      Iris-setosa\n29  6.4  2.8  5.6  2.1   Iris-virginica   Iris-virginica\n\nProcess finished with exit code 0\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u95ee\u9898\uff1a\u8bad\u7ec3\u6570\u662f\u968f\u673a\u7b5b\u9009\u7684\uff0c\u6bcf\u6b21\u8fd0\u884c\u7684\u51c6\u786e\u7387\u4e0d\u4e00\u6837")))}d.isMDXComponent=!0}}]);