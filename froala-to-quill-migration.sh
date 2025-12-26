#!/bin/bash

# Migration script: Replace Froala with Quill Editor

echo "🔄 Migrating from Froala to Quill Editor..."

# Files that contain froala usage
FILES=(
    "pages/admin/teams/create.vue"
    "pages/admin/teams/_id.vue" 
    "pages/admin/courses/create.vue"
    "pages/admin/courses/_slug/index.vue"
    "pages/admin/insights/_slug.vue"
    "pages/admin/insights/create.vue"
)

echo "📝 Files to update: ${#FILES[@]}"

# Create backup directory
mkdir -p backups/froala-migration

# Backup original files
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "📋 Backing up $file"
        cp "$file" "backups/froala-migration/$(basename $file).backup"
    fi
done

echo "✅ Backup completed!"
echo "📚 Manual replacement guide:"
echo ""
echo "In each file, replace:"
echo "1. <froala> tags with <quill-editor>"
echo "2. froalaConfig with quillConfig" 
echo "3. Add Quill editor event handlers"
echo ""
echo "Example transformation:"
echo "FROM: <froala id=\"content\" :tag=\"'textarea'\" :config=\"froalaConfig\" v-model=\"form.content\"></froala>"
echo "TO:   <quill-editor id=\"content\" v-model=\"form.content\" :options=\"quillConfig\"></quill-editor>"
echo ""
echo "📦 Next steps:"
echo "1. Remove froala dependencies: npm uninstall vue-froala-wysiwyg froala-editor"
echo "2. Install quill: npm install vue-quill-editor quill"
echo "3. Update each Vue file manually or run the automated replacements"
