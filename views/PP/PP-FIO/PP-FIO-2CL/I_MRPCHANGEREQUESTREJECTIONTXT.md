---
name: I_MRPCHANGEREQUESTREJECTIONTXT
description: Mrpchangerequestrejectiontxt
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - interface-view
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# I_MRPCHANGEREQUESTREJECTIONTXT

**Mrpchangerequestrejectiontxt**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `MRPRequestRejection` | `rejectioncode` |
| `MRPRequestRejectionName` | `rejectiontxt` |
| `_Language` | *Association* |
| `_MRPRequestRejection` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'MRP Change Request Rejection - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMRPCRREJCOT'
@ObjectModel.representativeKey: 'MRPRequestRejection'
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
define view entity I_MRPChangeRequestRejectionTxt
  as select from mrp_cr_reject_t
  association        to parent I_MRPChangeRequestRejection as _MRPRequestRejection on $projection.MRPRequestRejection = _MRPRequestRejection.MRPRequestRejection
  association [0..1] to I_Language                       as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras         as Language,
      @ObjectModel.foreignKey.association: '_MRPRequestRejection'
      @ObjectModel.text.element: ['MRPRequestRejectionName']
  key rejectioncode as MRPRequestRejection,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      rejectiontxt  as MRPRequestRejectionName,
      _MRPRequestRejection,
      _Language
}
```
