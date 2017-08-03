using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;

namespace TestFramework
{
    public class AddMessagePage
    {
        static string Url = "http://localhost:59142/#!/addMessage";
        private static string PageTitle = "Angular with TypeScript";
        private static string SuccessMessage = "Message Added Successfully";
        private static string AddMsgLabel = "Add New Message";

        [FindsBy(How = How.CssSelector, Using = "body > div > ng-view > div > page-header-widget > div > div")]
        private IWebElement pageMessage;

        [FindsBy(How = How.XPath, Using = "/html/body/div/ng-view/div/div[2]/table/tbody/tr[1]/td[2]/input")]
        private IWebElement userId;

        [FindsBy(How = How.XPath, Using = "/html/body/div/ng-view/div/div[2]/table/tbody/tr[2]/td[2]/input")]
        private IWebElement id;

        [FindsBy(How = How.XPath, Using = "/html/body/div/ng-view/div/div[2]/table/tbody/tr[3]/td[2]/input")]
        private IWebElement title;

        [FindsBy(How = How.XPath, Using = "/html/body/div/ng-view/div/div[2]/table/tbody/tr[4]/td[2]/input")]
        private IWebElement body;


        [FindsBy(How = How.XPath, Using = "/html/body/div/ng-view/div/div[2]/table/tbody/tr[5]/td[2]/input")]
        private IWebElement submitMessage;

        public void Goto()
        {
            Browser.Goto(Url);
        }

        public bool IsMessageAdded()
        {
            userId.SendKeys("1");
            id.SendKeys("2");
            title.SendKeys("Test");
            body.SendKeys("Test1");
            submitMessage.Click();
            return SuccessMessage == Browser.AlertText;
        }

        public string PageText
        {
            get { return pageMessage.Text; }
        }

        public bool IsAt()
        {
            Browser.Wait(8);
            return PageText == AddMsgLabel;
        }
        

    }
}