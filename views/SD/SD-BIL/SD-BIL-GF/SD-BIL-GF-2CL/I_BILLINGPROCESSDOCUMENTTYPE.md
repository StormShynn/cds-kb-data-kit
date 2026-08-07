---
name: I_BILLINGPROCESSDOCUMENTTYPE
description: Billingprocessdocumenttype
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - billing
  - document
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPROCESSDOCUMENTTYPE

**Billingprocessdocumenttype**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillingProcessDocumentType` | ✓ | |  | `cast( fkart as billingprocessdocumenttype preserving type )` |
| `SDDocumentCategory` |  | |  | `vbtyp` |
| `IncrementItemNumber` |  | |  | `incpo` |
| `BillingDocumentCategory` |  | |  | `fktyp` |
| `BillgProcDocTxtDetnProcedure` |  | |  | `cast( txtgr as billg_proc_doc_text_detn_head preserving type )` |
| `BillgProcDocItmTxtDetnProced` |  | |  | `cast( txtgr_p as billg_proc_doc_text_detn_item preserving type )` |
| `_Text` | | ✓ | | |
| `_SDDocumentCategory` | | ✓ | | |
| `_BillingDocumentCategory` | | ✓ | | |
| `_BillgProcDocTxtDetnProcedure` | | ✓ | | |
| `_BillgProcDocItmTxtDetnProced` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Billing Process Document Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingProcessDocumentType'
@ObjectModel.sapObjectNodeType.name: 'BillingProcessDocumentType'
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

define root view entity I_BillingProcessDocumentType
  as select from tvfk

  composition of exact one to many I_BillingProcessDocTypeText  as _Text
  association              to exact one I_SDDocumentCategory    as _SDDocumentCategory           on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association              to one I_BillingDocumentCategory     as _BillingDocumentCategory      on $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory
  association              to one I_SDDocumentTextDetnProcedure as _BillgProcDocTxtDetnProcedure on $projection.BillgProcDocTxtDetnProcedure = _BillgProcDocTxtDetnProcedure.TextDeterminationProcedure
  association              to one I_SDDocItemTextDetnProcedure  as _BillgProcDocItmTxtDetnProced on $projection.BillgProcDocItmTxtDetnProced = _BillgProcDocItmTxtDetnProced.TextDeterminationProcedure

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast( fkart as billingprocessdocumenttype preserving type )      as BillingProcessDocumentType,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      vbtyp                                                            as SDDocumentCategory,
      incpo                                                            as IncrementItemNumber,
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      fktyp                                                            as BillingDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillgProcDocTxtDetnProcedure'
      cast( txtgr as billg_proc_doc_text_detn_head preserving type )   as BillgProcDocTxtDetnProcedure,
      @ObjectModel.foreignKey.association: '_BillgProcDocItmTxtDetnProced'
      cast( txtgr_p as billg_proc_doc_text_detn_item preserving type ) as BillgProcDocItmTxtDetnProced,

      _Text,
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillgProcDocTxtDetnProcedure,
      _BillgProcDocItmTxtDetnProced
}
```
