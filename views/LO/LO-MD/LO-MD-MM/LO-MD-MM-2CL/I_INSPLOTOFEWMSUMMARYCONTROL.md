---
name: I_INSPLOTOFEWMSUMMARYCONTROL
description: Insplotofewmsummarycontrol
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_INSPLOTOFEWMSUMMARYCONTROL

**Insplotofewmsummarycontrol**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspLotOfEWMSummaryControl` | ✓ | |  | `cast (substring ( domvalue_l, 1, 1) as qlot_control_origin_17 preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspLotOfEWMSmmryCtrlText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IILEWMSMRYCTRL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel:{
               usageType:{
                           sizeCategory: #S,
                           serviceQuality: #A,
                           dataClass:#CUSTOMIZING
                         }
                         }
@EndUserText.label: 'Insp Lot Summary for Wrhs-Managed Stock'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'InspLotOfEWMSummaryControl'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'InspLotOfEWMSummaryControl'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_InspLotOfEWMSummaryControl as select from dd07l
   association [1..*] to I_InspLotOfEWMSmmryCtrlText as _Text on $projection.InspLotOfEWMSummaryControl = _Text.InspLotOfEWMSummaryControl

{
   @ObjectModel.text.association: '_Text'
   key cast (substring ( domvalue_l, 1, 1) as qlot_control_origin_17 preserving type )  as InspLotOfEWMSummaryControl,
   
   _Text
  
}
where domname = '/SCWM/DO_QDOC_CNTRL' and as4local = 'A';
```
