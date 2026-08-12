---
name: I_EXTTAXCALCULATIONTRACE
description: "Exttaxcalculationtrace"
app_component: FI-LOC-TXS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-TXS
  - interface-view
  - tax
  - component:FI-LOC-TXS
  - lob:Finance
---
# I_EXTTAXCALCULATIONTRACE

**Exttaxcalculationtrace**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TXS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExtTaxCalculationTraceUUID` | ✓ | |  | `guid` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `ExtTaxCalcDocumentCategory` | ✓ | |  | `doc_category` |  |  |
| `ExtTaxCalcDocumentNumber` | ✓ | |  | `doc_number` |  |  |
| `ExtTaxCalculationFiscalYear` | ✓ | |  | `doc_fiscal_year` |  |  |
| `ExtTaxCalculationItemNumber` | ✓ | |  | `doc_item` |  |  |
| `ExtTaxCalculationDateTime` |  | |  | `cast(timestamp as tzntstmps preserving type)` |  |  |
| `ConditionTaxCode` |  | |  | `tax_type_code` |  |  |
| `ExtTaxCalcTaxJurisdiction` |  | |  | `tax_jurisdiction_code` |  |  |
| `PricingDate` |  | |  | `tax_date` |  |  |
| `ExtTaxCalcRequestPayloadText` |  | |  | `request` |  |  |
| `ExtTaxCalcResponsePayloadText` |  | |  | `response` |  |  |

## Source Code

```abap
@EndUserText.label: 'External Tax Calculation Engines Trace'
@AbapCatalog.sqlViewName: 'IEXTTAXCALCTRACE'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
define view I_ExtTaxCalculationTrace as select from txs_trace
{
  key guid as ExtTaxCalculationTraceUUID,
  key bukrs as CompanyCode,
  key kappl as ConditionApplication,
  key doc_category as ExtTaxCalcDocumentCategory,
  key doc_number as ExtTaxCalcDocumentNumber,
  key doc_fiscal_year as ExtTaxCalculationFiscalYear,
  key doc_item as ExtTaxCalculationItemNumber,
  @Semantics.dateTime:true
  cast(timestamp as tzntstmps preserving type) as ExtTaxCalculationDateTime,
  tax_type_code as ConditionTaxCode,
  tax_jurisdiction_code as ExtTaxCalcTaxJurisdiction,
  tax_date as PricingDate,
  request as ExtTaxCalcRequestPayloadText,
  response as ExtTaxCalcResponsePayloadText
}
```
