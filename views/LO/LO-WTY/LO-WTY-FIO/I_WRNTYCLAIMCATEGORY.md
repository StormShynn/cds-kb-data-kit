---
name: I_WRNTYCLAIMCATEGORY
description: Wrntyclaimcategory
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
# I_WRNTYCLAIMCATEGORY

**Wrntyclaimcategory**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ClaimCategory` | ✓ | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimCategoryText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  //viewType: #BASIC, *******Modernization Task********
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
//@EndUserText.label: 'Value help for category'
@EndUserText.label: 'Claim Category'
@ObjectModel.representativeKey: 'ClaimCategory'
@ObjectModel:{usageType: {
  dataClass: #ORGANIZATIONAL,
  serviceQuality: #A,
  sizeCategory: #M
},
  supportedCapabilities: [ 
                            #ANALYTICAL_DIMENSION, 
                            #CDS_MODELING_ASSOCIATION_TARGET, 
                            #SQL_DATA_SOURCE, 
                            #CDS_MODELING_DATA_SOURCE, 
                            #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
            dataCategory: #DIMENSION,
            dataExtraction.enabled: true,
            internalName: #LOCAL
            
}
@Analytics.technicalName: 'IWRNTYCATDOM'
 
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_WrntyClaimCategory
  as select from dd07l
  association [1..*] to I_WrntyClaimCategoryText as _Text on $projection.ClaimCategory = _Text.ClaimCategory
{
key domvalue_l as ClaimCategory,
  _Text

}
where
      dd07l.domname  = 'WTY_KATEG'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
