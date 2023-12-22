/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import {
  Smartbanner,
  SmartbannerProps,
  isAndroid,
  isIos,
  isMobile,
} from "custom-react-smartbanner";
import "custom-react-smartbanner/dist/custom-react-smartbanner.css";
import { COOKIE, setCookie } from "../lib/cookie";

const initialState = {
  title: "React Smartbanner",
  iconUrl: "https://picsum.photos/200",

  appleDescription: "Get on the App Store",
  androidDescription: "Get on the Play Store",
  appleUrl: "https://apps.apple.com/us/app/frontend-masters/id1383780486",
  androidUrl:
    "https://play.google.com/store/apps/details?id=in.mjg.frontendmasters.store&hl=en_GB",
  displayOnAndroid: true,
  displayOnApple: true,
};

const CHANGE_PLATFORM_LABEL =
  "Change to see banner for this platform via Dev Tools";

const Demo = () => {
  const [props, setProps] = useState<SmartbannerProps>(initialState);

  const [isOpen, setIsOpen] = useState(true);

  const {
    iconUrl,
    title,
    displayOnApple,
    displayOnAndroid,
    appleDescription,
    androidDescription,
    buttonLabel,

    appleUrl,
    androidUrl,

    ...rest
  } = props;

  const handleClose = () => {
    setCookie(COOKIE.HideSmartBanner, "true", {
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    setIsOpen(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* left */}
      <div>
        <Smartbanner
          isOpen={isOpen}
          title={title}
          appleDescription={appleDescription}
          androidDescription={androidDescription}
          buttonLabel={buttonLabel}
          onClose={handleClose}
          appleUrl={appleUrl}
          androidUrl={androidUrl}
          iconUrl={iconUrl}
          displayOnApple={displayOnApple}
          displayOnAndroid={displayOnAndroid}
          displayOnDesktop={rest.displayOnDesktop}
          desktopDescription={
            rest.displayOnDesktop ? rest.desktopDescription : ""
          }
          desktopUrl={rest.displayOnDesktop ? rest.desktopUrl : ""}
        />
        <div className="mt-4">
          <h2 className="font-semibold text-center">
            Try playing with different props here
          </h2>
          {/* title */}
          <div className="mt-4">
            <label className="text-sm">Title</label>
            <input
              type="text"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={title}
              onChange={(e) => setProps({ ...props, title: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label className="text-sm">Icon Url</label>
            <input
              type="text"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={iconUrl}
              onChange={(e) => setProps({ ...props, iconUrl: e.target.value })}
            />
          </div>

          {/* Apple */}
          <div
            className={`mt-4 p-2 rounded-md ${
              isIos
                ? "border-teal-400 bg-teal-50 border-[1px]"
                : "bg-neutral-200 opacity-100"
            }`}
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="true"
                defaultChecked={true}
                onChange={() => {
                  setProps({
                    ...props,
                    displayOnApple: !displayOnApple,
                  });
                }}
                id="apple-checkbox"
                className="hover:cursor-pointer"
              />

              <label
                htmlFor="apple-checkbox"
                className="font-semibold hover:cursor-pointer"
              >
                Apple
              </label>
              {isIos ? (
                <span className="text-sm px-2 py-[2px] bg-teal-400 rounded-md text-white">
                  Matched User Agent
                </span>
              ) : (
                <p className="text-sm px-2 py-[2px] border-[1px] border-teal-400 rounded-md text-teal-400 bg-white">
                  {CHANGE_PLATFORM_LABEL}
                </p>
              )}
            </div>
            {/* apple description */}

            {displayOnApple && (
              <>
                <div>
                  <label className="text-sm">Apple Description</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={appleDescription}
                    onChange={(e) =>
                      setProps({ ...props, appleDescription: e.target.value })
                    }
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm">Apple Store Link</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={appleUrl}
                    onChange={(e) =>
                      setProps({ ...props, appleUrl: e.target.value })
                    }
                  />
                </div>
              </>
            )}
          </div>

          {/* Android url */}
          <div
            className={`mt-4 p-2 rounded-md ${
              isAndroid
                ? "border-teal-400  bg-teal-50 border-[1px]"
                : "bg-neutral-200 opacity-100"
            }`}
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="true"
                defaultChecked={true}
                onChange={() => {
                  setProps({
                    ...props,
                    displayOnAndroid: !displayOnAndroid,
                  });
                }}
                id="android-checkbox"
                className="hover:cursor-pointer"
              />

              <label
                htmlFor="android-checkbox"
                className="font-semibold hover:cursor-pointer"
              >
                Android
              </label>
              {isAndroid ? (
                <span className="text-sm px-2 py-[2px] bg-teal-400 rounded-md text-white">
                  Matched User Agent
                </span>
              ) : (
                <p className="text-sm px-2 py-[2px] border-[1px] border-teal-400 rounded-md text-teal-400 bg-white">
                  {CHANGE_PLATFORM_LABEL}
                </p>
              )}
            </div>
            {/* android description */}

            {displayOnAndroid && (
              <>
                <div>
                  <label className="text-sm">Android Description</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={androidDescription}
                    onChange={(e) =>
                      setProps({ ...props, androidDescription: e.target.value })
                    }
                  />
                </div>
                <div className="mt-4">
                  <label className="text-sm">Play Store Link</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={androidUrl}
                    onChange={(e) =>
                      setProps({ ...props, androidUrl: e.target.value })
                    }
                  />
                </div>
              </>
            )}
          </div>
          {/* Desktop url */}
          <div
            className={`mt-4 p-2 rounded-md ${
              !isMobile
                ? " border-teal-400 bg-teal-50 border-[1px]"
                : "bg-neutral-200 opacity-100"
            }`}
          >
            <div className="flex gap-2">
              <input
                type="checkbox"
                value="true"
                defaultChecked={false}
                onChange={() => {
                  (setProps as any)({
                    ...props,
                    displayOnDesktop: !rest.displayOnDesktop,
                  });
                }}
                className="hover:cursor-pointer"
                id="desktop-checkbox"
              />

              <label
                htmlFor="desktop-checkbox"
                className="font-semibold hover:cursor-pointer"
              >
                Desktop
              </label>
              {!isMobile && (
                <span className="text-sm px-2 py-[2px] bg-teal-400 rounded-md text-white">
                  Matched User Agent
                </span>
              )}
            </div>

            {rest.displayOnDesktop && (
              <div>
                {/* android description */}
                <div>
                  <label className="text-sm mt-4">Desktop Description</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={rest.desktopDescription}
                    onChange={(e) =>
                      (setProps as any)({
                        ...props,
                        desktopDescription: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mt-4">
                  <label className="text-sm">
                    Link to app (Apple Store or Play Store)
                  </label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={rest.desktopUrl}
                    onChange={(e) =>
                      (setProps as any)({
                        ...props,
                        desktopUrl: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="pb-4">
        <h3 className="text-lg font-bold mt-4">Props</h3>
        <pre className="bg-neutral-800 text-white p-4 rounded-lg overflow-y-auto">
          {JSON.stringify(props, null, 4)}
        </pre>
      </div>
    </div>
  );
};
export default Demo;
