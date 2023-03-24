/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
export const __esModule: boolean;
export default Todo;
declare const Todo: mongoose_1.Model<{
    title: string;
    description: string;
}, {}, {}, {}, mongoose_1.Document<unknown, {}, {
    title: string;
    description: string;
}> & Omit<{
    title: string;
    description: string;
} & {
    _id: mongoose_1.Types.ObjectId;
}, never>, mongoose_1.Schema<any, mongoose_1.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose_1.DefaultSchemaOptions, {
    title: string;
    description: string;
}, mongoose_1.Document<unknown, {}, mongoose_1.FlatRecord<{
    title: string;
    description: string;
}>> & Omit<mongoose_1.FlatRecord<{
    title: string;
    description: string;
}> & {
    _id: mongoose_1.Types.ObjectId;
}, never>>>;
import mongoose_1 = require("mongoose");
