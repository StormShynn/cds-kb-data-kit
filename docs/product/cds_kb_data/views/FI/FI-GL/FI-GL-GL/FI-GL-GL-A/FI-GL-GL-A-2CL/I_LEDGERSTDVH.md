---
name: I_LEDGERSTDVH
description: "Ledger"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERSTDVH')/$value
semantic_en: "Ledger"
semantic_vi: "Ledger — CDS view giao diện dựa trên I_Ledger."
keywords:
  - "ledger"
  - "leading"
tags:
  - FI
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
---
# I_LEDGERSTDVH

**Ledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `IsLeadingLedger` |  | |  |  | `CHAR(1)` | Indicator: Leading Ledger |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerText` | `I_LedgerText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERSTDVH')/$value)*

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIL__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'Ledger'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER]
@EndUserText.label: 'Ledger'
define view I_LedgerStdVH
  as select from I_Ledger
  association [0..*] to I_LedgerText as _LedgerText on $projection.Ledger = _LedgerText.Ledger
{
      @ObjectModel.text.element: ['LedgerName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key Ledger,

      IsLeadingLedger,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      _LedgerText[1:Language=$session.system_language].LedgerName,

      _Text
}
```
