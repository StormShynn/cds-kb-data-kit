---
name: I_BANKACCTREVEMAILTEMPLATE
description: "Bankacctrevemailtemplate"
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
  - workflow
  - bank
  - email
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_BANKACCTREVEMAILTEMPLATE

**Bankacctrevemailtemplate**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` | ✓ | |  |  |  |  |
| `BankAccountRevision` | ✓ | |  |  |  |  |
| `BankCountry` |  | |  |  |  |  |
| `Bank` |  | |  |  |  |  |
| `BankAccountNumber` |  | |  |  |  |  |
| `BankAccountCurrency` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `BankAccountType` |  | |  |  |  |  |
| `LastChangeDate` |  | |  | `case when LastChangeDate is not null and BankAccountRevision <> '0000' then LastChangeDate else CreationDate end` |  |  |
| `LastChangedByUser` |  | |  | `case when LastChangedByUser is not null and BankAccountRevision <> '0001' and BankAccountRevision <> '0000' then LastChangedByUser else CreatedByUser end` |  |  |
| `BankAccountRevActivatedByUser` |  | |  |  |  |  |
| `BankAccountURL` |  | |  | `cast( ' ' as fclm_bam_acc_url)` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBANKACCREVEMAIL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Email Template for Bank Account Revision'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@AccessControl.personalData.blocking:#REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@ClientHandling: {
    algorithm: #SESSION_VARIABLE,
    type: #INHERITED
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_BankAcctRevEmailTemplate
  as select from I_BankAccountWithRevision
{
  key BankAccountInternalID,
  key BankAccountRevision,
  BankCountry,
  Bank,
  BankAccountNumber,
  BankAccountCurrency,
  CompanyCode,
  ProfitCenter,
  BusinessArea,
  Segment,
  BankAccountType,
  case
      when LastChangeDate is not null and BankAccountRevision <> '0000' then LastChangeDate
      else  CreationDate end     as LastChangeDate,
  case when  LastChangedByUser is not null and BankAccountRevision <> '0001' and  BankAccountRevision <> '0000' then LastChangedByUser
       else  CreatedByUser end   as LastChangedByUser,
  BankAccountRevActivatedByUser,

  cast( ' ' as fclm_bam_acc_url) as BankAccountURL
}
```
