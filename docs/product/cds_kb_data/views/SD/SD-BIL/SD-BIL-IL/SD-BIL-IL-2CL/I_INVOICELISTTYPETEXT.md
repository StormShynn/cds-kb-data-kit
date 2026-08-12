---
name: I_INVOICELISTTYPETEXT
description: "Invoicelisttypetext"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - text-view
  - text
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTTYPETEXT

**Invoicelisttypetext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceListType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `InvoiceListTypeName` |  | |  | `cast(Text.BillingProcessDocumentTypeName as invoicelisttypename preserving type)` |  |  |
| `_InvoiceListType` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true

@Consumption.ranked: true

@EndUserText.label: 'Invoice List Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'InvoiceListType'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_InvoiceListTypeText
  as select from I_BillingProcessDocTypeText as Text

    inner join   I_InvoiceListType           as InvoiceListType on Text.BillingProcessDocumentType = InvoiceListType.InvoiceListType

  association to parent I_InvoiceListType as _InvoiceListType on $projection.InvoiceListType = _InvoiceListType.InvoiceListType

{
      @ObjectModel.foreignKey.association: '_InvoiceListType'
      @ObjectModel.text.element: [ 'InvoiceListTypeName' ]
  key InvoiceListType.InvoiceListType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Text.Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(Text.BillingProcessDocumentTypeName as invoicelisttypename preserving type) as InvoiceListTypeName,

      Text._Language,

      _InvoiceListType
}
```
