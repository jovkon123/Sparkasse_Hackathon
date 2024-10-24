<div class="my-2 text-sm tracking-tight">
    <!--[if BLOCK]><![endif]--><?php $__currentLoopData = $getState(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <span class="inline-block p-1 mr-1 font-medium text-gray-700 whitespace-normal rounded-md dark:text-gray-200 bg-gray-500/10">
            <?php echo e($key); ?>

        </span>

        <!--[if BLOCK]><![endif]--><?php if(is_array($value)): ?>
            <span class="whitespace-normal divide-x divide-gray-200 divide-solid dark:divide-gray-700">
                <!--[if BLOCK]><![endif]--><?php $__currentLoopData = $value; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $nestedKey => $nestedValue): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <span class="inline-block mr-1">
                        <?php echo e($nestedKey); ?>: <?php echo e(is_array($nestedValue) ? json_encode($nestedValue) : $nestedValue); ?>

                    </span>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><!--[if ENDBLOCK]><![endif]-->
            </span>
        <?php else: ?>
            <span class="whitespace-normal"><?php echo e($value); ?></span>
        <?php endif; ?><!--[if ENDBLOCK]><![endif]-->
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><!--[if ENDBLOCK]><![endif]-->
</div>
<?php /**PATH /Users/andrej/Documents/vibeonedu/vibeonedu-backend/vendor/rmsramos/activitylog/src/../resources/views/filament/tables/columns/activity-logs-properties.blade.php ENDPATH**/ ?>