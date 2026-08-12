---
name: I_HRZCONSUMPTIONDIRECTION
description: "Hrzconsumptiondirection"
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_HRZCONSUMPTIONDIRECTION

**Hrzconsumptiondirection**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HorizontalConsumptionDirection` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as horizontalconsumptiondirection preserving type )` | `CHAR(2)` | Horizontal Consumption Direction |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_HrzConsumptionDirectionT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Horizontal Consumption Direction' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'HorizontalConsumptionDirection'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPALHZCSPMDIR'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.sapObjectNodeType.name: 'ProdAllocHorizontalCnsmpnDrctn'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.resultSet.sizeCategory: #XS
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
define view I_HrzConsumptionDirection 
   as select from dd07l
   
   association [0..*] to I_HrzConsumptionDirectionT as _Text 
      on $projection.HorizontalConsumptionDirection = _Text.HorizontalConsumptionDirection 
{
@ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as horizontalconsumptiondirection preserving type ) as HorizontalConsumptionDirection,
    _Text
}
where domname  = 'HORIZONTALCONSUMPTIONDIRECTION' 
  and as4local = 'A'
  and ( domvalue_l = '01' or domvalue_l = '02' );   //Currently only these values are allowed - restrict the choice for the where condition
```
