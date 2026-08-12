---
name: I_BASISIDTEXT
description: "Basis ID - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISIDTEXT')/$value
semantic_en: "Basis ID - Text"
semantic_vi: "Basis ID - Text — CDS view giao diện dựa trên tbacc_bas_id_t."
keywords:
  - "basis"
  - "text"
  - "language"
  - "name"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_BASISIDTEXT

**Basis ID - Text**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISIDTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BasisID` | ✓ | |  | `basis_id` | `CHAR(18)` | Basis ID |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `BasisIDName` |  | |  | `text` | `CHAR(40)` | Basis ID Description |
| `_Language` | | ✓ | | | | |
| `_BasisID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BasisID` | `I_BasisID` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISIDTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BASISIDTEXT')/$value)*

```abap
@EndUserText.label: 'Basis ID - Text'
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IBASISIDT'
@ObjectModel.representativeKey: 'BasisID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_BasisIDText
   as select from tbacc_bas_id_t

   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_BasisID as _BasisID
       on $projection.BasisID = _BasisID.BasisID

{

   key basis_id as BasisID,
   @Semantics.language: true
   key langu as Language,
   @Semantics.text: true
   text as BasisIDName,
   _BasisID,
   _Language
  
}
```
