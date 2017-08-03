using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;

namespace TestFramework
{
    public class MessageListPage
    {
        static string Url = "http://localhost:59142/#!/messageList";
        private static string PageTitle = "Angular with TypeScript";
        private static string MsgListLabel = "Message List";
        private static string LastMsgId = "100";

        [FindsBy(How = How.LinkText, Using = "Add Message")]
        private IWebElement pageLink;

        [FindsBy(How = How.CssSelector, Using = "body > div > ng-view > div > div.panel-heading.ng-binding")]
        private IWebElement msgListLabel;

        [FindsBy(How = How.XPath, Using = "/html/body/div/ng-view/div/div[3]/table/tbody/tr[100]/td[1]")]
        private IWebElement lastMsgLabel;

        public void Goto()
        {
            Browser.Goto(Url);
        }

        public string LastMessageIdInList
        {
            get { return lastMsgLabel.Text; }
        }

        public string LabelText
        {
            get { return msgListLabel.Text; }
        }

        public bool IsAt()
        {
            return Browser.Title == PageTitle;
        }

        public void SelectAddMessage()
        {
            pageLink.Click();            
        }

        public bool IsMessageListLabelOnPage()
        {
            Browser.Wait(8);
            return LabelText == MsgListLabel;
        }

        public bool IsAtHundredMessage()
        {
            Browser.Wait(8);
            return LastMessageIdInList == LastMsgId;
        }
    }
}