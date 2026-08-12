---
name: I_SETTLMTBUSPROCVARTEXT
description: "This CDS view is used to select the settlement business process variant."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVARTEXT')/$value
semantic_en: "This CDS view is used to select the settlement business process variant."
semantic_vi: "Settlmt Business Process Variant - Text — CDS view cơ bản dựa trên R_SettlmtBusProcVarText."
keywords:
  - "settlmt"
  - "business"
  - "process"
  - "variant"
  - "text"
  - "proc"
  - "language"
  - "desc"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTBUSPROCVARTEXT

**This CDS view is used to select the settlement business process variant.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVARTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtBusProcVar` | ✓ | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `SettlmtBusProcVarDesc` |  | |  |  | `CHAR(40)` | Process Category Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVARTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVARTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Business Process Variant - Text'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'SettlmtBusProcVar',
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
@Analytics.technicalName: 'IWLFSMTBUSPRVART'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API 
    }
@Analytics: {
    internalName: #LOCAL
    }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SettlmtBusProcVarText
  as select from R_SettlmtBusProcVarText
  
  association to parent I_SettlmtBusProcVar as _SettlmtBusProcVar on $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar  
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtBusProcVar'
  key SettlmtBusProcVar,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      SettlmtBusProcVarDesc,

      /* Associations */
      _SettlmtBusProcVar,
      _Language
}
```
