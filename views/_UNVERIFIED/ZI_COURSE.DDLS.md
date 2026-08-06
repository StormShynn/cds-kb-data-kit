---
name: ZI_COURSE.DDLS
description: Course View
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZI_COURSE.ddls.asddls
semantic_en: Course View — CDS view based on zcourse_mww25.
semantic_vi: Course View — CDS view dựa trên zcourse_mww25.
keywords:
  - course
  - title
  - level
  - instructor
  - created
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZI_COURSE.DDLS

**Course View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZI_COURSE.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `CourseId` | `course_id` |
| `Title` | `title` |
| `Level` | `level` |
| `Instructor` | `instructor` |
| `CreatedBy` | `created_by` |
| `CreatedAt` | `created_at` |
| `LastChangedBy` | `last_changed_by` |
| `LastChangedAt` | `last_changed_at` |
| `LocalLastChangedAt` | `local_last_changed_at` |

## Source Code

*Source: [https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZI_COURSE.ddls.asddls](https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZI_COURSE.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Course View'
define root view entity ZI_Course_MWW25
  as select from zcourse_mww25
{
  key course_id as CourseId,
      title as Title,
      level as Level,
      instructor as Instructor,
      created_by as CreatedBy,
      created_at as CreatedAt,
      last_changed_by as LastChangedBy,
      last_changed_at as LastChangedAt,
      local_last_changed_at as LocalLastChangedAt
}
```