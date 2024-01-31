package com.sodejaa.todolist.controller;

import com.sodejaa.todolist.model.Note;
import com.sodejaa.todolist.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/note")
@CrossOrigin // CORS
public class NoteController {
    @Autowired
    private NoteService noteService;

    @PostMapping("/add")
    public String add(@RequestBody Note note) {
        noteService.saveNote(note);
        return "New note added!";
    }

    @GetMapping("/getAll")
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @DeleteMapping("/{id}")
    public String deleteNoteById(@PathVariable("id") int id) {
        noteService.deleteNote(id);
        return "Note deleted successfully";
    }

    @PutMapping("/{id}")
    public String updateNoteById(@PathVariable("id") int id, @RequestBody Note updatedNote) {
        try {
            noteService.editNote(id, updatedNote);
            return "Note updated successfully";
        } catch (IllegalArgumentException e) {
            return "Note not found";
        }
    }
}
