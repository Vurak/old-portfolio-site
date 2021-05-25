var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { useState, useEffect } from "";

var root = document.getElementById('root');

function RandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Bar(props) {
    return React.createElement("div", {
        className: "rellax flex flex-auto w-full z-0 bg-indigo-" + (props.c + "00") + " " + (props.i == 0 || props.i == 1 ? 'mx-0' : '-mx-px') + " rounded" + (props.loc ? "-" + props.loc : "") + "-full",
        style: { 'height': props.h + "%" },
        "data-rellax-speed": "" + props.s,
        "data-rellax-xs-speed": "" + props.s * 1.3,
        "data-rellax-mobile-speed": "" + props.s * 1.3,
        "data-rellax-tablet-speed": "" + props.s,
        "data-rellax-desktop-speed": "" + props.s
    });
}

function Bars(_ref) {
    var minSpeed = _ref.minSpeed,
        maxSpeed = _ref.maxSpeed,
        color = _ref.color,
        _ref$extraHeight = _ref.extraHeight,
        extraHeight = _ref$extraHeight === undefined ? 0 : _ref$extraHeight,
        _ref$zIndex = _ref.zIndex,
        zIndex = _ref$zIndex === undefined ? 20 : _ref$zIndex;

    var barsTop = [];
    var barsBot = [];

    var n = Math.floor(window.innerWidth / 25);

    for (var i = 0; i <= n; i++) {
        var rs = RandInt(minSpeed, maxSpeed);
        var rh = 100 * (i / n) + extraHeight;
        barsTop.push(React.createElement(Bar, { h: rh, loc: "b", s: rs, c: color, i: i / n }));
        barsBot.push(React.createElement(Bar, { h: rh, loc: "t", s: -rs, c: color, i: i / n }));
    }

    barsBot.reverse();

    return [React.createElement(
        "div",
        { "class": "flex flex-none absolute w-full h-full top-0 items-start z-" + zIndex },
        barsTop
    ), React.createElement(
        "div",
        { "class": "flex flex-none absolute w-full h-full bot-0 items-end overflow-y-hidden z-" + zIndex },
        barsBot
    )];
}

