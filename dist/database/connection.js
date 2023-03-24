"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://scalablybackend:hello2441139@cluster0.h0d2ahn.mongodb.net/scalablylab';
        await mongoose_1.default.connect(uri);
        console.log('MongoDB connection successful');
    }
    catch (err) {
        console.log('MongoDB connection error:', err);
    }
};
exports.default = connectDB;
