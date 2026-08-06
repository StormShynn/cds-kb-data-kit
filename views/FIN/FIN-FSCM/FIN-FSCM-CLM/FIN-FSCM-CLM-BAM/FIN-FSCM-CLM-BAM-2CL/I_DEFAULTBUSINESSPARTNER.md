---
name: I_DEFAULTBUSINESSPARTNER
description: DEFAULTBusiness Partner
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - business-partner
  - partner
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:BusinessPartner
---
# I_DEFAULTBUSINESSPARTNER

**DEFAULTBusiness Partner**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BankCountry` | `DefaultableBp.banks` |
| key `BankInternalID` | `DefaultableBp.bankl` |
| key `BusinessPartnerNumber` | `DefaultableBp.partner` |
| key `ValidTo` | `DefaultableBp.valid_to` |
| `ValidFrom` | `DefaultableBp.valid_from` |
| `CreatedByUser` | `DefaultableBp.created_by` |
| `CreationDate` | `DefaultableBp.created_at_dat` |
| `CreationTime` | `DefaultableBp.created_at_tim` |
| `LastChangedByUser` | `DefaultableBp.last_changed_by` |
| `LastChangeDate` | `DefaultableBp.last_changed_at_dat` |
| `LastChangeTime` | `DefaultableBp.last_changed_at_tim` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDEFAULTABLEBP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality:#C
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Bank Netting Business Partner'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define view I_DefaultBusinessPartner
  as select from fclm_bnka_bp_fs     as DefaultableBp 
 {
  key DefaultableBp.banks             as BankCountry,
  key DefaultableBp.bankl             as BankInternalID,
  key DefaultableBp.partner           as BusinessPartnerNumber,
  key DefaultableBp.valid_to          as ValidTo, 
  DefaultableBp.valid_from            as ValidFrom, 
  DefaultableBp.created_by            as CreatedByUser,
  DefaultableBp.created_at_dat        as CreationDate,
  DefaultableBp.created_at_tim        as CreationTime,
  DefaultableBp.last_changed_by       as LastChangedByUser,
  DefaultableBp.last_changed_at_dat   as LastChangeDate,
  DefaultableBp.last_changed_at_tim   as LastChangeTime
  }
```
