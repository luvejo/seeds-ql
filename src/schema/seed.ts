import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Contact {
  @Field(() => ID)
  fullName: string
}

@ObjectType()
export class Seed {
  @Field(() => ID)
  name: string

  @Field(() => String)
  description: string

  @Field(() => Contact)
  contact: Contact
}
