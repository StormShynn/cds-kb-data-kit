---
name: I_TRDGCONTRTYPE
description: "Trading Contract Type"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
