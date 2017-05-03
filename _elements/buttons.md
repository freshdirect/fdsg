---
layout: styleguide
type: element
title: Buttons
lead: Use buttons to signal actions. 
---

<div class="preview">

  <h2>Primary Button</h2>

  <p class="even-margin">Main Styling</p>
  <div class="button_wrapper">
    <button class="fd-button-green">Default</button>
    <button class="fd-button-green fd-button-green-active">Active</button>
    <button class="fd-button-green fd-button-green-hover">Hover</button>
    <button class="fd-button-green fd-button-green-focus">Focus</button>
  </div>
  <p class="even-margin">Ghost Styling</p>
  <div class="button_wrapper">
    <button class="fd-button-ghost-green">Default</button>
    <button class="fd-button-ghost-green fd-button-ghost-green-active">Active</button>
    <button class="fd-button-ghost-green fd-button-ghost-green-hover">Hover</button>
    <button class="fd-button-ghost-green fd-button-ghost-green-focus">Focus</button>
  </div>

  <h2>Button Variations</h2>

  <p class="even-margin">Button Sizes</p>
  <div class="button_wrapper">
    <button class="fd-button-green fd-button-small">Small</button>
    <button class="fd-button-green">Medium</button>
    <button class="fd-button-green fd-button-large">Large</button>
  </div> 

  <p class="even-margin">Wide Buttons</p>
  <div class="button_wrapper">
    <button class="fd-button-green fd-button-small fd-button-wide">Small</button>
    <button class="fd-button-green fd-button-wide">Medium</button>
    <button class="fd-button-green fd-button-large fd-button-wide">Large</button>
  </div>

  <p class="even-margin">Large Button W/ Arrow</p>
  <div class="button_wrapper">
    <button class="fd-button-orange fd-button-large-arrow fd-button-wide">Checkout</button>
  </div> 

  <h2>Special Buttons</h2>

  <h6>Orange Button</h6> <p class="even-margin">Use mainly for <strong>Checkout</strong> or <strong>Place Order</strong> actions.</p>
  <div class="button_wrapper">
    <button class="fd-button-orange">Default</button>
    <button class="fd-button-orange fd-button-orange-active">Active</button>
    <button class="fd-button-orange fd-button-orange-hover">Hover</button>
    <button class="fd-button-orange fd-button-orange-focus">Focus</button>
  </div>
  <div class="button_wrapper">
    <button class="fd-button-ghost-orange">Default</button>
    <button class="fd-button-ghost-orange fd-button-ghost-orange-active">Active</button>
    <button class="fd-button-ghost-orange fd-button-ghost-orange-hover">Hover</button>
    <button class="fd-button-ghost-orange fd-button-ghost-orange-focus">Focus</button>
  </div>

  <h6>Purple Button</h6><p class="even-margin">Use in <strong>Reorder section</strong>, and related actions like <strong>Add to List</strong>.</p>
  <div class="button_wrapper">
    <button class="fd-button-purple">Default</button>
    <button class="fd-button-purple fd-button-purple-active">Active</button>
    <button class="fd-button-purple fd-button-purple-hover">Hover</button>
    <button class="fd-button-purple fd-button-purple-focus">Focus</button>
  </div>
  <div class="button_wrapper">
    <button class="fd-button-ghost-purple">Default</button>
    <button class="fd-button-ghost-purple fd-button-ghost-purple-active">Active</button>
    <button class="fd-button-ghost-purple fd-button-ghost-purple-hover">Hover</button>
    <button class="fd-button-ghost-purple fd-button-ghost-purple-focus">Focus</button>
  </div>

  <h6>Red/Destructive Button</h6> <p class="even-margin"><strong>Only use this button in edge cases where the customer will delete data or cancel a service.</strong></p>
  <div class="button_wrapper">
    <button class="fd-button-ghost-red">Default</button>
    <button class="fd-button-ghost-red fd-button-ghost-red-active">Active</button>
    <button class="fd-button-ghost-red fd-button-ghost-red-hover">Hover</button>
    <button class="fd-button-ghost-red fd-button-ghost-red-focus">Focus</button>
  </div>

  <h6>Disabled Button</h6>
  <div class="button_wrapper">
    <button class="fd-button-disabled">Default</button>
  </div> 

</div>

<div class="css-preview">

