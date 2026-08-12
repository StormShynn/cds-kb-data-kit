---
name: I_CNSLDTNLEDGERT
description: "Consolidation Ledger - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGERT')/$value
semantic_en: "Consolidation Ledger - Text"
semantic_vi: "Consolidation Ledger - Text — CDS view giao diện dựa trên t881t."
keywords:
  - "consolidation"
  - "ledger"
  - "text"
  - "language"
  - "name"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNLEDGERT

**Consolidation Ledger - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGERT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` | ✓ | |  | `rldnr` | `CHAR(2)` | Ledger |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ConsolidationLedgerName` |  | |  | `name` | `CHAR(30)` | Ledger Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGERT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGERT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCLEDGERT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel:{
  usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #CUSTOMIZING},
  representativeKey: 'ConsolidationLedger',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,                                    
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Ledger - Text'

define view I_CnsldtnLedgerT
  as select from t881t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key rldnr as ConsolidationLedger,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu as Language,

      @Semantics.text
      name  as ConsolidationLedgerName,

      _Language
};
```
