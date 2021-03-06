/** Copyright (C) 2017 Bonitasoft S.A.
 + * Bonitasoft is a trademark of Bonitasoft SA.
 + * This software file is BONITASOFT CONFIDENTIAL. Not For Distribution.
 + * For commercial licensing information, contact:
 + * Bonitasoft, 32 rue Gustave Eiffel – 38000 Grenoble
 + * or Bonitasoft US, 51 Federal Street, Suite 305, San Francisco, CA 94107
 + */

(function () {
  'use strict';

  angular.module('org.bonitasoft.features.admin.bdm')
    .controller('AddBDMPopupCtrl', AddBDMPopupCtrl);

  function AddBDMPopupCtrl($scope, $modalInstance, FileUploader, gettext, bonitaVersion) {

    var self = this;
    $scope.bonitaVersion = bonitaVersion;

    self.errorUpload = function errorUpload() {
      $scope.isTechnicalError = true;
      $scope.error = gettext('BDM has not been uploaded. System was not able to upload the provided BDM file for technical reasons. You can try again later.');
    };

    self.successUpload = function successUpload(fileItem, response) {
      fileItem = fileItem || {file: {}};
      $scope.isUploadSuccess = true;
      $scope.fileName = fileItem.file.name;
      $scope.filePath = response || '';
    };

    $scope.uploader = new FileUploader({
      autoUpload: true,
      url: '../portal/fileUpload',
      onSuccessItem: self.successUpload,
      onErrorItem: self.errorUpload
    });

    self.closeModalSuccess = function closeModalSuccess() {
      $modalInstance.close($scope.filePath);
    };
  }
})();
