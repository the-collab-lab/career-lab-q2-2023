## Accessibility
### 1. What are some of the tools you can use to test the accessibility of a web page or web application?

<table>
  <tbody>
    <tr>
      <th scope="row"><b>Poor</b></th>
      <td>
        Candidate can't answer.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Good / great</b></th>
      <td>
        Candidate names a few examples:
        <ul>
          <li>Deque aXe</li>
          <li>Microsoft Accessibility Insights</li>
          <li>WebAIM WAVE</li>
          <li>WebAIM Color Contrast Checker</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 2. How is the `alt` attribute on an `img` element used?
<table>
  <tbody>
    <tr>
      <th scope="row"><b>Poor</b></th>
      <td>
        Candidate can't answer.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Good</b></th>
      <td>
        Candidate mentions describing images; might mention screen readers or screen reader users, or cases in which an image fails to load.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Great</b></th>
      <td>
        Candidate meets the "good" criteria and mentions using empty <code>alt</code> attributes to make images decorative, or mentions what happens when the <code>alt</code> attribute is omitted altogether (the browser exposes the image's file name as its description).
      </td>
    </tr>
  </tbody>
</table>

### 3. When should you use a link versus a button?
<table>
  <tbody>
    <tr>
      <th scope="row"><b>Poor</b></th>
      <td>
        Candidate can't answer.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Good / great</b></th>
      <td>
        Candidate mentions that links are typically for navigation, while buttons are typically for other actions. Ex: sending a user to a new page versus submitting a form.
      </td>
    </tr>
  </tbody>
</table>

### 4. What are the advantages for accessibility of using <code>em</code> or <code>rem</code> as a CSS unit versus <code>px</code>?
<table>
  <tbody>
    <tr>
      <th scope="row"><b>Poor</b></th>
      <td>
        Candidate can't answer.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Good</b></th>
      <td>
        Candidate mentions that relative CSS units respect the user's chosen font size, while <code>px</code> does not. Ex: setting <code>body { font-size: 12px }</code> will make all body text <code>12px</code> in size, even if the user has chosen a large font size in their browser.
      </td>
    </tr>
  </tbody>
</table>

### 5. What are ARIA attributes and how are they useful?
<table>
  <tbody>
    <tr>
      <th scope="row"><b>Poor</b></th>
      <td>
        Candidate can't answer.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Good</b></th>
      <td>
        Candidate mentions that ARIA attributes are used for accessibility; might mention specific attributes like <code>aria-label</code> or <code>aria-hidden</code>.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Great</b></th>
      <td>
        Candidate mentions that HTML elements map to ARIA semantics, and ARIA can be used to override or extend HTML semantics (ex: <code>role=tab</code> on a link); candidate mentions ARIA states/properties that aren't possible in HTML (ex: <code>aria-pressed</code> on a button).
      </td>
    </tr>
  </tbody>
</table>

### 6. Why is color alone insufficient to to convey information in a UI?
<table>
  <tbody>
    <tr>
      <th scope="row"><b>Poor</b></th>
      <td>
        Candidate can't answer.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Good</b></th>
      <td>
        Candidate mentions that colorblind users could be unable to understand what's indicated by a color they can't see, or that the meaning of color is subjective, so it can't reliably communicate information to a user base.
      </td>
    </tr>
  </tbody>
</table>

## React
### 1. What are `state` and `props` in React? How are they best used?

<table>
<tbody>
  <tr>
    <th scope="row"><b>Poor</b></td>
    <td>
      Candidate cannot articulate their definition of either <code>state</code> or <code>props</code>.
    </td>
  </tr>
  <tr>
    <th scope="row"><b>Good</b></td>
    <td>
      Candidate
      <ul>
        <li>
          defines <code>state</code> and <code>props</code>.
        </li>
        <li>
          demonstrates some understanding of <code>state</code> being "permanent" or "living inside" of a component, while <code>props</code> are "passed into" the component.
        </li>
      </ul>
    </td>
  </tr>
</tbody>
</table>


### 2. What are “stateless” components in React? How are they useful?

<b>Note 1:</b> This question is a natural extension of the purpose of `state`. If the discussion in question 1 covers it, feel free to skip. 

<b>Note 2:</b> candidate may not have heard this term before, or may also know it as a 'presentational component' You can define it for them, e.g. 'A component that has no state.'

<table>
<tbody>
  <tr>
    <th scope="row"><b>Poor</b></td>
    <td>
      Candidate isn't sure when a stateless component is appropriate.
    </td>
  </tr>
  <tr>
    <th scope="row"><b>Good / great</b></td>
    <td>
      Candidate discusses that not all components should track state & articulates their thoughts about when a component should or shouldn't track state.
    </td>
  </tr>
</tbody>
</table>

### 3. What is JSX? Why do we use it with React?

<table>
<tbody>
  <tr>
    <th scope="row"><b>Poor</b></td>
    <td>
      Candidate cannot answer.
    </td>
  </tr>
  <tr>
    <th scope="row"><b>Good</b></td>
    <td>
    Candidate
    <ul>
    <li>identifies JSX as a variant of JS used by React; might mention it being 'html-like'.</li>
    <li>
    identifies some benefits – 'easier to read', etc..
    </li>
    </ul>
    </td>
  </tr>
  <tr>
    <th scope="row"><b>Great</b></td>
    <td>
      Candidate
      <ul>
        <li>
          identifies JSX as a <b>syntax extension</b> of JavaScript.
        </li>
        <li>
          mentions paradigms of <b>declarative</b> vs <b>imperative</b> UIs
        </li>
        <li>
          mentions that JSX must be <b>transpiled</b> and React can be used without it
        </li>
      </ul>
    </td>
  </tr>
</tbody>
</table>

### 4. What are React hooks used for?

<table>
  <tbody>
    <tr>
      <th scope="row"><b>Poor</b></td>
      <td>
        Candidate can't answer.
      </td>
    </tr>
    <tr>
      <th scope="row"><b>Good / great</b></td>
      <td>
        Candidate
        <ul>
          <li>
            mentions that hooks must be imported from the <code>react</code> library
          </li>
          <li>
            mentions <code>useState</code> & describes setting state in a component.
          </li>
          <li>
            mentions other less-common hooks such as <code>useEffect</code> and <code>useCallback</code>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
  </table>
