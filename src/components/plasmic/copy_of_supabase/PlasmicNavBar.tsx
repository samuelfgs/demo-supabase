// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aGwaDyFceaTJ7MmVgLqAKM
// Component: pLxSxf-V2wL
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { SupabaseUserSession } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: X9PtRIJY4b9/codeComponent
import { SupabaseTextField } from "../../CodeComponents/DisplayCollections"; // plasmic-import: lFC9CRSs6Y-w/codeComponent
import { SupabaseUserLogOut } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: 5DBJkMVl-SQ/codeComponent
import Button from "../../Button"; // plasmic-import: 72kuX7z4jE2/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_supabase.module.css"; // plasmic-import: aGwaDyFceaTJ7MmVgLqAKM/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: pLxSxf-V2wL/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZsbkirgRD0ll/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: -NPp1PMkI3Mu/icon

export type PlasmicNavBar__VariantMembers = {};

export type PlasmicNavBar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  supabaseUserSession?: p.Flex<typeof SupabaseUserSession>;
  supabaseTextField?: p.Flex<typeof SupabaseTextField>;
  supabaseUserLogOut?: p.Flex<typeof SupabaseUserLogOut>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultNavBarProps {
  className?: string;
}

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__w1ZT3)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___2VnUp
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              <h3
                data-plasmic-name={"h3"}
                data-plasmic-override={overrides.h3}
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3
                )}
              >
                {"Supabase Demo"}
              </h3>
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </div>
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox__zvhl0)}>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__tlx8Z)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2MLhy
              )}
            >
              {"Hello, "}
            </div>

            <SupabaseUserSession
              data-plasmic-name={"supabaseUserSession"}
              data-plasmic-override={overrides.supabaseUserSession}
              className={classNames("__wab_instance", sty.supabaseUserSession)}
            >
              <SupabaseTextField
                data-plasmic-name={"supabaseTextField"}
                data-plasmic-override={overrides.supabaseTextField}
                className={classNames("__wab_instance", sty.supabaseTextField)}
                name={"{{session.email}}" as const}
              />
            </SupabaseUserSession>
          </div>
        ) : null}

        <SupabaseUserLogOut
          data-plasmic-name={"supabaseUserLogOut"}
          data-plasmic-override={overrides.supabaseUserLogOut}
          className={classNames("__wab_instance", sty.supabaseUserLogOut)}
          redirectOnSuccess={"/login-page" as const}
        >
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
          >
            {"Log out"}
          </Button>
        </SupabaseUserLogOut>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h3",
    "supabaseUserSession",
    "supabaseTextField",
    "supabaseUserLogOut",
    "button"
  ],
  h3: ["h3"],
  supabaseUserSession: ["supabaseUserSession", "supabaseTextField"],
  supabaseTextField: ["supabaseTextField"],
  supabaseUserLogOut: ["supabaseUserLogOut", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  supabaseUserSession: typeof SupabaseUserSession;
  supabaseTextField: typeof SupabaseTextField;
  supabaseUserLogOut: typeof SupabaseUserLogOut;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavBar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavBar__ArgProps,
      internalVariantPropNames: PlasmicNavBar__VariantProps
    });

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    supabaseUserSession: makeNodeComponent("supabaseUserSession"),
    supabaseTextField: makeNodeComponent("supabaseTextField"),
    supabaseUserLogOut: makeNodeComponent("supabaseUserLogOut"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
