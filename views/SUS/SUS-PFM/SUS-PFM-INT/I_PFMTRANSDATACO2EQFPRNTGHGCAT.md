---
name: I_PFMTRANSDATACO2EQFPRNTGHGCAT
description: Pfmtransdataco 2EQFPRNTGHGCAT
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SUS
  - SUS-PFM
  - SUS-PFM-INT
  - interface-view
  - component:SUS-PFM-INT
  - lob:Other
---
# I_PFMTRANSDATACO2EQFPRNTGHGCAT

**Pfmtransdataco 2EQFPRNTGHGCAT**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `}` | `usageType: { dataClass: #MASTER, sizeCategory: #XL, serviceQuality: #A }` |
| `]` | `supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]` |

## Source Code

```abap
@EndUserText.label: 'Trans data footprint GHG Category'

@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #COMPOSITE

@Metadata.ignorePropagatedAnnotations:true // needed for the C1 contract

@ObjectModel:
{
  usageType:
  {
    dataClass: #MASTER,
    sizeCategory: #XL,
    serviceQuality: #A
  },
   supportedCapabilities: [ // needed for the C1 contract
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET
  ],
  modelingPattern: #NONE

}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PFMTransDataCO2eqFprntGHGCat
  as select from I_PFMTransDataFprntQtyComp

  // Parent association
  association [1..1] to I_PFMTransDataCO2eqFprnt as _PFMTransDataFootprint on $projection.PFMTransDataFootprintUUID = _PFMTransDataFootprint.PFMTransDataFootprintUUID

  // Foreign Key Relationships
  association [0..1] to I_UnitOfMeasure          as _UnitOfMeasure         on $projection.PFMFootprintUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_GHGCategory            as _GHGCategory           on $projection.GHGCategory = _GHGCategory.GHGCategory

{

  key PFMTransDataFprntQtyCompUUID,
      PFMTransDataFootprintQtyUUID,
      PFMTransDataFootprintUUID,

      cast (PFMFootprintQtyComponentType as sufnd_vdm_ghgcategory) as GHGCategory,

      //CO2e Footprint
      @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
      PFMFootprintQuantity                                         as PFMFootprintQuantity,

      @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
      cast (PFMFootprintQuantity as pfmfootprintquantity_quan)     as PFMFootprintFxdPtDcmlQuantity,

      //CO2e Footprint Unit
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      PFMFootprintUnit                                             as PFMFootprintUnit,

      // Associations
      _UnitOfMeasure,
      _GHGCategory,
      _PFMTransDataFootprint
}
where
  PFMFootprintQtyComponentGroup = 'GHG_CATEG'
```
