<?php

/* newsletter/templates/components/sidebar/sidebar.hbs */
class __TwigTemplate_69372ab16e73fc202d93a72e4bc84c92fbff48ba56124467a753aaa5bc6b0c32 extends Twig_Template
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
        echo "<div class=\"mailpoet_region mailpoet_content_region mailpoet_sidebar_region postbox\"></div>
<div class=\"mailpoet_region mailpoet_layout_region mailpoet_sidebar_region postbox closed\"></div>
<div class=\"mailpoet_region mailpoet_styles_region mailpoet_sidebar_region postbox closed\"></div>
<div class=\"mailpoet_region mailpoet_preview_region mailpoet_sidebar_region postbox closed\"></div>
";
    }

    public function getTemplateName()
    {
        return "newsletter/templates/components/sidebar/sidebar.hbs";
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
        return new Twig_Source("", "newsletter/templates/components/sidebar/sidebar.hbs", "C:\\xampp\\htdocs\\formation\\front\\WF3-formation-front\\WORDPRESS\\monsitewordpress\\wp-content\\plugins\\mailpoet\\views\\newsletter\\templates\\components\\sidebar\\sidebar.hbs");
    }
}
