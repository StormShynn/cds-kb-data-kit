---
name: I_WRNTYCLAIMITEMDFLTCNDNTYPE
description: "Wrntyclaimitemdfltcndntype"
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
# I_WRNTYCLAIMITEMDFLTCNDNTYPE

**Wrntyclaimitemdfltcndntype**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyControllingItemType` | ✓ | |  |  |  |  |
| `MatlItmCndnTypeInbFrmRmbsr` |  | |  |  |  |  |
| `MatlItmCndnTypeOutbToRmbsr` |  | |  |  |  |  |
| `LabItmCndnTypeInbFrmRmbsr` |  | |  |  |  |  |
| `LabItmCndnTypeOutbToRmbsr` |  | |  |  |  |  |
| `ExtItmCndnTypeInbFrmRmbsr` |  | |  |  |  |  |
| `ExtItmCndnTypeOutbToRmbsr` |  | |  |  |  |  |
| `MatlItmCndnTypeInbFrmClmnt` |  | |  |  |  |  |
| `MatlItmCndnTypeOutbToClmnt` |  | |  |  |  |  |
| `LabItmCndnTypeForInbFrmClmnt` |  | |  |  |  |  |
| `LabItmCndnTypeOutbToClmnt` |  | |  |  |  |  |
| `ExtItmCndnTypeInbFrmClmnt` |  | |  |  |  |  |
| `ExtItmCndnTypeOutbToClmnt` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  viewType: #BASIC //*******Modernization Task********
  //viewType: #COMPOSITE
}
@ObjectModel.usageType: {
     dataClass:      #TRANSACTIONAL,
     //serviceQuality: #C,*******Modernization Task********
     serviceQuality: #B,
     sizeCategory:   #L
   }
@ObjectModel.representativeKey: 'WrntyControllingItemType'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@EndUserText.label: 'Wrnty Claim Item Dflt Cndn Type'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWTYITMCNDNTYP'
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view entity I_WrntyClaimItemDfltCndnType

  as select from P_WrntyClaimItemTypeCndnType
{
 key WrntyControllingItemType,
 MatlItmCndnTypeInbFrmRmbsr,
 MatlItmCndnTypeOutbToRmbsr,
 LabItmCndnTypeInbFrmRmbsr,
 LabItmCndnTypeOutbToRmbsr,
 ExtItmCndnTypeInbFrmRmbsr,
 ExtItmCndnTypeOutbToRmbsr,
 MatlItmCndnTypeInbFrmClmnt,
 MatlItmCndnTypeOutbToClmnt,
 LabItmCndnTypeForInbFrmClmnt,
 LabItmCndnTypeOutbToClmnt,
 ExtItmCndnTypeInbFrmClmnt,
 ExtItmCndnTypeOutbToClmnt
}
```
