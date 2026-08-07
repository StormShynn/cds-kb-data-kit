---
name: I_RO_BUSINESSPARTNERTAXTYPE
description: RO Business PartnerTAXTYPE
app_component: FI-LOC-FI-RO
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialAccountType` | ✓ | |  | `bptype` |
| `BusinessPartner` | ✓ | |  | `bpnum` |
| `ValidFrom` | ✓ | |  | `valid_fr` |
| `ValidTo` | ✓ | |  | `valid_to` |
| `BusinessPartnerIsSAFTRelevant` | ✓ | |  | `saft` |
| `VATRegistration` |  | |  | `stceg` |
| `TaxType` |  | |  | `taxtype` |

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
