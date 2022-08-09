
const initInput = () => {
  const formInputs = document.querySelectorAll('.form-input input');

  const AddLabelName = (evt) => {
    const target = evt.target.closest('.form-input');
    target.classList.add('is-focused');
  };

  formInputs.forEach((item) => {
    item.addEventListener('input', AddLabelName);
    const inputParent = item.closest('.form-input');
    const removeLabelName = () => {
      if (item.value === '') {
        inputParent.classList.remove('is-focused');
      }
    };
    item.addEventListener('input', removeLabelName);
  });
};

export {initInput};
