import { Fragment } from "react";
import { motion } from "framer-motion";
interface Steps {
  title: string;
  isCompleted: boolean;
  isActive: boolean;
  icon: JSX.Element;
}

const createArrays = (steps: Steps[], bendings: number[]) => {
  const arrays = [];
  let startIndex = 0;
  if (bendings[0] === -1) return [steps];

  for (let i = 0; i < bendings.length; i++) {
    const bendIndex = bendings[i];
    const arrayLength = bendIndex - startIndex + 1;
    const array = steps.slice(startIndex, startIndex + arrayLength);

    // Reverse the array if the index is odd and not the first one
    if (i % 2 !== 0 && i !== 0) {
      array.reverse();
    }

    arrays.push(array);
    startIndex = bendIndex + 1;
  }

  // Add the remaining steps to the last array
  const remainingSteps = steps.slice(startIndex);
  if (arrays.length % 2 !== 0 && remainingSteps.length > 0) {
    remainingSteps.reverse();
  }
  arrays.push(remainingSteps);

  return arrays;
};

const Stepper = ({
  steps,
  lineWidth,
  bendings,
  animate,
  bgColors,
  connectorColors,
  stepsSize,
  vertical,
}: {
  steps: Steps[];
  lineWidth: string;
  bendings: number[];
  animate: boolean;
  bgColors: string[];
  connectorColors: string[];
  stepsSize: "small" | "medium" | undefined;
  vertical: boolean;
}) => {
  const finalArray = createArrays(steps, bendings);
  const [completedColor, activeColor, inactiveColor] = bgColors;
  const [
    connectorCompletedColor,
    connectorActiveColor,
    connectorInactiveColor,
  ] = connectorColors;
  return (
    <div
      className={`w-full p-10 flex ${
        vertical === true ? "flex-row" : "flex-col  justify-center items-center"
      }  `}
    >
      {finalArray.map((array, arrayIndex) => (
        <Fragment key={arrayIndex}>
          <motion.div
            initial={animate ? { opacity: 0, x: -20 } : undefined}
            animate={
              animate ? { opacity: [0.25, 0.5, 0.75, 1], x: 0 } : undefined
            }
            transition={
              animate
                ? { duration: 1, delay: arrayIndex * 0.05, ease: "easeIn" }
                : undefined
            }
            className={` flex ${
              vertical === true ? "flex-col w-fit" : "w-full"
            }  justify-center`}
          >
            {array.map((step, index) => (
              <Fragment key={index}>
                <motion.div
                  initial={animate ? { opacity: 0, x: -20 } : undefined}
                  animate={
                    animate
                      ? { opacity: [0.25, 0.5, 0.75, 1], x: 0 }
                      : undefined
                  }
                  transition={
                    animate
                      ? { duration: 1, delay: index * 0.05, ease: "easeIn" }
                      : undefined
                  }
                  className={`flex ${
                    vertical === true ? `flex-row ` : "flex-col"
                  } items-center`}
                >
                  <div
                    className={`rounded-full ${
                      stepsSize === "small"
                        ? "w-10"
                        : stepsSize === "medium"
                        ? "w-14"
                        : "w-8"
                    } ${
                      stepsSize === "small"
                        ? "h-10"
                        : stepsSize === "medium"
                        ? "h-14"
                        : "h-8"
                    }  flex ${
                      vertical === true ? "flex-col" : ""
                    } items-center justify-center ${
                      step.isCompleted
                        ? `${completedColor}`
                        : step.isActive
                        ? `${activeColor}`
                        : `${inactiveColor}`
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        step.isCompleted
                          ? "text-white"
                          : step.isActive
                          ? "text-black"
                          : "text-white"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {step.icon}
                    </svg>
                  </div>
                  <span className={`${vertical ? "text-nowrap" : ""} `}>
                    {step.title}
                  </span>
                </motion.div>
                {index !== array.length - 1 && (
                  <motion.div
                    initial={animate ? { opacity: 0, x: -20 } : undefined}
                    animate={
                      animate
                        ? { opacity: [0.25, 0.5, 0.75, 1], x: 0 }
                        : undefined
                    }
                    transition={
                      animate
                        ? { duration: 1, delay: index * 0.05, ease: "easeIn" }
                        : undefined
                    }
                    className={`${
                      vertical === true
                        ? `w-[5px] flex justify-center items-center h-[100px] ${
                            stepsSize === "small"
                              ? "ml-5"
                              : stepsSize === "medium"
                              ? "ml-7"
                              : "ml-3"
                          } `
                        : ` flex-1 h-[5px] ${
                            stepsSize === "small"
                              ? "mt-5"
                              : stepsSize === "medium"
                              ? "mt-7"
                              : "mt-3"
                          } `
                    }  ${
                      arrayIndex % 2 === 0
                        ? array[index + 1]?.isCompleted
                          ? `${connectorCompletedColor}`
                          : array[index + 1]?.isActive
                          ? `${connectorActiveColor}`
                          : `${connectorInactiveColor}`
                        : array[index]?.isCompleted
                        ? `${connectorCompletedColor}`
                        : array[index]?.isActive
                        ? `${connectorActiveColor}`
                        : `${connectorInactiveColor}`
                    } `}
                  >
                    <div className="p-2"></div>
                  </motion.div>
                )}
              </Fragment>
            ))}
          </motion.div>
          {arrayIndex < finalArray.length - 1 && bendings[0] !== -1 && (
            <motion.div
              className={` ${
                vertical === true
                  ? ` w-[22rem] flex justify-center`
                  : `w-full flex ${
                      arrayIndex % 2 === 0
                        ? `justify-end ${
                            stepsSize === "small"
                              ? "mr-3"
                              : stepsSize === "medium"
                              ? "mr-5"
                              : "mr-2"
                          }`
                        : `justify-start ${
                            stepsSize === "small"
                              ? "ml-3"
                              : stepsSize === "medium"
                              ? "ml-5"
                              : "ml-2"
                          }`
                    }`
              } `}
            >
              <div
                className={` flex ${
                  vertical === true
                    ? `w-full flex=1 flex-col items-center  ${
                        arrayIndex % 2 === 0
                          ? `justify-end  ${
                              stepsSize === "small"
                                ? "mb-3"
                                : stepsSize === "medium"
                                ? "mb-5"
                                : "mb-2"
                            }`
                          : `justify-start ${
                              stepsSize === "small"
                                ? "mt-3"
                                : stepsSize === "medium"
                                ? "mt-5"
                                : "mt-2"
                            }`
                      }`
                    : "justify-center w-10"
                } `}
              >
                <motion.div
                  style={{ height: !vertical ? lineWidth : "" }}
                  initial={animate ? { opacity: 0, x: -20 } : undefined}
                  animate={
                    animate
                      ? { opacity: [0.25, 0.5, 0.75, 1], x: 0 }
                      : undefined
                  }
                  transition={
                    animate
                      ? {
                          duration: 1,
                          delay: arrayIndex * 0.05,
                          ease: "easeIn",
                        }
                      : undefined
                  }
                  className={`w-[4px] ${
                    vertical === true ? "w-full h-[5px]   " : ""
                  } ${
                    arrayIndex % 2 !== 0
                      ? finalArray[arrayIndex + 1][0].isActive ||
                        finalArray[arrayIndex + 1].every(
                          (step) => step.isActive
                        )
                        ? `${connectorActiveColor}`
                        : finalArray[arrayIndex + 1].every(
                            (step) => step.isCompleted
                          ) || finalArray[arrayIndex + 1][0].isCompleted
                        ? `${connectorCompletedColor}`
                        : ` ${connectorInactiveColor}`
                      : finalArray[arrayIndex + 1][
                          finalArray[arrayIndex + 1].length - 1
                        ]?.isActive ||
                        finalArray[arrayIndex + 1].every(
                          (step) => step.isActive
                        )
                      ? `${connectorActiveColor}`
                      : finalArray[arrayIndex + 1].every(
                          (step) => step.isCompleted
                        ) ||
                        finalArray[arrayIndex + 1][
                          finalArray[arrayIndex + 1].length - 1
                        ].isCompleted
                      ? `${connectorCompletedColor}`
                      : ` ${connectorInactiveColor}`
                  } `}
                >
                  <div className="p-2"></div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Stepper;
