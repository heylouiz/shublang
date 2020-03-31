var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="autograd.data";var REMOTE_PACKAGE_BASE="autograd.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","autograd-1.3-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","autograd",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/autograd","misc",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/autograd","scipy",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/autograd/scipy","stats",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/autograd","numpy",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:74702,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1188,2184,3130,4130,5304,6605,7762,9053,10378,11392,12485,13456,14454,15459,16572,17787,19014,20366,21669,23018,24218,25603,26887,28096,29141,30427,31585,32489,33401,34699,36012,37043,37948,38675,39363,39999,40750,41731,42895,43286,44088,44836,45806,47035,48254,49332,50224,51186,52179,52951,54129,55424,56487,57682,59102,60075,61482,62080,62887,64168,64738,65572,66517,67462,68722,69927,71226,72448,73302],sizes:[1188,996,946,1e3,1174,1301,1157,1291,1325,1014,1093,971,998,1005,1113,1215,1227,1352,1303,1349,1200,1385,1284,1209,1045,1286,1158,904,912,1298,1313,1031,905,727,688,636,751,981,1164,391,802,748,970,1229,1219,1078,892,962,993,772,1178,1295,1063,1195,1420,973,1407,598,807,1281,570,834,945,945,1260,1205,1299,1222,854,1400],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_autograd.data")}Module["addRunDependency"]("datafile_autograd.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/autograd-1.3-py3.7.egg-info/SOURCES.txt",start:0,end:1217,audio:0},{filename:"/lib/python3.7/site-packages/autograd-1.3-py3.7.egg-info/dependency_links.txt",start:1217,end:1218,audio:0},{filename:"/lib/python3.7/site-packages/autograd-1.3-py3.7.egg-info/requires.txt",start:1218,end:1245,audio:0},{filename:"/lib/python3.7/site-packages/autograd-1.3-py3.7.egg-info/top_level.txt",start:1245,end:1254,audio:0},{filename:"/lib/python3.7/site-packages/autograd-1.3-py3.7.egg-info/PKG-INFO",start:1254,end:1933,audio:0},{filename:"/lib/python3.7/site-packages/autograd/builtins.py",start:1933,end:8043,audio:0},{filename:"/lib/python3.7/site-packages/autograd/tracer.py",start:8043,end:11994,audio:0},{filename:"/lib/python3.7/site-packages/autograd/test_util.py",start:11994,end:14875,audio:0},{filename:"/lib/python3.7/site-packages/autograd/util.py",start:14875,end:16357,audio:0},{filename:"/lib/python3.7/site-packages/autograd/__init__.py",start:16357,end:16861,audio:0},{filename:"/lib/python3.7/site-packages/autograd/core.py",start:16861,end:29096,audio:0},{filename:"/lib/python3.7/site-packages/autograd/wrap_util.py",start:29096,end:30677,audio:0},{filename:"/lib/python3.7/site-packages/autograd/differential_operators.py",start:30677,end:39069,audio:0},{filename:"/lib/python3.7/site-packages/autograd/extend.py",start:39069,end:39373,audio:0},{filename:"/lib/python3.7/site-packages/autograd/misc/__init__.py",start:39373,end:39435,audio:0},{filename:"/lib/python3.7/site-packages/autograd/misc/flatten.py",start:39435,end:40555,audio:0},{filename:"/lib/python3.7/site-packages/autograd/misc/tracers.py",start:40555,end:42755,audio:0},{filename:"/lib/python3.7/site-packages/autograd/misc/fixed_points.py",start:42755,end:43526,audio:0},{filename:"/lib/python3.7/site-packages/autograd/misc/optimizers.py",start:43526,end:46283,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/__init__.py",start:46283,end:46466,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/misc.py",start:46466,end:46634,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/signal.py",start:46634,end:52558,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/linalg.py",start:52558,end:54921,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/special.py",start:54921,end:60056,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/integrate.py",start:60056,end:62923,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/__init__.py",start:62923,end:63314,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/poisson.py",start:63314,end:64029,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/chi2.py",start:64029,end:64838,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/multivariate_normal.py",start:64838,end:67347,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/dirichlet.py",start:67347,end:68119,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/norm.py",start:68119,end:70877,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/t.py",start:70877,end:73547,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/gamma.py",start:73547,end:74534,audio:0},{filename:"/lib/python3.7/site-packages/autograd/scipy/stats/beta.py",start:74534,end:75866,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/numpy_vspaces.py",start:75866,end:77870,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/random.py",start:77870,end:78019,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/__init__.py",start:78019,end:78251,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/numpy_vjps.py",start:78251,end:110820,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/linalg.py",start:110820,end:118743,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/numpy_boxes.py",start:118743,end:121867,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/numpy_jvps.py",start:121867,end:132636,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/numpy_wrapper.py",start:132636,end:138104,audio:0},{filename:"/lib/python3.7/site-packages/autograd/numpy/fft.py",start:138104,end:143354,audio:0}],remote_package_size:78798,package_uuid:"d55a9e13-f5e4-4d3d-9601-8efcafc39b0a"})})();