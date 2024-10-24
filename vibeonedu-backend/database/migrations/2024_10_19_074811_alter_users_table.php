<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
        // Add a foreign key referencing the roles table
            $table->foreignId('role_id')->default(1)->constrained()->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
// First drop the foreign key constraint before removing the column
            $table->dropForeign(['role_id']);
            $table->dropColumn('role_id');
        });
    }
};
