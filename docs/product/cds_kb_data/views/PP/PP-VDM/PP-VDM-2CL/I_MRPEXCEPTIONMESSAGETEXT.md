---
name: I_MRPEXCEPTIONMESSAGETEXT
description: "Mrpexceptionmessagetext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPEXCEPTIONMESSAGETEXT

**Mrpexceptionmessagetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(spras as spras preserving type)` |  |  |
| `MRPExceptionMessage` | ✓ | |  | `cast(aussl as vdm_aussl preserving type)` |  |  |
| `MRPExceptionMessageName` |  | |  | `cast(auslt as vdm_auslt preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_MRPExceptionMessage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IMRPEXCPTNMTEXT'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPExceptionMessage'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Exception Message - Text'

define view entity I_MRPExceptionMessageText as select from t458b
  association to parent I_MRPExceptionMessage as _MRPExceptionMessage on $projection.MRPExceptionMessage = _MRPExceptionMessage.MRPExceptionMessage
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(spras as spras preserving type)     as Language,
      @ObjectModel.foreignKey.association: '_MRPExceptionMessage'  
      @ObjectModel.text.element: ['MRPExceptionMessageName']
  key cast(aussl as vdm_aussl preserving type) as MRPExceptionMessage,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(auslt as vdm_auslt preserving type) as MRPExceptionMessageName,
  
      // Associations
      _MRPExceptionMessage,
      _Language
};
```
