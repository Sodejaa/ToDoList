package com.sodejaa.todolist.service;

import com.sodejaa.todolist.model.Note;
import com.sodejaa.todolist.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImplementation implements NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Override
    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @Override
    public Note editNote(int noteId, Note updatedNote) {
        Optional<Note> existingNoteOptional = noteRepository.findById(noteId);

        if (existingNoteOptional.isPresent()) {
            Note existingNote = existingNoteOptional.get();
            // Update the existing note with the new information
            existingNote.setNote(updatedNote.getNote());
            // Save the updated note
            return noteRepository.save(existingNote);
        } else {
            // Handle the case where the note with the given ID is not found
            throw new IllegalArgumentException("Note with ID " + noteId + " not found");
        }
    }

    @Override
    public void deleteNote(int noteId) {
        Optional<Note> noteOptional = noteRepository.findById(noteId);

        if (noteOptional.isPresent()) {
            // Delete the note if it exists
            noteRepository.deleteById(noteId);
        } else {
            // Handle the case where the note with the given ID is not found
            throw new IllegalArgumentException("Note with ID " + noteId + " not found");
        }
    }
}
