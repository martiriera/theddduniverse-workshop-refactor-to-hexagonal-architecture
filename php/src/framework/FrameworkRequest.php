<?php
declare(strict_types=1);

namespace Demo\App\framework;

final readonly class FrameworkRequest
{
    public function __construct(private array $data)
    {
    }

    public function data(): array
    {
        return $this->data;
    }
}
