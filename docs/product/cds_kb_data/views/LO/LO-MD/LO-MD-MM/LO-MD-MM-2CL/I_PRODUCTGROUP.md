---
name: I_PRODUCTGROUP
description: "This CDS view was deprecated with 1811. . SAP may make the CDS view unusable usually not earlier than one year after the deprecation. For more information, see Deprecated and Decommissioned CDS Views. We recommend that you switch to the successor CDS view, I_ProductGroup_2, as soon as possible. This view provides value help for Product Group. This view should be used for value help purposes only."
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUP')/$value
semantic_en: "This CDS view was deprecated with 1811. . SAP may make the CDS view unusable usually not earlier than one year after the deprecation. For more information, see Deprecated and Decommissioned CDS Views. We recommend that you switch to the successor CDS view, I_ProductGroup_2, as soon as possible. This view provides value help for Product Group. This view should be used for value help purposes only."
semantic_vi: "Product Group — CDS view giao diện dựa trên t023."
keywords:
  - "product"
  - "group"
  - "material"
  - "authorization"
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - product
---
# I_PRODUCTGROUP

**This CDS view was deprecated with 1811. . SAP may make the CDS view unusable usually not earlier than one year after the deprecation. For more information, see Deprecated and Decommissioned CDS Views. We recommend that you switch to the successor CDS view, I_ProductGroup_2, as soon as possible. This view provides value help for Product Group. This view should be used for value help purposes only.**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialGroup` | ✓ | |  | `cast(t023.matkl as productgroup preserving type )` | `CHAR(9)` | Product Group |
| `AuthorizationGroup` |  | |  | `begru` | `CHAR(4)` | Authorization Group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductGroupText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTGROUP')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODUCTGRP',
  preserveKey: true
}

@EndUserText.label: 'Product Group'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_ProductGroup_2'
@ObjectModel.representativeKey: 'MaterialGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION
]
define view I_ProductGroup
  as select from t023

  association [0..*] to I_ProductGroupText as _Text on $projection.MaterialGroup = _Text.MaterialGroup
{
      @ObjectModel.text.association: '_Text'

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key cast(t023.matkl as productgroup preserving type ) as MaterialGroup,
      @UI.hidden: true
      t023.begru                                        as AuthorizationGroup,


      _Text
}
```
