<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationGroup = 'General';

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()->schema([
                    Forms\Components\Section::make('General Info')
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->required()
                                ->rules('required|min:3|max:50'),
                            Forms\Components\TextInput::make('surname')
                                ->required()
                                ->rules('required|min:3|max:50'),
                            Forms\Components\Select::make('userInfo.city_id')
                                ->label('City')
                                ->relationship('userInfo.city', 'name')
                                ->required(),
                            Forms\Components\TextInput::make('email')
                                ->required()
                                ->rules('required|email'),
                            Forms\Components\TextInput::make('password')
                                ->rules('required')
                                ->required(),
                            Forms\Components\TextInput::make('userInfo.phone')
                            ->required(),
                            Forms\Components\TextInput::make('gender')
                            ->relationship('userInfo.gender', 'name'),
                            Forms\Components\DatePicker::make('userInfo.birth_date')
                            ->required()

                        ])
                ])->columns(2),

                Forms\Components\Group::make()->schema([
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\TextInput::make('userInfo.study_time')
                            ->required(),
                            Forms\Components\TextInput::make('facebook_url'),
                            Forms\Components\TextInput::make('instagram_url'),
                            Forms\Components\TextInput::make('twitter_url'),
                            Forms\Components\TextInput::make('linkedin_url'),
                        ]),
                    Forms\Components\Section::make('User photo')->collapsible()
                        ->schema([
                            Forms\Components\FileUpload::make('userInfo.img_path')
                                ->imageEditor()
                        ])
                ])->columns(2),

                Forms\Components\Group::make()->schema([
                    Forms\Components\Section::make()
                        ->schema([
                            Forms\Components\MarkdownEditor::make('bio')
                        ])
                ])->columnSpan('full'),
            ]);

    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label('ID'),
                Tables\Columns\ImageColumn::make('img_path')
                    ->toggleable(),
                TextColumn::make('name')->label('name'),
                TextColumn::make('surname')->label('Surname')
                    ->toggleable()
                ->searchable(),
                TextColumn::make('email')->label('email')
                    ->toggleable()
                ->searchable(),
                TextColumn::make('last_login_at')->label('last_login_at')
                    ->label('Last login')
                    ->toggleable(),
                TextColumn::make('created_at')->label('Created At')
                    ->toggleable(),
                TextColumn::make('role.name')->label('Role')->toggleable()
                ->searchable(),
                TextColumn::make('userInfo.phone')->label('Phone')->toggleable()
                ->searchable(),
                TextColumn::make('userInfo.gender')->label('Gender')->toggleable()
                ->searchable(),
                TextColumn::make('userInfo.study_time')->label('Study Time')
                    ->toggleable(),
                TextColumn::make('userInfo.city.name')->label('City')
                    ->toggleable()
                ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
//                Tables\Actions\ViewAction::make(),
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
            //
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
//            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
