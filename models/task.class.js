class Task {
  id;
  title;
  description;
  category;
  dueDate;
  urgency;
  responsible;
  status = 'bl';

  constructor(id, title, description, category, dueDate, urgency, responsible) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.category = category;
    this.urgency = urgency;
    this.responsible = responsible;
  }
}
