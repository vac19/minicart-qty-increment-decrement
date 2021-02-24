<?php
/**
 * Block class used in knockout_index_index at block name knockoutjs_test_block.
 * @category  KnockOut.js products
 * @package   Ko_Prod
 * @author    vashishtha
 */
namespace Ko\Prod\Block;

use Magento\Framework\View\Element\Template;

class Test extends Template
{
   /**
    * @var array|\Magento\Checkout\Block\Checkout\LayoutProcessorInterface[]
    */
   protected $layoutProcessors;


   /**
     * @param Context $context
     * @param array $layoutProcessors
     * @param array $data
     */
   public function __construct(
       Template\Context $context,
       array $layoutProcessors = [],
       array $data = []
   ) {
       parent::__construct($context, $data);
       $this->jsLayout = isset($data['jsLayout']) && is_array($data['jsLayout']) ? $data['jsLayout'] : [];
       $this->layoutProcessors = $layoutProcessors;
   }

   /**
     * Loops through js layouts of $this->layoutProcessors 
     *
     * @return json
     */
   public function getJsLayout()
   {
       foreach ($this->layoutProcessors as $processor) {
           $this->jsLayout = $processor->process($this->jsLayout);
       }
       return \Zend_Json::encode($this->jsLayout);
   }

}
