---
name: I_SALESINQUIRYTYPETEXT
description: "Salesinquirytypetext"
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
  - text
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESINQUIRYTYPETEXT

**Salesinquirytypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesInquiryType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SalesInquiryTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as sd_sales_inquiry_type_name preserving type )` |  |  |
| `_SalesInquiryType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesInquiryType` | `I_SalesInquiryType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Sales Inquiry Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesInquiryType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SalesInquiryTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_SalesInquiryType    as SalesInquiryType on Text.SalesDocumentType = SalesInquiryType.SalesInquiryType

  association [0..1] to I_SalesInquiryType as _SalesInquiryType on $projection.SalesInquiryType = _SalesInquiryType.SalesInquiryType

{
      @ObjectModel.foreignKey.association: '_SalesInquiryType'
      @ObjectModel.text.element: ['SalesInquiryTypeName']
  key SalesInquiryType.SalesInquiryType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as sd_sales_inquiry_type_name preserving type ) as SalesInquiryTypeName,

      _SalesInquiryType,
      Text._Language
}
```
