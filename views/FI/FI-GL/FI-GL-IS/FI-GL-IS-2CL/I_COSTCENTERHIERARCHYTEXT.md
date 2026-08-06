---
name: I_COSTCENTERHIERARCHYTEXT
description: Cost CenterHIERARCHYTEXT
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
  - cost-center
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERHIERARCHYTEXT

**Cost CenterHIERARCHYTEXT**

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
| key `CostCenterHierarchy` | `cast(hrrp_dirt_n.hryid as fis_hryid_cctr preserving type )` |
| key `ValidityEndDate` | `hrrp_dirt_n.hryvalto` |
| key `Language` | `hrrp_dirt_n.spras` |
| `ValidityStartDate` | `hrrp_dirt_n.hryvalfrom` |
| `CostCenterHierarchyName` | `hrrp_dirt_n.hrytxt` |
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
@EndUserText.label: 'Cost Center Hierarchy - Text'
@ObjectModel.representativeKey: 'CostCenterHierarchy'
//@Analytics: { dataExtraction.enabled: true }
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCENTERHT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}

@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'CostCenterHierarchyText'

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
//@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED

define view I_CostCenterHierarchyText
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
        //  key   hrrp_directoryt.hrycls                                            as ControllingArea,
        //  key   cast( hrrp_directory.hrycls as fis_kokrs )    as ControllingArea,
  key   hrrp_dirt_n.hrycls                                         as ControllingArea,
  key   cast(hrrp_dirt_n.hryid as fis_hryid_cctr preserving type ) as CostCenterHierarchy,
        @Semantics.businessDate.to: true
  key   hrrp_dirt_n.hryvalto                                       as ValidityEndDate,
        @Semantics.language
  key   hrrp_dirt_n.spras                                          as Language,
        @Semantics.businessDate.from: true
        hrrp_dirt_n.hryvalfrom                                     as ValidityStartDate,
        @Search: { defaultSearchElement:  true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
        @Semantics.text
        hrrp_dirt_n.hrytxt                                         as CostCenterHierarchyName,
        _ControllingArea,
        _Language,
        //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
        @Consumption.hidden: true
        _ControllingAreaText
        // ]--GENERATED

}
where
  hrrp_dirt_n.hrytyp = '0101'
```
