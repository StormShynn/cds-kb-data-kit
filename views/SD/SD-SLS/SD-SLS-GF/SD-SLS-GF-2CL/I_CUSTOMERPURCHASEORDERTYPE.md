---
name: I_CUSTOMERPURCHASEORDERTYPE
description: CUSTOMERPurchase OrderTYPE
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
  - customer
  - purchase-order
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:PurchaseOrder
  - bo:Customer
---
# I_CUSTOMERPURCHASEORDERTYPE

**CUSTOMERPurchase OrderTYPE**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerPurchaseOrderType` | `t176.bsark` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerPurchaseOrderTypeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPOTYPE'
@EndUserText.label: 'Customer Purchase Order Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'CustomerPurchaseOrderType',
  sapObjectNodeType.name: 'PurchaseOrderTypeByCustomer',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics: { 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true
define view I_CustomerPurchaseOrderType 
  as select from t176
  association [0..*] to I_CustomerPurchaseOrderTypeTxt as _Text on $projection.CustomerPurchaseOrderType = _Text.CustomerPurchaseOrderType
{
   @ObjectModel.text.association: '_Text'
   @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
   key t176.bsark as CustomerPurchaseOrderType,
   
   _Text 
}
```
