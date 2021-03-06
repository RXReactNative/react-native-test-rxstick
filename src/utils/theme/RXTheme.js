import RXThemeDefault from './RXThemeDefault'

const RXTheme = {
  themes: {
    default: RXThemeDefault,
  },

  update: function (theme) {
    Object.assign(this, theme)
  },
}

RXTheme.update(RXTheme.themes.default)

module.exports = RXTheme
