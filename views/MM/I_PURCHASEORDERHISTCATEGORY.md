---
name: I_PURCHASEORDERHISTCATEGORY
description: Purchase OrderHISTCATEGORY
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
# I_PURCHASEORDERHISTCATEGORY

**Purchase OrderHISTCATEGORY**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrderHistCategory` | `bewtp` |
| `SubsequentDebitCreditIsAllowed` | `tbtkz` |
| `_PurchaseOrderHistCategName` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderHistCategName` | `I_PurOrderHistoryCategoryText` | [1..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchaseOrderHistCategory'
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M 
@AbapCatalog.sqlViewName: 'IMMPUROHISTCAT'
@AbapCatalog.preserveKey:true 
@EndUserText.label: 'Purchase Order History Category'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrderHistoryCategory'

define view I_PurchaseOrderHistCategory

  as select from t163b

  association [1..*] to I_PurOrderHistoryCategoryText as _PurchaseOrderHistCategName on $projection.PurchaseOrderHistCategory = _PurchaseOrderHistCategName.PurchaseOrderHistCategory
{
      @ObjectModel.text.association: '_PurchaseOrderHistCategName'
  key bewtp as  PurchaseOrderHistCategory,

      tbtkz as  SubsequentDebitCreditIsAllowed,

      _PurchaseOrderHistCategName
};
```
