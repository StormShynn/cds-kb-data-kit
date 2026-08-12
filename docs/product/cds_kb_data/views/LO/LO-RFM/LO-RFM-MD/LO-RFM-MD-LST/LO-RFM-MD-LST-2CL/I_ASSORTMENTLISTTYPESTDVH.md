---
name: I_ASSORTMENTLISTTYPESTDVH
description: "Assortment List Type"
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPESTDVH')/$value
semantic_en: "Assortment List Type"
semantic_vi: "Assortment List Type — CDS view giao diện dựa trên I_AssortmentListType."
keywords:
  - "assortment"
  - "list"
  - "type"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-MD-LST-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
---
# I_ASSORTMENTLISTTYPESTDVH

**Assortment List Type**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssortmentListType` | ✓ | |  |  | `CHAR(1)` | Assortment List Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTLISTTYPESTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IASSLISTTSTDVH'
@EndUserText.label: 'Assortment List Type'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    supportedCapabilities:[#VALUE_HELP_PROVIDER],
    dataCategory: #VALUE_HELP,
    representativeKey: 'AssortmentListType',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
define view I_AssortmentListTypeStdVH
  as select from I_AssortmentListType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key AssortmentListType,

      _Text
}
```
