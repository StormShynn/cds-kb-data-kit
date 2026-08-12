---
name: I_INVOICELISTTYPE
description: "Invoicelisttype"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTTYPE

**Invoicelisttype**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceListType` | ✓ | |  | `cast(BillingProcessDocumentType as invoicelisttype preserving type)` |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `IncrementItemNumber` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL

@Consumption.ranked: true

@EndUserText.label: 'Invoice List Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'InvoiceListType'
@ObjectModel.sapObjectNodeType.name: 'InvoiceListType'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_InvoiceListType
  as select from I_BillingProcessDocumentType

  composition of exact one to many I_InvoiceListTypeText as _Text

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast(BillingProcessDocumentType as invoicelisttype preserving type) as InvoiceListType,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,

      IncrementItemNumber,

      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      BillingDocumentCategory,

      _Text,
      _SDDocumentCategory,
      _BillingDocumentCategory
}

where SDDocumentCategory = '3'
   or SDDocumentCategory = '4'
```
