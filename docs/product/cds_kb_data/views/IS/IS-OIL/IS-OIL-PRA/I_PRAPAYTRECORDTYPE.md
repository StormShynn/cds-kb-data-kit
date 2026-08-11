---
name: I_PRAPAYTRECORDTYPE
description: "PRA Payment Record Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYTRECORDTYPE')/$value
semantic_en: "PRA Payment Record Type"
semantic_vi: "PRA Payment Record Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "payment"
  - "record"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_PRAPAYTRECORDTYPE

**PRA Payment Record Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYTRECORDTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RecordType` | ✓ | |  | `cast ( domvalue_l as /pra/pp_record_type )` | `CHAR(1)` | Payment Processing - Record Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAPaytRecordTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYTRECORDTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYTRECORDTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Payment Record Type'
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVRECDTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RecordType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAPaymentRecordType'
@Search.searchable: false
define view I_PRAPaytRecordType
  as select from dd07l
  association [0..*] to I_PRAPaytRecordTypeText as _Text on $projection.RecordType = _Text.RecordType
{
      @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as /pra/pp_record_type ) as RecordType,
      _Text
}
where
      domname  = '/PRA/PP_RECORD_TYPE'
  and as4local = 'A'
```
