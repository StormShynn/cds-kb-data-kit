---
name: ZLH_R_SKILL.DDLS
description: Skills
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_r_skill.ddls.asddls
semantic_en: Skills — CDS view based on zlh_i_skill.
semantic_vi: Skills — CDS view dựa trên zlh_i_skill.
keywords:
  - skills
  - skill
  - name
  - description
  - category
  - created
---
# ZLH_R_SKILL.DDLS

**Skills**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_r_skill.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SkillId` | ✓ | |  |  |  |  |
| `Name` |  | |  |  |  |  |
| `Description` |  | |  |  |  |  |
| `Category` |  | |  |  |  |  |
| `CreatedBy` |  | |  |  |  |  |
| `CretedAt` |  | |  |  |  |  |
| `LastChangedBy` |  | |  |  |  |  |
| `LastChangedAt` |  | |  |  |  |  |
| `_category` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_category` | `zlh_i_skill_category` | [1..1] |

## Source Code

*Source: [https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_r_skill.ddls.asddls](https://github.com/JuliaBerteneva/LearningHubRAP/blob/f1342bbfe3bb483f43c5bb8d08b65d62aefa7b66/src/zlh_r_skill.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Skills'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define root view entity zlh_r_skill
  as select from zlh_i_skill
  association [1..1] to zlh_i_skill_category as _category on  $projection.Category = _category.CategoryId
{
  key SkillId,
      Name,
      Description,
      @Consumption.valueHelpDefinition: [{entity: {name: 'ZLH_I_Moderator_info', element: 'UserId' }, useForValidation: true }]
      @ObjectModel.text.association: '_category'
      Category,
      @EndUserText.label: 'Created By'
      @Semantics.user.createdBy: true
      CreatedBy,
      @EndUserText.label: 'Created At'
      @Semantics.systemDateTime.createdAt: true
      CretedAt,
      @EndUserText.label: 'Cchanged By'
      @Semantics.user.createdBy: true
      LastChangedBy,
      @EndUserText.label: 'Changed At'
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangedAt,
      _category
}
```