<style type="text/css">

  /* Basic Button Styles */
  button,
  button:visited{
    display: inline-block;
    appearance: none;
    border: 0;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    font-family: verdana;
    line-height: 1;
    margin: .5em;
    outline: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    width: auto;
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    transition: background-color 0.12s ease-in-out 0s;
  }
  button:focus{
    transition: background-color 0s ease-in-out 0s;
  }



  /* Green Button: Default, Hover, Active, Focus */
  .fd-button-green{
    background-color: #4fa157;
    border: 1px solid #4fa157;  
  }
  .fd-button-green:hover{
    background-color: #458d4e;
    border-color: #458d4e;
  }
  .fd-button-green:active{
    background-color: #5fb067;
    border-color: #5fb067;
  }
  .fd-button-green:focus{
    background-color: #5fb067;
    border-color: #306238;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #aaaaaa;
  }

  

  /* Secondary Green Ghost Button: Default, Hover, Active, Focus */
  .fd-button-ghost-green{
    color: #458b4c;
    background-color: #ffffff;
    border: 1px solid #4fa157;
    padding: 10px 20px;
  }
  .fd-button-ghost-green:hover{
    background-color: #edf5ee;
  }
  .fd-button-ghost-green:active{
    background-color: #ffffff;
  }
  .fd-button-ghost-green:focus{
    background-color: #ffffff;
    border-color: #458b4c;
    box-shadow: 0 0 1px #bbbbbb, 0 0 8px #bbbbbb;
  }



  /* Button Sizes */
  .fd-button-large{
    font-size: 16px;
    padding: 15px 30px;
  }
  .fd-button-large-arrow{
    font-size: 16px;
    padding: 15px 30px;
    background-image: url('../assets/img/arrow-right-white.svg');
    background-size: 10px auto;
    background-position: right 15px center;
    background-repeat: no-repeat; 
  }
  .fd-button-small{
    font-size: 12px;
    padding: 7px 14px;
  }



  /* Wide Buttons */
  .fd-button-wide{
    padding-left: 60px;
    padding-right: 60px;
  }
  .fd-button-small.fd-button-wide{
    padding-left: 30px;
    padding-right: 30px;
  }  
  .fd-button-large.fd-button-wide{
    padding-left: 110px;
    padding-right: 110px;
  }
  .fd-button-large-arrow.fd-button-wide{
    padding-left: 110px;
    padding-right: 110px;
  }
  .fd-button-screen-wide{
    width: 100%;
  } 



  /* Orange Button: Default, Hover, Active, Focus */
  .fd-button-orange{
    color: #ffffff;
    background-color: #f68139;
    border: 1px solid #f68139;
  }
  .fd-button-orange:hover{
    background-color: #e77630;
    border-color: #e77630;
  }
  .fd-button-orange:active{
    background-color: #fc8e46;
    border-color: #fc8e46;
  }
  .fd-button-orange:focus{
    background-color: #fc8e46;
    border-color: #a84c14;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #aaaaaa;
  }



  /* Ghost Orange Button: Default, Hover, Active, Focus */
  .fd-button-ghost-orange{
    color: #e45e0b;
    background-color: #ffffff;
    border: 1px solid #e45e0b;
  }
  .fd-button-ghost-orange:hover{
    background-color: #fdf2ec;
    border-color: #e77630;
  }
  .fd-button-ghost-orange:active{
    background-color: #ffffff;
    border-color: #fc8e46;
  }
  .fd-button-ghost-orange:focus{
    background-color: #ffffff;
    border-color: #a84c14;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #aaaaaa;
  }



  /* Purple Button: Default, Hover, Active, Focus */
  .fd-button-purple{
    color: #ffffff;
    background-color: #a367ab;
    border: 1px solid #a367ab;
    padding: 10px 20px;
  }
  .fd-button-purple:hover{
    background-color: #8e5a95;
  }
  .fd-button-purple:active{
    background-color: #af7bb6;
  }
  .fd-button-purple:focus{
    background-color: #af7bb6;
    border-color: #824c89;
    box-shadow: 0 0 1px #bbbbbb, 0 0 8px #bbbbbb;
  }




  /* Secondary Purple Ghost Button: Default, Hover, Active, Focus */
  .fd-button-ghost-purple{
    color: #a367ab;
    background-color: #ffffff;
    border: 1px solid #a367ab;
    padding: 10px 20px;
  }
  .fd-button-ghost-purple:hover{
    background-color: #f7f2f8;
  }
  .fd-button-ghost-purple:active{
    background-color: #ffffff;
  }
  .fd-button-ghost-purple:focus{
    background-color: #ffffff;
    border-color: #a367ab;
    box-shadow: 0 0 1px #bbbbbb, 0 0 8px #bbbbbb;
  }



  /* Secondary Red Button: Default, Hover, Active, Focus */
  .fd-button-ghost-red{
    color: #b93d3f;
    background-color: #f8ebeb;
    border: 1px solid #b93d3f;
    padding: 10px 20px;
  }
  .fd-button-ghost-red:hover{
    color: #ffffff;
    background-color: #b93d3f;
  }
  .fd-button-ghost-red:active{
    background-color: #ffffff;
  }
  .fd-button-ghost-red:focus{
    color: #ffffff;
    background-color: #b93d3f;
    border-color: #892e2f;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #999999;
  } 

  

  /* Disabled Button: Default, Focus */
  .fd-button-disabled,
  .fd-button-disabled:focus{
    color: #858585;  
    background-color: #e8e8ea;
    border: 2px solid #e8e8ea;
    cursor: not-allowed;
    box-shadow: none;    
  }

</style>

