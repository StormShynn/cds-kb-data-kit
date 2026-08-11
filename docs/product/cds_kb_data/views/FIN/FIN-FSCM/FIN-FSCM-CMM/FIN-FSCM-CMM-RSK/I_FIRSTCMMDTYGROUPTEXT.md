---
name: I_FIRSTCMMDTYGROUPTEXT
description: "First Cust Specific Cmdty GrpName - Text"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUPTEXT')/$value
semantic_en: "First Cust Specific Cmdty GrpName - Text"
semantic_vi: "First Cust Specific Cmdty GrpName - Text — CDS view giao diện dựa trên trcoc_cty_grp1_t."
keywords:
  - "first"
  - "cust"
  - "specific"
  - "cmdty"
  - "grpname"
  - "text"
  - "cmmdty"
  - "group"
  - "language"
  - "spcfc"
  - "name"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_FIRSTCMMDTYGROUPTEXT

**First Cust Specific Cmdty GrpName - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FirstCustSpecificCmmdtyGroup` | ✓ | |  | `group_id` | `CHAR(3)` | Commodity Group1 |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `FirstCustSpcfcCmmdtyGrpName` |  | |  | `group_id_text` | `CHAR(30)` | Commodity Group Text |
| `_Language` | | ✓ | | | | |
| `_FirstGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FirstGroup` | `I_FirstCmmdtyGroup` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUPTEXT')/$value)*

```abap
@EndUserText.label: 'First Cust Specific Cmdty GrpName - Text'
//@Analytics.dataCategory: #DIMENSION
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IFIRSTCMMDTYGRPT'
@ObjectModel.representativeKey: 'FirstCustSpecificCmmdtyGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
//@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.supportedCapabilities:  [ #SQL_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_FirstCmmdtyGroupText
  as select from trcoc_cty_grp1_t

  association [0..1] to I_Language         as _Language   on $projection.Language = _Language.Language
  association [1..1] to I_FirstCmmdtyGroup as _FirstGroup on $projection.FirstCustSpecificCmmdtyGroup = _FirstGroup.FirstCustSpecificCmmdtyGroup

{

  key group_id      as FirstCustSpecificCmmdtyGroup,
      @Semantics.language: true
  key language      as Language,
      @Semantics.text: true
      group_id_text as FirstCustSpcfcCmmdtyGrpName,
      _Language,
      _FirstGroup

}
```
