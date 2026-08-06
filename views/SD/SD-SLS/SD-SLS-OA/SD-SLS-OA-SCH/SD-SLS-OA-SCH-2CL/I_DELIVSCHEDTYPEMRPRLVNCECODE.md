---
name: I_DELIVSCHEDTYPEMRPRLVNCECODE
description: Delivschedtypemrprlvncecode
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_DELIVSCHEDTYPEMRPRLVNCECODE

**Delivschedtypemrprlvncecode**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DelivSchedTypeMRPRlvnceCode` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DelivSchedTypeMRPRlvnceCodeT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'MRP Relevance Code for Deliv Sched Types'
@AbapCatalog.sqlViewName: 'IMRPRLVNCECODE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
  representativeKey: 'DelivSchedTypeMRPRlvnceCode',
  sapObjectNodeType.name: 'SlsDelivSchedMRPRlvnceCode',
  usageType:{
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A 
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
 }
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Metadata.ignorePropagatedAnnotations:true
define view I_DelivSchedTypeMRPRlvnceCode
  as select from dd07l
  association [0..*] to I_DelivSchedTypeMRPRlvnceCodeT as _Text on $projection.DelivSchedTypeMRPRlvnceCode = _Text.DelivSchedTypeMRPRlvnceCode
{
      @ObjectModel.text.association: '_Text'
  key substring(dd07l.domvalue_l, 1, 1) as DelivSchedTypeMRPRlvnceCode,

      //Association
      _Text
}
where
  (
    dd07l.domname  = 'ABRAB'
  )
  and(
    dd07l.as4local = 'A'
  )
```
