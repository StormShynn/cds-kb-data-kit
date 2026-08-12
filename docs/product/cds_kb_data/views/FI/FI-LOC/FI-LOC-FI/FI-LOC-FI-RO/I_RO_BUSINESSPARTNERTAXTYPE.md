---
name: I_RO_BUSINESSPARTNERTAXTYPE
description: "RO Business PartnerTAXTYPE"
app_component: FI-LOC-FI-RO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - business-partner
  - tax
  - partner
  - component:FI-LOC-FI-RO
  - lob:Finance
  - bo:BusinessPartner
---
# I_RO_BUSINESSPARTNERTAXTYPE

**RO Business PartnerTAXTYPE**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-RO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialAccountType` | ✓ | |  | `bptype` |  |  |
| `BusinessPartner` | ✓ | |  | `bpnum` |  |  |
| `ValidFrom` | ✓ | |  | `valid_fr` |  |  |
| `ValidTo` | ✓ | |  | `valid_to` |  |  |
| `BusinessPartnerIsSAFTRelevant` | ✓ | |  | `saft` |  |  |
| `VATRegistration` |  | |  | `stceg` |  |  |
| `TaxType` |  | |  | `taxtype` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_INCLUDED
@EndUserText.label: 'RO Business Partner Tax Type'
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true


define view entity I_RO_BusinessPartnerTaxType
  as select from /ceecv/rofi_bpty as bpty                                                   
{
  key bptype as FinancialAccountType,
  key bpnum as BusinessPartner,
  key valid_fr as ValidFrom,
  key valid_to as ValidTo,
  key saft as BusinessPartnerIsSAFTRelevant,
  stceg as VATRegistration,
  taxtype as TaxType
  //comp_re as CompanyRelationship  
  
}
```
