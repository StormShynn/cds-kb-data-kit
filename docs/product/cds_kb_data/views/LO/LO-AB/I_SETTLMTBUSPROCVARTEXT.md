---
name: I_SETTLMTBUSPROCVARTEXT
description: "This CDS view is used to select the settlement business process variant."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
