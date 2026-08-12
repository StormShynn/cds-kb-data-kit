---
name: I_RISKBUSINESSPARTNER
description: "RISKBusiness Partner"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_RISKBUSINESSPARTNER

**RISKBusiness Partner**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  | `banks` |  |  |
| `BankInternalID` | ✓ | |  | `bankl` |  |  |
| `BusinessPartnerNumber` | ✓ | |  | `partner` |  |  |
| `ValidTo` | ✓ | |  | `valid_to` |  |  |
| `ValidFrom` |  | |  | `valid_from` |  |  |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRISKBP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType:#BASIC
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality:#C
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Bank Risk Business Partner'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define view I_RiskBusinessPartner
  as select from fclm_bam_bnkabp2 as RiskBp
  association [0..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartnerNumber = _BusinessPartner.BusinessPartner
{
  key RiskBp.banks      as BankCountry,
  key RiskBp.bankl      as BankInternalID,
  key RiskBp.partner    as BusinessPartnerNumber,
  key RiskBp.valid_to   as ValidTo,
      RiskBp.valid_from as ValidFrom,
      _BusinessPartner
}
```
