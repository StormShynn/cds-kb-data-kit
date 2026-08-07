---
name: I_COSTCENTERACTIVITYTYPECAT
description: Cost CenterACTIVITYTYPECAT
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERACTIVITYTYPECAT

**Cost CenterACTIVITYTYPECAT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CostCtrActivityTypeCategory` | ✓ | |  | `cast( domvalue_l as latyp )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostCenterActivityTypeCatT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Cost Center Activity Type Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICCACTTYPCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'CostCtrActivityTypeCategory'
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #META
@AbapCatalog.buffering: {type: #NONE, numberOfKeyFields: 0, status: #NOT_ALLOWED}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.sapObjectNodeType.name: 'CostCenterActivityTypeCategory'

define view I_CostCenterActivityTypeCat as select from dd07l 
association [0..*] to I_CostCenterActivityTypeCatT as _Text 
    on $projection.CostCtrActivityTypeCategory = _Text.CostCtrActivityTypeCategory
{
@ObjectModel.text.association: '_Text'
    key cast( domvalue_l as latyp ) as CostCtrActivityTypeCategory,
    _Text
    
}
where dd07l.domname = 'LATYP' and dd07l.as4local = 'A';
```
