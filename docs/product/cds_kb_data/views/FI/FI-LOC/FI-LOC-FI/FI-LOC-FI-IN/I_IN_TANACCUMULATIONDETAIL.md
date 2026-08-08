---
name: I_IN_TANACCUMULATIONDETAIL
description: "IN Tanaccumulationdetail"
app_component: FI-LOC-FI-IN
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
  - component:FI-LOC-FI-IN
  - lob:Finance
---
# I_IN_TANACCUMULATIONDETAIL

**IN Tanaccumulationdetail**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CustomerSupplierAccount` | ✓ | |  | `accno` |  |  |
| `WithholdingTaxType` | ✓ | |  | `witht` |  |  |
| `WithholdingTaxCode` | ✓ | |  | `wt_withcd` |  |  |
| `TaxSection` | ✓ | |  | `secco` |  |  |
| `ExemptionDateBegin` | ✓ | |  | `wt_date` |  |  |
| `FinancialAccountType` | ✓ | |  | `koart` |  |  |
| `BusinessPartnerPanNumber` | ✓ | |  | `pan_no` |  |  |
| `IN_AccumulationAmount` |  | |  | `acc_amt` |  |  |
| `CompanyCodeCurrency` |  | |  | `cast (abap.cuky'INR' as fis_hwaer)` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'TAN Exemption Accumulation Detail'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern:#NONE
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

define view entity I_IN_TANAccumulationDetail

    as select from fiwtin_acc_exem
{
    key bukrs       as CompanyCode,
    key accno       as CustomerSupplierAccount,
    key witht       as WithholdingTaxType,
    key wt_withcd   as WithholdingTaxCode,
    key secco       as TaxSection,
    key wt_date     as ExemptionDateBegin,
    key koart       as FinancialAccountType,
    key pan_no      as BusinessPartnerPanNumber,
    @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
    acc_amt         as IN_AccumulationAmount,
    @EndUserText.label: 'CompanyCodeCurrency'
    cast (abap.cuky'INR' as fis_hwaer) as CompanyCodeCurrency
}
```
