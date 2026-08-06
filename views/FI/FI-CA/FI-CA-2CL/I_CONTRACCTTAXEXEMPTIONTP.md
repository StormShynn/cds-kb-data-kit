---
name: I_CONTRACCTTAXEXEMPTIONTP
description: Contraccttaxexemptiontp
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - transactional-processing
  - tax
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACCTTAXEXEMPTIONTP

**Contraccttaxexemptiontp**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ContractAccount` | `ContractAccount` |
| key `TaxCode` | `TaxCode` |
| key `CAConditionType` | `CAConditionType` |
| key `CustTaxGroupExemptionStartDate` | `CustTaxGroupExemptionStartDate` |
| `TaxCodeForEdit` | `TaxCodeForEdit` |
| `CAConditionTypeForEdit` | `CAConditionTypeForEdit` |
| `CustTxGrpExmpStrtDtFoEd` | `CustTxGrpExmpStrtDtFoEd` |
| `CustTaxGroupExemptionEndDate` | `CustTaxGroupExemptionEndDate` |
| `CATaxExemptionLicense` | `CATaxExemptionLicense` |
| `CATaxExemptionRate` | `CATaxExemptionRate` |
| `CAMassRunDate` | `CAMassRunDate` |
| `CAMassRunID` | `CAMassRunID` |
| `CATaxExemptionLicenseExtended` | `CATaxExemptionLicenseExtended` |
| `CATaxExemptionLicenseAmount` | `} CATaxExemptionLicenseAmount` |
| `CATaxExemptionLicenseCurrency` | `CATaxExemptionLicenseCurrency` |
| `CATaxExemptionLicenseIssueDate` | `CATaxExemptionLicenseIssueDate` |
| `IT_TaxCalculationProcedure` | `IT_TaxCalculationProcedure` |
| `_CAConditionType` | *Association* |
| `_CATaxExemptionLicenseCurrency` | *Association* |
| `_ContrAcctTaxExemptionUI` | *Association* |
| `_ContractAccount` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Contract Account Tax Exemption - TP'

@ObjectModel: { modelingPattern: #TRANSACTIONAL_INTERFACE,
                sapObjectNodeType.name: 'ContractAccountTaxExemption',
                supportedCapabilities:  [#TRANSACTIONAL_PROVIDER],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #L } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ContrAcctTaxExemptionTP
  as projection on R_ContrAcctTaxExemptionTP
{
  key ContractAccount,
  key TaxCode,
  key CAConditionType,
  key CustTaxGroupExemptionStartDate,
  @ObjectModel.editableFieldFor: 'TaxCode'
  TaxCodeForEdit,
  @ObjectModel.editableFieldFor: 'CAConditionType'
  CAConditionTypeForEdit,
  @ObjectModel.editableFieldFor: 'CustTaxGroupExemptionStartDate'
  CustTxGrpExmpStrtDtFoEd,
  CustTaxGroupExemptionEndDate,
  CATaxExemptionLicense,
  CATaxExemptionRate,
  CAMassRunDate,
  CAMassRunID,
  CATaxExemptionLicenseExtended,
  @Semantics: { amount : {currencyCode: 'CATaxExemptionLicenseCurrency'} }
  CATaxExemptionLicenseAmount,
  CATaxExemptionLicenseCurrency,
  CATaxExemptionLicenseIssueDate,
  IT_TaxCalculationProcedure,
  /* Associations */
  _CAConditionType,
  _CATaxExemptionLicenseCurrency,
  _ContrAcctTaxExemptionUI,
  _ContractAccount: redirected to parent I_ContractAccountTP
}
```
