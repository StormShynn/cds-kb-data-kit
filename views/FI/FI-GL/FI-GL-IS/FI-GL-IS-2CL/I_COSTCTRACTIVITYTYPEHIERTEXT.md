---
name: I_COSTCTRACTIVITYTYPEHIERTEXT
description: Costctractivitytypehiertext
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
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_COSTCTRACTIVITYTYPEHIERTEXT

**Costctractivitytypehiertext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `hrrp_dirt_n.hrycls` |
| key `CostCtrActivityTypeHierarchy` | `cast(hrrp_dirt_n.hryid as fis_hryid_cctracttytpe)` |
| key `ValidityEndDate` | `hrrp_dirt_n.hryvalto` |
| key `Language` | `spras` |
| `ValidityStartDate` | `hrrp_dirt_n.hryvalfrom` |
| `CostCtrActivityTypeHierName` | `hrytxt` |
| `_ControllingAreaText` | *Association* |
| `_ControllingArea` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFCOSTCTRACTTYHT'
@ObjectModel.representativeKey: 'CostCtrActivityTypeHierarchy'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true

@EndUserText.label: 'Activity Type Hierarchy - Text'
@Analytics.dataExtraction: {enabled:true}
@ObjectModel.sapObjectNodeType.name:'CostCtrActivityTypeHierText'

define view I_CostCtrActivityTypeHierText
  as select from hrrp_dirt_n

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea as _ControllingAreaText on $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1] to I_ControllingArea as _ControllingArea     on $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_Language        as _Language            on $projection.Language = _Language.Language

{
        //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
        @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_ControllingAreaStdVH',
                       element: 'ControllingArea' }
          }]
        @ObjectModel.text.association: '_ControllingAreaText'
        // ]--GENERATED
        @ObjectModel.foreignKey.association: '_ControllingArea'
        //  key   hrrp_directoryt.hrycls                                           as ControllingArea,
        //  key   cast( hrrp_directory.hrycls as fis_kokrs )            as ControllingArea,
  key   hrrp_dirt_n.hrycls                                as ControllingArea,
  key   cast(hrrp_dirt_n.hryid as fis_hryid_cctracttytpe) as CostCtrActivityTypeHierarchy,
        @Semantics.businessDate.to: true
  key   hrrp_dirt_n.hryvalto                              as ValidityEndDate,
        @Semantics.language
  key   spras                                             as Language,
        @Semantics.businessDate.from: true
        hrrp_dirt_n.hryvalfrom                            as ValidityStartDate,
        @Semantics.text
        hrytxt                                            as CostCtrActivityTypeHierName,
        _ControllingArea,
        _Language,
        //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
        @Consumption.hidden: true
        _ControllingAreaText
        // ]--GENERATED

}
where
  hrrp_dirt_n.hrytyp = '0105'
```
