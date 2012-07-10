{{#if title}}
<h3 class="sub">{{ title }}</h3>
{{/if}}
<ul>
{{#elements}}
    <li class="control {{#if depends}}sub{{/if}}">
    {{#if control_checkbox}}
        <label for="{{ checkbox_1 }}">{{ label_1 }}</label>
        <input type="checkbox" name="{{ checkbox_1 }}" id="{{ checkbox_1 }}" value="true" class="switch" {{#if depends}}data-depends="{{ depends }}"{{/if}} {{#if scope}}data-scope="{{ scope }}"{{/if}}/>
    {{/if}}
    {{#if control_checkbox_textbox}}
        <label for="{{ checkbox_1 }}">{{ label_1 }}</label>
        <input type="checkbox" name="{{ checkbox_1 }}" id="{{ checkbox_1 }}" value="true" class="switch" />
        <input type="text" data-depends="{{ checkbox_1 }}" name="{{ textbox_1 }}" id="{{ textbox_1 }}" value="" class="large" />
    {{/if}}
    {{#if control_textbox}}
        <label for="{{ textbox_1 }}">{{ label_1 }}</label>
        <input type="text" name="{{ textbox_1 }}" id="{{ textbox_1 }}" value="" class="" {{#if depends}}data-depends="{{ depends }}"{{/if}} {{#if scope}}data-scope="{{ scope }}"{{/if}} />
    {{/if}}
    {{#if control_textbox_large}}
        <label for="{{ textbox_1 }}" class="large">{{ label_1 }}</label>
        <input type="text" name="{{ textbox_1 }}" id="{{ textbox_1 }}" value="" class="large" {{#if scope}}data-scope="{{ scope }}"{{/if}} />
    {{/if}}
    {{#if control_textarea}}
        <label for="{{ textarea_1 }}" class="large">{{ label_1 }}</label>
        <textarea name="{{ textarea_1 }}" id="{{ textarea_1 }}" value="" class="large" {{#if scope}}data-scope="{{ scope }}"{{/if}} />
    {{/if}}
    {{#if control_password}}
        <label for="{{ password_1 }}">{{ label_1 }}</label>
        <input type="text" name="{{ password_1 }}" id="{{ password_1 }}" value="" class="" {{#if depends}}data-depends="{{ depends }}"{{/if}} />
    {{/if}}
    {{#if control_combo}}
        <label for="{{ name }}">{{ label_1 }}</label>
        {{#combo_1}}
        <select name="{{ name }}" id="{{ name }}" data-scope="{{../scope}}" data-depends="{{ ../depends }}">
            {{#contents}}
            <option value="{{ value }}">{{ label }}</option>
            {{/contents}}
        </select>
        {{/combo_1}}
    {{/if}}
    {{#if control_html}}
        {{{ html }}}
    {{/if}}
    </li>
{{/elements}}
</ul>