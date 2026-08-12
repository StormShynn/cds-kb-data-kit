---
name: I_SETTLMTAPPLSTSGRPTEXT
description: "This CDS view is used to select the settlement application status group."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPTEXT')/$value
semantic_en: "This CDS view is used to select the settlement application status group."
semantic_vi: "Settlmt Appl Status Group Desc - Text — CDS view cơ bản dựa trên R_SettlmtApplStsGrpText."
keywords:
  - "settlmt"
  - "appl"
  - "status"
  - "group"
  - "desc"
  - "text"
  - "language"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTAPPLSTSGRPTEXT

**This CDS view is used to select the settlement application status group.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtApplStsGrp` | ✓ | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `SettlmtApplStsGrpDesc` |  | |  |  | `CHAR(40)` | Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Appl Status Group Desc - Text' 
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'SettlmtApplStsGrp',
    dataCategory: #TEXT,
    modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@Analytics.technicalName: 'IWLFSMTSTGROUPT'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    internalName: #LOCAL
    }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SettlmtApplStsGrpText
  as select from R_SettlmtApplStsGrpText
  
  association to parent I_SettlmtApplStsGrp as _SettlmtApplStsGrp on $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp  
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtApplStsGrp'
  key SettlmtApplStsGrp,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      SettlmtApplStsGrpDesc,

      /* Associations */
      _SettlmtApplStsGrp,
      _Language
}
```
