---
name: I_BILLINGDOCUMENTREQUESTTYPE
description: "Billing DocumentUMENTREQUESTTYPE"
semantic_vi: "Chứa thông tin về loại yêu cầu tài liệu hóa đơn và chi tiết liên quan, được sử dụng khi quản lý yêu cầu tài liệu hóa đơn trong thành phần Sales và Distribution."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "sales and distribution"
  - "sddocumentcategory"
  - "billingdocumentrequesttype"
  - "incrementitemnumber"
  - "billingdocumentcategory"
semantic_en: "Exposes billing document request types and related details, used when managing billing document requests in the Sales and Distribution component."
app_component: SD-BIL-BDR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequestType` | ✓ | |  | `cast ( BillingProcessDocumentType as sdbil_odata_bdr_type preserving type)` |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `IncrementItemNumber` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `BillgDocReqTxtDetnProcedure` |  | |  | `cast ( BillgProcDocTxtDetnProcedure as billgdocreqtxtdetnprocedure preserving type)` |  |  |
| `BillgDocReqItmTxtDetnProcedure` |  | |  | `cast ( BillgProcDocItmTxtDetnProced as billgdocreqitmtxtdetnprocedure preserving type )` |  |  |
| `_BillgDocReqTxtDetnProcedure` |  | |  | `_BillgProcDocTxtDetnProcedure` |  |  |
| `_BillgDocReqItmTxtDetnProced` |  | |  | `_BillgProcDocItmTxtDetnProced` |  |  |
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
