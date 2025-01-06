export type SavedHistory = {
  searchValue: string
  results: {
    nodes: {}[]
    edges: {}[]
  }
}

export const defaultSavedHistory: SavedHistory[] = [
  {
    searchValue: "Quantum Physics",
    results: {
      nodes: [
        {
          data: {
            label: "Quantum Physics",
          },
          deletable: false,
          draggable: true,
          id: "1",
          position: {
            x: 0,
            y: 0,
          },
          selectable: false,
          style: {
            background: "#99CCFF",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Wave-Particle Duality",
          },
          deletable: false,
          draggable: true,
          id: "2",
          position: {
            x: -200,
            y: -150,
          },
          selectable: false,
          style: {
            background: "#FFCCCC",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Superposition",
          },
          deletable: false,
          draggable: true,
          id: "3",
          position: {
            x: -200,
            y: 150,
          },
          selectable: false,
          style: {
            background: "#FFCCCC",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Entanglement",
          },
          deletable: false,
          draggable: true,
          id: "4",
          position: {
            x: 200,
            y: -150,
          },
          selectable: false,
          style: {
            background: "#FFCCCC",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Quantum Mechanics",
          },
          deletable: false,
          draggable: true,
          id: "5",
          position: {
            x: 200,
            y: 150,
          },
          selectable: false,
          style: {
            background: "#FFCCCC",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Quantum Computing",
          },
          deletable: false,
          draggable: true,
          id: "6",
          position: {
            x: 400,
            y: 0,
          },
          selectable: false,
          style: {
            background: "#66FF99",
            color: "#000000",
          },
        },
      ],
      edges: [
        {
          id: "1-2",
          label: "Involves",
          source: "1",
          style: {
            stroke: "#CCCCFF",
          },
          target: "2",
          type: "default",
        },
        {
          id: "1-3",
          label: "Involves",
          source: "1",
          style: {
            stroke: "#CCCCFF",
          },
          target: "3",
          type: "default",
        },
        {
          id: "1-4",
          label: "Involves",
          source: "1",
          style: {
            stroke: "#CCCCFF",
          },
          target: "4",
          type: "default",
        },
        {
          id: "1-5",
          label: "Involves",
          source: "1",
          style: {
            stroke: "#CCCCFF",
          },
          target: "5",
          type: "default",
        },
        {
          id: "5-6",
          label: "Enables",
          source: "5",
          style: {
            stroke: "#9999FF",
          },
          target: "6",
          type: "default",
        },
      ],
    },
  },
  {
    searchValue: "Shorter example",
    results: {
      nodes: [
        {
          data: {
            label: "Quantum Physics",
          },
          deletable: false,
          draggable: true,
          id: "1",
          position: {
            x: 0,
            y: 0,
          },
          selectable: false,
          style: {
            background: "#99CCFF",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Entanglement",
          },
          deletable: false,
          draggable: true,
          id: "4",
          position: {
            x: 200,
            y: -150,
          },
          selectable: false,
          style: {
            background: "#FFCCCC",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Quantum Mechanics",
          },
          deletable: false,
          draggable: true,
          id: "5",
          position: {
            x: 200,
            y: 150,
          },
          selectable: false,
          style: {
            background: "#FFCCCC",
            color: "#000000",
          },
        },
        {
          data: {
            label: "Quantum Computing",
          },
          deletable: false,
          draggable: true,
          id: "6",
          position: {
            x: 400,
            y: 0,
          },
          selectable: false,
          style: {
            background: "#66FF99",
            color: "#000000",
          },
        },
      ],
      edges: [
        {
          id: "1-4",
          label: "Involves",
          source: "1",
          style: {
            stroke: "#CCCCFF",
          },
          target: "4",
          type: "default",
        },
        {
          id: "1-5",
          label: "Involves",
          source: "1",
          style: {
            stroke: "#CCCCFF",
          },
          target: "5",
          type: "default",
        },
        {
          id: "5-6",
          label: "Enables",
          source: "5",
          style: {
            stroke: "#9999FF",
          },
          target: "6",
          type: "default",
        },
      ],
    },
  },
]
