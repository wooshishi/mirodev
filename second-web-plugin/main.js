miro.onReady(() => {
  const icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>'

  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "Widget Analyzer",
        SvgIcon: icon,
        onClick: () => {
          //miro.board.ui.openLeftSidebar('sidebar.html')
          alert('11')
        }
      }
    }
  })
})