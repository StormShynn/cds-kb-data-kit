---
name: I_MRPCHANGEREQUESTREASONTXT
description: "Mrpchangerequestreasontxt"
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - interface-view
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# I_MRPCHANGEREQUESTREASONTXT

**Mrpchangerequestreasontxt**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `MRPRequestReason` | ✓ | |  | `reasoncode` |  |  |
| `MRPRequestReasonName` |  | |  | `reasontxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_MRPRequestReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'MRP Change Request Reason - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMRPCRREACOT'
@ObjectModel.representativeKey: 'MRPRequestReason'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT  
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_MRPChangeRequestReasonTxt
  as select from mrp_cr_reason_t
  association        to parent I_MRPChangeRequestReason as _MRPRequestReason on $projection.MRPRequestReason = _MRPRequestReason.MRPRequestReason
  association [0..1] to I_Language                       as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras         as Language,
      @ObjectModel.foreignKey.association: '_MRPRequestReason'
      @ObjectModel.text.element: ['MRPRequestReasonName']
  key reasoncode as MRPRequestReason,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      reasontxt  as MRPRequestReasonName,
      _MRPRequestReason,
      _Language
}
```
