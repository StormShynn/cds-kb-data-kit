---
name: I_WARRANTYCLAIMVERSIONCATEGORY
description: "Warrantyclaimversioncategory"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WARRANTYCLAIMVERSIONCATEGORY

**Warrantyclaimversioncategory**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyClaimVersionCategory` | ✓ | |  | `cast(dd07l.domvalue_l as abap.char( 2 ))` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimVersionCategoryTxt` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@VDM.viewType: #BASIC *******Modernization Task********
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Claim Version category for Warranty'
@ObjectModel.representativeKey: 'WarrantyClaimVersionCategory'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET, 
#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: {
  dataClass: #ORGANIZATIONAL,
  serviceQuality: #A,
  sizeCategory: #M
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
             dataCategory: #DIMENSION,
             dataExtraction.enabled: true
           }
@Analytics.technicalName: 'IWTYCLMVERCAT'
@Analytics.internalName:#LOCAL

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_WarrantyClaimVersionCategory 
  as select from dd07l 
  association [1..*] to I_WrntyClaimVersionCategoryTxt as _Text on $projection.WarrantyClaimVersionCategory = _Text.WarrantyClaimVersionCategory
{
//key domvalue_l as ClaimCategory,
key cast(dd07l.domvalue_l as abap.char( 2 )) as WarrantyClaimVersionCategory,
//key RTRIM(SUBSTR(DD07L.DOMVALUE_L, 0, 000002)) as WarrantyClaimVersionCategory,

  _Text

}
where
      dd07l.domname  = 'WTY_KATEG'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
