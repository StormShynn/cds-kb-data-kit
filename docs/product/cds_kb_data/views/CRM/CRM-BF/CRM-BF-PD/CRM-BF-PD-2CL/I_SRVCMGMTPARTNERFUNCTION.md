---
name: I_SRVCMGMTPARTNERFUNCTION
description: "Partner Functions"
app_component: CRM-BF-PD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTION')/$value
semantic_en: "Partner Functions"
semantic_vi: "Partner Functions — CDS view cơ bản dựa trên crmc_partner_fct."
keywords:
  - "partner"
  - "functions"
  - "cust"
  - "mgmt"
  - "function"
  - "srvc"
  - "prtn"
  - "func"
  - "application"
tags:
  - CRM
  - component:CRM-BF-PD-2CL
  - CRM-BF
  - CRM-BF-PD
  - CRM-BF-PD-2CL
  - interface-view
---
# I_SRVCMGMTPARTNERFUNCTION

**Partner Functions**

| Property | Value |
|---|---|
| App Component | `CRM-BF-PD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtPartnerFunction` | ✓ | |  | `partner_fct` | `CHAR(8)` | Partner Function |
| `SrvcMgmtPrtnFuncApplication` |  | |  | `pft_subtype` | `CHAR(4)` | Partner Function Sub-Type |
| `_PartnerFunctionText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PartnerFunctionText` | `I_SrvcMgmtPartnerFunctionText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTION')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Partner Functions'
@VDM: {
  viewType: #BASIC
}
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'CustMgmtPartnerFunction'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true

@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcMgmtPartnerFunction as select from crmc_partner_fct
  association [1..*] to I_SrvcMgmtPartnerFunctionText as _PartnerFunctionText on $projection.CustMgmtPartnerFunction = _PartnerFunctionText.CustMgmtPartnerFunction
{
   @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  @ObjectModel.text.association: '_PartnerFunctionText'
  key partner_fct as CustMgmtPartnerFunction,
      pft_subtype as SrvcMgmtPrtnFuncApplication,
      
  _PartnerFunctionText
      
}
```
