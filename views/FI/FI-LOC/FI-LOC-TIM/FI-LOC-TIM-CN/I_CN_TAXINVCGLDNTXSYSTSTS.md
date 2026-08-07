---
name: I_CN_TAXINVCGLDNTXSYSTSTS
description: CN Taxinvcgldntxsyststs
app_component: FI-LOC-TIM-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-TIM
  - interface-view
  - tax
  - component:FI-LOC-TIM-CN
  - lob:Finance
---
# I_CN_TAXINVCGLDNTXSYSTSTS

**CN Taxinvcgldntxsyststs**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CN_TaxInvcGldnTxSystSts` | ✓ | |  | `gts_status` |  |  |
| `StatusDescription` |  | |  | `gts_status_txt` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICNTXIGTSSTS'
@AbapCatalog.compiler.compareFilter: true
@VDM: { viewType: #BASIC }
@Search.searchable
@ObjectModel: {
  representativeKey: 'CN_TaxInvcGldnTxSystSts',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'CN_ValueAddedTaxInvoiceSystSts'
@ObjectModel.dataCategory:#VALUE_HELP
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'CN Tax Invoice Golden Tax System Status'

define view I_CN_TaxInvcGldnTxSystSts
  as select from txi_gts_sts_map
{
      @ObjectModel.text.element: 'StatusDescription'
      @Consumption.labelElement: 'StatusDescription'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.75   
  key gts_status     as CN_TaxInvcGldnTxSystSts,
  
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.75  
      gts_status_txt as StatusDescription
}
where
  is_obsolete <> 'X'
```
