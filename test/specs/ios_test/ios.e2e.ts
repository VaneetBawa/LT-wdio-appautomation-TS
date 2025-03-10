import { $ } from '@wdio/globals'

describe('My Login application', () => {
    it("Changes color", async () => {
        var color = await $("id=color");
        await color.waitForDisplayed({ timeout: 30000 });
        await color.click();
        await color.click();
      });
    
      it("Changes text", async () => {
        var text = await $("id=Text");
        await text.waitForDisplayed({ timeout: 30000 });
        await text.click();
      });
    
      it("Toast", async () => {
        var toast = await $("id=toast");
        await toast.waitForDisplayed({ timeout: 30000 });
        await toast.click();
      });
    
      it("Notification", async () => {
        var nf = await $("id=notification");
        await nf.waitForDisplayed({ timeout: 30000 });
        await nf.click();
      });
    
      it("Geolocation", async () => {
        var geo = await $("id=geoLocation");
        await geo.waitForDisplayed({ timeout: 30000 });
        await geo.click();
        await driver.back();
      });

})

