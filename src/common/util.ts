import * as vscode from "vscode";
import ServiceManager from "../manager/serviceManager";
import { join } from "path";

export enum Confirm {
    YES = "YES",
    NO = "NO"
}

export class Util {

    public static getExtPath(...paths: string[]) {
        
        return vscode.Uri.file(join(ServiceManager.context.extensionPath, ...paths))
    }

    public static confirm(placeHolder: string, callback: () => void) {
        vscode.window.showQuickPick([Confirm.YES, Confirm.NO], { placeHolder }).then((res) => {
            if (res == Confirm.YES) {
                callback()
            }
        })
    }

    public static copyToBoard(content: string) {
        vscode.env.clipboard.writeText(content)
    }


    public static getStore(key: string): any {
        return ServiceManager.context.globalState.get(key);
    }
    public static store(key: string, object: any) {
        ServiceManager.context.globalState.update(key, object)
    }

}