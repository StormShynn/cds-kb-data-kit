---
name: I_BILLINGDOCUMENTREQUESTTYPE
description: Billing DocumentUMENTREQUESTTYPE
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - billing-document
  - billing
  - document
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTREQUESTTYPE

**Billing DocumentUMENTREQUESTTYPE**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillingDocumentRequestType` | `cast ( BillingProcessDocumentType as sdbil_odata_bdr_type preserving type)` |
| `SDDocumentCategory` | `SDDocumentCategory` |
| `IncrementItemNumber` | `IncrementItemNumber` |
| `BillingDocumentCategory` | `BillingDocumentCategory` |
| `BillgDocReqTxtDetnProcedure` | `cast ( BillgProcDocTxtDetnProcedure as billgdocreqtxtdetnprocedure preserving type)` |
| `BillgDocReqItmTxtDetnProcedure` | `cast ( BillgProcDocItmTxtDetnProced as billgdocreqitmtxtdetnprocedure preserving type )` |
| `_BillgDocReqTxtDetnProcedure` | `_BillgProcDocTxtDetnProcedure` |
| `_BillgDocReqItmTxtDetnProced` | `_BillgProcDocItmTxtDetnProced` |
| `_Text` | *Association* |
| `_SDDocumentCategory` | *Association* |
| `_BillingDocumentCategory` | *Association* |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Billing Document Request Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingDocumentRequestType'
@ObjectModel.sapObjectNodeType.name: 'BillingDocumentRequestType'
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

define root view entity I_BillingDocumentRequestType
  as select from I_BillingProcessDocumentType

  composition of exact one to many I_BillgDocRequestTypeText as _Text

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast ( BillingProcessDocumentType as sdbil_odata_bdr_type preserving type)              as BillingDocumentRequestType,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,
      IncrementItemNumber,
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      BillingDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillgDocReqTxtDetnProcedure'
      cast ( BillgProcDocTxtDetnProcedure as billgdocreqtxtdetnprocedure preserving type)     as BillgDocReqTxtDetnProcedure,
      @ObjectModel.foreignKey.association: '_BillgDocReqItmTxtDetnProced'
      cast ( BillgProcDocItmTxtDetnProced as billgdocreqitmtxtdetnprocedure preserving type ) as BillgDocReqItmTxtDetnProcedure,

      _Text,
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillgProcDocTxtDetnProcedure                                                           as _BillgDocReqTxtDetnProcedure,
      _BillgProcDocItmTxtDetnProced                                                           as _BillgDocReqItmTxtDetnProced
}
where
  SDDocumentCategory = 'EBDR'
```
