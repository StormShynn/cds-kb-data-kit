---
name: I_SETTLMTBUSPROCVAR
description: "This CDS view is used to select the settlement business process variant."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVAR')/$value
semantic_en: "This CDS view is used to select the settlement business process variant."
semantic_vi: "Settlement Business Process Variant — CDS view cơ bản dựa trên R_SettlmtBusProcVar."
keywords:
  - "settlement"
  - "business"
  - "process"
  - "variant"
  - "settlmt"
  - "proc"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTBUSPROCVAR

**This CDS view is used to select the settlement business process variant.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtBusProcVar` | ✓ | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVAR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBUSPROCVAR')/$value)*

```abap
@EndUserText.label: 'Settlement Business Process Variant'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'SettlmtBusProcVar',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      },
    dataCategory: #VALUE_HELP
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFSMTBUSPRVAR'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define root view entity I_SettlmtBusProcVar
  as select from R_SettlmtBusProcVar

  composition [0..*] of I_SettlmtBusProcVarText as _Text

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key SettlmtBusProcVar,

      /* Associations */
      _Text
}
```
