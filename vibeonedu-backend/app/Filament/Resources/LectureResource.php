<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LectureResource\Pages;
use App\Filament\Resources\LectureResource\RelationManagers;
use App\Filament\Resources\LectureResource\RelationManagers\MaterialRelationManager;
use App\Models\Lecture;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class LectureResource extends Resource
{
    protected static ?string $model = Lecture::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Education';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()->schema([
                    TextInput::make('name')
                        ->label('Name')
                        ->required(),
                    Forms\Components\MarkdownEditor::make('description')
                        ->required(),
                    TextInput::make('duration')
                        ->label('Duration (mins)')
                        ->required()
                        ->numeric(),
                    FileUpload::make('audio_path')
                        ->required(),
                    Select::make('course_id')
                        ->relationship('course', 'name')
                        ->required()
                        ->searchable()
                        ->preload(),
                ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label('ID'),
                TextColumn::make('name')->label('Name')
                    ->searchable(),
                TextColumn::make('course.name')->label('Course'),
                TextColumn::make('description')->label('Description')
                    ->toggleable()
                    ->searchable(),
                TextColumn::make('duration')->label('Duration'),
                TextColumn::make('audio_path')->label('Audio Path')
                    ->toggleable(),
                TextColumn::make('created_at')->label('Created At')
                    ->toggleable(),
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                ]),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            MaterialRelationManager::class,
        ];
    }


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLectures::route('/'),
            'create' => Pages\CreateLecture::route('/create'),
            'edit' => Pages\EditLecture::route('/{record}/edit'),
        ];
    }
}
