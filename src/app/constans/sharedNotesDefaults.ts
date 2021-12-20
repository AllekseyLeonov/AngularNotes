import {Guid} from "guid-typescript";

export const defaultSharedNote = {
  id: 4,
  title: "Default shared note",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
    " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
    " Et netus et malesuada fames ac turpis egestas integer eget. Eget sit" +
    " amet tellus cras adipiscing. Cras ornare arcu dui vivamus arcu felis" +
    " bibendum. Ipsum dolor sit amet consectetur adipiscing. Tortor at risus" +
    " viverra adipiscing. Dignissim suspendisse in est ante. Vitae nunc sed" +
    " velit dignissim sodales ut eu sem integer. Interdum posuere lorem ipsum" +
    " dolor sit. Laoreet sit amet cursus sit. Posuere ac ut consequat semper" +
    " viverra nam libero justo laoreet. Arcu non sodales neque sodales ut etiam" +
    " sit amet nisl.  Neque laoreet suspendisse interdum consectetur libero id." +
    " Nullam vehicula ipsum a arcu cursus vitae congue. Semper eget duis at tellus" +
    " at urna condimentum. Mattis nunc sed blandit libero volutpat sed. Sit amet" +
    " volutpat consequat mauris nunc congue. Elementum integer enim neque volutpat" +
    " ac tincidunt vitae semper quis. Eu non diam phasellus vestibulum lorem sed." +
    " Hac habitasse platea dictumst vestibulum rhoncus. Ornare quam viverra orci" +
    " sagittis eu. Aliquet eget sit amet tellus cras.  Convallis posuere morbi" +
    " leo urna molestie at elementum eu facilisis. Etiam tempor orci eu lobortis." +
    " Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Feugiat" +
    " pretium nibh ipsum consequat nisl. Tortor consequat id porta nibh. Adipiscing" +
    " vitae proin sagittis nisl rhoncus mattis rhoncus. Id cursus metus aliquam " +
    "eleifend mi in nulla posuere sollicitudin. Sit amet nulla facilisi morbi. " +
    "Aliquet porttitor lacus luctus accumsan tortor posuere. Et egestas quis ipsum " +
    "suspendisse ultrices gravida dictum. Cursus turpis massa tincidunt dui ut. " +
    "Fermentum dui faucibus in ornare quam viverra orci sagittis. Mauris pellentesque " +
    "pulvinar pellentesque habitant morbi tristique. Pretium aenean pharetra magna ac " +
    "placerat vestibulum lectus. Praesent elementum facilisis leo vel fringilla est " +
    "ullamcorper. Fusce ut placerat orci nulla pellentesque. Quam lacus suspendisse" +
    " faucibus interdum posuere lorem ipsum dolor. Metus aliquam eleifend mi in nulla" +
    " posuere sollicitudin aliquam. Fames ac turpis egestas maecenas pharetra convallis" +
    " posuere morbi leo. Tristique et egestas quis ipsum. Platea dictumst quisque sagittis" +
    " purus sit. Vitae turpis massa sed elementum. Donec enim diam vulputate ut pharetra" +
    " sit amet aliquam. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Lacus" +
    " sed viverra tellus in hac habitasse platea dictumst. Diam quis enim lobortis scelerisque" +
    " fermentum dui faucibus. Faucibus in ornare quam viverra. Non pulvinar neque laoreet" +
    " suspendisse interdum consectetur libero id faucibus. Fringilla phasellus faucibus" +
    " scelerisque eleifend. Purus in mollis nunc sed id semper risus. Odio eu feugiat" +
    " pretium nibh ipsum consequat nisl vel pretium. Et egestas quis ipsum suspendisse." +
    " Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.",
  date: "15.12.2021 6:14:55",
  userId: 1,
  token: Guid.create()
}

export const defaultSharedNotesArray = [
  {
    id: 5,
    title: "Shared note 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      " Turpis egestas integer eget aliquet nibh praesent tristique magna." +
      " Egestas maecenas pharetra convallis posuere morbi leo urna molestie" +
      " at. Ipsum consequat nisl vel pretium lectus quam id leo. Pretium fusce" +
      " id velit ut tortor pretium.",
    date: "15.12.2021 6:12:34",
    userId: 1,
    token: Guid.create()
  },
  {
    id: 6,
    title: "Shared note 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      " A iaculis at erat pellentesque adipiscing commodo elit. Tortor at" +
      " risus viverra adipiscing at in. Massa placerat duis ultricies lacus" +
      " sed turpis. Odio morbi quis commodo odio aenean sed adipiscing diam donec.",
    date: "15.12.2021 6:14:55",
    userId: 1,
    token: Guid.create()
  }
]
