class DungeonRoom {
    width: number;
    height: number;
    content: string;
  
    constructor(width: number, height: number, content: string) {
      this.width = width;
      this.height = height;
      this.content = content;
    }
  
    generateRandomContent(): string {
      const contents = ["empty", "monster", "treasure", "trap"];
      const randomIndex = Math.floor(Math.random() * contents.length);
      return contents[randomIndex];
    }
  }
  
  export function generateDungeonRoom(): DungeonRoom {
    const minWidth = 5;
    const maxWidth = 20;
    const minHeight = 5;
    const maxHeight = 20;
  
    const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
  
    const room = new DungeonRoom(randomWidth, randomHeight, "");
    room.content = room.generateRandomContent();
  
    return room;
  }
  
  // Example usage:
  const newDungeonRoom = generateDungeonRoom();
  console.log(newDungeonRoom);
  