<?php

/* newsletter/templates/blocks/divider/block.hbs */
class __TwigTemplate_11293e1eeb4f366a60b4d120bb2fb144d99a0d58009226cc6bd384f517ca70dd extends Twig_Template
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
<div class=\"mailpoet_content\" style=\"padding: {{ model.styles.block.padding }} 0; background-color: {{ model.styles.block.backgroundColor }};\">
    <div class=\"mailpoet_divider\" style=\"border-top-width: {{ model.styles.block.borderWidth }}; border-top-style: {{ model.styles.block.borderStyle }}; border-top-color: {{ model.styles.block.borderColor }};\"></div>
    <div class=\"mailpoet_resize_handle_container\">
        <div class=\"mailpoet_resize_handle\">
            <span class=\"mailpoet_resize_handle_text\">{{ totalHeight }}</span>
            <span class=\"mailpoet_resize_handle_icon\">";
        // line 7
        echo twig_source($this->env, "newsletter/templates/svg/block-icons/spacer.svg");
        echo "</span>
        </div>
    </div>
</div>
<div class=\"mailpoet_block_highlight\"></div>
";
    }

    public function getTemplateName()
    {
        return "newsletter/templates/blocks/divider/block.hbs";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  27 => 7,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "newsletter/templates/blocks/divider/block.hbs", "C:\\xampp\\htdocs\\formation\\front\\WF3-formation-front\\WORDPRESS\\monsitewordpress\\wp-content\\plugins\\mailpoet\\views\\newsletter\\templates\\blocks\\divider\\block.hbs");
    }
}