</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <!-- <h4 class="usa-heading">Implementation</h4>
    <p>The button examples above can be applied to any <em class="em-yellow-bg"><code>&lt;button&gt;</code></em> by using the following CSS classes:</p>
    <ul>
      <li><code>fd-button-orange</code></li>
      <li><code>fd-button-green</code></li>
      <li><code>fd-button-ghost</code></li>
      <li><code>usa-button-outline</code></li>
      <li><code>usa-button-outline-inverse</code></li>
      <li><code>usa-button-disabled</code></li>
      <li><code>usa-button-big</code></li>
    </ul>
    <p>For example, a secondary button style would use the following code:
    <code>&lt;a class="usa-button usa-button-secondary" href="/my-link"&gt;My button&lt;/a&gt;</code></p> -->
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Use <em class="em-yellow-bg"><code>&lt;button&gt;</code></em> tags to create buttons</li>
      <li>Buttons should display a visible focus state when users tab to them.</li>
      <li>Avoid using <em class="em-yellow-bg"><code>&lt;div&gt;</code></em> or <em class="em-yellow-bg"><code>&lt;img&gt;</code></em> tags to create buttons. Screen readers don't automatically know either is an usable button.</li>
      <li>When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.</li>
    </ul>
    <!-- <h4 class="usa-heading">Usability</h4>
    <h5>When to use</h5>
    <ul class="usa-content-list">
      <li>Use buttons for the most important actions you want users to take on your site, such as "download," "sign up," or "log out."</li>
    </ul>
    <h5>When to consider something else</h5>
    <ul class="usa-content-list">
      <li>If you want to lead users between pages of a website. Use links instead.</li>
      <li>Less popular or less important actions may be visually styled as links.</li>
    </ul>
    <h5>Guidance</h5>
    <ul class="usa-content-list">
      <li>Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.</li>
      <li>Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the  “large button” or the most visually distinct fill color.</li>
      <li>Make sure buttons should look clickable—use color variations to distinguish static, hover and active states.</li>
      <li>Avoid using too many buttons on a page.</li>
      <li>Use sentence case for button labels. </li>
      <li>Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”).</li>
      <li>Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”</li>
      <li>At times, consider adding an icon to signal specific actions (“download”, “open in a new window”, etc). </li>
    </ul> -->
  </div>
</div>

<style type="text/css">

  /* Orange Button: Default, Hover, Active, Focus */
  .fd-button-orange-hover{
    background-color: #e77630;
    border-color: #e77630;
  }
  .fd-button-orange-active{
    background-color: #fc8e46;
    border-color: #fc8e46;
  }
  .fd-button-orange-focus{
    background-color: #fc8e46;
    border-color: #a84c14;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #aaaaaa;
  }

  /* Ghost Orange Button: Default, Hover, Active, Focus */
  .fd-button-ghost-orange-hover{
    background-color: #fdf2ec;
    border-color: #e45e0b;
  }
  .fd-button-ghost-orange-active{
    background-color: #ffffff;
    border-color: #e45e0b;
  }
  .fd-button-ghost-orange-focus{
    background-color: #ffffff;
    border-color: #e45e0b;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #aaaaaa;
  }

  /* Green Button: Default, Hover, Active, Focus */
  .fd-button-green-hover{
    background-color: #458d4e;
    border-color: #458d4e;
  }
  .fd-button-green-active{
    background-color: #5fb067;
    border-color: #5fb067;
  }
  .fd-button-green-focus{
    background-color: #5fb067;
    border-color: #306238;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #aaaaaa;
  }

  /* Secondary Green Ghost Button: Default, Hover, Active, Focus */
  .fd-button-ghost-green-hover{
    background-color: #edf5ee;
  }
  .fd-button-ghost-green-active{
    background-color: #ffffff;
  }
  .fd-button-ghost-green-focus{
    background-color: #ffffff;
    border-color: #458b4c;
    box-shadow: 0 0 1px #bbbbbb, 0 0 8px #bbbbbb;
  }

  /* Purple Button: Default, Hover, Active, Focus */
  .fd-button-purple-hover{
    background-color: #8e5a95;
  }
  .fd-button-purple-active{
    background-color: #af7bb6;
  }
  .fd-button-purple-focus{
    background-color: #af7bb6;
    border-color: #824c89;
    box-shadow: 0 0 1px #bbbbbb, 0 0 8px #bbbbbb;
  }

  /* Secondary Purple Ghost Button: Default, Hover, Active, Focus */
  .fd-button-ghost-purple-hover{
    background-color: #f7f2f8;
  }
  .fd-button-ghost-purple-active{
    background-color: #ffffff;
  }
  .fd-button-ghost-purple-focus{
    background-color: #ffffff;
    border-color: #a367ab;
    box-shadow: 0 0 1px #bbbbbb, 0 0 8px #bbbbbb;
  }

  /* Secondary Red Button: Default, Hover, Active, Focus */
  .fd-button-ghost-red-hover{
    color: #ffffff;
    background-color: #b93d3f;
  }
  .fd-button-ghost-red-active{
    background-color: #ffffff;
  }
  .fd-button-ghost-red-focus{
    color: #ffffff;
    background-color: #b93d3f;
    border-color: #892e2f;
    box-shadow: 0 0 1px #aaaaaa, 0 0 8px #999999;
  }

</style>