function Landing() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        scroll = _React$useState2[0],
        setScroll = _React$useState2[1];

    // Cannot have Rellax creation in here with handleScroll
    // Had to nest in Bars which makes rellax do weird stuff


    React.useEffect(function () {
        new Rellax('.rellax', {
            breakpoints: [640, 768, 1024]
        });

        if (window.scrollY > 0) {
            setScroll(true);
        }

        var handleScroll = function handleScroll() {
            if (window.scrollY > 0) {
                setScroll(true);
            } else setScroll(false);
        };

        window.addEventListener('scroll', handleScroll);
        return function () {
            return window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return React.createElement(
        "section",
        { className: "h-screen w-full" },
        React.createElement(
            "div",
            { className: "h-full2" },
            React.createElement(
                "div",
                { className: "flex sticky top-0 justify-center items-center h-screen w-auto text-center" },
                console.log(scroll),
                scroll ? null : React.createElement(
                    "svg",
                    { className: "animate-pulse relative h-14 w-full fill-current text-indigo-200 z-30", viewBox: "0 0 16 16" },
                    React.createElement("path", { "fill-rule": "evenodd", d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" })
                ),
                React.createElement(
                    "header",
                    { className: "absolute w-auto z-10" },
                    React.createElement(
                        "div",
                        { className: "relative text-center object-center content-center items-center p-4" },
                        React.createElement(
                            "span",
                            { className: "text-2xl font-normal text-indigo-200" },
                            "Hi, I'm ",
                            React.createElement(
                                "b",
                                null,
                                "Fred"
                            )
                        ),
                        React.createElement(
                            "h1",
                            { className: "text-indigo-400 text-4xl font-sans font-extrabold" },
                            "welcome to my portfolio"
                        ),
                        React.createElement(
                            "div",
                            { className: "relative mt-3" },
                            React.createElement(
                                "span",
                                { className: "text-sm font-bold text-indigo-200 animate-pulse" },
                                "(keep scrolling)"
                            )
                        ),
                        React.createElement(
                            "svg",
                            { className: "animate-pulse relative h-5 w-full fill-current text-indigo-200", viewBox: "0 0 16 16" },
                            React.createElement("path", { "fill-rule": "evenodd", d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" })
                        )
                    )
                ),
                React.createElement(Bars, { minSpeed: 4, maxSpeed: 6, color: 7, zIndex: 0 }),
                React.createElement(Bars, { minSpeed: 7, maxSpeed: 9, color: 6 }),
                React.createElement(Bars, { minSpeed: 10, maxSpeed: 12, color: 5 }),
                React.createElement(Bars, { minSpeed: 13, maxSpeed: 15, color: 4, extraHeight: 2 })
            )
        )
    );
}

function Title(_ref2) {
    var _ref2$text = _ref2.text,
        text = _ref2$text === undefined ? '' : _ref2$text,
        children = _ref2.children;

    return React.createElement(
        "div",
        { className: "relative flow flex-wrap h-20 w-full content-center items-center text-center font-bold" },
        React.createElement(
            "div",
            { className: "w-full px-6 py-4" },
            React.createElement(
                "div",
                { className: "font-bold text-3xl text-indigo-400" },
                children
            ),
            React.createElement(
                "p",
                { className: "text-gray-300 text-base" },
                text
            ),
            React.createElement("hr", { className: "m-auto self-center w-1/2 border-1 mt-1" })
        )
    );
}

function TextElement(props) {
    return React.createElement(
        "div",
        { className: "relative px-6 py-3 " + (props.c ? 'text-center' : '') },
        props.title ? React.createElement(
            "div",
            { className: "font-bold text-xl text-indigo-400 mb-2 z-20" },
            props.title
        ) : null,
        React.createElement(
            "p",
            { className: "text-gray-300 font-normal text-xl z-20 overflow-hidden" },
            props.children
        )
    );
}

function Drop(props) {
    return React.createElement("div", {
        key: Math.round(Math.random() * 1000),
        className: "flex opacity-" + props.o + " absolute rellax-drops w-6 z-" + props.z + " bg-indigo-" + props.c * 100 + " mx-px md:mx-0.2 rounded-full",
        style: { 'height': props.h + "rem", 'top': props.t + "%", 'left': props.l + "%" },
        "data-rellax-speed": "" + props.s });
}

function Drops(_ref3) {
    var o = _ref3.o,
        nDrops = _ref3.nDrops,
        props = _objectWithoutProperties(_ref3, ["o", "nDrops"]);

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        drops = _React$useState4[0],
        setDrops = _React$useState4[1];
    //var drops = []


    var n = Math.floor(nDrops * window.innerWidth / 700);

    React.useEffect(function () {
        // TODO: add event listener for scroll so it only applies rellax class
        // when past the first scroll amopunt
        console.log("running useEffect");
        new Rellax('.rellax-drops');
    }, [drops]);

    React.useEffect(function () {
        var _loop = function _loop(i) {
            var rh = RandInt(1, 7);
            var rs = Math.random() * 3;
            var rc = RandInt(6, 9);
            var rt = Math.round(Math.random() * 100);
            var rl = Math.random() * 97;
            setDrops(function (arr) {
                return [].concat(_toConsumableArray(arr), [React.createElement(Drop, { h: rh, s: rs, c: rc, t: rt, l: rl, z: "0", o: o })]);
            });
            //drops.push(<Drop h={rh} s={rs} c={rc} t={rt} l={rl} z="0" o={o}/>)
        };

        for (var i = 1; i <= n; i++) {
            _loop(i);
        }
    }, []);

    return drops;
}

function GridElement(_ref4) {
    var onClick = _ref4.onClick,
        _ref4$span = _ref4.span,
        span = _ref4$span === undefined ? 1 : _ref4$span,
        props = _objectWithoutProperties(_ref4, ["onClick", "span"]);

    var extendedInfo = props.extendedInfo;

    return React.createElement(
        "div",
        {
            className: "flex items-center col-span-1 md:col-span-" + (span - 1) + " xl:col-span-" + span + " relative h-300 w-full py-5 px-5 font-bold z-10",
            "data-rellax-speed": "2" },
        React.createElement(
            "div",
            {
                className: "flex cursor-pointer items-start rounded w-full h-full overflow-hidden my-5 mx-2 md:mx-5 bg-indigo-even-darker2 shadow-xl  border-indigo-400 border-t-6 hover:border-t-20 hover:bg-indigo-even-darker duration-200",
                onClick: onClick },
            React.createElement(
                TextElement,
                { title: props.title },
                props.children
            )
        )
    );
}

function Contents(props) {

    function handleClick(test) {
        props.setInfoPanel(!props.infoPanel);
        console.log(test);
    }

    return React.createElement(
        "section",
        { className: "h-screen" },
        React.createElement(
            "div",
            { className: "h-full2 relative items-end justify-items-end " },
            React.createElement("div", { className: "relative flow flex-row items-end top-0 h-1/2 w-full flex-wrap" }),
            React.createElement(
                "div",
                { className: "relative flow flex-row items-end bg-purple-even-darker bottom-0 w-full" },
                React.createElement(
                    Title,
                    null,
                    "About me"
                ),
                React.createElement(
                    "div",
                    { className: "relative w-2/3 m-auto" },
                    React.createElement(
                        TextElement,
                        { c: "true" },
                        "I'm a young programmer and game developer looking to get into the industry and put my skills to use in a professional environment. I've been obsessed with programming for as long as I can remember, I've always been eager to bring my ideas to life in a tangible way, and programming gave me that freedom. From early java game programming, to messing about with arduino, to starting my journey in web development and now becoming a Unity obsessed maniac and avid React learner."
                    )
                ),
                React.createElement(
                    Title,
                    null,
                    "Projects"
                ),
                React.createElement(
                    "div",
                    { "class": "grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 relative px-2 md:px-20 w-full overflow-auto" },
                    React.createElement(
                        GridElement,
                        { title: "Dog Nights", span: 2, onClick: function onClick() {
                                handleClick(children);
                            } },
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis amet provident reiciendis accusamus nobis. Eum minus doloribus quo, distinctio, saepe, sit harum fuga cumque optio possimus id voluptate iusto.",
                        React.createElement(
                            "div",
                            { className: "flex items-center overflow-hidden max-h-96 mt-5" },
                            React.createElement("img", { src: "../img/stove.png", alt: "", className: "w-full h-auto " })
                        )
                    ),
                    React.createElement(
                        GridElement,
                        { title: "Dog Nights Game" },
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi, enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae sint atque rerum modi."
                    ),
                    React.createElement(
                        GridElement,
                        { title: "Dog Nights Game" },
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi, enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae sint atque rerum modi."
                    ),
                    React.createElement(
                        GridElement,
                        { title: "Dog Nights Game" },
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi, enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae sint atque rerum modi."
                    ),
                    React.createElement(
                        GridElement,
                        { title: "Dog Nights Game" },
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi, enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae sint atque rerum modi."
                    ),
                    React.createElement(
                        GridElement,
                        { title: "Dog Nights Game" },
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi, enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae sint atque rerum modi."
                    ),
                    React.createElement(Drops, { o: "10", nDrops: 30 })
                )
            )
        )
    );
}

var OverlayPanel = function OverlayPanel(props) {

    var handleClick = function handleClick() {
        props.setInfoPanel(!props.infoPanel);
    };

    return props.infoPanel ? React.createElement(
        "container",
        { className: "flex justify-center items-center" },
        React.createElement("div", { className: "fixed mt-auto top-0 h-full w-full bg-indigo-even-darker2 opacity-70 z-40", onClick: handleClick }),
        React.createElement("div", { className: "fixed m-auto top-1/4 w-2/3 bg-indigo-even-darker z-40 o-100" })
    ) : null;
};

var MoreInfo = function MoreInfo(props) {

    return React.createElement(
        "div",
        { className: "flex absolute w-full justify-center items-center" },
        React.createElement(
            "div",
            { className: "flex fixed justify-center items-center mt-auto top-0 h-full w-full bg-purple-even-darker opacity-70 z-0", onClick: props.handleClick },
            React.createElement("div", { className: "fixed m-auto h-2/3 w-2/3 bg-pink-500 z-40 o-100" })
        )
    );
};

var TestHide = function TestHide(props) {
    var handleClick = function handleClick() {
        props.setInfoPanel(!props.infoPanel);
    };

    return props.infoPanel ? [React.createElement(
        "div",
        { className: "absolute transform transition -translate-x-full ease-in-out duration-700 z-50 bg-purple-even-darker" },
        props.children
    ), React.createElement(MoreInfo, { handleClick: handleClick })] : [React.createElement(
        "div",
        { className: "absolute transform transition translate-x ease-in-out duration-700 z-50 bg-purple-even-darker" },
        props.children
    ), React.createElement(MoreInfo, { handleClick: handleClick })];
};

function App() {
    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        infoPanel = _React$useState6[0],
        setInfoPanel = _React$useState6[1];

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            TestHide,
            { infoPanel: infoPanel, setInfoPanel: setInfoPanel },
            React.createElement(Landing, null),
            React.createElement(Contents, { infoPanel: infoPanel, setInfoPanel: setInfoPanel })
        )
    );
}

ReactDOM.render(React.createElement(App, null), root);
