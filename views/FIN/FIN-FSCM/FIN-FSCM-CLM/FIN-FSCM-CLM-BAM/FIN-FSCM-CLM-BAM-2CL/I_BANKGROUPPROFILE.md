---
name: I_BANKGROUPPROFILE
description: Bankgroupprofile
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
  - bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_BANKGROUPPROFILE

**Bankgroupprofile**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BankGroup` | ✓ | |  | `BusinessPartnerNumber` |
| `BankGroupName` |  | |  | `BusinessPartnerName` |
| `NumberOfBankAccounts` |  | | `_BankAccountCount` | `BankAccountQuantity` |
| `NumberOfCompanyCodes` |  | | `_HouseBankCompany` | `NumberOfCompanyCodes` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankAccountCount` | `I_BankGroupBankAccountCount` | [0..1] |
| `_HouseBankCompany` | `P_BankGroupCompanyCount` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIBANKGPPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bank Group Profile'
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BankGroup'
@ObjectModel.supportedCapabilities: #ANALYTICAL_DIMENSION
define view I_BankGroupProfile
  as select distinct from I_BPBankLinkage
  association [0..1] to I_BankGroupBankAccountCount as _BankAccountCount on $projection.BankGroup = _BankAccountCount.BankGroup
  association [0..1] to P_BankGroupCompanyCount     as _HouseBankCompany on $projection.BankGroup = _HouseBankCompany.bank_group
{
      @ObjectModel.text.element: ['BankGroupName']
  key BusinessPartnerNumber                 as BankGroup,
      @Semantics.text
      BusinessPartnerName                   as BankGroupName,
      @DefaultAggregation: #SUM
      _BankAccountCount.BankAccountQuantity as NumberOfBankAccounts,
      @DefaultAggregation: #SUM
      _HouseBankCompany.NumberOfCompanyCodes

}
where
  BusinessPartner2 is null;
```
