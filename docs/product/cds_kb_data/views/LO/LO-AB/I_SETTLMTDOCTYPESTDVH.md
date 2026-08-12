---
name: I_SETTLMTDOCTYPESTDVH
description: "This CDS view exposes the values for the Settlement Document Type."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPESTDVH')/$value
semantic_en: "This CDS view exposes the values for the Settlement Document Type."
semantic_vi: "Settlement Document Type — CDS view tổng hợp dựa trên I_SettlmtDocType."
keywords:
  - "settlement"
  - "document"
  - "type"
  - "settlmt"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCTYPESTDVH

**This CDS view exposes the values for the Settlement Document Type.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocType` | ✓ | |  |  | `CHAR(4)` | Settlement Document Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPESTDVH')/$value)*

```abap
@EndUserText.label: 'Settlement Document Type'
@VDM: { 
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_Text' ],
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'SettlmtDocType',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@Search.searchable: true
@Consumption.ranked: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWLFSMTDCTP_SVH'
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SettlmtDocTypeStdVH
  as select from I_SettlmtDocType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI.textArrangement: #TEXT_FIRST
  key SettlmtDocType,
  
      /* Associations */
      _Text
}
```
