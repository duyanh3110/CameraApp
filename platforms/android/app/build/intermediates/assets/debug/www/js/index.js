/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
document.addEventListener('deviceready', onDevice, false);

// Take picture function
function onDevice(){

	// Take picture function
	document.getElementById('take-pic-btn').addEventListener('click',openCamera);
	
	function openCamera() {
		navigator.camera.getPicture(success, error, {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI
		});
	}

	function success(imageURI) {
		var img = document.getElementById('img');
		img.src = imageURI;
	}

	function error(err){
		alert('Unable to obtain picture: ' + err);
	}
	
	// Choose picture from library
	document.getElementById('choose-pic').addEventListener('click',getPhoto);

	function getPhoto(){
		navigator.camera.getPicture(onSuccess, onFail, {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
		});
	}

	function onSuccess(imageURI) {
		var Image = document.getElementById('img-library');
		Image.src = imageURI;
	}

	function onFail(message) {
		alert('An error occured: ' + message);
	}

}
