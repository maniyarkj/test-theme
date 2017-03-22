(function(){
  'use strict';
  angular.module('apApp.adminModules.services')
    .service('AdminServices', ['$http', 'API_URL', 'AWS_URL', '$rootScope', 'AWS', 'ENVIRONMENT', 'STATE',
      function($http, API_URL, AWS_URL, $rootScope, AWS, ENVIRONMENT, STATE) {
        console.log(ENVIRONMENT);
        console.log(STATE);
        console.log(AWS);
      return {
        // CRUD Operations for Role

        // Save Role Entity
        saveRoleEntity : function(dataObject, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'POST',
            url: AWS + STATE.roles + ENVIRONMENT,
            // url: AWS_URL.roles + 'roles/',
            // url: API_URL.roles + 'v1/roles/',
            data: JSON.stringify(dataObject),
            headers: {
              // 'authToken': AuthService.getToken(),
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.roleXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },


        // Update Role Entity
        updateRoleEntity : function(dataObject, roleId, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'PUT',
            url: AWS + STATE.roles + ENVIRONMENT + roleId + '?tenantId=5',
            // url: AWS_URL.roles + 'roles/' + roleId,
            data : dataObject,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.roleXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Delete Role Entity
        deleteRoleEntity : function(roleId, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'DELETE',
            url: AWS + STATE.roles + ENVIRONMENT + roleId + '?tenantId=5',
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.roleXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Get All Roles
        getRoles : function(successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS +  STATE.roles + ENVIRONMENT + '?tenantId=5',
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.roleXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // CRUD Operations for Organization Levels
        getOrganisationLevels : function(successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS + STATE.orgLevel + ENVIRONMENT + '?tenantId=tenant1',
            // url: AWS_URL.organisationLevel + 'organizationLevels',
            // url: API_URL.organisationLevel + 'v1/orglevels',
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.orgLevelXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // CRUD Operations for Users
        saveUser : function(dataObject, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'POST',
            url: AWS + STATE.users + ENVIRONMENT,
            // url: AWS_URL.users + 'users/',
            // url: API_URL.users + 'v1/users/',
            data: JSON.stringify(dataObject),
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.userXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        getIndividualUser : function(id, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS + STATE.users + ENVIRONMENT + id + '?tenantId=5',
            // url: AWS_URL.users + 'users/'+ id,
            // url: API_URL.users + 'v1/users/'+ id,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.userXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        getAllUsers : function(pageSize, pageNumber, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS + STATE.users + ENVIRONMENT + '?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&tenantId=5',
            // url: AWS_URL.users + 'users?pageSize=' + pageSize + "&pageNumber=" + pageNumber,
            // url: API_URL.users + 'v1/users?pageSize=' + pageSize + "&pageNumber=" + pageNumber,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.userXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        getAllFilteredUsers : function(pageSize, pageNumber, searchStr, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS + STATE.users + ENVIRONMENT + '?pageSize=' + pageSize + "&pageNumber=" + pageNumber + "&" + searchStr + '&tenantId=5',
            // url: AWS_URL.users + 'users?pageSize=' + pageSize + "&pageNumber=" + pageNumber + "&" + searchStr,
            // url: API_URL.users + 'v1/users?pageSize=' + pageSize + "&pageNumber=" + pageNumber + "&" + searchStr,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.userXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Update User
        updateUser : function(dataObject, userId, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'PUT',
            url: AWS + STATE.users + ENVIRONMENT + userId + '?tenantId=5',
            // url: AWS_URL.users + 'users/' + userId,
            // url: API_URL.users + 'v1/users/' + userId,
            data: JSON.stringify(dataObject),
            headers: {
              // 'authToken': AuthService.getToken(),
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.userXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Delete User
        deleteUser : function(userId, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'DELETE',
            url: AWS + STATE.users + ENVIRONMENT + userId + '?tenantId=5',
            // url: AWS_URL.users + 'users/' + userId,
            // url: AWS_URL.users + 'users/' + userId,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.userXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Locations APIs
        // Get All Locations
        getAllLocations : function(pageSize, pageNumber, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS  + STATE.locations + ENVIRONMENT + '?tenantId=tenantId&pageSize=' + pageSize + '&pageNumber=' + pageNumber,
            // url: AWS_URL.locations + 'locations?pageSize=' + pageSize + "&pageNumber=" + pageNumber,
            // url: API_URL.locations + 'v1/locations?pageSize=' + pageSize + "&pageNumber=" + pageNumber,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.locationXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Get all Parent Location
        getAllParentLocations : function(successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS  + STATE.locations + ENVIRONMENT + '?tenantId=tenantId',
            // url: AWS_URL.locations + 'locations?pageSize=' + pageSize + "&pageNumber=" + pageNumber,
            // url: API_URL.locations + 'v1/locations?pageSize=' + pageSize + "&pageNumber=" + pageNumber,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.locationXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Get Filtered Location
        getAllFilteredLocations : function(pageSize, pageNumber, searchStr, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS  + STATE.locations + ENVIRONMENT + '?pageSize=' + pageSize + "&pageNumber=" + pageNumber + "&" + searchStr + '&tenantId=tenantId',
            // url: API_URL.locations + 'v1/locations?pageSize=' + pageSize + "&pageNumber=" + pageNumber + "&" + searchStr,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.locationXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Get Specific Location
        getSpecificLocation : function(id, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS  + STATE.locations + ENVIRONMENT + id + '?tenantId=tenantId',
            // url: API_URL.users + 'v1/users/'+ id,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.locationXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Save Location
        saveLocation : function(dataObject, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'POST',
            url: AWS  + STATE.locations + ENVIRONMENT,
            data: JSON.stringify(dataObject),
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.locationXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Update Location
       updateLocation : function(dataObject, locationId, successCallback, errorCallback) {
         $rootScope.loading = true;
         $http({
           method: 'PUT',
           url: AWS  + STATE.locations + ENVIRONMENT + locationId,
           data : dataObject,
           headers: {
             'Content-Type' : 'application/json',
             'x-api-key' : AWS_URL.locationXKey
           }
         })
         .then(function onSuccess(response) {
           $rootScope.loading = false;
           successCallback(response);
         },
         function onError(response) {
           $rootScope.loading = false;
           errorCallback(response);
         });
       },

       deleteLocation : function(locationId, successCallback, errorCallback) {
         $rootScope.loading = true;
         // var url = API_URL.users + 'v1/users/' + locationId;
         $http({
           method: 'DELETE',
           url: AWS  + STATE.locations + ENVIRONMENT + locationId,
           headers: {
             'Content-Type' : 'application/json',
             'x-api-key' : AWS_URL.locationXKey
           }
         })
         .then(function onSuccess(response) {
           $rootScope.loading = false;
           successCallback(response);
         },
         function onError(response) {
           $rootScope.loading = false;
           errorCallback(response);
         });
       },

       // Location Properties CRUD
       getAllLocationProperties : function(successCallback, errorCallback) {
         $rootScope.loading = true;
         $http({
           method: 'GET',
           url: AWS + STATE.locationProps + ENVIRONMENT + '?tenantId=customer1',
           // url: AWS_URL.users + 'users/'+ id,
           // url: API_URL.users + 'v1/users/'+ id,
           headers: {
             'Content-Type' : 'application/json',
             'x-api-key' : AWS_URL.locationPropsXKey
           }
         })
         .then(function onSuccess(response) {
           $rootScope.loading = false;
           successCallback(response);
         },
         function onError(response) {
           $rootScope.loading = false;
           errorCallback(response);
         });
       },

        // Departments CRUD
        getIndividualDept : function(id, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'GET',
            url: AWS + STATE.departments + ENVIRONMENT + id + '?tenantId=5',
            // url: AWS_URL.users + 'users/'+ id,
            // url: API_URL.users + 'v1/users/'+ id,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.departmentXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Save Departments
        saveDepartment : function(dataObject, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'POST',
            url: AWS + STATE.departments + ENVIRONMENT,
            // url: AWS_URL.departments + 'departments/',
            data: JSON.stringify(dataObject),
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.departmentXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Get all department
        getAllDepts : function(pageSize, pageNumber, successCallback, errorCallback) {
          $http({
            method: 'GET',
            url: AWS + STATE.departments + ENVIRONMENT + '?pageSize=' + pageSize + "&pageNumber=" + pageNumber + '&tenantId=tenantIdTest_5',
            // url: API_URL.users + 'v1/users?pageSize=' + pageSize + "&pageNumber=" + pageNumber,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.departmentXKey
            }
          })
          .then(function onSuccess(response) {
            successCallback(response);
          },
          function onError(response) {
            errorCallback(response);
          });
        },

        // Get All Filtered Department
        getAllFilteredDepts : function(pageSize, pageNumber, searchStr, successCallback, errorCallback) {
          $http({
            method: 'GET',
            url: AWS + STATE.departments + ENVIRONMENT + '?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&' + searchStr + '&tenantId=tenantIdTest_5',

            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.departmentXKey
            }
          })
          .then(function onSuccess(response) {
            successCallback(response);
          },
          function onError(response) {
            errorCallback(response);
          });
        },

        // Update Department
        updateDepartment : function(dataObject, departmentId, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'PUT',
            url: AWS + STATE.departments + ENVIRONMENT + departmentId + '?tenantId=5',
            // url: AWS_URL.departments + 'departments/' + departmentId,
            // url: API_URL.departments + 'v1/departments/' + departmentId,
            data: JSON.stringify(dataObject),
            headers: {
              // 'authToken': AuthService.getToken(),
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.departmentXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        },

        // Delete Department
        deleteDepartment : function(departmentId, successCallback, errorCallback) {
          $rootScope.loading = true;
          $http({
            method: 'DELETE',
            url: AWS + STATE.departments + ENVIRONMENT + departmentId + '?tenantId=5',
            // url: AWS_URL.departments + 'departments/' + departmentId,
            // url: AWS_URL.departments + 'departments/' + departmentId,
            headers: {
              'Content-Type' : 'application/json',
              'x-api-key' : AWS_URL.departmentXKey
            }
          })
          .then(function onSuccess(response) {
            $rootScope.loading = false;
            successCallback(response);
          },
          function onError(response) {
            $rootScope.loading = false;
            errorCallback(response);
          });
        }
      };
    }]);
})();
