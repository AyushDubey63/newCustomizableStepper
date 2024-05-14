import Stepper from "./components/Stepper";
interface Steps {
  title: string;
  isCompleted: boolean;
  isActive: boolean;
  icon: JSX.Element;
}
function App() {
  const steps: Steps[] = [
    {
      title: "Step 1",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 2",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 3",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 4",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 5",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 6",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 7",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 8",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 9",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 10",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 11",
      isCompleted: true,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 12",
      isCompleted: false,
      isActive: true,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 13",
      isCompleted: false,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 14",
      isCompleted: false,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 15",
      isCompleted: false,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
    {
      title: "Step 16",
      isCompleted: false,
      isActive: false,
      icon: <path d="M12 2L3 21h18L12 2zM12 6l6.2 13.74L3.8 19.74L12 6z" />,
    },
  ];
  const bgColors: string[] = [
    "bg-gradient-to-br from-purple-900 via-purple-500 to-purple-300",
    "bg-gradient-to-r from-yellow-700 via-green-500 to-gray-300",
    "bg-gradient-to-r from-black to-white via-gray-500",
  ];
  const connectorColors: string[] = [
    "bg-gradient-to-b from-purple-900 via-purple-500 to-purple-300",
    "bg-gradient-to-b from-yellow-700 via-green-500 to-gray-300",
    "bg-gradient-to-b from-black to-white via-gray-500",
  ];
  return (
    <div className="App">
      <Stepper
        lineWidth="100px"
        steps={[...steps]}
        bendings={[3, 7, 11]}
        animate={true}
        bgColors={[...bgColors]}
        connectorColors={[...connectorColors]}
        stepsSize="medium"
        vertical={true}
      />
    </div>
  );
}

export default App;
