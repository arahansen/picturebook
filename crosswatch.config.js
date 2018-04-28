const { flattenDeep } = require('lodash')

const stories = {
  Components: {
    Card: {
      Base: {
        folderpath: 'Components.Card',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/base.js',
        namepath: 'Card.Base',
        name: 'Base',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/base_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/base.spec.png',
      },
      Composite: {
        folderpath: 'Components.Card',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/composite.js',
        namepath: 'Card.Composite',
        name: 'Composite',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/composite_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/composite.spec.png',
      },
      Filter: {
        folderpath: 'Components.Card',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/filter.js',
        namepath: 'Card.Filter',
        name: 'Filter',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/filter_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/filter.spec.png',
      },
      Profile: {
        folderpath: 'Components.Card',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/profile.js',
        namepath: 'Card.Profile',
        name: 'Profile',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/profile_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/card/__screenshots__/profile.spec.png',
      },
      __screenshots__: {},
    },
    Header: {
      App: {
        folderpath: 'Components.Header',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/header/app.js',
        namepath: 'Header.App',
        name: 'App',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/header/__screenshots__/app_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/header/__screenshots__/app.spec.png',
      },
      Basic: {
        folderpath: 'Components.Header',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/header/basic.js',
        namepath: 'Header.Basic',
        name: 'Basic',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/header/__screenshots__/basic_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/header/__screenshots__/basic.spec.png',
      },
      __screenshots__: {},
    },
    Pagination: {
      Pagination: {
        folderpath: 'Components.Pagination',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/pagination/pagination.js',
        namepath: 'Pagination.Pagination',
        name: 'Pagination',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/pagination/__screenshots__/pagination_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/pagination/__screenshots__/pagination.spec.png',
      },
      __screenshots__: {},
    },
    Search: {
      Filters: {
        folderpath: 'Components.Search',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/filters.js',
        namepath: 'Search.Filters',
        name: 'Filters',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/__screenshots__/filters_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/__screenshots__/filters.spec.png',
      },
      Nav: {
        folderpath: 'Components.Search',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/nav.js',
        namepath: 'Search.Nav',
        name: 'Nav',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/__screenshots__/nav_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/__screenshots__/nav.spec.png',
      },
      Results: {
        folderpath: 'Components.Search',
        filepath:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/results.js',
        namepath: 'Search.Results',
        name: 'Results',
        story: false,
        mobile:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/__screenshots__/results_mobile.spec.png',
        image:
          '/Users/home/Documents/webdev/gymnast/storybook/stories/components/search/__screenshots__/results.spec.png',
      },
      __screenshots__: {},
    },
  },
  'Config Provider': {
    Columns: {
      folderpath: 'Config Provider',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/columns.js',
      namepath: 'Columns',
      name: 'Columns',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/columns_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/columns.spec.png',
    },
    'Display Aliases': {
      folderpath: 'Config Provider',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/displayAliases.js',
      namepath: 'Display Aliases',
      name: 'Display Aliases',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/displayAliases_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/displayAliases.spec.png',
    },
    'Fallback Display Key': {
      folderpath: 'Config Provider',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/fallbackDisplayKey.js',
      namepath: 'Fallback Display Key',
      name: 'Fallback Display Key',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/fallbackDisplayKey_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/fallbackDisplayKey.spec.png',
    },
    Gutter: {
      folderpath: 'Config Provider',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/gutter.js',
      namepath: 'Gutter',
      name: 'Gutter',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/gutter_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/gutter.spec.png',
    },
    'Page Width': {
      folderpath: 'Config Provider',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/pageWidth.js',
      namepath: 'Page Width',
      name: 'Page Width',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/pageWidth_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/pageWidth.spec.png',
    },
    'Spacing Aliases': {
      folderpath: 'Config Provider',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/spacingAliases.js',
      namepath: 'Spacing Aliases',
      name: 'Spacing Aliases',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/spacingAliases_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/configProvider/__screenshots__/spacingAliases.spec.png',
    },
    __screenshots__: {},
  },
  Examples: {
    Cards: {
      folderpath: 'Examples',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/cards.js',
      namepath: 'Cards',
      name: 'Cards',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/cards_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/cards.spec.png',
    },
    'Holy Grail': {
      folderpath: 'Examples',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/holyGrail.js',
      namepath: 'Holy Grail',
      name: 'Holy Grail',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/holyGrail_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/holyGrail.spec.png',
    },
    Report: {
      folderpath: 'Examples',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/report.js',
      namepath: 'Report',
      name: 'Report',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/report_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/report.spec.png',
    },
    Search: {
      folderpath: 'Examples',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/search.js',
      namepath: 'Search',
      name: 'Search',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/search_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/search.spec.png',
    },
    'Two Sections': {
      folderpath: 'Examples',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/twoSections.js',
      namepath: 'Two Sections',
      name: 'Two Sections',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/twoSections_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/examples/__screenshots__/twoSections.spec.png',
    },
    __screenshots__: {},
  },
  Grid: {
    Align: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/align.js',
      namepath: 'Align',
      name: 'Align',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/align_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/align.spec.png',
    },
    Autoflow: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/autoflow.js',
      namepath: 'Autoflow',
      name: 'Autoflow',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/autoflow_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/autoflow.spec.png',
    },
    Fit: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/fit.js',
      namepath: 'Fit',
      name: 'Fit',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/fit_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/fit.spec.png',
    },
    Format: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/format.js',
      namepath: 'Format',
      name: 'Format',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/format_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/format.spec.png',
    },
    Fraction: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/fraction.js',
      namepath: 'Fraction',
      name: 'Fraction',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/fraction_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/fraction.spec.png',
    },
    Justify: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/justify.js',
      namepath: 'Justify',
      name: 'Justify',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/justify_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/justify.spec.png',
    },
    Margin: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/margin.js',
      namepath: 'Margin',
      name: 'Margin',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/margin_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/margin.spec.png',
    },
    Nested: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/nested.js',
      namepath: 'Nested',
      name: 'Nested',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/nested_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/nested.spec.png',
    },
    Offset: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/offset.js',
      namepath: 'Offset',
      name: 'Offset',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/offset_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/offset.spec.png',
    },
    Padding: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/padding.js',
      namepath: 'Padding',
      name: 'Padding',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/padding_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/padding.spec.png',
    },
    Resolution: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/resolution.js',
      namepath: 'Resolution',
      name: 'Resolution',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/resolution_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/resolution.spec.png',
    },
    Sizing: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/sizing.js',
      namepath: 'Sizing',
      name: 'Sizing',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/sizing_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/sizing.spec.png',
    },
    Stretch: {
      folderpath: 'Grid',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/stretch.js',
      namepath: 'Stretch',
      name: 'Stretch',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/stretch_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/grid/__screenshots__/stretch.spec.png',
    },
    __screenshots__: {},
  },
  Layout: {
    Auto: {
      folderpath: 'Layout',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/auto.js',
      namepath: 'Auto',
      name: 'Auto',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/auto_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/auto.spec.png',
    },
    Default: {
      folderpath: 'Layout',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/default.js',
      namepath: 'Default',
      name: 'Default',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/default_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/default.spec.png',
    },
    Fixed: {
      folderpath: 'Layout',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/fixed.js',
      namepath: 'Fixed',
      name: 'Fixed',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/fixed_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/fixed.spec.png',
    },
    Margin: {
      folderpath: 'Layout',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/margin.js',
      namepath: 'Margin',
      name: 'Margin',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/margin_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/margin.spec.png',
    },
    Padding: {
      folderpath: 'Layout',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/padding.js',
      namepath: 'Padding',
      name: 'Padding',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/padding_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/padding.spec.png',
    },
    Parent: {
      folderpath: 'Layout',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/parent.js',
      namepath: 'Parent',
      name: 'Parent',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/parent_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/parent.spec.png',
    },
    Stack: {
      folderpath: 'Layout',
      filepath:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/stack.js',
      namepath: 'Stack',
      name: 'Stack',
      story: false,
      mobile:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/stack_mobile.spec.png',
      image:
        '/Users/home/Documents/webdev/gymnast/storybook/stories/layout/__screenshots__/stack.spec.png',
    },
    __screenshots__: {},
  },
}

function getContent(content) {
  if (content.namepath) {
    return content
  }
  return Object.values(content).map(getContent)
}

function formatProperties(props) {
  const { folderpath, name, image, mobile } = props

  return {
    label: `${folderpath}__${name}`,
    image,
    mobile,
    url: `https://gymnastjs.github.io/gymnast/iframe.html?selectedKind=${encodeURIComponent(
      folderpath
    )}&selectedStory=${encodeURIComponent(name)}`,
  }
}

const scenarios = Object.keys(stories)
  .map(kind => ({
    kind,
    storyNames: flattenDeep(getContent(stories[kind])),
  }))
  .reduce(
    (prev, story) => prev.concat(story.storyNames.map(formatProperties)),
    []
  )

module.exports = {
  tolerance: 3.5,
  scenarios,
  outputDir: '../screenshots',
  sauce: {},
}
