using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestFramework;

namespace SeleniumTests
{
    [TestClass]
    public class MessageListPageTests
    {
        [TestInitialize]
        public void SetUp()
        {
            Browser.Open();
        }


        [TestMethod]
        public void Can_Go_To_MessageList_Page()
        {
            Pages.ListPage.Goto();
            Assert.IsTrue(Pages.ListPage.IsAt());
        }

        [TestMethod]
        public void Can_Go_To_AddMessage_Page_From_MessageList_Page()
        {
            Pages.ListPage.Goto();
            Pages.ListPage.SelectAddMessage();
            System.Threading.Thread.Sleep(5000);
            Assert.IsTrue(Pages.AddMessagePage.IsAt());
        }


        [TestMethod]
        public void Verify_Message_List_Label_On_MessageList_Page()
        {
            Pages.ListPage.Goto();
            Assert.IsTrue(Pages.ListPage.IsMessageListLabelOnPage());
        }


        [TestMethod]
        public void Verify_Hundred_Messages_On_MessageList_Page()
        {
            Pages.ListPage.Goto();
            Assert.IsTrue(Pages.ListPage.IsAtHundredMessage());
        }


        [TestCleanup]
        public void CleanUp()
        {
            Browser.Close();
        }
    }

}
