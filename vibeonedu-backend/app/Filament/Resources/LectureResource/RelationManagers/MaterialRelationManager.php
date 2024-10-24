<?php

namespace App\Filament\Resources\LectureResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class MaterialRelationManager extends RelationManager
{

    protected static string $relationship = 'materials';

    protected static ?string $recordTitleAttribute = 'type';


    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()->schema([
                    TextInput::make('type')
                        ->label('Type')
                        ->required(),
                    Forms\Components\MarkdownEditor::make('content')
                        ->required(),
//                    Select::make('lecture_id')
//                        ->relationship('lecture', 'name')
//                        ->required()
//                        ->searchable()
//                        ->preload(),
                ])
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('type')
            ->columns([
                Tables\Columns\TextColumn::make('type')->label('Material Type'),
            ])
            ->filters([
//
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
