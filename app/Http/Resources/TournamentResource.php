<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TournamentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = parent::toArray($request);
        $data['divisions'] = $this->divisions;
        $data['tiebreaking'] = $this->tiebreaking;
        $data['format'] = $this->format;
        $data['course_name_with_club'] = $this->course->club->name . ' - ' . $this->course->name;

        return $data;
    }
}
