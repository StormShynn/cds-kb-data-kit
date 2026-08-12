---
name: I_SUPCSGNMTPPLINEWTHDRWLAPI01
description: "Supcsgnmtpplinewthdrwlapi 01"
app_component: MM-IV-LIV-2CL
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
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - header-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPCSGNMTPPLINEWTHDRWLAPI01

**Supcsgnmtpplinewthdrwlapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
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
| `MaterialDocument` | ✓ | |  |  |  |  |
| `MaterialDocumentYear` | ✓ | |  |  |  |  |
| `MaterialDocumentItem` | ✓ | |  |  |  |  |
| `SuplrCsgnmtPplineWthdrwlStatus` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `IssgOrRcvgStkIdfgSpclStkType` |  | |  |  |  |  |
| `ConsignmentPipelineSupplier` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `SuplrCsgnmtPplineWthdrwlAmount` |  | |  |  |  |  |
| `SupCsgnmtPplineWthdrwlQtyUnit` |  | |  |  |  |  |
| `SuplrCsgnmtPplineWthdrwlQty` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `NonDeductibleInputTaxAmount` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `_SupCsgnmtPplineInvcHistAPI01` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupCsgnmtPplineInvcHistAPI01` | `I_SupCsgnmtPplineInvcHistAPI01` | [0..*] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPCSGPLWDAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Consignment and Pipeline Withdrawal of Supplier'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@VDM.viewType : #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_SupCsgnmtPplineWthdrwlAPI01
  as select from I_SuplrCsgnmtPplineWithdrawal

  association [0..*] to I_SupCsgnmtPplineInvcHistAPI01 as _SupCsgnmtPplineInvcHistAPI01 on  $projection.MaterialDocument     = _SupCsgnmtPplineInvcHistAPI01.MaterialDocument
                                                                                        and $projection.MaterialDocumentYear = _SupCsgnmtPplineInvcHistAPI01.MaterialDocumentYear
                                                                                        and $projection.MaterialDocumentItem = _SupCsgnmtPplineInvcHistAPI01.MaterialDocumentItem
  association [1..1] to I_SupplierCompany              as _SupplierCompany              on  $projection.ConsignmentPipelineSupplier = _SupplierCompany.Supplier
                                                                                        and $projection.CompanyCode                 = _SupplierCompany.CompanyCode

  association [0..1] to I_Currency                     as _Currency                     on  $projection.DocumentCurrency = _Currency.Currency
{
  key MaterialDocument,
  key MaterialDocumentYear,
  key MaterialDocumentItem,
      SuplrCsgnmtPplineWthdrwlStatus,
      DocumentDate,
      PostingDate,
      CompanyCode,
      IssgOrRcvgStkIdfgSpclStkType,
      ConsignmentPipelineSupplier,
      Plant,
      Material,
      DebitCreditCode,
      BusinessArea,
      @Semantics.currencyCode: true
      DocumentCurrency,
      @Semantics               : { amount : {currencyCode: 'DocumentCurrency'} }
      SuplrCsgnmtPplineWthdrwlAmount,
      SupCsgnmtPplineWthdrwlQtyUnit,
      @Semantics               : { quantity : {unitOfMeasure: 'SupCsgnmtPplineWthdrwlQtyUnit'} }
      SuplrCsgnmtPplineWthdrwlQty,
      GLAccount,
      TaxCode,
      @Semantics               : { amount : {currencyCode: 'DocumentCurrency'} }
      NonDeductibleInputTaxAmount,
      ProfitCenter,
      TaxCountry,

      /* Associations */
      _SupCsgnmtPplineInvcHistAPI01,
      _Currency,
      _SupplierCompany
}
where
     _SupplierCompany.IsBusinessPurposeCompleted = ''
  or _SupplierCompany.IsBusinessPurposeCompleted is null
```
