---
name: I_SUPLRQTNFOLLOWONDOCUMENT
description: Suplrqtnfollowondocument
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - document
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRQTNFOLLOWONDOCUMENT

**Suplrqtnfollowondocument**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SupplierQuotationType` | ✓ | |  | `cast(source_doc_type as vdm_qtn_doc_type preserving type )` |
| `FollowOnDocumentCategory` | ✓ | |  | `target_doc_cat` |
| `FollowOnDocumentType` | ✓ | |  | `cast(target_doc_type as followondoctype preserving type )` |
| `_SupplierQuotationType` | | ✓ | | |
| `_FollowOnDocumentCategory` | | ✓ | | |
| `_DocTypeText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQuotationType` | `I_SupplierQuotationType` | [0..1] |
| `_FollowOnDocumentCategory` | `I_PurchasingDocumentCategory` | [0..1] |
| `_DocTypeText` | `I_PurchasingDocumentTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IQTNFODOC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Supplier Quotation Follow On Document'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'FollowOnDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType:  #BASIC
@ObjectModel.sapObjectNodeType.name:'SuplrQtnFollowOnDocumentType'
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY ]

@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]

define view I_SuplrQtnFollowOnDocument
  as select from mmpur_foll_dtyp as QTNFollowOnDoc
  association [0..1] to I_SupplierQuotationType      as _SupplierQuotationType    on  $projection.SupplierQuotationType = _SupplierQuotationType.SuplrQtnType
  association [0..1] to I_PurchasingDocumentCategory as _FollowOnDocumentCategory on  $projection.FollowOnDocumentCategory = _FollowOnDocumentCategory.PurchasingDocumentCategory
  association [0..*] to I_PurchasingDocumentTypeText as _DocTypeText              on  _DocTypeText.PurchasingDocumentCategory = $projection.FollowOnDocumentCategory
                                                                                  and _DocTypeText.PurchasingDocumentType     = $projection.FollowOnDocumentType
{
      @ObjectModel.foreignKey.association: '_SupplierQuotationType'
  key cast(source_doc_type as vdm_qtn_doc_type preserving type ) as SupplierQuotationType,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_FollowOnDocumentCategory'
  key target_doc_cat                                             as FollowOnDocumentCategory,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_DocTypeText'
  key cast(target_doc_type as followondoctype preserving type )  as FollowOnDocumentType,
      _SupplierQuotationType,
      _FollowOnDocumentCategory,
      _DocTypeText
}
where
  source_doc_cat = 'O'
```
