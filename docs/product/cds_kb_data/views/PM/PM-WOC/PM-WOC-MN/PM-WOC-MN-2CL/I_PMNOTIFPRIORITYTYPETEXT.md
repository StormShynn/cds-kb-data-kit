---
name: I_PMNOTIFPRIORITYTYPETEXT
description: "Pmnotifprioritytypetext"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_PMNOTIFPRIORITYTYPETEXT

**Pmnotifprioritytypetext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintPriorityType` | ✓ | |  | `artpr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaintPriorityTypeDesc` |  | |  | `artprx` |  |  |
| `_Language` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Notification PriorityType - Text'
@VDM.viewType:#BASIC
@Analytics: { dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPMPRIOTYPETXT'
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.representativeKey: 'MaintPriorityType'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view entity I_PMNotifPriorityTypeText
  as select from t356a_t
  association [0..1] to I_Language                   as _Language                   on _Language.Language = $projection.Language
  association [0..1] to I_PMNotificationPriorityType as _PMNotificationPriorityType on $projection.MaintPriorityType = _PMNotificationPriorityType.MaintPriorityType
{

  key t356a_t.artpr  as MaintPriorityType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t356a_t.spras  as Language,

      @Semantics.text: true
      @EndUserText.label: 'Priority Type Text'
      t356a_t.artprx as MaintPriorityTypeDesc,

      _Language,
      _PMNotificationPriorityType
}
```
