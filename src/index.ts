export class Log {
    static success(msg: string) {
        console.log(`% ${msg}`,'color: green' )
    }
      static danger(msg: string) {
               console.log(`% ${msg}`,'color: red' )
      }
      static info(msg: string) {
               console.log(`% ${msg}`,'color: black; background: yellow' )
    }
}