// Type definitions for hopscotch 0.1.1
// Project: http://linkedin.github.io/hopscotch/
// Definitions by: xiao <https://github.com/244xiao>
// Definitions: https://github.com/244xiao/TypeScriptDefinitions

declare var hopscotch: Hopscotch;

interface HopscotchBubble {
    setPosition(step: StepObject): void;
    render(step: StepObject, idx: number, isLast: boolean, callback: Function): HopscotchBubble;
    serTitle(titleStr: string): HopscotchBubble;
    setContent(contentStr: string): HopscotchBubble;
    setNum(idx: number): void;
    show(): HopscotchBubble;
    hide(): HopscotchBubble;
    showPrevButton(show: boolean): void;
    showNextButton(show: boolean): void;
    showCloseButton(show: boolean): void;
    destroy(): void;
    updateButtons(): void;
    init(initOpt: TourObject): void;
}

interface HopscotchCalloutManager {
    createCallout(opt: CalloutObject): HopscotchBubble;
    getCallout(id: string): HopscotchBubble;
    removeAllCallouts(): void;
    removeAllCallout(id: string): void;
}

declare class Hopscotch {
    findStartingStep(startStepNum: number, cb: Function): void;
    showStepHelper(stepNum: number): void;
    getCalloutManager(): HopscotchCalloutManager;
    startTour(tour: TourObject, stepNum?: number): Hopscotch;
    showStep(stepNum: number): Hopscotch;
    prevStep(doCallbacks?: boolean): Hopscotch;
    nextStep(doCallbacks?: boolean): Hopscotch;
    endTour(clearState?: boolean, doCallbacks?: boolean): Hopscotch;
    getCurrTour(): TourObject;
    getCurrTarget(): Element;
    getCurrStepNum(): number;
    listen(evtType: string, cb: Function, isTourCb: boolean): Hopscotch;
    unlisten(evtType: string, cb: Function): Hopscotch;
    removeCallbacks(evtName?: string, tourOnly?: boolean): Hopscotch;
    registerHelper(id: string, fn: Function): void;
    unregisterHelper(id: string): void;
    invokeHelper(id: string): void;
    setCookieName(name: string): Hopscotch;
    resetDefaultOptions(): Hopscotch;
    resetDefaultI18N(): Hopscotch;
    getState(): string;
    configure(options: TourObject): Hopscotch;
}

interface TourObject {
    id: string;
    steps: StepObject[];
    bubbleWidth?: number;
    bubblePadding?: number;
    smoothScroll?: boolean;
    scrollDuration?: number;
    scrollTopMargin?: number;
    showCloseButton?: boolean;
    showPrevButton?: boolean;
    showNextButton?: boolean;
    arrowWidth?: number;
    skipIfNoElement?: boolean;
    nextOnTargetClick?: boolean;
    onNext?: Function;
    onPrev?: Function;
    onStart?: Function;
    onEnd?: Function;
    onClose?: Function;
    onError?: Function;
    i18n?: I18nObject;
}

interface I18nObject {
    nextBtn?: string;
    prevBtn?: string;
    doneBtn?: string;
    skipBtn?: string;
    closeTooltip?: string;
    stepNums?: string[];
}

interface StepObject {
    target: any;
    placement: string;
    title?: string;
    content?: string;
    width?: number;
    padding?: number;
    xOffset?: number;
    yOffset?: number;
    arrowOffset?: number;
    delay?: number;
    zindex?: number;
    showNextButton?: boolean;
    showPrevButton?: boolean;
    showCTAButton?: boolean;
    ctaLabel?: string;
    multipage?: boolean;
    showSkip?: boolean;
    fixedElemen?: boolean;
    nextOnTargetClick?: boolean;
    onPrev?: Function;
    onNext?: Function;
    onShow?: Function;
    onCTA?: Function;
}

interface CalloutObject extends StepObject {
    id: string;
}
