---
name: I_MTMCALCULATIONGROUPT
description: "Mark To Market Calculation Group Name - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUPT')/$value
semantic_en: "Mark To Market Calculation Group Name - Text"
semantic_vi: "MtM Calculation Group Name - Text — CDS view giao diện dựa trên cmm_mtm_cgrouptt."
keywords:
  - "mtm"
  - "calculation"
  - "group"
  - "name"
  - "text"
  - "language"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MTMCALCULATIONGROUPT

**Mark To Market Calculation Group Name - Text**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUPT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMCalculationGroup` | ✓ | |  | `cgroup` | `CHAR(1)` | MtM Condition Group |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MTMCalculationGroupName` |  | |  | `description` | `CHAR(20)` | Condition Group - Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUPT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUPT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMCALCGT'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics: { dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MTMCalculationGroup'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'MtM Calculation Group Name - Text'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]

define view I_MtmCalculationGroupT
  as select from cmm_mtm_cgrouptt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cgroup      as MTMCalculationGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,
      _Language,
      @Semantics.text: true
      description as MTMCalculationGroupName
}
```
