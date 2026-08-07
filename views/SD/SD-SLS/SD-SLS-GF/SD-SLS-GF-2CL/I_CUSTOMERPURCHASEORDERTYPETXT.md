---
name: I_CUSTOMERPURCHASEORDERTYPETXT
description: CUSTOMERPurchase OrderTYPETXT
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
# I_CUSTOMERPURCHASEORDERTYPETXT

**CUSTOMERPurchase OrderTYPETXT**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerPurchaseOrderType` | ✓ | |  | `bsark` |
| `Language` | ✓ | |  | `spras` |
| `CustomerPurchaseOrderTypeDesc` |  | |  | `cast(vtext as bezei20)` |
| `_CustomerPurchaseOrderType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerPurchaseOrderType` | `I_CustomerPurchaseOrderType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPOTYPETXT'
@EndUserText.label: 'Customer Purchase Order Type - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.representativeKey: 'CustomerPurchaseOrderType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
define view I_CustomerPurchaseOrderTypeTxt 
    as select from t176t
    association [0..1] to I_CustomerPurchaseOrderType as _CustomerPurchaseOrderType on $projection.CustomerPurchaseOrderType = _CustomerPurchaseOrderType.CustomerPurchaseOrderType
    association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
        @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
    key bsark as  CustomerPurchaseOrderType,
    
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
    key spras as Language,

        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Semantics.text: true
        cast(vtext as bezei20)     as CustomerPurchaseOrderTypeDesc,

        //Associations
        _CustomerPurchaseOrderType,
        _Language
};
```
