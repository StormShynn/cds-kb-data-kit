---
name: I_SRVCMGMTPARTNERFUNCTIONTEXT
description: "Partner Function - Text"
app_component: CRM-BF-PD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTIONTEXT')/$value
semantic_en: "Partner Function - Text"
semantic_vi: "Partner Function - Text — CDS view cơ bản dựa trên crmc_partner_ft."
keywords:
  - "partner"
  - "function"
  - "text"
  - "cust"
  - "mgmt"
  - "language"
  - "srvc"
tags:
  - CRM
  - component:CRM-BF-PD-2CL
  - CRM-BF
  - CRM-BF-PD
  - CRM-BF-PD-2CL
  - interface-view
---
# I_SRVCMGMTPARTNERFUNCTIONTEXT

**Partner Function - Text**

| Property | Value |
|---|---|
| App Component | `CRM-BF-PD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtPartnerFunction` | ✓ | |  | `partner_fct` | `CHAR(8)` | Partner Function |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SrvcMgmtPartnerFunctionText` |  | |  | `description` | `CHAR(30)` | Partner Function Description |
| `_PartnerFunction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PartnerFunction` | `I_SrvcMgmtPartnerFunction` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCMGMTPARTNERFUNCTIONTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM:{
  viewType: #BASIC
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'CustMgmtPartnerFunction'
@EndUserText.label: 'Partner Function - Text'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_SrvcMgmtPartnerFunctionText as select from crmc_partner_ft 
  association [1..1] to I_SrvcMgmtPartnerFunction as _PartnerFunction on $projection.CustMgmtPartnerFunction = _PartnerFunction.CustMgmtPartnerFunction
  association [0..1] to I_Language                as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key partner_fct      as CustMgmtPartnerFunction,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras            as Language,

      @Semantics.text: true
      description      as SrvcMgmtPartnerFunctionText, 
      
  _PartnerFunction,
  _Language 
}
```
