---
name: I_PFMTRANSDATACO2EQFPRNTGHGCAT
description: "Pfmtransdataco 2EQFPRNTGHGCAT"
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `usageType: { dataClass: #MASTER, sizeCategory: #XL, serviceQuality: #A }` |  |  |
| `]` |  | |  | `supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]` |  |  |

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
