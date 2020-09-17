import { prop, getModelForClass } from '@typegoose/typegoose';

class Example {
    @prop({ type: [String] })
    array!: string[]
}

const exampleModel = getModelForClass(Example);