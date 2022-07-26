import MyComponent from '../../../../slices/TextWithImage';

export default {
  title: 'slices/TextWithImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"text_with_image","items":[],"primary":{"text":[{"type":"heading1","text":"E-enable 24/365 supply-chains","spans":[]},{"type":"paragraph","text":"Enim laboris ad in duis eu enim aliquip do sint ipsum est ex deserunt officia proident. Lorem cupidatat irure nisi non culpa sit.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/nextjs-starter-prismic-multi-page/fcb2333d-d2b2-4cdc-acdd-f9558703472d_anders-jilden-Sc5RKXLBjGg-unsplash.jpg?w=1000&h=1200&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","name":"With Button","slice_type":"text_with_image","items":[],"primary":{"text":[{"type":"paragraph","text":"Lorem incididunt consectetur esse tempor voluptate proident anim. Quis consectetur anim eu voluptate.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"buttonText":"unleash web-enabled technologies","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"}},"id":"_WithButton"}} />
_WithButton.storyName = 'With Button'

export const _LeftWithImage = () => <MyComponent slice={{"variation":"leftWithImage","name":"LeftWithImage","slice_type":"text_with_image","items":[],"primary":{"text":[{"type":"paragraph","text":"Amet voluptate proident non anim veniam incididunt cupidatat exercitation duis adipisicing culpa incididunt. Et amet aliqua non voluptate ullamco occaecat veniam reprehenderit id adipisicing cupidatat. Voluptate proident exercitation ullamco nisi mollit.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=1000&h=1200&fit=crop"}},"id":"_LeftWithImage"}} />
_LeftWithImage.storyName = 'LeftWithImage'
