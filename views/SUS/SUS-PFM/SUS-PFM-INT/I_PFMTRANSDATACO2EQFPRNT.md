---
name: I_PFMTRANSDATACO2EQFPRNT
description: "Pfmtransdataco 2EQFPRNT"
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
# I_PFMTRANSDATACO2EQFPRNT

**Pfmtransdataco 2EQFPRNT**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@EndUserText.label: 'Carbon Footprint of Transaction Data'

@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #COMPOSITE

@Metadata.ignorePropagatedAnnotations:true // needed for the C1 contract

@ObjectModel: {
  supportedCapabilities: [ // needed for the C1 contract
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET
  ],
  modelingPattern: #NONE
}

@ObjectModel.usageType:
{
  serviceQuality: #A,
  sizeCategory:   #L, //based on size category of I_PFMTransDataFootprint
  dataClass:      #TRANSACTIONAL
}

define view entity I_PFMTransDataCO2eqFprnt

  as select from I_PFMTransDataFootprint

    inner join   I_PFMTransDataFootprintQty as _PFMTransDataFootprintQty on  _PFMTransDataFootprintQty.PFMTransDataFootprintUUID = I_PFMTransDataFootprint.PFMTransDataFootprintUUID
                                                                         and _PFMTransDataFootprintQty.PFMFootprintCategory      = 'GHG'

    association [0..*] to I_PFMTransDataCO2eqFprntGHGCat as _PFMTransDataCO2eqFprntGHGCat on _PFMTransDataCO2eqFprntGHGCat.PFMTransDataFootprintQtyUUID = $projection.PFMTransDataFootprintQtyUUID      

{

  key I_PFMTransDataFootprint.PFMTransDataFootprintUUID,
      
      _PFMTransDataFootprintQty.PFMTransDataFootprintQtyUUID,

      // To provide a better context for the CO2-equivalent values compared to the label text of the data elements, custom labels are used here
      
      @EndUserText.label: 'CO2e Footprint'
      @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
      _PFMTransDataFootprintQty.PFMFootprintQuantity,

      @EndUserText.label: 'CO2e Footprint'
      @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
      cast (_PFMTransDataFootprintQty.PFMFootprintQuantity as pfmfootprintquantity_quan) as PFMFootprintFxdPtDcmlQuantity,

      @EndUserText.label: 'CO2e Footprint Unit'
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      _PFMTransDataFootprintQty.PFMFootprintUnit,

      // needed for DCL
      I_PFMTransDataFootprint.PFMTransDataFprntBusObjType,

      //foreign key assocation
      _PFMTransDataFootprintQty._UnitOfMeasure,
      _PFMTransDataCO2eqFprntGHGCat

}
```
