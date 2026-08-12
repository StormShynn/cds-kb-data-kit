---
name: I_SALESQUOTATIONTYPETEXT
description: "Salesquotationtypetext"
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - text-view
  - sales-quotation
  - text
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONTYPETEXT

**Salesquotationtypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotationType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SalesQuotationTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as quotation_type_name preserving type )` |  |  |
| `_SalesQuotationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesQuotationType` | `I_SalesQuotationType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Sales Quotation Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesQuotationType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SalesQuotationTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_SalesQuotationType    as SalesQuotationType on Text.SalesDocumentType = SalesQuotationType.SalesQuotationType

  association [0..1] to I_SalesQuotationType as _SalesQuotationType on $projection.SalesQuotationType = _SalesQuotationType.SalesQuotationType

{
      @ObjectModel.foreignKey.association: '_SalesQuotationType'
      @ObjectModel.text.element: ['SalesQuotationTypeName']
  key SalesQuotationType.SalesQuotationType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as quotation_type_name preserving type ) as SalesQuotationTypeName,

      _SalesQuotationType,
      Text._Language
}
```
