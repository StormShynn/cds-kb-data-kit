---
name: ZLH_I_COURSE.DDLS
description: "Course basic data"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_i_course.ddls.asddls
semantic_en: "Course basic data — CDS view based on zlh_course."
semantic_vi: "Course basic data — CDS view dựa trên zlh_course."
keywords:
  - "course"
  - "basic"
  - "data"
  - "name"
  - "type"
  - "skill"
  - "category"
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZLH_I_COURSE.DDLS

**Course basic data**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_i_course.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CourseId` | ✓ | |  | `course_id` |  |  |
| `CourseKey` |  | |  | `course_key` |  |  |
| `Name` |  | |  | `name` |  |  |
| `Type` |  | |  | `type` |  |  |
| `SkillCategory` |  | |  | `skill_category` |  |  |
| `Moderator` |  | |  | `moderator` |  |  |
| `Duration` |  | |  | `duration` |  |  |
| `Released` |  | |  | `released` |  |  |
| `LocalCreatedAt` |  | |  | `local_created_at` |  |  |
| `LocalCreatedBy` |  | |  | `local_created_by` |  |  |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |  |  |
| `LocalLastChangedBy` |  | |  | `local_last_changed_by` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `_moderator` | | ✓ | | | | |
| `_createdBy` | | ✓ | | | | |
| `_changedBy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_moderator` | `ZLH_I_Moderator_info` | [1..1] |
| `_createdBy` | `ZLH_I_Moderator_info` | [1..1] |
| `_changedBy` | `ZLH_I_Moderator_info` | [1..1] |

## Source Code

*Source: [https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_i_course.ddls.asddls](https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_i_course.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZLHICOURSE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Course basic data'
@Metadata.ignorePropagatedAnnotations: true
define view zlh_i_course as select from zlh_course
association [1..1] to ZLH_I_Moderator_info as _moderator on _moderator.UserId = $projection.Moderator
association [1..1] to ZLH_I_Moderator_info as _createdBy on _createdBy.UserId = $projection.LocalCreatedBy
association [1..1] to ZLH_I_Moderator_info as _changedBy on _changedBy .UserId = $projection.LocalLastChangedBy
{
    key course_id as CourseId,
    course_key as CourseKey,
    name as Name,
    type as Type,
    skill_category as SkillCategory,
    @EndUserText.label: 'Moderator'
    moderator as Moderator,
    duration as Duration,
    released as Released,
    @EndUserText.label: 'Created At'
    local_created_at as LocalCreatedAt,
    @EndUserText.label: 'Created By'
    local_created_by as LocalCreatedBy,
    @EndUserText.label: 'Changed At'
    local_last_changed_at as LocalLastChangedAt,
    @EndUserText.label: 'Changed By'
    local_last_changed_by as LocalLastChangedBy,
    @EndUserText.label: 'Changed At'
    last_changed_at as LastChangedAt,
    _moderator,
    _createdBy,
    _changedBy 
}
```
