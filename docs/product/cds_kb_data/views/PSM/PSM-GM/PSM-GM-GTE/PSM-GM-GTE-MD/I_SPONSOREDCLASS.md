---
name: I_SPONSOREDCLASS
description: "Sponsored Class"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASS')/$value
semantic_en: "Sponsored Class"
semantic_vi: "Sponsored Class — CDS view giao diện dựa trên gmspclass."
keywords:
  - "sponsored"
  - "class"
  - "type"
  - "billable"
  - "gtee"
  - "bdgt"
  - "transf"
  - "vldtd"
  - "post"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_SPONSOREDCLASS

**Sponsored Class**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredClass` | ✓ | |  | `sponsored_class` | `CHAR(20)` | Sponsored Class |
| `SponsoredClassType` |  | |  | `class_type` | `CHAR(1)` | Sponsored Class Type |
| `SponsoredClassIsBillable` |  | |  | `flg_billable` | `CHAR(1)` | Billable |
| `GteeMBdgtTransfObjIsVldtd` |  | |  | `validate_fmbt` | `CHAR(1)` | Indicator:  Validate Budget Transfer Object |
| `GteeMBdgtAndPostObjIsVldtd` |  | |  | `validate_fmba` | `CHAR(1)` | Indicator:  Validate Allowed Budget and Posting objects |
| `SponsoredClassAuthznGrp` |  | |  | `auth_group` | `CHAR(10)` | Grants Management: Authorization Groups |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Record Created by |
| `CreationDate` |  | |  | `created_on` | `DATS(8)` | Created on |
| `LastChangedByUser` |  | |  | `modified_by` | `CHAR(12)` | Last Modified by |
| `LastChangeDate` |  | |  | `modified_on` | `DATS(8)` | Date last modified |
| `_Type` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Type` | `I_SponsoredClassType` | [1..1] |
| `_Text` | `I_SponsoredClassText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASS')/$value)*

```abap
//Do not use it and use I_SponsoredClassCore
@EndUserText.label: 'Sponsored Class'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'SponsoredClass'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #C,
  sizeCategory: #L
}
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IGMSPCLASSQL'
@AbapCatalog.preserveKey:true 
@ObjectModel.sapObjectNodeType.name: 'SponsoredClass'
define view I_SponsoredClass
  as select from gmspclass

  association [1..1] to I_SponsoredClassType as _Type on $projection.SponsoredClassType = _Type.SponsoredClassType
  association [0..*] to I_SponsoredClassText as _Text on $projection.SponsoredClass = _Text.SponsoredClass
{

      @ObjectModel.text.association: '_Text'
  key sponsored_class as SponsoredClass,
      @ObjectModel.foreignKey.association: '_Type'
      class_type      as SponsoredClassType,
      flg_billable    as SponsoredClassIsBillable,
      validate_fmbt   as GteeMBdgtTransfObjIsVldtd,
      validate_fmba   as GteeMBdgtAndPostObjIsVldtd,
      auth_group      as SponsoredClassAuthznGrp,
      created_by      as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      created_on      as CreationDate,
      modified_by     as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      modified_on     as LastChangeDate,

      _Type,
      _Text

}
```
