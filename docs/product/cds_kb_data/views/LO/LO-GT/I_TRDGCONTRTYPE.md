---
name: I_TRDGCONTRTYPE
description: "Trading Contract Type"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPE')/$value
semantic_en: "Trading Contract Type"
semantic_vi: "Trading Contract Type — CDS view tổng hợp dựa trên R_TrdgContrType."
keywords:
  - "trading"
  - "contract"
  - "type"
  - "trdg"
  - "contr"
  - "ctrl"
  - "purg"
  - "organizational"
  - "data"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGCONTRTYPE

**Trading Contract Type**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContractType` | ✓ | |  |  | `CHAR(4)` | Reference Document Type |
| `TrdgContrCtrlGrpPurg` |  | |  |  | `CHAR(4)` | Control Group Purchasing for Trading Contracts |
| `TrdgContrCtrlGrpSls` |  | |  |  | `CHAR(4)` | Control Group Sales for Trading Contracts |
| `TrdgContrSglOrganizationalData` |  | |  |  | `CHAR(1)` | Control of Organizational Data Entry |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Trading Contract Type'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TradingContractType',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #L
  },
  dataCategory: #VALUE_HELP
  
}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_TrdgContrType
  as select from R_TrdgContrType
  
  composition [0..*] of I_TrdgContrTypeText as _Text
  
{
  @ObjectModel.text.association: '_Text' 
  key TradingContractType,
      TrdgContrCtrlGrpPurg,
      TrdgContrCtrlGrpSls,
      TrdgContrSglOrganizationalData,

      /* Associations */
      _Text
 
}
```
