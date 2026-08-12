---
name: I_PRODUCTGROUP_2
description: "Productgroup 2"
app_component: LO-MD-MM-2CL
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
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTGROUP_2

**Productgroup 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `ProductGroup` | ✓ | |  | `cast(t023.matkl as productgroup preserving type )` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `ValuationClass` |  | |  | `bklas` |  |  |
| `PurchasingAcknProfile` |  | |  | `ekwsl` |  |  |
| `_ProductGroupText` | | ✓ | | | | |
| `_ProductValuationClass` | | ✓ | | | | |
| `_PurgAcknowledgmentProfile` | | ✓ | | | | |
| `_ProductGroupHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductGroupText` | `I_ProductGroupText_2` | [0..*] |
| `_ProductValuationClass` | `I_Prodvaluationclass` | [0..1] |
| `_PurgAcknowledgmentProfile` | `I_PurgAcknowledgmentProfile` | [0..1] |
| `_ProductGroupHierarchyNode` | `I_ProductGroupHierarchyNode` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODGRP2',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1
  }
}
@Analytics: { dataCategory: #DIMENSION ,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
    }
@EndUserText.label: 'Product Group'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
//As the underlying table is of type T, Customizing,
//maintenance only by customer, no SAP imports, this CDS view does not require DCL
//There is no need to have two separate views(as value help and basic view),
//and this view can serve as a basic view and as a value help view.
  dataCategory: #VALUE_HELP,
  representativeKey: 'ProductGroup',
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #VALUE_HELP_PROVIDER,
                             #EXTRACTION_DATA_SOURCE,
                             #SEARCHABLE_ENTITY,
                             #ANALYTICAL_DIMENSION
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory : #M,
    dataClass: #CUSTOMIZING
    }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'ProductGroup'
@Consumption.ranked: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_ProductGroup_2
  as select from t023

  association [0..*] to I_ProductGroupText_2        as _ProductGroupText          on $projection.ProductGroup = _ProductGroupText.ProductGroup
  association [0..1] to I_Prodvaluationclass        as _ProductValuationClass     on $projection.ValuationClass = _ProductValuationClass.ValuationClass
  association [0..1] to I_PurgAcknowledgmentProfile as _PurgAcknowledgmentProfile on $projection.PurchasingAcknProfile = _PurgAcknowledgmentProfile.PurchasingAcknProfile
  association [0..*] to I_ProductGroupHierarchyNode as _ProductGroupHierarchyNode on $projection.ProductGroup  = _ProductGroupHierarchyNode.ProductGroup
{
      @ObjectModel.text.association: '_ProductGroupText'

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      @ObjectModel.hierarchy.association: '_ProductGroupHierarchyNode'
  key cast(t023.matkl as productgroup preserving type ) as ProductGroup,

      //The Authorization Group field is required for checks on Products.
      //(example: hide all Products that belong to a Product Group that is assigned to a specific Authgroup). See DCL of I_Product.
      //The group existence as such doesn’t have to be protected.

      @Consumption.hidden: true
      t023.begru                                        as AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_ProductValuationClass'
      @UI.hidden: true
      t023.bklas                                        as ValuationClass,
      @ObjectModel.foreignKey.association: '_PurgAcknowledgmentProfile'
      @UI.hidden: true
      t023.ekwsl                                        as PurchasingAcknProfile,
      _ProductGroupText,
      _ProductValuationClass,
      _PurgAcknowledgmentProfile,
      _ProductGroupHierarchyNode
}
```
