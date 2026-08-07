---
name: I_BUSINESSOBJTYPE
description: Business Object Type
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPE')/$value
semantic_en: Business Object Type
semantic_vi: Business Object Type — CDS view giao diện dựa trên tojtb.
keywords:
  - business
  - object
  - type
tags:
  - LO
  - bo:salesorder
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_BUSINESSOBJTYPE

**Business Object Type**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessObjectType` | ✓ | |  | `cast (name as swo_objtyp )` | `CHAR(10)` | Object Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessObjTypeText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSOBJTYPE')/$value)*

```abap
@EndUserText.label: 'Business Object Type'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or  #CHECK
@AbapCatalog.sqlViewName: 'IBOTYPE'
@ObjectModel.representativeKey: 'BusinessObjectType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessObjType
   as select from tojtb

   association [1..*] to I_BusinessObjTypeText as _Text
     on $projection.BusinessObjectType = _Text.BusinessObjectType

{
@ObjectModel.text.association: '_Text'

   key  cast (name as swo_objtyp ) as BusinessObjectType,
        _Text
  
}
```
