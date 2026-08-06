---
name: I_SALESDOCUMENTTYPE
description: Salesdocumenttype
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - sales-document
  - document
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTTYPE

**Salesdocumenttype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesDocumentType` | `auart` |
| `SDDocumentCategory` | `vbtyp` |
| `MandatoryReferenceSDDocCat` | `bezob` |
| `SalesDocumentProcessingType` | `vbklt` |
| `ScreenSequenceGroup` | `kopgr` |
| `OrderTypeForBillingRequest` | `aufak` |
| `DeliveryBlockReason` | `lifsk` |
| `IsLocked` | `sperr` |
| `RetsMgmtIsActive` | `msr_active` |
| `TradeComplianceIsActive` | `itmac` |
| `TextDeterminationProcedure` | `cast(txtgr as sls_doc_text_detn_head preserving type )` |
| `PartnerDeterminationProcedure` | `cast(pargr as sls_doc_partner_detn_head preserving type )` |
| `SlsDocProdProposalProcedure` | `pvbsm` |
| `NumberRangeForIntIDAssignment` | `numki` |
| `NumberRangeForExtIDAssignment` | `numke` |
| `_Text` | *Association* |
| `_OrderTypeForBillingRequest` | *Association* |
| `_DeliveryBlockReason` | *Association* |
| `_TextDeterminationProcedure` | *Association* |
| `_PartDeterminationProcedure` | *Association* |
| `_SalesDocumentTypeLangDepdnt` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDocumentTypeText` | [0..*] |
| `_OrderTypeForBillingRequest` | `I_SalesDocumentType` | [1..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [1..1] |
| `_TextDeterminationProcedure` | `I_SDDocumentTextDetnProcedure` | [0..1] |
| `_PartDeterminationProcedure` | `I_PartDeterminationProcedure` | [0..1] |
| `_SalesDocumentTypeLangDepdnt` | `I_SalesDocumentTypeLangDepdnt` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesDocumentType'
@ObjectModel.sapObjectNodeType.name: 'SalesDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Sales Document Type'
@Analytics: { dataCategory: #DIMENSION ,
              dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSALESDOCTYPE'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentType
  as select from tvak

  association [0..*] to I_SalesDocumentTypeText       as _Text                        on $projection.SalesDocumentType = _Text.SalesDocumentType
  association [1..1] to I_SalesDocumentType           as _OrderTypeForBillingRequest  on $projection.OrderTypeForBillingRequest = _OrderTypeForBillingRequest.SalesDocumentType
  association [1..1] to I_DeliveryBlockReason         as _DeliveryBlockReason         on $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason
  association [0..1] to I_SDDocumentTextDetnProcedure as _TextDeterminationProcedure  on $projection.TextDeterminationProcedure = _TextDeterminationProcedure.TextDeterminationProcedure
  association [0..1] to I_PartDeterminationProcedure  as _PartDeterminationProcedure  on $projection.PartnerDeterminationProcedure = _PartDeterminationProcedure.PartnerDeterminationProcedure
  association [0..*] to I_SalesDocumentTypeLangDepdnt as _SalesDocumentTypeLangDepdnt on $projection.SalesDocumentType = _SalesDocumentTypeLangDepdnt.SalesDocumentType
{
      @ObjectModel.text.association: '_Text'
  key auart      as SalesDocumentType,

      vbtyp      as SDDocumentCategory,
      bezob      as MandatoryReferenceSDDocCat,
      vbklt      as SalesDocumentProcessingType,
      kopgr      as ScreenSequenceGroup,
      @ObjectModel.foreignKey.association: '_OrderTypeForBillingRequest'
      aufak      as OrderTypeForBillingRequest,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      lifsk      as DeliveryBlockReason,
      sperr      as IsLocked,
      msr_active as RetsMgmtIsActive,
      itmac      as TradeComplianceIsActive,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TextDeterminationProcedure'
      cast(txtgr as sls_doc_text_detn_head preserving type )           as TextDeterminationProcedure,   
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartDeterminationProcedure'
      cast(pargr as sls_doc_partner_detn_head preserving type )        as PartnerDeterminationProcedure,
      pvbsm      as SlsDocProdProposalProcedure,
      numki      as NumberRangeForIntIDAssignment,
      numke      as NumberRangeForExtIDAssignment,

      //Association
      _Text,
      _OrderTypeForBillingRequest,
      _SalesDocumentTypeLangDepdnt,
      _DeliveryBlockReason,
      _TextDeterminationProcedure,
      _PartDeterminationProcedure
};
```
