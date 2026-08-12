---
name: I_CNSLDTNLEDGER
description: "This CDS view provides access to the master data for a consolidation ledger. This CDS view provides the prerequisites for answering the following business questions: What is the description of my consolidation ledges? What is the group currency for a certain consolidation ledger?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGER')/$value
semantic_en: "This CDS view provides access to the master data for a consolidation ledger. This CDS view provides the prerequisites for answering the following business questions: What is the description of my consolidation ledges? What is the group currency for a certain consolidation ledger?"
semantic_vi: "Consolidation Ledger — CDS view giao diện dựa trên t881."
keywords:
  - "consolidation"
  - "ledger"
  - "group"
  - "currency"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - bo:salesorder
---
# I_CNSLDTNLEDGER

**This CDS view provides access to the master data for a consolidation ledger. This CDS view provides the prerequisites for answering the following business questions: What is the description of my consolidation ledges? What is the group currency for a certain consolidation ledger?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` | ✓ | |  | `rldnr` | `CHAR(2)` | Ledger |
| `GroupCurrency` |  | |  | `cast (gcurr as rtc_curr )` | `CUKY(5)` | Group Currency |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnLedgerT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNLEDGER')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCLEDGER',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL }
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationLedger',
  modelingPattern: #ANALYTICAL_DIMENSION,                                    
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ]
  }
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Ledger'

define view I_CnsldtnLedger
  as select from t881

  association [0..*] to I_CnsldtnLedgerT as _Text on $projection.ConsolidationLedger = _Text.ConsolidationLedger
{
      @ObjectModel.text.association: '_Text'
  key rldnr                     as ConsolidationLedger,
      cast (gcurr as rtc_curr ) as GroupCurrency,

      _Text
}
where
      appl    = 'EC'
  and subappl = 'CS';
```
