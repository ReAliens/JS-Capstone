const commentModal = () => `<div class="modal" id="modal">
<div class="modal-content">
  <div class="closeButton" id="modalCloseButton">
    <img src="./images/Icon-Cancel.png" alt="close" />
  </div>
  <h2 id="modalTitle">Multi-post story</h2>
  <img src="images/number1.jpg" alt="cover" id="modalImage" />
  <p id="modalDesc">
    iLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scramble.
  </p>
  <ul id="modalList" class="w-section-tech">
    <li>HTML</li>
    <li>CSS</li>
    <li>Ruby</li>
    <li class="last-tech">Bootstrap</li>
  </ul>
  <div class="buttonContainer">
    <a href="#" id="goLive" target="_blank">
      <div class="buttonsLink">
        See Live
        <img src="./images/Icon-Export.png" alt="icon" />
      </div>
    </a>
    <a href="#" id="source" target="_blank">
      <div class="buttonsLink">
        See Source
        <img src="./images/Github.png" alt="icon" />
      </div>
    </a>
  </div>
</div>
</div>`;

export default commentModal;
