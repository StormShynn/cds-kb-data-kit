---
name: I_TRDGCONTRTYPEVH
description: "Trading Contract Type"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPEVH')/$value
semantic_en: "Trading Contract Type"
semantic_vi: "Trading Contract Type — CDS view tổng hợp dựa trên I_TrdgContrType."
keywords:
  - "trading"
  - "contract"
  - "type"
  - "trdg"
  - "contr"
  - "ctrl"
  - "purg"
  - "name"
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
# I_TRDGCONTRTYPEVH

**Trading Contract Type**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContractType` | ✓ | |  |  | `CHAR(4)` | Reference Document Type |
| `TrdgContrCtrlGrpPurg` |  | |  |  | `CHAR(4)` | Control Group Purchasing for Trading Contracts |
| `TrdgContrCtrlGrpSls` |  | |  |  | `CHAR(4)` | Control Group Sales for Trading Contracts |
| `TrdgContrTypeName` |  | |  | `_Text[1: Language = $session.system_language].TrdgContrTypeName` | `CHAR(40)` | Trading Contract Type Description |
| `TrdgContrSglOrganizationalData` |  | |  |  | `CHAR(1)` | Control of Organizational Data Entry |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRTYPEVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ITRDGCONTRTYPEVH'
@AbapCatalog.compiler.compareFilter:true 
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Trading Contract Type'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TradingContractType',
  dataCategory: #VALUE_HELP,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #L
  },
  resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations: true
define view I_TrdgContrTypeVH
  as select from I_TrdgContrType
{
  key TradingContractType,
      @UI.hidden: true
      TrdgContrCtrlGrpPurg,
      @UI.hidden: true
      TrdgContrCtrlGrpSls,
      _Text[1: Language = $session.system_language].TrdgContrTypeName as TrdgContrTypeName,
       @UI.hidden: true
      TrdgContrSglOrganizationalData,

      /* Associations */
      _Text
}
```
