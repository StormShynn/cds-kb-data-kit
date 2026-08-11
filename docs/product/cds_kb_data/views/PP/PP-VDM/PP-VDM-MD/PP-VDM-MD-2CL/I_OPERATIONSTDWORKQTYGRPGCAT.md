---
name: I_OPERATIONSTDWORKQTYGRPGCAT
description: "Operation Grouping Category"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONSTDWORKQTYGRPGCAT')/$value
semantic_en: "Operation Grouping Category"
semantic_vi: "Operation Grouping Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "operation"
  - "grouping"
  - "category"
  - "work"
  - "grpg"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_OPERATIONSTDWORKQTYGRPGCAT

**Operation Grouping Category**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONSTDWORKQTYGRPGCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationStdWorkQtyGrpgCat` | ✓ | |  | `substring(l.domvalue_l, 1, 1)` | `CHAR(1)` |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OpStdWorkQtyGrpgCatText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONSTDWORKQTYGRPGCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONSTDWORKQTYGRPGCAT')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IPPOPSWQGRPGCAT'
--@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL}
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
//@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationStdWorkQtyGrpgCat'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Operation Grouping Category'
@ObjectModel.sapObjectNodeType.name: 'BOOOpStdWorkQtyGrpCat'
@Analytics.dataExtraction.enabled: true


/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
//define view I_OperationStdWorkQtyGrpgCat
define view entity I_OperationStdWorkQtyGrpgCat
  as select from dd07l as l
  association [0..*] to I_OpStdWorkQtyGrpgCatText as _Text on $projection.OperationStdWorkQtyGrpgCat = _Text.OperationStdWorkQtyGrpgCat
{
      @ObjectModel.text.association: '_Text'
  key substring(l.domvalue_l, 1, 1) as OperationStdWorkQtyGrpgCat,

      --- associations ---
      _Text
}
where
      l.domname  = 'VERDART'
  and l.as4local = 'A'
  and l.as4vers  = '0000';
```
