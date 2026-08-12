---
name: I_CUSTOMERPURCHASEORDERTYPE
description: "CUSTOMERPurchase OrderTYPE"
app_component: SD-SLS-GF-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerPurchaseOrderType` | ✓ | |  | `bsark` |  |  |
| `_Text` | | ✓ | | | | |

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
