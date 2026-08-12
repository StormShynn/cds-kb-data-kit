---
name: I_CO2EQSUPLRFPRNTAVGBASEUOM_2
description: "CO 2EQSUPLRFPRNTAVGBASEUOM 2"
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SUS
  - SUS-PFM
  - SUS-PFM-INT
  - interface-view
  - unit-of-measure
  - component:SUS-PFM-INT
  - lob:Other
---
# I_CO2EQSUPLRFPRNTAVGBASEUOM_2

**CO 2EQSUPLRFPRNTAVGBASEUOM 2**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@EndUserText.label: 'Avg Suplr Related CO2eq Footprint'

@AccessControl: {
 authorizationCheck: #MANDATORY,
 
 // blocking of personal data required because of link to business partner / supplier
 personalData.blocking: #REQUIRED
}

@Consumption.dbHints: [ 'USE_HEX_PLAN' ] // required for DPP, performant Data Controller and Business Purpose check, see https://wiki.one.int.sap/wiki/pages/viewpage.action?pageId=4640937679

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
  serviceQuality: #C,
  sizeCategory:   #L, // based on size category of I_PFMProdPlntFootprint
  dataClass:      #MASTER
}

define view entity I_CO2eqSuplrFprntAvgBaseUoM_2 with parameters
  P_KeyDate : vdm_v_key_date
  
  as select from I_PFMProdPlntSuplrFootprint

    inner join I_PFMMasterDataFootprintQty as _PFMMasterDataFootprintQty on  _PFMMasterDataFootprintQty.PFMMasterDataFootprintUUID = I_PFMProdPlntSuplrFootprint.PFMMasterDataFootprintUUID
                                                                         and _PFMMasterDataFootprintQty.PFMFootprintCategory       = 'GHG'
                                                                         and _PFMMasterDataFootprintQty.PFMFootprintReferenceBasis = '01'
    inner join I_PFMMasterDataFootprint as _PFMMasterDataFootprint      on  _PFMMasterDataFootprint.PFMMasterDataFootprintUUID = I_PFMProdPlntSuplrFootprint.PFMMasterDataFootprintUUID
                                                                        and (   ( _PFMMasterDataFootprint.PFMFootprintValidFromDate <= $parameters.P_KeyDate and _PFMMasterDataFootprint.PFMFootprintValidToDate >= $parameters.P_KeyDate )
                                                                             or ( _PFMMasterDataFootprint.PFMFootprintValidFromDate is initial and _PFMMasterDataFootprint.PFMFootprintValidToDate is initial ) )

    association [0..*] to I_CO2eqFprntAvgGHGCat as _CO2eqFprntAvgGHGCat on _CO2eqFprntAvgGHGCat.PFMMasterDataFootprintQtyUUID = $projection.PFMMasterDataFootprintQtyUUID      
{
  @ObjectModel.foreignKey.association: '_Product'
  key I_PFMProdPlntSuplrFootprint.Product,
  
  @ObjectModel.foreignKey.association: '_Plant'
  key I_PFMProdPlntSuplrFootprint.Plant,
  
  key I_PFMProdPlntSuplrFootprint.Supplier,

  key _PFMMasterDataFootprint.PFMFootprintValidFromDate,
  
  key _PFMMasterDataFootprint.PFMFootprintValidToDate,
    
  //CO2e Footprint
  @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
  _PFMMasterDataFootprintQty.PFMFootprintQuantity,

  @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
  cast (_PFMMasterDataFootprintQty.PFMFootprintQuantity as pfmfootprintquantity_quan) as PFMFootprintFxdPtDcmlQuantity,
  
  //CO2e Footprint Unit
  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  _PFMMasterDataFootprintQty.PFMFootprintUnit,
  
  //CO2e Footprint Calculated By
  _PFMMasterDataFootprint.PFMFootprintCalculatedBy,
      
  _PFMMasterDataFootprint.PFMFootprintPeriodStartDate,
  
  _PFMMasterDataFootprint.PFMFootprintPeriodEndDate,
  
  //key references
  _PFMMasterDataFootprint.PFMMasterDataFootprintUUID,
  _PFMMasterDataFootprintQty.PFMMasterDataFootprintQtyUUID,
      
  //added only for DCL check
  @Consumption.hidden: true
  I_PFMProdPlntSuplrFootprint._Supplier.DataControllerSet   as DataControllerSet,

  // foreign key associations
  I_PFMProdPlntSuplrFootprint._Product,
  I_PFMProdPlntSuplrFootprint._Plant,
  I_PFMProdPlntSuplrFootprint._Supplier,
  
  _PFMMasterDataFootprintQty._UnitOfMeasure,
  _CO2eqFprntAvgGHGCat
  
}
```
