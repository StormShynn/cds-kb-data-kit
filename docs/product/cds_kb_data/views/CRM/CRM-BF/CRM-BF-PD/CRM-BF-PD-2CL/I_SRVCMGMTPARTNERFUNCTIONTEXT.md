---
name: I_SRVCMGMTPARTNERFUNCTIONTEXT
description: "Partner Function - Text"
app_component: CRM-BF-PD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
