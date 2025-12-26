// Without using Abstract Factory
class WindowsButton {
    paint(): void {
        console.log("Painting a Windows-style button.");
    }

    onClick(): void {
        console.log("Windows button clicked.");
    }
}

class WindowsCheckbox {
    paint(): void {
        console.log("Painting a Windows-style checkbox.");
    }

    onSelect(): void {
        console.log("Windows checkbox selected.");
    }
}

class MacOSButton {
    paint(): void {
        console.log("Painting a macOS-style button.");
    }

    onClick(): void {
        console.log("macOS button clicked.");
    }
}

class MacOSCheckbox {
    paint(): void {
        console.log("Painting a macOS-style checkbox.");
    }

    onSelect(): void {
        console.log("macOS checkbox selected.");
    }
}

class App {
    static main(): void {
        const os = process.platform;

        if (os === "win32") {
            const button = new WindowsButton();
            const checkbox = new WindowsCheckbox();
            button.paint();
            checkbox.paint();
        } else if (os === "darwin") {
            const button = new MacOSButton();
            const checkbox = new MacOSCheckbox();
            button.paint();
            checkbox.paint();
        }
    }
}

App.main();