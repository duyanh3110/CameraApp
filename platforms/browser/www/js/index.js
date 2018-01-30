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
	
	/*
	// Another way to take piture but get error
	function openCamera() {
		var srcType = Camera.PictureSourceType.CAMERA;
		var options = setOptions(srcType);
		var func = createNewFileEntry;

		navigator.camera.getPicture(function cameraSuccess(imageURI) {

			displayImage(imageUri);
			// You may choose to copy the picture, save it somewhere, or upload.
			func(imageUri);
		}, function cameraError(error){
			console.debug("unable to obtain picture: " + error, "app");
		}, options);
	}

	function setOptions(srcType) {
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: srcType,
			encodingType: Camera.EncodingType.JPEG,
			mediaType: Camera.MediaType.PICTURE,
			allowEdit: true,
			correctOrientation: true
		}
		return options;
	}

	function displayImage(imgUri) {
		var elem = document.getElementById('img');
		elem.src = imgUri;
	}
	*/
}

