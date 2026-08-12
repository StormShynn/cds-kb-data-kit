---
name: I_SETTLMTDOCPROCTYPEASSGMT
description: "This CDS view provides information, which Settlement Document Types are assigned to the relevant Settlement Process Types. Which combinations of Settlement Document Types and Settlement Process Types are allowed?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPROCTYPEASSGMT')/$value
semantic_en: "This CDS view provides information, which Settlement Document Types are assigned to the relevant Settlement Process Types. Which combinations of Settlement Document Types and Settlement Process Types are allowed?"
semantic_vi: "Assignment for Settlement Document Type — CDS view cơ bản dựa trên twlf_wrart_lfart."
keywords:
  - "assignment"
  - "for"
  - "settlement"
  - "document"
  - "type"
  - "settlmt"
  - "process"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCPROCTYPEASSGMT

**This CDS view provides information, which Settlement Document Types are assigned to the relevant Settlement Process Types. Which combinations of Settlement Document Types and Settlement Process Types are allowed?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPROCTYPEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtProcessType` | ✓ | |  | `wrart` | `CHAR(4)` | Settlement Process Type |
| `SettlmtDocType` | ✓ | |  | `lfart` | `CHAR(4)` | Settlement Document Type |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPROCTYPEASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPROCTYPEASSGMT')/$value)*

```abap
@VDM: { 
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_SettlmtProcessType' , '_SettlmtDocType' ],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   modelingPattern: #NONE,
   supportedCapabilities : [#CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@Analytics: {
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@Analytics.technicalName: 'IWLFSDOCTYPEASG'
@EndUserText.label: 'Assignment for Settlement Document Type' 
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:false

define view entity I_SettlmtDocProcTypeAssgmt
  as select from twlf_wrart_lfart

  association [0..1] to I_SettlmtProcessType as _SettlmtProcessType on $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType
  association [0..1] to I_SettlmtDocType     as _SettlmtDocType     on $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType

{
      @ObjectModel.foreignKey.association: '_SettlmtProcessType'
  key wrart as SettlmtProcessType,
      @ObjectModel.foreignKey.association: '_SettlmtDocType'
  key lfart as SettlmtDocType,

      //Associations
      _SettlmtProcessType,
      _SettlmtDocType
}
```
