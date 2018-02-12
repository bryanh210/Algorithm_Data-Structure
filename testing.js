module.exports.findResource = async function (sender, action, message, contexts, parameters){
    var usrLocation = parameters.location;
    //fb_messaging.sendTemplateMessage(sender, fb_sample.samplePayload);
    let latitude = usrLocation.latitude;
    let longitude = usrLocation.longitude;
    //await: wait for function to finish
    let resource_categories = await askdarcel_querying.getCategoryMapping();
    console.log(resource_categories);
    let resource_id = resource_categories.get(parameters["resource-category"]);
    let resources = await askdarcel_querying.getResourcesByIdLoc(resource_id, longitude,latitude);
    resources = resources["resources"];
    if (resources) {
        fb_messaging.sendTextMessage(sender, "Here's what I can find:");
        let templateMessage = templateGeneration.generateListing(resources, 3);
        console.log(templateMessage);
        fb_messaging.sendTemplateMessage(sender, templateMessage);

    } else {
        fb_messaging.sendTextMessage(sender, "Sorry, I couldn't find anything");
    }
  }


  function sendTextMessage(recipientId, text) {
      var messageData = {
          recipient: {
              id: recipientId
          },
          message: {
              text: text
          }
      };
      fb_utils.callSendAPI(messageData);
  }

  function sendTemplateMessage(recipientId, templatePayload) {
      var messageData = {
          recipient: {
              id: recipientId
          },
          message: {
              attachment: {
                  type: "template",
                  payload: templatePayload
              }
          }
      };
      fb_utils.callSendAPI(messageData);
  }
