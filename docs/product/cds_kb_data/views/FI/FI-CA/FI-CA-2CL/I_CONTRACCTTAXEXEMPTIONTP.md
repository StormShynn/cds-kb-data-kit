---
name: I_CONTRACCTTAXEXEMPTIONTP
description: "Contraccttaxexemptiontp"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` | ✓ | |  |  |  |  |
| `TaxCode` | ✓ | |  |  |  |  |
| `CAConditionType` | ✓ | |  |  |  |  |
| `CustTaxGroupExemptionStartDate` | ✓ | |  |  |  |  |
| `TaxCodeForEdit` |  | |  |  |  |  |
| `CAConditionTypeForEdit` |  | |  |  |  |  |
| `CustTxGrpExmpStrtDtFoEd` |  | |  |  |  |  |
| `CustTaxGroupExemptionEndDate` |  | |  |  |  |  |
| `CATaxExemptionLicense` |  | |  |  |  |  |
| `CATaxExemptionRate` |  | |  |  |  |  |
| `CAMassRunDate` |  | |  |  |  |  |
| `CAMassRunID` |  | |  |  |  |  |
| `CATaxExemptionLicenseExtended` |  | |  |  |  |  |
| `CATaxExemptionLicenseAmount` |  | |  |  |  |  |
| `CATaxExemptionLicenseCurrency` |  | |  |  |  |  |
| `CATaxExemptionLicenseIssueDate` |  | |  |  |  |  |
| `IT_TaxCalculationProcedure` |  | |  |  |  |  |
| `_CAConditionType` | | ✓ | | | | |
| `_CATaxExemptionLicenseCurrency` | | ✓ | | | | |
| `_ContrAcctTaxExemptionUI` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |

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
