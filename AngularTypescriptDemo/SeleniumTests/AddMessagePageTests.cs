using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestFramework;

namespace SeleniumTests
{
    [TestClass]
    public class AddMessagePageTests
    {

        [TestInitialize]
        public void SetUp()
        {
            Browser.Open();
        }

        [TestMethod]
        public void Can_Go_To_AddMessage_Page()
        {
            Pages.AddMessagePage.Goto();
            Assert.IsTrue(Pages.AddMessagePage.IsAt());
        }


        [TestMethod]
        public void Can_Add_Message()
        {
            Pages.AddMessagePage.Goto();
            Assert.IsTrue(Pages.AddMessagePage.IsMessageAdded());
        }

        [TestCleanup]
        public void CleanUp()
        {
            Browser.Close();
        }
    }
}
