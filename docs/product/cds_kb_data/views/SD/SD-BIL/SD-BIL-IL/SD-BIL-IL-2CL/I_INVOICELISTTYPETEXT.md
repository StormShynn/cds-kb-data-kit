---
name: I_INVOICELISTTYPETEXT
description: "Invoicelisttypetext"
app_component: SD-BIL-IL-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
