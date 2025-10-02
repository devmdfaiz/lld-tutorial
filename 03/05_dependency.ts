class Report {}

class Printer {
    print(report: Report) {
        console.log("Printing report...");
    }
}

const report = new Report();
const printer = new Printer();
printer.print(report);