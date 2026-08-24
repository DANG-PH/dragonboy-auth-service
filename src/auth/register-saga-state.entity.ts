import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum RegisterSagaPhase {
  STARTED = 'STARTED',
  COMPENSATING = 'COMPENSATING',
  DONE = 'DONE',
  FAILED = 'FAILED',
}

@Entity('register_saga_state')
export class RegisterSagaState {
  @PrimaryColumn('uuid')
  saga_id: string;

  @Column({ type: 'enum', enum: RegisterSagaPhase, default: RegisterSagaPhase.STARTED })
  phase: RegisterSagaPhase;

  @Column('json', { default: [] })
  completed_steps: string[]; // ['createAuth', 'createUser']

  @Column({ nullable: true })
  auth_id: number;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}