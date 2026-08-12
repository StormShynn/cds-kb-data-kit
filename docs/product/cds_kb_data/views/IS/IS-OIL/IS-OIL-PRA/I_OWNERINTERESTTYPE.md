---
name: I_OWNERINTERESTTYPE
description: "Owner Interest Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPE')/$value
semantic_en: "Owner Interest Type"
semantic_vi: "Owner Interest Type — CDS view giao diện dựa trên oiu_cm_pintty."
keywords:
  - "owner"
  - "interest"
  - "type"
  - "category"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_OWNERINTERESTTYPE

**Owner Interest Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OwnerInterestType` | ✓ | |  | `own_int_type_cd` | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestCategory` |  | |  | `int_cat_cd` | `CHAR(1)` | Interest Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OwnerInterestTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPE')/$value)*

```abap
@EndUserText.label: 'Owner Interest Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOWNINTTYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'OwnerInterestType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'PRAOwnerInterestType'
define view I_OwnerInterestType
  as select from oiu_cm_pintty
  association [0..*] to I_OwnerInterestTypeText as _Text on $projection.OwnerInterestType = _Text.OwnerInterestType
{
  @ObjectModel.text.association: '_Text'
  @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}  
  key own_int_type_cd     as OwnerInterestType,
      int_cat_cd          as OwnerInterestCategory,
      _Text
}
```
