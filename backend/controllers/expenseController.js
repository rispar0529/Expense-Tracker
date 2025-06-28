const xlsx = require('xlsx');
const Expense = require("../models/Expense");
const path = require('path');

exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try{
        const { icon, category, amount, date} = req.body;

        if(!category || !amount || !date) {
            return res.status(400).json({message: "All fields are required"});
        }

        const newExpense = new Expense ({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });

        await newExpense.save();
        res.status(200).json(newExpense);
    } catch(err) {
        res.status(500).json({ message: "Server Error"});
    }
}

exports.getAllExpense= async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({userId}).sort({date:-1 });
        res.json(expense);
    } catch(err) {
        res.status(500).json({ message: "Server Error" });
    }
}

exports.deleteExpense = async (req, res) => {
    try{
        await Expense.findByIdAndDelete(req.params.id);
        res.json({message: "Expense deleted successfully"});
    } catch (err) {
        res.status(500).json({message: "Server Error"});
    }
}

exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;
    try {
        const expense = await Expense.find({ userId}).sort({ date:-1 });

        const data = expense.map((item) => ({
            Category: item.category,
            Amount: item.amount, 
            Date: item.date
        }))

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");
        const filePath = path.join(__dirname, 'expense_details.xlsx');  // Correct absolute path
        xlsx.writeFile(wb, filePath);

        res.download(filePath);
    } catch (err) {
        res.status(500).json({message: "Server Error"});
    }
}