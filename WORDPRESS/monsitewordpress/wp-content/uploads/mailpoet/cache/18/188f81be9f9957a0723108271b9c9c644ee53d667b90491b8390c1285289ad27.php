<?php

/* newsletter/templates/blocks/automatedLatestContentLayout/block.hbs */
class __TwigTemplate_b7cb427c9a21cbbf2249e88c4623beea745831d03fcee4ace811a809ecb3cd1f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<div class=\"mailpoet_tools\"></div>
<div class=\"mailpoet_content\">
  <div class=\"mailpoet_automated_latest_content_block_overlay\"></div>
  <div class=\"mailpoet_automated_latest_content_block_posts\"></div>
</div>
<div class=\"mailpoet_block_highlight\"></div>
";
    }

    public function getTemplateName()
    {
        return "newsletter/templates/blocks/automatedLatestContentLayout/block.hbs";
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "newsletter/templates/blocks/automatedLatestContentLayout/block.hbs", "C:\\xampp\\htdocs\\formation\\front\\WF3-formation-front\\WORDPRESS\\monsitewordpress\\wp-content\\plugins\\mailpoet\\views\\newsletter\\templates\\blocks\\automatedLatestContentLayout\\block.hbs");
    }
}
