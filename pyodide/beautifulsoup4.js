var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="beautifulsoup4.data";var REMOTE_PACKAGE_BASE="beautifulsoup4.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","beautifulsoup4-4.7.1-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","bs4",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/bs4","builder",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/bs4","tests",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:180282,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1251,2427,3926,5477,6611,7630,8713,9883,11069,12065,13115,14280,15504,16861,18127,19322,20627,21868,23118,24265,25549,26511,27511,28612,29384,30279,31002,31898,32830,33816,34929,36082,37273,38430,39508,40721,41897,42880,43998,45102,46319,47635,48771,49771,50911,52025,53449,54573,55611,57009,58058,59049,60295,61479,62534,63456,64208,65042,65731,66822,68055,69402,70642,71417,72234,73480,74510,75780,76942,77933,79147,80098,81418,82482,83724,84916,86054,87145,88335,89419,90552,91695,92757,93706,94820,95887,96975,97848,98990,100145,101500,102775,103925,105341,106595,108084,109385,110599,111753,113160,114267,115633,116840,117994,119325,120366,121632,122627,123661,124533,125560,126438,127336,128183,129086,129940,130872,131860,132786,133666,134735,135729,136875,137830,138886,139649,140624,141457,142457,143657,144747,145774,146974,148084,149073,149947,151020,152111,153053,154415,155338,156243,156881,157622,158539,159448,160574,161726,162846,163985,165205,166594,167457,168561,169471,170475,171534,172631,173491,174491,175400,176335,177546,178850,179892],sizes:[1251,1176,1499,1551,1134,1019,1083,1170,1186,996,1050,1165,1224,1357,1266,1195,1305,1241,1250,1147,1284,962,1e3,1101,772,895,723,896,932,986,1113,1153,1191,1157,1078,1213,1176,983,1118,1104,1217,1316,1136,1e3,1140,1114,1424,1124,1038,1398,1049,991,1246,1184,1055,922,752,834,689,1091,1233,1347,1240,775,817,1246,1030,1270,1162,991,1214,951,1320,1064,1242,1192,1138,1091,1190,1084,1133,1143,1062,949,1114,1067,1088,873,1142,1155,1355,1275,1150,1416,1254,1489,1301,1214,1154,1407,1107,1366,1207,1154,1331,1041,1266,995,1034,872,1027,878,898,847,903,854,932,988,926,880,1069,994,1146,955,1056,763,975,833,1e3,1200,1090,1027,1200,1110,989,874,1073,1091,942,1362,923,905,638,741,917,909,1126,1152,1120,1139,1220,1389,863,1104,910,1004,1059,1097,860,1e3,909,935,1211,1304,1042,390],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_beautifulsoup4.data")}Module["addRunDependency"]("datafile_beautifulsoup4.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/beautifulsoup4-4.7.1-py3.7.egg-info/SOURCES.txt",start:0,end:861,audio:0},{filename:"/lib/python3.7/site-packages/beautifulsoup4-4.7.1-py3.7.egg-info/dependency_links.txt",start:861,end:862,audio:0},{filename:"/lib/python3.7/site-packages/beautifulsoup4-4.7.1-py3.7.egg-info/requires.txt",start:862,end:911,audio:0},{filename:"/lib/python3.7/site-packages/beautifulsoup4-4.7.1-py3.7.egg-info/top_level.txt",start:911,end:915,audio:0},{filename:"/lib/python3.7/site-packages/beautifulsoup4-4.7.1-py3.7.egg-info/PKG-INFO",start:915,end:4402,audio:0},{filename:"/lib/python3.7/site-packages/bs4/__init__.py",start:4402,end:27635,audio:0},{filename:"/lib/python3.7/site-packages/bs4/diagnose.py",start:27635,end:34601,audio:0},{filename:"/lib/python3.7/site-packages/bs4/element.py",start:34601,end:94337,audio:0},{filename:"/lib/python3.7/site-packages/bs4/dammit.py",start:94337,end:124210,audio:0},{filename:"/lib/python3.7/site-packages/bs4/testing.py",start:124210,end:165351,audio:0},{filename:"/lib/python3.7/site-packages/bs4/builder/_html5lib.py",start:165351,end:182083,audio:0},{filename:"/lib/python3.7/site-packages/bs4/builder/__init__.py",start:182083,end:194495,audio:0},{filename:"/lib/python3.7/site-packages/bs4/builder/_htmlparser.py",start:194495,end:207668,audio:0},{filename:"/lib/python3.7/site-packages/bs4/builder/_lxml.py",start:207668,end:218414,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/test_tree.py",start:218414,end:300510,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/test_html5lib.py",start:300510,end:306347,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/test_htmlparser.py",start:306347,end:308075,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/test_lxml.py",start:308075,end:311513,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/__init__.py",start:311513,end:311540,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/test_builder_registry.py",start:311540,end:317122,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/test_soup.py",start:317122,end:337435,audio:0},{filename:"/lib/python3.7/site-packages/bs4/tests/test_docs.py",start:337435,end:338502,audio:0}],remote_package_size:184378,package_uuid:"719ac5c2-2d52-46f3-83af-d3af9d7185d8"})})();