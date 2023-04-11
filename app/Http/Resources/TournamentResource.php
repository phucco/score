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
        $data['course'] = new CourseResource($this->course);
        $data['format'] = new FormatResource($this->format);
        $data['tiebreaking'] = new TiebreakingResource($this->tiebreaking);
        $data['groups'] = $this->groups;
        $data['course_name_with_club'] = $this->course->club->name . ' - ' . $this->course->name;

        return $data;
    }
}
