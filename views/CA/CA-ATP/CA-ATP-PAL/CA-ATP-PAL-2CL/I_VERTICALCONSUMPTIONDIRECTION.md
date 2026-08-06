---
name: I_VERTICALCONSUMPTIONDIRECTION
description: Verticalconsumptiondirection
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_VERTICALCONSUMPTIONDIRECTION

**Verticalconsumptiondirection**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `VerticalConsumptionDirection` | `cast ( substring( domvalue_l, 1, 2 ) as verticalconsumptiondirection preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_VrtConsumptionDirectionT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Vertical  Consumption Direction' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'VerticalConsumptionDirection'
@ObjectModel.representativeKey: 'VerticalConsumptionDirection'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPALVRTCSPMDIR'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_VerticalConsumptionDirection 
   as select from dd07l
  
   association [0..*] to I_VrtConsumptionDirectionT as _Text 
      on $projection.VerticalConsumptionDirection = _Text.VerticalConsumptionDirection 
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as verticalconsumptiondirection preserving type ) as VerticalConsumptionDirection
   , _Text
}
where domname  = 'VERTICALCONSUMPTIONDIRECTION' 
  and as4local = 'A'
```
