---
name: I_WRNTYCLAIMITEMTYPE
description: "Wrntyclaimitemtype"
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
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMITEMTYPE

**Wrntyclaimitemtype**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyItemType` | ✓ | |  | `poskt_cust` |  |  |
| `WrntyControllingItemType` |  | |  | `poskt` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimItemTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Item Type'
@ObjectModel:{
    representativeKey: 'WarrantyItemType',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Analytics:{
             dataCategory: #DIMENSION,
             dataExtraction.enabled: true
           }
@Analytics.technicalName: 'IWRNTYITEMTP'
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrntyClaimItemType
  as select from cwty011
//  inner join cwty012z as _WrntytypeGroup on cwty011.poskt_cust = _WrntytypeGroup.poskt_cust
//  association [1..1] to cwty001  as _WrntyClaimType on _WrntytypeGroup.poskt_grp = _WrntyClaimType.poskt_grp
  association [1..*] to I_WrntyClaimItemTypeText as _Text on $projection.WarrantyItemType = _Text.WarrantyItemType
 
{

  key  cwty011.poskt_cust                    as WarrantyItemType,
       cwty011.poskt                         as WrntyControllingItemType,
//       _WrntytypeGroup.poskt_grp,
//       _WrntyClaimType,
       
//       cast( case poskt
//       when 'MAT' then 'X'
//       else ''
//       end as flag preserving type ) as WrntyMaterialItemIsHidden,
//
//       cast( case poskt
//        when 'FR' then 'X'
//        when 'SUBL' then 'X'
//       else ''
//       end as flag preserving type ) as WrntyItemIsHidden,


       //      _Text[1: Language = $session.system_language].WrntyTypeDescription as WrntyTypeDescription,
       _Text

}
where
      cwty011.poskt != 'TXT'
  and cwty011.poskt != 'EXP'
```
