---
name: I_SLSDOCBOMEXPLSNSTRUCSCP
description: Slsdocbomexplsnstrucscp
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - bom
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
---
# I_SLSDOCBOMEXPLSNSTRUCSCP

**Slsdocbomexplsnstrucscp**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SlsDocBOMExplsnStrucScp` | `cast(dd07l.domvalue_l as strum )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsDocBOMExplsnStrucScpTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Structure Scope of BOM Explosion'
@Analytics.dataExtraction.enabled: false
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'SlsDocBOMExplsnStrucScp'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SlsDocBOMExplsnStrucScp
  as select from dd07l
  association [0..*] to I_SlsDocBOMExplsnStrucScpTxt as _Text on $projection.SlsDocBOMExplsnStrucScp = _Text.SlsDocBOMExplsnStrucScp
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as strum ) as SlsDocBOMExplsnStrucScp,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                 as DomainValue,

      //Associations
      _Text
}
where
  (
    dd07l.domname  = 'STRUM'
  )
  and(
    dd07l.as4local = 'A'
  )
  and(
    dd07l.as4vers  = '0000'
  );
```
