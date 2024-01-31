package com.sodejaa.todolist.service;

import com.sodejaa.todolist.model.Note;

import java.util.List;

public interface NoteService {
    public Note saveNote(Note note);

    public List<Note> getAllNotes();

    public Note editNote(int noteId, Note updatedNote);

    public void deleteNote(int noteId);
}
