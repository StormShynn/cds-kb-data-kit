---
name: I_BASISIDTEXT
description: "Basis ID - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
