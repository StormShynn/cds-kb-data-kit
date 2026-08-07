---
name: I_KNBNCALCNEWCTNNMBRASSGMT
description: Knbncalcnewctnnmbrassgmt
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNCALCNEWCTNNMBRASSGMT

**Knbncalcnewctnnmbrassgmt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KnbnCalcNewCtnNmbrAssgmt` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as nknum)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KnbnCalcNewCtnNmbrAssgmtTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCLCNMBRASSG'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation Number Assignment'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KnbnCalcNewCtnNmbrAssgmt'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'KnbnCalcNewCtnNmbrAssgmt'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KnbnCalcNewCtnNmbrAssgmt
  as select from dd07l

  association [0..*] to I_KnbnCalcNewCtnNmbrAssgmtTxt as _Text on $projection.KnbnCalcNewCtnNmbrAssgmt = _Text.KnbnCalcNewCtnNmbrAssgmt

{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as nknum)  as KnbnCalcNewCtnNmbrAssgmt,
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      _Text
}
where
      domname  = 'NKNUM'
  and as4local = 'A'
```
