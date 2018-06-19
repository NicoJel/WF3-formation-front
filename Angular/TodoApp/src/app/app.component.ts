import {Component, OnInit} from '@angular/core';
import {Task} from './shared/models/task';
import {TaskStorageService} from './shared/services/task-storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private taskStorageService: TaskStorageService) {

  }
  tasks: Task[] = [];

  ngOnInit(): void{
    /**
     * Au chargement de l'application je récupere mes tâches dans le localstorage.
     */
    this.tasks = this.taskStorageService.getTasks();
  }
  /**
   * Cette fonction se déclenche dans l'application lorsque une nouvelle tache est créée par l'utilisateur dans le composant app-addTask
   * @param $event
   */
  newTask(task: Task) {

    /**
     * On ajoute la nouvelle tache dans le tableau de taches,
     * et p, sauvegarde nos tâches dans le storage.
     */
    this.tasks.push(task);
    this.taskStorageService.save(this.tasks);
  }

  /**
   * L'utilisateur viens de terminer une tâche.
   * @param {Task} task
   */
  taskIsDone(task: Task) {
    /**
     * Je passe la tâche del'utilisateur à true.
     */
    task.status = true;
    this.taskStorageService.save(this.tasks);
  }

  removeTask(task) {
    _.pullAllWith( this.tasks, [task], _.isEqual );
    this.taskStorageService.save(this.tasks);
  }
}
