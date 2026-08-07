---
name: I_BILLINGDOCUMENTTYPE_2
description: Billing DocumentUMENTTYPE 2
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - billing-document
  - billing
  - document
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTYPE_2

**Billing DocumentUMENTTYPE 2**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentType` | ✓ | |  | `cast(BillingProcessDocumentType as billingdocumenttype preserving type)` |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `IncrementItemNumber` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `BillgDocTextDetnProcedure` |  | |  | `cast(BillgProcDocTxtDetnProcedure as billgdoctextdetnprocedure preserving type)` |  |  |
| `BillgDocItemTextDetnProcedure` |  | |  | `cast(BillgProcDocItmTxtDetnProced as billgdocitemtextdetnprocedure preserving type)` |  |  |
| `_BillgDocTextDetnProcedure` |  | |  | `_BillgProcDocTxtDetnProcedure` |  |  |
| `_BillgDocItemTextDetnProcedure` |  | |  | `_BillgProcDocItmTxtDetnProced` |  |  |
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

@EndUserText.label: 'Billing Document Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingDocumentType'
@ObjectModel.sapObjectNodeType.name: 'BillingDocumentType'

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

define root view entity I_BillingDocumentType_2
  as select from I_BillingProcessDocumentType

  composition of exact one to many I_BillingDocumentTypeText_2 as _Text

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast(BillingProcessDocumentType as billingdocumenttype preserving type)             as BillingDocumentType,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,

      IncrementItemNumber,

      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      BillingDocumentCategory,

      @ObjectModel.foreignKey.association: '_BillgDocTextDetnProcedure'
      cast(BillgProcDocTxtDetnProcedure as billgdoctextdetnprocedure preserving type)     as BillgDocTextDetnProcedure,

      @ObjectModel.foreignKey.association: '_BillgDocItemTextDetnProcedure'
      cast(BillgProcDocItmTxtDetnProced as billgdocitemtextdetnprocedure preserving type) as BillgDocItemTextDetnProcedure,

      _Text,
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillgProcDocTxtDetnProcedure                                                       as _BillgDocTextDetnProcedure,
      _BillgProcDocItmTxtDetnProced                                                       as _BillgDocItemTextDetnProcedure
}

where SDDocumentCategory = 'M' // Invoice
   or SDDocumentCategory = 'N' // Invoice Canceled
   or SDDocumentCategory = 'O' // Credit Memo
   or SDDocumentCategory = 'P' // Debit Memo
   or SDDocumentCategory = 'S' // Credit Memo Canceled
   or SDDocumentCategory = 'U' // Pro Forma Invoice
   or SDDocumentCategory = '5' // Intercompany Invoice
   or SDDocumentCategory = '6' // Intercompany Credit Memo
   or SDDocumentCategory = 'DPRQ' // Down Payment Request
   or SDDocumentCategory = 'DPCC' // Down Payment Cancellation
```
