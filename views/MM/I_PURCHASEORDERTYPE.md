---
name: I_PURCHASEORDERTYPE
description: "Purchase OrderTYPE"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - purchase-order
  - component:MM
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERTYPE

**Purchase OrderTYPE**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrderType` | ✓ | |  | `PurchasingDocumentType` |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |  |  |
| `PurgDocFieldSelControlKey` |  | |  |  |  |  |
| `PurgHasFlxblWorkflowApproval` |  | |  |  |  |  |
| `PartnerDeterminationProcedure` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PurchasingDocumentTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchaseOrderType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name:'PurchaseOrderType'
@AbapCatalog.sqlViewName: 'IMMPURGORDERTYP'
@EndUserText.label: 'Purchase Order Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view I_PurchaseOrderType
  as select from I_PurchasingDocumentType

  association [0..*] to I_PurchasingDocumentTypeText as _Text on  $projection.PurchaseOrderType    = _Text.PurchasingDocumentType
                                                              and _Text.PurchasingDocumentCategory = 'F'

{

      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key PurchasingDocumentType as PurchaseOrderType,
      PurchasingDocumentSubtype,
      PurgDocFieldSelControlKey,
      PurgHasFlxblWorkflowApproval,
      PartnerDeterminationProcedure,
      _Text
}
where
  PurchasingDocumentCategory = 'F'
```
