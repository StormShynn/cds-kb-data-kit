---
name: ZC_COURSE.DDLS
description: Course Consumption View
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZC_COURSE.ddls.asddls
semantic_en: Course Consumption View — CDS view.
semantic_vi: Course Consumption View — CDS view dựa trên Course Consumption View.
keywords:
  - course
  - consumption
  - title
  - level
  - instructor
  - created
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZC_COURSE.DDLS

**Course Consumption View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZC_COURSE.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CourseId` | ✓ | |  |  |
| `Title` |  | |  |  |
| `Level` |  | |  |  |
| `Instructor` |  | |  |  |
| `CreatedBy` |  | |  |  |
| `CreatedAt` |  | |  |  |
| `LastChangedBy` |  | |  |  |
| `LastChangedAt` |  | |  |  |
| `LocalLastChangedAt` |  | |  |  |

## Source Code

*Source: [https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZC_COURSE.ddls.asddls](https://github.com/mwwhitted/rap-training-tracker/blob/097d75f82850eb7f350c196a89615d4d65f6d2cb/src/ZC_COURSE.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Course Consumption View'
@Metadata.ignorePropagatedAnnotations: true
define root view entity ZC_Course_MWW25 
  as projection on ZI_Course_MWW25
{
  @ObjectModel.text.element: ['Title']
  key CourseId,
  
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.7
  Title,
  
  @Consumption.valueHelpDefinition: [{entity: {name: 'ZI_CourseLevelVH_MWW25', element: 'Level' }}]
  Level,
  
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.7
  Instructor,
  
  CreatedBy,
  CreatedAt,
  LastChangedBy,
  LastChangedAt,
  LocalLastChangedAt
}
```
