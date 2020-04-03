/* eslint-disable no-param-reassign */
const onlyInt = {
  install(Vue, options) {
    const directiveName = options && typeof options === 'object' && 'name' in options ?
      options.name : 'int';

    Vue.directive(directiveName, {
      inserted: function(el) {
        el.oninput = function(event) {
          const formattedValue = parseInt(event.target.value, 10);
          el.value = isNaN(formattedValue) ? '' : formattedValue;
        };
      }
    });
  },
};

export default onlyInt;
