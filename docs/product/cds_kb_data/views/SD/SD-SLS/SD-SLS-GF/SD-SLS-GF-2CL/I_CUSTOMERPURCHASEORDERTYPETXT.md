---
name: I_CUSTOMERPURCHASEORDERTYPETXT
description: "CUSTOMERPurchase OrderTYPETXT"
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
# I_CUSTOMERPURCHASEORDERTYPETXT

**CUSTOMERPurchase OrderTYPETXT**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `CustomerPurchaseOrderTypeDesc` |  | |  | `cast(vtext as bezei20)` |  |  |
| `_CustomerPurchaseOrderType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
