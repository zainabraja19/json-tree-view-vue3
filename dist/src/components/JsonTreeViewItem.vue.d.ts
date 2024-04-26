export declare enum ItemType {
    OBJECT = 0,
    ARRAY = 1,
    VALUE = 2
}
export type PrimitiveTypes = string | number | boolean | null;
export interface SelectedData {
    key: string;
    value: PrimitiveTypes;
    path: string;
}
export type ItemData = {
    key: string;
    type: ItemType;
    path: string;
    depth: number;
    length?: number;
    children?: ItemData[];
    value?: PrimitiveTypes;
};
export type Props = {
    data: ItemData;
    maxDepth?: number;
    canSelect?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    maxDepth: number;
    canSelect: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    selected: (value: SelectedData) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
    maxDepth: number;
    canSelect: boolean;
}>>> & {
    onSelected?: ((value: SelectedData) => any) | undefined;
}, {
    maxDepth: number;
    canSelect: boolean;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
