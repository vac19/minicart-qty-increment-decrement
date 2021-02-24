<?php
/**
 * Controller Action for rendering test.phtml
 * @category  KnockOut.js products
 * @package   Ko_Prod
 * @author    vashishtha
 */
namespace Ko\Prod\Controller\Index;

class Index extends \Magento\Framework\App\Action\Action
{
  /**
   * Result page factory object
   *
   * @var Data
   */
  protected $resultPageFactory;

  /**
   * @param Context $context
   * @param Object $resultPageFactory
   */
  public function __construct(
      \Magento\Framework\App\Action\Context $context,
      \Magento\Framework\View\Result\PageFactory $resultPageFactory
  )
  {
      $this->resultPageFactory = $resultPageFactory;
      parent::__construct($context);
  }

  /**
   * Renders the page. $resultPage
   * @inheritdoc
   */
  public function execute()
  {
      $resultPage = $this->resultPageFactory->create();
      return $resultPage;
  }
}
