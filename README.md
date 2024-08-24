I'm using a dummy JSON object for data right now, but in the real app, I’d replace this with an actual API call. To keep things reusable, I’ll handle the API calls outside of this component.

I didn't exactly match the fonts, icons, and volume chart as per the Figma design due to time constraints due to office and personal projects. The focus was on getting the functionality right first. I’m keeping the components independent, so they can be reused in different parts of the app without much change.

I used inline styles in some places for simplicity, but these could be moved to CSS files later for better management. I’ve included basic fallback components for when content isn’t available, but more detailed error handling will be added later.

I applied some basic responsive design principles, but it might not cover all screen sizes perfectly right now. Components are modular, meaning each one does one specific thing, making them easier to manage.

For now, I’m using useState to manage state within components. In bigger projects, I might switch to something like Redux/react query. I made sure buttons and elements have labels for accessibility, but a more thorough review is needed.

I haven't added automated tests yet due to time constraints, but they should be included later to ensure everything works reliably. When integrating with an API, I’ll use useEffect for fetching data and handle errors properly.

I haven't use optimisations like useMemo , useCallback , React.memo.
