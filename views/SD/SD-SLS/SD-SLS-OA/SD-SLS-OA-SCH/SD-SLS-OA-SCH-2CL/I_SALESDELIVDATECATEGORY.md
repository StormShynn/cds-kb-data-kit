---
name: I_SALESDELIVDATECATEGORY
description: Salesdelivdatecategory
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
# I_SALESDELIVDATECATEGORY

**Salesdelivdatecategory**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesDelivDateCategory` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDelivDateCategoryText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Delivery Date Category'
@VDM.viewType: #BASIC
@AbapCatalog:{
  sqlViewName: 'ISDDELIVDATECAT',
  compiler.compareFilter: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
  representativeKey: 'SalesDelivDateCategory',
  supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION],
  modelingPattern: #ANALYTICAL_DIMENSION,
  usageType:{
    dataClass: #MIXED,
    serviceQuality: #A,
    sizeCategory: #S
    }
}
@Analytics:{ 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL 
}
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'SalesDeliveryDateCategory'
define view I_SalesDelivDateCategory
  as select from dd07l
  association [0..*] to I_SalesDelivDateCategoryText as _Text on $projection.SalesDelivDateCategory = _Text.SalesDelivDateCategory
{
      @ObjectModel.text.association: '_Text'
  key substring(dd07l.domvalue_l, 1, 1) as SalesDelivDateCategory,

      _Text
}
where
  (
    dd07l.domname  = 'PRGRS'
  )
  and(
    dd07l.as4local = 'A'
  )
```
