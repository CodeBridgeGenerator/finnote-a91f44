
    module.exports = function (app) {
        const modelName = 'recurring_expenses';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type:  String , required: true },
type: { type:  String , required: true },
amount: { type: Number, required: false, max: 10000000 },
description: { type:  String , required: true },
frequency: { type: Number, required: false, max: 10000000 },
nextPaymentDate: { type: Date, required: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };