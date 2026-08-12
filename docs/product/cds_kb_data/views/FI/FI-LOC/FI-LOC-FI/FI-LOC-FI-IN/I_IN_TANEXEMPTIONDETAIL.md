---
name: I_IN_TANEXEMPTIONDETAIL
description: "IN Tanexemptiondetail"
app_component: FI-LOC-FI-IN
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
  - component:FI-LOC-FI-IN
  - lob:Finance
---
# I_IN_TANEXEMPTIONDETAIL

**IN Tanexemptiondetail**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-IN` |
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
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `FinancialAccountType` | ✓ | |  | `koart` |  |  |
| `CustomerSupplierAccount` | ✓ | |  | `accno` |  |  |
| `TaxSection` | ✓ | |  | `seccode` |  |  |
| `WithholdingTaxType` | ✓ | |  | `witht` |  |  |
| `WithholdingTaxCode` | ✓ | |  | `wt_withcd` |  |  |
| `ExemptionDateBegin` | ✓ | |  | `wt_exdf` |  |  |
| `BusinessPartnerPanNumber` | ✓ | |  | `pan_no` |  |  |
| `ExemptionDateEnd` |  | |  | `wt_exdt` |  |  |
| `WhldgTaxExmptCertificate` |  | |  | `wt_exnr` |  |  |
| `ExemptionRate` |  | |  | `wt_exrt` |  |  |
| `WithholdingTaxExemptionReason` |  | |  | `wt_wtexrs` |  |  |
| `IN_ThresholdAmount` |  | |  | `fiwtin_exem_thr` |  |  |
| `CompanyCodeCurrency` |  | |  | `waers` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'TAN Exemption Detail'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern:#NONE
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}

define view entity I_IN_TANExemptionDetail

    as select from fiwtin_tan_exem
{
    key bukrs       as CompanyCode,
    key koart       as FinancialAccountType,
    key accno       as CustomerSupplierAccount,
    key seccode     as TaxSection,
    key witht       as WithholdingTaxType,
    key wt_withcd   as WithholdingTaxCode,
    key wt_exdf     as ExemptionDateBegin,
    key pan_no      as BusinessPartnerPanNumber,
    wt_exdt         as ExemptionDateEnd,
    wt_exnr         as WhldgTaxExmptCertificate,
    wt_exrt         as ExemptionRate,
    wt_wtexrs       as WithholdingTaxExemptionReason,
    @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
    fiwtin_exem_thr as IN_ThresholdAmount,
    waers           as CompanyCodeCurrency

}
```
