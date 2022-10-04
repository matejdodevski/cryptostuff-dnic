import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss'],
})
export class LectureComponent implements OnInit {
  id = 0;
  prevId = "0";
  nextId = "0";
  content? = '';

  lectures = [
    {
      id: 1,
      prevId: "-1",
      nextId: "2",
      content:
        '<br> <b>Lecture 1</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
    {
      id: 2,
      prevId: "1",
      nextId: "3",
      content:
        '<br> <b>Lecture 2</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
    {
      id: 3,
      prevId: "2",
      nextId: "4",
      content:
        '<br> <b>Lecture 3</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
    {
      id: 4,
      prevId: "3",
      nextId: "5",
      content:
        '<br> <b>Lecture 4</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
    {
      id: 5,
      prevId: "4",
      nextId: "6",
      content:
        '<br> <b>Lecture 5</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
    {
      id: 6,
      prevId: "5",
      nextId: "7",
      content:
        '<br> <b>Lecture 6</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
    {
      id: 7,
      prevId: "6",
      nextId: "8",
      content:
        '<br> <b>Lecture 7</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
    {
      id: 8,
      prevId: "7",
      nextId: "-1",
      content:
        '<br> <b>Lecture 8</b> is a lecture about bananas.<br> Lorem ipsum dolor sit amet,'+
         'consectetur adipiscing elit. In vel posuere massa, ut laoreet odio. Mauris placerat mi ligula'+
         ', a ullamcorper diam suscipit eget. Nunc finibus elementum vehicula. Integer orci nunc, commodo'+
         'et arcu sed, tempus egestas lacus. Aliquam rutrum pellentesque ligula vel eleifend. Morbi consequat'+
         'quam in velit pretium, accumsan rhoncus lectus cursus. Aenean placerat, est non euismod placerat, mi'+
         'erat aliquet felis, vel ullamcorper augue ex at mauris. Proin aliquam mauris massa, id luctus libero'+
         'vehicula bibendum. Aenean luctus sodales leo sed tincidunt. Quisque aliquam, erat eget imperdiet condimentum'+
         ', dui mauris condimentum arcu, ut condimentum justo magna sit amet nisi. Vivamus at volutpat diam.<br> <br> Duis nec'+
         'lorem porttitor, gravida sem eu, porta urna. Ut consectetur ullamcorper metus eget porta. Aenean posuere eros'+
         'et porta aliquam. Aliquam porta urna ipsum, a finibus nisl congue ac. Vivamus scelerisque ut lorem eu'+
         'porttitor. Curabitur sed egestas odio, ac elementum arcu. Donec cursus quam in erat sodales tristique.'+
         'Sed aliquet augue vitae diam laoreet, in auctor mi hendrerit. Mauris sed nulla sapien. Donec hendrerit'+
         'lobortis facilisis. Mauris vehicula, augue quis rhoncus condimentum, ante nisl convallis orci, quis'+
         'tempor purus nisi quis nisl. Maecenas tempus sit amet ante bibendum accumsan. Phasellus lacinia non'+
         'est et ornare. Vivamus feugiat enim at dui ullamcorper consectetur. Duis ultricies fringilla dapibus.<br> <br>'+
         'Duis eleifend, dui quis dapibus porttitor, erat nulla consectetur erat, ac accumsan urna nisi eget nibh.'+
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum leo urna, vel iaculis mi'+
         'mattis sit amet. Sed placerat magna at dignissim lobortis. Donec volutpat ante id ligula mollis'+
         'pulvinar. Aliquam erat volutpat. In porttitor dolor in nulla interdum molestie. Praesent dolor'+
         'elit, porta a pharetra vitae, dictum ac diam. Aenean pretium tempus lorem vitae sodales.<br> <br>'+
         'Aenean vehicula scelerisque nibh in pretium. Phasellus nec tristique sapien. Nunc vitae lacinia eros.'+
         ' Donec risus magna, gravida vitae tortor vel, venenatis pulvinar ligula. Interdum et malesuada fames'+
         'ac ante ipsum primis in faucibus. Phasellus faucibus at metus non feugiat. Pellentesque ac varius'+
         'velit. Phasellus tincidunt sit amet nibh pellentesque consectetur. Duis porttitor ex arcu,'+
         'non rhoncus purus aliquam eu. Nam imperdiet vehicula pretium. Pellentesque massa arcu,'+
         'fringilla vitae turpis quis, tristique porta ex. Duis cursus ullamcorper magna, eu tempus magna'+
         'efficitur quis. Etiam est quam, vestibulum ut tortor quis, laoreet mattis ipsum. Nam sit amet'+
         'venenatis nulla. Praesent at nisl bibendum, accumsan dolor vitae, blandit lorem. Vivamus suscipit'+
         'lacus eros, at lacinia turpis suscipit et. Aenean porta erat eget blandit feugiat. Curabitur laoreet'+
         'et arcu quis commodo. Pellentesque rhoncus eget augue non dapibus. Nullam nec nunc quis erat interdum '+
         'blandit vestibulum id lorem. Proin orci magna, porta vel est vel, mollis vulputate ante.'
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.content = this.lectures.find((x) => x.id == this.id)?.content;
      this.prevId = this.lectures.find((x) => x.id == this.id)!.prevId;
      this.nextId = this.lectures.find((x) => x.id == this.id)!.nextId;
    });
  }
}
