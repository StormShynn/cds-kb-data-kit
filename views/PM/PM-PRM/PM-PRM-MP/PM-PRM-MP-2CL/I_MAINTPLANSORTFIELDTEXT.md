---
name: I_MAINTPLANSORTFIELDTEXT
description: Maintplansortfieldtext
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - text-view
  - text
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTPLANSORTFIELDTEXT

**Maintplansortfieldtext**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenancePlanSortField` | ✓ | |  | `plan_sort` |
| `Language` | ✓ | |  | `spras` |
| `MaintenancePlanSortFieldText` |  | |  | `txt` |
| `_Language` | | ✓ | | |
| `_MaintenancePlanSortField` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MaintenancePlanSortField` | `I_MaintenancePlanSortField` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Plan Sort Field - Text'
@Search.searchable: true
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'MaintenancePlanSortField',
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #S,
   usageType.dataClass: #CUSTOMIZING
}
@Analytics.technicalName: 'IMNTPLNSRTFLDTXT'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern:   #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:     [ #LANGUAGE_DEPENDENT_TEXT ]

define view entity I_MaintPlanSortFieldText
  as select from t399g_t
  association [0..1] to I_Language                 as _Language                 on _Language.Language = $projection.Language
  association [0..1] to I_MaintenancePlanSortField as _MaintenancePlanSortField on _MaintenancePlanSortField.MaintenancePlanSortField = $projection.MaintenancePlanSortField
{
      @ObjectModel.foreignKey.association: '_MaintenancePlanSortField'
  key plan_sort as MaintenancePlanSortField,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras     as Language,

      @Semantics.text: true
      @EndUserText.label: 'Sort Field Text'
      @EndUserText.quickInfo: 'Description of Sort field'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      txt       as MaintenancePlanSortFieldText,


      // Association(s)
      _Language,
      _MaintenancePlanSortField
}
```
