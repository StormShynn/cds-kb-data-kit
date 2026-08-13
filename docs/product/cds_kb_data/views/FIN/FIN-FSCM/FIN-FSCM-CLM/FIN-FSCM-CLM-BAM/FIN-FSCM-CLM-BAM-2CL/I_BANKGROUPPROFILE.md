---
name: I_BANKGROUPPROFILE
description: "Bankgroupprofile"
semantic_vi: "View I_BANKGROUPPROFILE cung cấp dữ liệu hồ sơ nhóm ngân hàng, bao gồm số lượng tài khoản ngân hàng và mã công ty liên quan đến mỗi nhóm. Nó được sử dụng để phân tích và quản lý thông tin nhóm ngân hàng."
keywords:
  - "bank group profile"
  - "hồ sơ nhóm ngân hàng"
  - "sap cds view"
  - "view i_bankgroupprofile"
  - "bank group data"
  - "thông tin nhóm ngân hàng"
  - "financial management"
  - "quản lý tài chính"
  - "clm"
  - "component fin-fscm-clm-bam-2cl"
semantic_en: "The I_BANKGROUPPROFILE view provides bank group profile data, including the number of bank accounts and company codes associated with each group. It is used to analyze and manage bank group information."
app_component: FIN-FSCM-CLM-BAM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGroup` | ✓ | |  | `BusinessPartnerNumber` |  |  |
| `BankGroupName` |  | |  | `BusinessPartnerName` |  |  |
| `NumberOfBankAccounts` |  | | `_BankAccountCount` | `BankAccountQuantity` |  |  |
| `NumberOfCompanyCodes` |  | | `_HouseBankCompany` | `NumberOfCompanyCodes` |  |  |

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
